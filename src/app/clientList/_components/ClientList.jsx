"use client"
import React from 'react';
// import { Table } from '@shadcn/ui'; 

function ClientList() {
    const clients = [
        { id: 1, name: 'John Doe', email: 'johndoe@example.com', phone: '+1234567890', address: '123 Main St, City, Country' },
        { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', phone: '+9876543210', address: '456 Oak St, City, Country' },
        { id: 3, name: 'Bob Johnson', email: 'bobjohnson@example.com', phone: '+1029384756', address: '789 Pine St, City, Country' },
        { id: 4, name: 'Alice Williams', email: 'alicewilliams@example.com', phone: '+5647382910', address: '101 Maple St, City, Country' },
        { id: 5, name: 'Charlie Brown', email: 'charliebrown@example.com', phone: '+2135468790', address: '202 Birch St, City, Country' },
      ];
  return (
    <div className="client-list-container">
      <h2 className="client-list-title">Client List</h2>
      <div className="client-cards">
        {clients.map(client => (
          <div className="client-card" key={client.id}>
            <div className="client-card-header">
              <h3>{client.name}</h3>
            </div>
            <div className="client-card-body">
              <p><strong>Email:</strong> {client.email}</p>
              <p><strong>Phone:</strong> {client.phone}</p>
              <p><strong>Address:</strong> {client.address}</p>
            </div>
            <div className="client-card-footer">
              <button className="view-button">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClientList
