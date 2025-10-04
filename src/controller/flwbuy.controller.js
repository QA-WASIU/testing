import axios from 'axios';
import flwApi from '../config/flutterwave';
//const flwApi = require('../config/flutterwave');
//const createVirtualAccount = require('../models/transaction.schema');
//const Car = require('../models/car.schema');
// Buy Airtime or Data
export const buyAirtime = async (req, res) => {
  try {
    const { phone, amount, network, type } = req.body; 
    // type can be 'airtime' or 'data'
    
    const payload = {
      country: "NG",
      customer: phone,
      amount,
      recurrence: "ONCE",
      type: type === 'data' ? "DATA" : "AIRTIME",
      reference: "trx-" + Date.now(),
      biller_name: network
    };

    const response = await axios.post(
      'https://api.flutterwave.com/v3/bills',
      payload,
      {
        headers: {
          Authorization: `Bearer ${FLW_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json({
      status: "success",
      message: "Transaction successful (test mode)",
      data: response.data
    });

  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ status: "error", message: error.message });
  }
};
