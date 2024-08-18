const express = require('express');
const env = require('dotenv').config();
const connectDB = require('./config/dbConfig');
const port = process.env.PORT;
const errorHandler = require('./middleware/errorHandler');


connectDB();

const app = express();


app.use(express.json());
app.use('/api/users', require('./router/userRoute.js'));
app.use('/api/chat', require('./router/chatRoute.js'));
app.use(errorHandler);


app.listen(port, () => {

});