
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan')
const connectDB = require('./src/config/db');
const userRouter = require('./src/routes/user.routes');
const flwRouter = require('./src/routes/flutterwave.routes');
/*const generateAccountNumber = require('./src/utils/generateAccount');
const createVirtualAccount = require('./src/services/flutterwave.services');    */

dotenv.config();
const app = express();

app.use(express.json())
app.use(morgan('dev'))
const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=> {
    res.send('Welcome To My Home Page')
})

app.use('/api/users', userRouter);
app.use('/api/webhook', flwRouter);


app.listen(PORT, ()=> {
    connectDB()
    console.log(`Server is running on http://localhost:${PORT}`)
})
