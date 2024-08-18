const express = require('express');
const router = express.Router();
const validateToken = require('../middleware/validateToken.js');
const {sendChat, messageList} = require("../controllers/chatController.js");


router.post('/store',validateToken, sendChat);
router.post('/messages',validateToken, messageList);

module.exports = router;