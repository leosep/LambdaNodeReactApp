import React, { useState, useEffect } from "react";
import axios from "axios";
import ClientList from "./ClientList";
import ClientForm from "./ClientForm";
import "./App.css";  

const API_URL = "http://localhost:3000/clients"; 

function App() {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);

  const fetchClients = async () => {
    try {
      const response = await axios.get(API_URL);
      setClients(response.data);
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div className="App">
      <h1>Clients CRUD App</h1>
      <ClientForm
        onAddClient={(client) => {
          axios.post(API_URL, client).then(fetchClients);
        }}
        onUpdateClient={(client) => {
          axios.put(`${API_URL}/${client.id}`, client).then(fetchClients);
        }}
        selectedClient={selectedClient}
        setSelectedClient={setSelectedClient}
      />
      <ClientList
        clients={clients}
        onDeleteClient={(id) => {
          axios.delete(`${API_URL}/${id}`).then(fetchClients);
        }}
        onEditClient={setSelectedClient}
      />
    </div>
  );
}

export default App;