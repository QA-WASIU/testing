const axios = require('axios');
require('dotenv').config();
const flwApi = require("../config/flutterwave");
const Pin = require('../models/pin.schema');
const FLW_SECRET_KEY = process.env.FLW_SECRET_KEY;

async function createVirtualAccount({ email, phone, tx_ref }) {
  const payload = {
    email,
    phone,
    is_permanent: true,
    tx_ref,
    narration: 'Virtual Account for User',
    amount: 0,
    currency: 'NGN'
  };

  try {
    const response = await axios.post(
      'https://api.flutterwave.com/v3/virtual-account-numbers',
      payload,
      {
        headers: {
          Authorization: `Bearer ${FLW_SECRET_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
}

module.exports = { createVirtualAccount };
