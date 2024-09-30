import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosReq, setAuthorizationHeader } from "../../api/axiosDefaults";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

function SignInForm() {
  const setCurrentUser = useSetCurrentUser();
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  useRedirect("loggedIn");

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      // Log in the user
      const { data } = await axiosReq.post("/dj-rest-auth/login/", signInData);
      console.log("Initial data", data);
      setAuthorizationHeader(data);

      const { data: userData } = await axiosReq.get("dj-rest-auth/user/");
      console.log("User data after login:", userData);

      // Fetch profile data
      if (userData?.id) {  // Ensure you use the correct identifier for user data
        try {
          const { data: profileData } = await axiosReq.get(`profiles/${userData.id}/`);
          console.log("Profile data after login:", profileData);
          
          // Combine user and profile data
          const combinedData = {
            ...userData,
            profile: profileData
          };
          
          setCurrentUser(combinedData);
          console.log("Combined user and profile data:", combinedData);
        } catch (profileErr) {
          console.log("Error fetching profile:", profileErr);
          // If profile doesn't exist, set user data without profile
          setCurrentUser(userData);
        }
      }
