import React, { useState, useEffect } from "react";

const ClientForm = ({ onAddClient, onUpdateClient, selectedClient, setSelectedClient }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (selectedClient) {
      setName(selectedClient.name);
      setEmail(selectedClient.email);
    } else {
      setName("");
      setEmail("");
    }
  }, [selectedClient]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill in all fields.");
      return;
    }
    const client = { id: selectedClient?.id || Date.now().toString(), name, email };
    if (selectedClient) {
      onUpdateClient(client);
    } else {
      onAddClient(client);
    }
    setName("");
    setEmail("");
    setSelectedClient(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedClient ? "Edit Client" : "Add Client"}</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type="submit">{selectedClient ? "Update Client" : "Add Client"}</button>
      {selectedClient && <button type="button" onClick={() => setSelectedClient(null)}>Cancel</button>}
    </form>
  );
};

export default ClientForm;