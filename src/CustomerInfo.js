import React, { useState } from 'react';

function CustomerInfo() {
  const [customer, setCustomer] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    mailingAddress: '',
    billingAddress: '',
  });

  const handleDuplicateAddress = () => {
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      billingAddress: prevCustomer.mailingAddress,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to create customer
    fetch('/api/customers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(customer),
    })
      .then((res) => res.json())
      .then((data) => {
        // Navigate to QuoteInfo page
        window.location.href = '/quote';
      })
      .catch((err) => console.error(err));
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input type="email" value={customer.email} onChange={(e) => setCustomer({ ...customer, email: e.target.value })} />
      <br />
      <label>First Name:</label>
      <input type="text" value={customer.firstName} onChange={(e) => setCustomer({ ...customer, firstName: e.target.value })} />
      <br />
      <label>Last Name:</label>
      <input type="text" value={customer.lastName} onChange={(e) => setCustomer({ ...customer, lastName: e.target.value })} />
      <br />
      <label>Phone:</label>
      <input type="tel" value={customer.phone} onChange={(e) => setCustomer({ ...customer, phone: e.target.value })} />
      <br />
      <label>Mailing Address:</label>
      <input type="text" value={customer.mailingAddress} onChange={(e) => setCustomer({ ...customer, mailingAddress: e.target.value })} />
      <br />
      <label>Billing Address:</label>
      <input type="text" value={customer.billingAddress} onChange={(e) => setCustomer({ ...customer, billingAddress: e.target.value })} />
      <button onClick={handleDuplicateAddress}>Duplicate Address</button>
      <button type="submit">Next</button>
    </form>
  );
}

export default CustomerInfo;