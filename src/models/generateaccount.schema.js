const mongoose = require("mongoose");

const generateaccountSchema = new mongoose.Schema({
    accountNumber: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone_number: {
        type: String,
        required: true,
    }
});

const Generateaccount = mongoose.model('Generateaccount', generateaccountSchema);
module.exports = Generateaccount;               