# Product Inventory API

## Description

The **Product Inventory API** is a RESTful API designed to manage product inventory efficiently. This API allows users to perform CRUD (Create, Read, Update, Delete) operations on products, making it a useful backend service for e-commerce platforms, retail businesses, or any application requiring inventory management.

## Features

- Add new products with details like name, price, quantity, and category.
- Retrieve all products or search for specific ones.
- Update product information.
- Delete products from the inventory.
- Handle API requests efficiently with proper status codes and error handling.

## Technologies Used

- **Node.js** - JavaScript runtime environment for building the API.
- **Express.js** - Framework for handling routes and middleware.
- **MongoDB** - NoSQL database for storing product data.
- **Mongoose** - ODM library for MongoDB interactions.
- **Postman** - API testing and debugging.

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/product-inventory-api.git
   ```
2. Navigate to the project directory:
   ```sh
   cd product-inventory-api
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables in a `.env` file:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
5. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

| Method | Endpoint          | Description                |
| ------ | ----------------- | -------------------------- |
| GET    | /api/products     | Get all products           |
| GET    | /api/products/:id | Get a single product by ID |
| POST   | /api/products     | Add a new product          |
| PUT    | /api/products/:id | Update a product           |
| DELETE | /api/products/:id | Delete a product           |

## Testing with Postman

- Use **Postman** to send API requests and test the CRUD operations.
- Ensure the backend is running before making requests.




