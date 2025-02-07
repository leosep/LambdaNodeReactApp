import React from "react";

const ClientList = ({ clients, onDeleteClient, onEditClient }) => {
  return (
    <div>
      <h2>Client List</h2>
      {clients.length === 0 ? (
        <p>No clients found.</p>
      ) : (
        <ul>
          {clients.map((client) => (
            <li key={client.id}>
              <div>
                <strong>{client.name}</strong> - {client.email}
              </div>
              <div>
                <button onClick={() => onEditClient(client)}>Edit</button>
                <button onClick={() => onDeleteClient(client.id)} style={{ backgroundColor: "#dc3545" }}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClientList;