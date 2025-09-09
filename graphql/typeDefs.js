const { gql } = require('graphql-tag');

// The gql function is used to parse the schema string into a GraphQL AST
const typeDefs = gql`
    # Defines the structure for a user
    type User {
        id: ID!
        username: String!
        email: String!
        role: String!
        token: String
    }

    # Defines a single field in a content type
    type Field {
        name: String!
        type: String!
    }

    # Defines the structure for a content type, like a "Blog Post"
    type ContentType {
        id: ID!
        name: String!
        apiIdentifier: String!
        fields: [Field!]
    }

    # Defines the structure for an actual piece of content
    type ContentEntry {
        id: ID!
        contentType: ContentType!
        author: User!
        fields: String! # Using String to represent a JSON object for flexibility
        status: String!
        createdAt: String!
        updatedAt: String!
    }

    # Defines the structure for an uploaded media file
    type Media {
        id: ID!
        url: String!
        public_id: String!
        filename: String!
    }

    # Defines the available queries (data fetching)
    type Query {
        # User queries
        getUsers: [User]
        getUser(id: ID!): User

        # ContentType queries
        getContentTypes: [ContentType]
        getContentType(id: ID!): ContentType

        # ContentEntry queries
        getContentEntries(contentTypeId: ID!): [ContentEntry]
        getContentEntry(id: ID!): ContentEntry

        # Media queries
        getMediaFiles: [Media]
    }

    # Defines the available mutations (data modification)
    type Mutation {
        # User mutations
        register(username: String!, email: String!, password: String!): User!
        login(email: String!, password: String!): User!

        # ContentType mutations (admin only)
        createContentType(name: String!, fields: String!): ContentType! # fields as JSON string
        updateContentType(id: ID!, name: String, fields: String): ContentType!
        deleteContentType(id: ID!): String!

        # ContentEntry mutations (editor/admin)
        createContentEntry(contentTypeId: ID!, fields: String!, status: String): ContentEntry!
        updateContentEntry(id: ID!, fields: String, status: String): ContentEntry!
        deleteContentEntry(id: ID!): String!

        # Media mutations
        uploadMedia(file: String!): Media! # file as base64 string
        deleteMedia(id: ID!): String!
    }
`;

module.exports = typeDefs;
