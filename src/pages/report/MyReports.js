import { useEffect, useState } from "react";
import axios from "axios";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import CustomModal from "../../components/CustomModal";
import styles from "../../styles/MyReports.module.css"; // Import the CSS module
export default function MyReports() {
  const [reportTitle, setReportTitle] = useState("");
  const [reportContent, setReportContent] = useState("");
  const [reports, setReports] = useState([]);
  const [edit, setEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [reportId, setReportId] = useState(0);
  const currentUser = useCurrentUser();
  const history = useHistory();
  const [alertVisible, setAlertVisible] = useState(false);
  useEffect(() => {
    getReports();
  }, []);
  const getReports = async () => {
    const data = await axios.get("/report");
    setReports(data?.data?.results);
  };
  const deleteReports = async (reportId) => {
    try {
      await axiosReq.delete(`/report/${reportId}`);
      setReports(reports.filter((report) => report.id !== reportId));
      setShowModal(true);
      setAlertVisible(true); // Show alert after deleting
    } catch (error) {
      console.error("Error deleting report:", error);
    }
  };
  const editReports = (reportId) => {
    setEdit(true);
    setReportId(reportId);
  };
  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    try {
      await axiosReq.patch(`/report/${reportId}/`, {
        reason: reportTitle,
        content: reportContent,
      });
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };
  // If the user has no reports, display a message
  if (reports?.filter((report) => report.profile_id === currentUser.pk).length <= 0) {
    return (
      <Container className={`${styles.container} d-flex justify-content-center align-items-center`} style={{ height: '100vh' }}>
        <Row>
          <Col>
            <Alert variant="secondary" className="text-center">
              No Reports Available
            </Alert>
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <>
      <CustomModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        title="Report deleted"
        message="Your report has been deleted."
        className={styles.modalTitle} // Style for modal title
      />
      {/* Alert for deleting reports */}
      {alertVisible && (
        <Alert variant="success" onClose={() => setAlertVisible(false)} dismissible>
          Your report has been successfully deleted.
        </Alert>
      )}
      {!edit ? (
        reports
          ?.filter((report) => report.profile_id === currentUser.pk)
          .map((report) => (
            <div key={report.id} className={styles.reportCard}>
              <div>
                <strong>{report.reason}</strong>
                <p>{report.content}</p>
              </div>
              <div>
                <Button className={styles.deleteButton} variant="danger" onClick={() => deleteReports(report.id)}>Delete</Button>
                <Button className={styles.editButton} variant="primary" onClick={() => editReports(report.id)}>Edit</Button>
              </div>
            </div>
          ))
      ) : (
        <Container className={styles.formContainer}>
          <h2 className={styles.formHeader}>Edit Report</h2>
          <Form onSubmit={handleSubmitEdit}>
            <Form.Group controlId="formReportIssue">
              <Form.Label>Issue</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the issue you want to report"
                value={reportTitle}
                onChange={(e) => setReportTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formReportDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter a detailed description"
                value={reportContent}
                onChange={(e) => setReportContent(e.target.value)}
              />
            </Form.Group>
            <Button className={styles.submitButton} type="submit">
              Submit Report
            </Button>
            <Button
              className={styles.cancelButton}
              variant="secondary"
              onClick={() => setEdit(false)}
            >
              Cancel
            </Button>
          </Form>
        </Container>
      )}
    </>
  );
}