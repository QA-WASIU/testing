
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan')
const connectDB = require('./src/config/db');
const userRouter = require('./src/routes/user.routes');
//const TransactionPinRouter = require('./src/routes/pin.routes');
//const verifyPinRouter = require('./src/routes/pin.routes');
const flwRouter = require('./src/routes/flw.routes');
const flwApi = require('./src/config/flutterwave');

dotenv.config();
const app = express();

app.use(express.json())
app.use(morgan('dev'))
const PORT = process.env.PORT || 5000;

app.get('/', (req, res)=> {
    res.send('Welcome To My Home Page')
})

app.use('/api/users', userRouter);
app.use('/api/login-pin', pinRouter);
app.use('/api/transaction-pin', userRouter);
app.use('/api/verify-pin', userRouter);
app.use('/api/webhook', flwApi);


app.listen(PORT, ()=> {
    connectDB()
    console.log(`Server is running on http://localhost:${PORT}`)
})
