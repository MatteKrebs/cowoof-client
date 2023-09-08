import SignupPage1 from '../components/SignupPage1';
import SignupPage2 from '../components/SignupPage2';
import { axiosInstance } from '../utilities/api';
import React, { useState } from 'react';

const SignupPage = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
    // First part of the form data
    name: "",
    email: "",
    password: "",

    // Second part of the form data
    location: {
      country: "",
      city: "",
      postalCode: "",
    },
    availabilityNeeded: [],
    availabilityToHelp: []
  });

  // Function to handle submission of the first part
  const handleSignup1Submit = () => {

    setCurrentStep(2);
  };

  const handleCompleteSubmit = async () => {
    try {
      await axiosInstance.post("/api/submit", formData);

      setFormData({
        userName: "",
        userEmail: "",
        password: "",
        location: {
          country: "",
          city: "",
          postalCode: "",
        },
        availabilityNeeded: [],
        availabilityToHelp: []
      });

      setCurrentStep(1);
    } catch (err) {
      console.error("Error submitting data:", err);
    }
  };

  
  
    return (
      <div>
        <h1>Signup Form - Step {currentStep}</h1>
        {currentStep === 1 ? (
          <SignupPage1
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSignup1Submit}
          />
        ) : (
          <SignupPage2
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleCompleteSubmit}
          />
        )}
      </div>
    );
  };


export default SignupPage;

