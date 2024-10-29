import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.css';
import InputField from './InputField';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    try {
      // Send login request to backend
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password: password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful, redirect to dashboard
        // window.location.href = 'http://localhost:3006/api/dashboard'; // This assumes you have a '/dashboard' route in your app
        navigate('/dashboard');
      } else {
        // Login failed, set error message
        setErrorMessage(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <main className={styles.loginContainer}>
      <form className={styles.formWrapper} onSubmit={handleSubmit}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/91b9c879966758e9d085699da44d24bf22fc36cfb537b309bb41367a3af05d80?placeholderIfAbsent=true&apiKey=cd7563258fed4bcfb471531231a3a831"
          className={styles.logo}
          alt="Company logo"
        />
        <InputField
          type="email"
          placeholder="Enter Email"
          id="emailInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state
        />
        <InputField
          type="password"
          placeholder="Enter Password"
          id="passwordInput"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
        />
        <a href="#" className={styles.forgotPassword}>
          Forgot Password?
        </a>
        <button type="submit" className={styles.loginButton}>
          Login
        </button>
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      </form>
    </main>
  );
};

export default LoginForm;
