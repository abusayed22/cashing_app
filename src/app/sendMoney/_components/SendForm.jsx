"use client"
import React, { useState } from 'react'

function SendForm() {

    const [amount, setAmount] = useState('');
  const [number, setNumber] = useState('');
  const [service, setService] = useState('bikash');
  const [customer, setCustomer] = useState('');
  const [note, setNote] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here
    console.log({
      amount,
      number,
      service,
      customer,
      note,
    });
  };

  return (
    <div>
      <div className="send-money-form-container">
      <h2 className="form-title">Send Money</h2>
      <form className="send-money-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            placeholder="Enter amount"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="number">Number</label>
          <input
            type="text"
            id="number"
            name="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
            placeholder="Enter recipient's number"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="service">Service</label>
          <select
            id="service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="bikash">Bikash</option>
            <option value="nagad">Nagad</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="customer">Customer Name</label>
          <input
            type="text"
            id="customer"
            name="customer"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            required
            placeholder="Enter customer name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="note">Note</label>
          <textarea
            id="note"
            name="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Enter any note (optional)"
          />
        </div>

        <button type="submit" className="submit-button">Send Money</button>
      </form>
    </div>
    </div>
  )
}

export default SendForm
