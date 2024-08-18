const mongoose = require('mongoose');

const msg = mongoose.Schema({
    sender_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    receiver_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
}, {
    timestamps : true
    }
);

module.exports = mongoose.model('message',msg);  