const mongoose = require('mongoose');

const contentEntrySchema = new mongoose.Schema({
    // A reference to the ContentType that defines the structure of this entry.
    contentType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ContentType',
        required: true,
    },
    // A reference to the user who created this entry.
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    // The actual content, stored in a flexible map.
    // The keys of the map will be the field names (e.g., "title", "body").
    // The values will be the content itself.
    fields: {
        type: Map,
        of: mongoose.Schema.Types.Mixed,
        required: true,
    },
    // A status for the content, useful for drafts vs published content.
    status: {
        type: String,
        enum: ['published', 'draft'],
        default: 'draft',
    }
}, { timestamps: true });

const ContentEntry = mongoose.model('ContentEntry', contentEntrySchema);

module.exports = ContentEntry;
