import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setIsValidEmail(false);
      return;
    }
    setIsValidEmail(true);
    setShowAdditionalInfo(true);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (name && phoneNumber) {
      setSubmissionMessage(`Email: ${email}, Name: ${name}, Phone Number: ${phoneNumber}`);
      setEmail('');
      setName('');
      setPhoneNumber('');
      setShowAdditionalInfo(false);
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className="App">
      <h1>Email Validation Project</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <label>
          Enter Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={!isValidEmail ? 'invalid' : ''}
            required
          />
        </label>
        {!isValidEmail && <p className="error-message">Invalid email format. Please enter a valid email.</p>}
        {showAdditionalInfo && (
          <form onSubmit={handleEmailSubmit}>
            <label>
              Name:
              <input type="text" value={name} onChange={handleNameChange} required />
            </label>
            <label>
              Phone Number:
              <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} required />
            </label>
            <button type="submit">Submit Additional Information</button>
          </form>
        )}
        {!showAdditionalInfo && <button type="submit">Submit Email</button>}
      </form>
      {submissionMessage && <p className="submission-message">{submissionMessage}</p>}
    </div>
  );
}

export default App;
