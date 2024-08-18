const mongoose = require('mongoose');

const Chat = mongoose.Schema({
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
    message_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Message"
    },
    msg: {
        type: String,
        required: [true, 'Enter a Text']
    },
    sender: {
        type: String,
        required: [true, 'Add']
    },
    receiver: {
        type: String,
        required: [true, 'Add']
    },
    image: {
        type: String,
        required: false,
    },
    msg_type: {
        type: String,
        required: false
    }
}, {
    timestamps : true
    }
);

module.exports = mongoose.model('Chat',Chat);  