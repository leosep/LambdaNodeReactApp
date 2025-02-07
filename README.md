## LambdaNodeReactApp (Full Stack CRUD App with Node.js (Express) and React)

This project is a full-stack CRUD application that combines a Node.js (Express) backend deployed to AWS Lambda and a React.js frontend. The application allows you to manage clients with operations like Add, Edit, and Delete. It's designed to be simple yet powerful for demonstrating how to combine modern web technologies with serverless functions.

## Project Structure

- **`backend/`**: Contains the Node.js (Express) API deployed as an AWS Lambda function.
- **`frontend/`**: Contains the React.js frontend for interacting with the backend.

---

## Technologies

- **Node.js**: For the backend API.
- **Express**: Used to create the API in the backend.
- **React.js**: Used to build the frontend user interface.
- **Axios**: For making HTTP requests to the backend.
- **AWS Lambda**: For hosting the backend API in a serverless environment.
- **AWS API Gateway**: To expose the backend API endpoints.
- **CORS**: To enable communication between the frontend and the serverless API.

---

## Backend (Node.js Express with AWS Lambda)

The backend is built with Node.js and Express. It provides the following API endpoints for managing clients:

- `GET /clients`: Retrieves all clients.
- `POST /clients`: Adds a new client.
- `PUT /clients/{id}`: Updates an existing client by `id`.
- `DELETE /clients/{id}`: Deletes a client by `id`.

### Setup the Backend:

1. Install the necessary dependencies:

   ```bash
   cd backend
   npm install
   ```
