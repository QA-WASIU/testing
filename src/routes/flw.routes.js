const express = require('express');
const router = express.Router();
const { buyAirtime } = require('../controller/flwbuy.controller');

// Flutterwave webhook endpoint
router.post('/flw', flutterwaveWebhook);


    // Generate Account
    router.post('/create-virtual-account', createVirtualAccount);
    router.post('/airtime', buyAirtime);
    router.post('/data', buyAirtime);
    
    module.exports = router;

    