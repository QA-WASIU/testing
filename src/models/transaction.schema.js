    const mongoose = require("mongoose");
    
    const transactionSchema = new mongoose.Schema({
        type: {
            type: String,
            required: true,
            trim: true
        },
        amount: {
            type: Number,
            required: true,
            min: 0
        },
        pin: {
            type: Number,
            required: true,
            min: 0
        },
        recipientId: {
            type: String,
            required: true,
            trim: true
        },
        recipientName: {
            type: String,
            required: true,
            trim: true
        },
        remark: {
            type: String,
            trim: true
        },
        budgetId: {
            type: String,
            trim: true,
            required: false
        }
    }, {
        timestamps: true,
        versionKey: false
    });
    
    const Transaction = mongoose.model('Transaction', transactionSchema);
    module.exports = Transaction; 