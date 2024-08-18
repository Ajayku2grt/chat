const express = require('express');
const router = express.Router();
const validateToken = require('../middleware/validateToken.js');
const {userLogin, userRegister, userData} = require('../controllers/UserController.js');

router.post('/', userLogin);
router.post('/store',userRegister);

router.get('/', validateToken, userData);

module.exports = router;