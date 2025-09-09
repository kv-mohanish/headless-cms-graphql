const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const cors = require('cors');
const http = require('http');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Load GraphQL Schema and Resolvers
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const context = require('./graphql/context');

async function startServer() {
    const app = express();
    const httpServer = http.createServer(app);

    // Apollo Server setup
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await server.start();

    // Middleware
    app.use(cors());
    app.use(express.json());
    app.use('/graphql', expressMiddleware(server, { context }));

    // Connect to MongoDB
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log('MongoDB Connected');
        })
        .catch(err => {
            console.error('MongoDB Connection Error:', err);
            process.exit(1);
        });

    // Default route
    app.get('/', (req, res) => {
        res.send('Headless CMS GraphQL API is running!');
    });

    const PORT = process.env.PORT || 4000;

    // Start listening
    await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
}

startServer();

