const express = require('express');
const router = express.Router();
const validateToken = require('../middleware/validateToken.js');
const {userLogin, userRegister, userData, userList} = require('../controllers/UserController.js');

router.post('/', userLogin);
router.post('/store',userRegister);
router.get('/list',userList);

router.get('/', validateToken, userData);

module.exports = router;