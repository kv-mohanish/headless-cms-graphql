// Placeholder resolvers. We will connect these to the controller logic later.
const resolvers = {
    Query: {
        getUsers: () => { console.log('Resolver for getUsers not implemented.'); return []; },
        getUser: (parent, { id }) => { console.log(`Resolver for getUser (id: ${id}) not implemented.`); return null; },
        getContentTypes: () => { console.log('Resolver for getContentTypes not implemented.'); return []; },
        getContentType: (parent, { id }) => { console.log(`Resolver for getContentType (id: ${id}) not implemented.`); return null; },
        getContentEntries: (parent, { contentTypeId }) => { console.log(`Resolver for getContentEntries (contentTypeId: ${contentTypeId}) not implemented.`); return []; },
        getContentEntry: (parent, { id }) => { console.log(`Resolver for getContentEntry (id: ${id}) not implemented.`); return null; },
        getMediaFiles: () => { console.log('Resolver for getMediaFiles not implemented.'); return []; },
    },
    Mutation: {
        register: (parent, { username, email, password }) => { console.log('Resolver for register not implemented.'); return null; },
        login: (parent, { email, password }) => { console.log('Resolver for login not implemented.'); return null; },
        createContentType: (parent, { name, fields }) => { console.log('Resolver for createContentType not implemented.'); return null; },
        updateContentType: (parent, { id, name, fields }) => { console.log('Resolver for updateContentType not implemented.'); return null; },
        deleteContentType: (parent, { id }) => { console.log('Resolver for deleteContentType not implemented.'); return 'Not implemented'; },
        createContentEntry: (parent, { contentTypeId, fields, status }) => { console.log('Resolver for createContentEntry not implemented.'); return null; },
        updateContentEntry: (parent, { id, fields, status }) => { console.log('Resolver for updateContentEntry not implemented.'); return null; },
        deleteContentEntry: (parent, { id }) => { console.log('Resolver for deleteContentEntry not implemented.'); return 'Not implemented'; },
        uploadMedia: (parent, { file }) => { console.log('Resolver for uploadMedia not implemented.'); return null; },
        deleteMedia: (parent, { id }) => { console.log('Resolver for deleteMedia not implemented.'); return 'Not implemented'; },
    },
};

module.exports = resolvers;