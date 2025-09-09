const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

const context = async ({ req }) => {
    const authHeader = req.headers.authorization || '';
    if (!authHeader) return { user: null };

    const token = authHeader.split(' ')[1];
    if (!token) return { user: null };

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Find user by ID from the token, but exclude the password field
        const user = await User.findById(decoded.id).select('-password');
        return { user };
    } catch (err) {
        console.error('Invalid token');
        return { user: null };
    }
};

module.exports = context;
