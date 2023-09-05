import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

   const handleSubmit = (e) => {
     e.preventDefault();

//     axios.post('/auth/login', {
//         email,
//         password,
//       })
//         .then((response) => {
//           // If the login is successful, you will receive an authentication token
//           const authToken = response.data.authToken;
    
//           // You can save the token in local storage or a cookie for future authenticated requests
//           // For example, to save it in local storage:
//           localStorage.setItem('authToken', authToken);
    
//           // Redirect to a different page or update your app's state to reflect the user's logged-in status
//           // For example, to redirect to a dashboard page using React Router:
//           history.push('/dashboard'); // Assuming you have access to the history object
    
//           // Clear any previous error messages
//           setError(null);
//         })
//         .catch((error) => {
//           // If there's an error during login, handle it gracefully
//           if (error.response) {
//             // The server returned an error response
//             setError(error.response.data.message);
//           } else {
//             // Something went wrong with the request (e.g., network error)
//             setError('An error occurred. Please try again later.');
//           }
//         })

//     // Add your login logic here (e.g., making an API request to authenticate the user)
//     // Example: AuthService.login(email, password);

//     // Reset the form after handling the login
    
//     setEmail('');
//     setPassword('');
//   };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="login-form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account already?{' '}
        <Link to="/signup">Create an account</Link>
      </p>
    </div>
  );
};
}

export default LoginPage;