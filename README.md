Headless CMS with GraphQL API
This project is a powerful, backend-only Content Management System (CMS) built with Node.js, Express, and Apollo Server. It provides a flexible and efficient GraphQL API to deliver content to any front-end client, such as a website, mobile application, or IoT device.

🚀 Core Features
GraphQL API: Modern, efficient API for fetching, creating, updating, and deleting content. Eliminates over-fetching and under-fetching common with REST APIs.

Dynamic Content Modeling: Allows an administrator to define the structure of different content types (e.g., a blog post with title, body, and author fields) directly via the API.

User Roles & Permissions: A robust authentication system where different users (e.g., admin, editor, viewer) have different levels of access, ensuring content integrity.

Media Uploads: Functionality to upload images and other files, which are handled by the Cloudinary cloud service for scalable and reliable storage.

💻 Tech Stack
Backend: Node.js, Express.js

API: Apollo Server (GraphQL)

Database: MongoDB with Mongoose

Authentication: JSON Web Tokens (JWT)

Media Storage: Cloudinary API

Development: nodemon for live-reloading

Prerequisites
Before you begin, ensure you have the following installed on your local machine:

Node.js (v14 or later recommended)

MongoDB Atlas account for the database.

Cloudinary account for media uploads.

⚙️ Installation & Setup
Follow these steps to get your local development environment running.

1. Clone the repository:

git clone <your-repository-url>
cd headless-cms-graphql

2. Install dependencies:

npm install

3. Set up Environment Variables:
Create a .env file in the root of the project and add the following variables. Replace the placeholder values with your actual credentials.

# Server Configuration
PORT=4000

# MongoDB Connection
MONGODB_URI="your_mongodb_connection_string_here"

# JWT Secret for Authentication
JWT_SECRET="your_super_secret_jwt_key"

# Cloudinary Credentials for Media Uploads
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"

▶️ Running the Application
To start the development server, run the following command:

npm run dev

The server will start, and you should see the following output in your terminal:

MongoDB Connected
🚀 Server ready at http://localhost:4000/graphql

🧪 Using the API with Apollo Sandbox
Once the server is running, you can interact with the API using the Apollo Server Sandbox.

Open your web browser and navigate to http://localhost:4000/graphql.

You will see an interactive GraphQL IDE where you can write and execute queries and mutations.

Example Mutation: Register a New User
mutation {
  register(
    username: "testuser"
    email: "test@example.com"
    password: "password123"
  ) {
    id
    username
    email
    role
  }
}

Example Query: Fetch All Content Types
To run protected queries/mutations, you first need to log in to get a token and then add an Authorization header in the Sandbox with the value Bearer <YOUR_TOKEN>.

query {
  getContentTypes {
    id
    name
    fields {
      name
      type
    }
  }
}

📁 Project Structure
/
|-- /controllers        # Contains the business logic for API operations
|-- /graphql            # GraphQL schema (typeDefs), resolvers, and context
|-- /models             # Mongoose schemas for the database
|-- /node_modules       # Project dependencies
|-- .env                # Environment variables (private)
|-- .gitignore          # Files/folders to ignore in git
|-- package.json        # Project metadata and dependencies
|-- README.md           # Project documentation
`-- server.js           # Main server entry point
