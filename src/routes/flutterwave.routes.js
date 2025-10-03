    const express = require('express');
    const router = express.Router();
    const { generateAccount } = require('../controller/flutterwave.controller');
    const { createVirtualAccount } = require('../services/flutterwave.services');



    // Generate Account
    router.post('/generate', generateAccount);
    module.exports = router;