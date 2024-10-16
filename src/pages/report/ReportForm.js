import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal"; // Import Modal
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/ReportForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function ReportForm() {
  const [reportData, setReportData] = useState({
    reason: "",
    content: "",
  });
  const { reason, content } = reportData;
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [isSubmitting, setIsSubmitting] = useState(false); // State to handle form submission
  const currentUser = useCurrentUser();
  const history = useHistory();

  useEffect(() => {
    if (!currentUser) {
      history.push("/signin");
    }
  }, [currentUser, history]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReportData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleModalClose = () => setShowModal(false); // Close modal
  const handleModalShow = () => setShowModal(true); // Show modal

  // Validate form and show modal for confirmation
  const handleSubmit = (event) => {
    event.preventDefault();
    let formErrors = {};

    // Basic validation
    if (!reason.trim()) {
      formErrors.reason = ["Field cannot be empty"];
    }
    if (!content.trim()) {
      formErrors.content = ["Field cannot be empty"];
    } else if (content.length > 300) {
      formErrors.content = ["Content field cannot exceed 300 characters"];
    }
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // If validation passes, show confirmation modal
    handleModalShow();
  };

  // Final submission after confirmation
  const handleFinalSubmit = async () => {
    setIsSubmitting(true); // Prevent multiple submissions
    try {
      await axiosReq.post("/reports/", reportData);
      setReportData({ reason: "", content: "" });
      setErrors({});
      setIsSubmitting(false);
      handleModalClose(); // Close modal after successful submission
      history.push("/report-success"); // Redirect to success page
    } catch (err) {
      setErrors(err.response?.data || {});
      setIsSubmitting(false);
    }
  };

  return (
    <Container className={styles.ReportForm}>
      <h1>Report an Issue</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="reason">
          <Form.Label>Reason for Reporting</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the reason for reporting this issue"
            name="reason"
            value={reason}
            onChange={handleChange}
          />
          {errors.reason &&
            errors.reason.map((message, idx) => (
              <Alert key={idx} variant="warning" className={styles.errorMessage}>
                {message}
              </Alert>
            ))}
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Label>Report Details</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            placeholder="Describe the issue you want to report"
            name="content"
            value={content}
            onChange={handleChange}
          />
          {errors.content &&
            errors.content.map((message, idx) => (
              <Alert key={idx} variant="warning" className={styles.errorMessage}>
                {message}
              </Alert>
            ))}
        </Form.Group>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Button}`}
          type="submit"
          disabled={isSubmitting} // Disable the button if submitting
        >
          Submit Report
        </Button>
      </Form>

      {/* Modal for confirmation */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Report Submission</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Reason:</strong> {reason}</p>
          <p><strong>Details:</strong> {content}</p>
          <p>Please confirm that you want to submit this report.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleFinalSubmit}
            disabled={isSubmitting} // Disable button when submitting
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ReportForm;
