"use client"
import React, { useState } from 'react'

function ReceivedMoney() {
    const [amount, setAmount] = useState('');
    const [name, setName] = useState('');
    const [note, setNote] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log({
            amount,
            name,
            note,
        });
    };
    return (
        <div className="received-money-form-container">
            <h2 className="form-title">Received Money</h2>
            <form className="received-money-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        placeholder="Enter received amount"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Enter sender's name"
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

                <button type="submit" className="submit-button">Receive Money</button>
            </form>
        </div>
    )
}

export default ReceivedMoney
