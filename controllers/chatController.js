const asyncHandler = require('express-async-handler');
const chatModel = require('../models/chatModels.js');
const messageModel = require('../models/messageModels.js');

const sendChat = asyncHandler(async (req, res) => {
    const message = req.body.msg;
    if (!message) {
        res.status(422);
        throw new Error('Enter a message');
    }

    const storeMsgData = await messageModel.find({
        $or: [
            {
                sender_id: req.user.id,
                receiver_id: req.body.receiver
            },
            {
                sender_id: req.body.receiver,
                receiver_id: req.user.id
            }
        ]
    });
    let messageId;

    if (storeMsgData.length > 0) {
        // Use the ID of the first found record
        messageId = storeMsgData[0]._id;
    } else {
        // Create a new message record and use its ID
        const newMessage = await messageModel.create({
            sender_id: req.user.id,
            receiver_id: req.body.receiver
        });
        messageId = newMessage._id;
    }
    const chatStore = await chatModel.create({
        message_id: messageId,
        sender_id: req.user.id,
        receiver_id: req.body.receiver,
        msg: message,
        sender: '1',
        receiver: '0',
        msg_type: 'text'
    });
    res.status(200).json({ message: 'Stored successfully', chatStore });
});


const messageList = asyncHandler( async(req, res) => {
    const chatlist = await chatModel.find({
        $or: [
            {
                sender_id: req.user.id,
                receiver_id: req.body.receiver
            },
            {
                sender_id: req.body.receiver,
                receiver_id: req.user.id
            }
        ]
    });
    res.status(200).json({ message: 'Fetch successfully', chatlist:chatlist });
});



module.exports = {sendChat, messageList};