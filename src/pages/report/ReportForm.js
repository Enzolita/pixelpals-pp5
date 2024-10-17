import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/ReportForm.module.css"; // Updated styles
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import CustomModal from "../../components/CustomModal";

function ReportForm() {
  const [reportData, setReportData] = useState({
    reason: "",
    content: "",
  });
  const { reason, content } = reportData;
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false); 
  const currentUser = useCurrentUser(); 
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
    if (!reason.trim()) {
      formErrors.reason = ["Field cannot be empty"];
    }
    if (!content.trim()) {
      formErrors.content = ["Field cannot be empty"];
    } else if (content.length > 300) {
      formErrors.content = ["Description cannot exceed 300 characters"];
    }
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      await axiosReq.post("/report/", reportData);
      setReportData({ reason: "", content: "" }); // Reset form fields
      setErrors({}); // Clear errors
      setShowModal(true);
    } catch (err) {
      setErrors(err.response?.data); // Set errors from response
      setShowModal(false);
    }
  };

  return (
    <Container className={styles.ReportForm}>
      <h1>Report an Issue</h1>
      <Form onSubmit={handleSubmit}>
        {showModal && (
          <Alert variant="success">
            Your report has been submitted successfully!
          </Alert>
        )}
        <Form.Group controlId="issue">
          <Form.Label>Issue</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the issue you want to report"
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
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            placeholder="Enter a detailed description"
            name="content"
            value={content}
            onChange={handleChange}
          />
          {errors.description &&
            errors.description.map((message, idx) => (
              <Alert key={idx} variant="warning" className={styles.errorMessage}>
                {message}
              </Alert>
            ))}
        </Form.Group>
        <Button className={`${btnStyles.Button} ${btnStyles.Green}`} type="Submit">
          Submit Report
        </Button>
      </Form>

      {/* Modal for after successful submit */}
      <CustomModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        title="Thank You"
        message="Your report has been submitted. Please note that this is a student project, and while your input is stored, it does not generate an email notification to an administrator. Your report will not be actively monitored. Thank you for your understanding!"
        redirectPath="/" // Specify the redirect path
      />
    </Container>
  );
}

export default ReportForm;
