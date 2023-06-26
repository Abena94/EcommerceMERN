# GitHub Readme Preview for a Basic E-commerce Web App

## Project Title: Pizza Ahmed - A MERN Stack E-commerce Application

Welcome to `Pizza Ahmed` - a basic, yet comprehensive e-commerce web application built using the MERN stack. The application provides an intuitive shopping experience, making it easier for users to find and purchase their desired pizza and drinks online.

### Core Features

- User Registration & Authentication: Securely register and log in to access the full features of our e-commerce platform.
- Product Display: Explore a wide variety of products listed in our online store.
- Shopping Cart Functionality: Add your favorite items to your shopping cart and manage them conveniently.
- Checkout : Seamlessly checkout . 

### Tech Stack

- MongoDB Atlas: We use MongoDB Atlas, a fully-managed cloud database developed by the same people that build MongoDB, for data storage.
- Express.js: A minimalist web framework for Node.js, used to build our API server.
- React.js: Used for building the client-side of the application, making it interactive and user-friendly.
- Node.js: The backbone of our server-side logic.

### Prerequisites

Before you begin, ensure you have Node.js (version 12.0 or above) installed on your machine. You also need to have a MongoDB Atlas account for the database.

### Getting Started

1. **Clone the Repository**:

   Use `https://github.com/Abena94/EcommerceMERN.git` to clone the repository.

2. **Install Dependencies**:

   Navigate to the server directory and run `npm install` to install server-side dependencies. Then, navigate to the client directory with `cd client` and run `npm install` again to install client-side dependencies.

3. **Setup MongoDB Atlas**:

   Follow the instructions in the `MongoDB_Setup.md` file to set up your MongoDB Atlas cluster and get your connection string.

4. **Setup Environment Variables**:

   You'll need to set up several environment variables for your server. Create a `.env` file in the root directory and use the following\
PORT=8080\
NODE_ENV=development\
MONGO_DB_USERNAME=YOUR_USERNAME\
MONGO_DB_PASSWORD=YOUR_PASSWORD\
JWT_SECRET=YOUR_JWT_SECRET\

6. **Start the Application**:

   In the server directory, use `npm start` to start the server. In the client directory, use `npm start` to run the client-side application.

### Project Structure

- `./client` - Contains the React.js client-side code.
- `./server` - Holds the Node.js and Express.js server-side code.
- `./server/models` - The MongoDB database schema definitions.
- `./server/routes` - The routing logic implemented with Express.js.
- `./server/controllers` - Houses the business logic for handling data.
- `./server/middleware` - Any middleware functions required for Express and require authentification and role middelwares are stored here.
- `./server/validators` - form validator.


### Live Demo

heres preview of the application:

https://github.com/Abena94/EcommerceMERN/assets/82619246/d1547f21-1c0e-4563-9c2c-c8b960ba4aca

### Contributing

Feedback, bug reports, and pull requests are always welcome.



---

Embracing the world of e-commerce with MERN stack! Happy coding!





