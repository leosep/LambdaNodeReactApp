const express = require("express");
const bodyParser = require("body-parser");
const AWS = require("aws-sdk");

const app = express();
app.use(bodyParser.json());

AWS.config.update({
  region: "us-east-1", // AWS region
});

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "Clients";

// Create a client
app.post("/clients", async (req, res) => {
  const client = {
    id: Date.now().toString(),
    name: req.body.name,
    email: req.body.email,
  };

  const params = {
    TableName: TABLE_NAME,
    Item: client,
  };

  try {
    await dynamoDb.put(params).promise();
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ error: "Could not create client" });
  }
});

// Get all clients
app.get("/clients", async (req, res) => {
  const params = {
    TableName: TABLE_NAME,
  };

  try {
    const data = await dynamoDb.scan(params).promise();
    res.status(200).json(data.Items);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve clients" });
  }
});

// Update a client
app.put("/clients/:id", async (req, res) => {
  const params = {
    TableName: TABLE_NAME,
    Key: { id: req.params.id },
    UpdateExpression: "set #name = :name, email = :email",
    ExpressionAttributeNames: { "#name": "name" },
    ExpressionAttributeValues: {
      ":name": req.body.name,
      ":email": req.body.email,
    },
    ReturnValues: "UPDATED_NEW",
  };

  try {
    await dynamoDb.update(params).promise();
    res.status(200).json({ message: "Client updated" });
  } catch (error) {
    res.status(500).json({ error: "Could not update client" });
  }
});

// Delete a client
app.delete("/clients/:id", async (req, res) => {
  const params = {
    TableName: TABLE_NAME,
    Key: { id: req.params.id },
  };

  try {
    await dynamoDb.delete(params).promise();
    res.status(200).json({ message: "Client deleted" });
  } catch (error) {
    res.status(500).json({ error: "Could not delete client" });
  }
});

// Export the app for AWS Lambda
module.exports.handler = require("serverless-http")(app);
