import { useEffect, useState } from "react";
import axios from "axios";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import CustomModal from "../../components/CustomModal";
import Alert from "react-bootstrap/Alert";

export default function MyReports() {
  const [reportTitle, setReportTitle] = useState("");
  const [reportContent, setReportContent] = useState("");
  const [reports, setReports] = useState([]);
  const [edit, setEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [reportId, setReportId] = useState(0);
  const currentUser = useCurrentUser();
  const history = useHistory();
  
  
  useEffect(() => {
    getReports();
  }, [])

  const getReports = async () => {
    const data = await axios.get("/report");
    setReports(data?.data?.results);
  };

  const deleteReports = async (reportId) => {
    try {
      await axiosReq.delete(`/report/${reportId}`);
      setReports(reports.filter((report) => report.id !== reportId));
      setShowModal(true);
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

  
  if (reports?.filter((report) => report.profile_id === currentUser.pk).length <= 0) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
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
        title="Thank You"
        message="Your report has been deleted."
      />
      {!edit ? (     
        reports
          ?.filter((report) => report.profile_id === currentUser.pk)
          .map((report) => (
            <div key={report.id}>
              {report.reason} {report.content}
              <Button variant="danger" onClick={() => deleteReports(report.id)}>Delete</Button>
              <Button variant="primary" onClick={() => editReports(report.id)}>Edit</Button>
            </div>
          ))
          
      ) : (
        <Container style={{ maxWidth: "600px", padding: "50px", backgroundColor: "#c8cae557", minHeight: "400px", borderRadius: "5px" }}>
          <h2 className="mb-4">Report an Issue</h2>
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

            <Button variant="primary" type="submit">
              Submit Report
            </Button>
            <Button
              variant="secondary"
              className="ml-2"
              onClick={() => setEdit(false)}
            >
              Cancel
            </Button>
          </Form>
          {/* Modal for after successful submit */}
        </Container>
      )}
    </>
  );
}
