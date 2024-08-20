const mongoose = require('mongoose');

const user = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name Required'],
    },
    email: {
        type: String,
        required: [true, 'Email Required'],
    },
    password: {
        type: String,
        required: [true, 'Password Required'],
    }
}, {
    timestamps: true,
}
);


module.exports = mongoose.model('Users',user);