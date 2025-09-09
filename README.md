# 📝 Headless CMS with GraphQL API

A **powerful, backend-only Headless Content Management System (CMS)** built with **Node.js**, **Express**, and **Apollo Server**.
This project provides a **flexible, efficient GraphQL API** that can deliver content to **any front-end client** — websites, mobile apps, or even IoT devices.

---

## 🚀 Features

✅ **GraphQL API** – Query, create, update, and delete content with precision. Avoid over-fetching/under-fetching issues common with REST APIs.

✅ **Dynamic Content Modeling** – Define and customize content types (e.g., BlogPost with title, body, author) directly via the API.

✅ **User Roles & Permissions** – Built-in authentication and authorization (Admin, Editor, Viewer). Protect content integrity and enforce access control.

✅ **Media Uploads** – Seamless media management powered by **Cloudinary** for scalable and reliable image/file storage.

✅ **Extensible & Scalable** – Modular architecture allows easy addition of new features, integrations, and services.

---

## 💻 Tech Stack

| Layer              | Technology              |
| ------------------ | ----------------------- |
| **Backend**        | Node.js, Express.js     |
| **API**            | Apollo Server (GraphQL) |
| **Database**       | MongoDB + Mongoose      |
| **Authentication** | JWT (JSON Web Tokens)   |
| **Media Storage**  | Cloudinary API          |
| **Development**    | Nodemon (live reload)   |

---

## 📦 Prerequisites

Before starting, make sure you have:

* **Node.js** v14+
* **MongoDB Atlas** account (or local MongoDB instance)
* **Cloudinary account** for media uploads

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone <your-repository-url>
cd headless-cms-graphql
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the project root and add the following:

```env
# Server Configuration
PORT=4000

# MongoDB Connection
MONGODB_URI="your_mongodb_connection_string_here"

# JWT Secret
JWT_SECRET="your_super_secret_jwt_key"

# Cloudinary Credentials
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
```

---

## ▶️ Running the Application

Start the development server:

```bash
npm run dev
```

You should see:

```
MongoDB Connected
🚀 Server ready at http://localhost:4000/graphql
```

---

## 🧪 Using the API

Open **Apollo Sandbox** by visiting:
**[http://localhost:4000/graphql](http://localhost:4000/graphql)**

Here, you can explore your schema, run queries, and test mutations.

---

### 🔑 Example Mutation – Register a New User

```graphql
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
```

---

### 📄 Example Query – Fetch Content Types

⚠️ **Protected Route** – Requires Authorization header (`Bearer <YOUR_TOKEN>`)

```graphql
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
```

---

## 📁 Project Structure

```
/
|-- /controllers        # Business logic for API operations
|-- /graphql            # Schema (typeDefs), resolvers, context
|-- /models             # Mongoose schemas (data models)
|-- /node_modules       # Project dependencies
|-- .env                # Environment variables (not committed to git)
|-- .gitignore          # Ignore node_modules, .env, etc.
|-- package.json        # Project metadata & dependencies
|-- README.md           # Project documentation
`-- server.js           # Entry point
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m "Added new feature"`)
4. Push to branch and create a PR

---

## 🛡️ License

This project is licensed under the **MIT License** – feel free to use and modify it for your own purposes.
