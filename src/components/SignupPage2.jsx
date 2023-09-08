import React, { useState } from "react";

const SignupPage2 = () => {
  const [formData, setFormData] = useState({
    location: {
      country: "",
      city: "",
      postalCode: "",
    },
    availabilityNeeded: [],
    availabilityToHelp: [],
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    setFormData((prevData) => {
      if (type === "checkbox") {
        return {
          ...prevData,
          [name]: checked
            ? [...prevData[name], value]
            : prevData[name].filter((item) => item !== value),
        };
      } else {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process and submit the form data
    console.log("Form Data:", formData);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="country" className="block mb-1">
            Country:
          </label>
          <input
            type="text"
            id="country"
            name="location.country"
            placeholder="Spain"
            value={formData.location.country}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block mb-1">
            City:
          </label>
          <input
            type="text"
            id="city"
            name="location.city"
            placeholder="Barcelona"
            value={formData.location.city}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="postalCode" className="block mb-1">
            Postal Code:
          </label>
          <input
            type="text"
            id="postalCode"
            name="location.postalCode"
            placeholder="08001"
            value={formData.location.postalCode}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Availability Needed:</label>
          {["Morning", "Afternoon", "Evening", "Night", "All Day", "Overnight"].map(
            (option) => (
              <div key={option} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  name="availabilityNeeded"
                  value={option}
                  checked={formData.availabilityNeeded.includes(option)}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label>{option}</label>
              </div>
            )
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-2">Availability to Help:</label>
          {["Morning", "Afternoon", "Evening", "Night", "All Day", "Overnight"].map(
            (option) => (
              <div key={option} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  name="availabilityToHelp"
                  value={option}
                  checked={formData.availabilityToHelp.includes(option)}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label>{option}</label>
              </div>
            )
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-50CCA2 text-white py-2 rounded-md hover:bg-opacity-80"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default SignupPage2;