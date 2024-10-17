/**
 * Custom code to cater for report management functionality.
 * ReportForm component allows authenticated users to submit reports
 * by providing a reason and report content. It handles form state,
 * submission, and validation errors.
 */

import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/ReportForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import CustomModal from "../../components/CustomModal";

function ReportForm() {
  const [reportData, setReportData] = useState({
    report_reason: "",
    report_content: "",
  });
  const { report_reason, report_content } = reportData;
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false); // Modal state
  const currentUser = useCurrentUser(); // Check if user is authenticated
  const history = useHistory();

  // Redirect if user is not authenticated
  useEffect(() => {
    if (!currentUser) {
      history.push("/signin");
    }
  }, [currentUser, history]);

  // Update the state with the input value
  const handleChange = (event) => {
    const { name, value } = event.target;
    setReportData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handles the form submission, sending report data to the backend.
  const handleSubmit = async (event) => {
    event.preventDefault();
    let formErrors = {};

    // Client-side validation
    if (!report_reason.trim()) {
      formErrors.report_reason = ["Field cannot be empty"];
    }
    if (!report_content.trim()) {
      formErrors.report_content = ["Field cannot be empty"];
    } else if (report_content.length > 300) {
      formErrors.report_content = ["Content field cannot exceed 300 characters"];
    }
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      await axiosReq.post("/report/", reportData);
      setReportData({ report_reason: "", report_content: "" }); // Reset form fields
      setErrors({}); // Clear errors
      setShowModal(true); // Show modal after successful submission
    } catch (err) {
      setErrors(err.response?.data); // Set errors from response
      setShowModal(false); // Hide modal if error occurs
    }
  };

  return (
    <Container className={styles.ReportForm}>
      <h1>Submit a Report</h1>
      <Form onSubmit={handleSubmit}>
        {showModal && (
          <Alert variant="success">
            Your report has been submitted successfully!
          </Alert>
        )}
        <Form.Group controlId="report_reason">
          <Form.Label>Reason for Report</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the reason for reporting"
            name="report_reason"
            value={report_reason}
            onChange={handleChange}
          />
          {errors.report_reason &&
            errors.report_reason.map((message, idx) => (
              <Alert
                key={idx}
                variant="warning"
                className={styles.errorMessage}
              >
                {message}
              </Alert>
            ))}
        </Form.Group>
        <Form.Group controlId="report_content">
          <Form.Label>Details of the Report</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            placeholder="Describe the issue or behavior being reported"
            name="report_content"
            value={report_content}
            onChange={handleChange}
          />
          {errors.report_content &&
            errors.report_content.map((message, idx) => (
              <Alert
                key={idx}
                variant="warning"
                className={styles.errorMessage}
              >
                {message}
              </Alert>
            ))}
        </Form.Group>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Button}`}
          type="Submit"
        >
          Submit Report
        </Button>
      </Form>

      {/* Custom modal for after successful report submission */}
      <CustomModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        title="Report Submitted"
        message="Thank you for submitting your report. Our team will review the issue shortly."
        redirectPath="/" // Redirect after closing the modal
      />
    </Container>
  );
}

export default ReportForm;
