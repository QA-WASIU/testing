const express = require('express');


const { 
  signup, 
  login, 
  LoginPin, 
  TransactionPin, 
  verifyPin,
  forgotPassword, 
  resetPassword, 
  verifyOtp, 
  verifyEmail, 
  initiateGoogleAuth,
  handleGoogleCallback,
  unlinkGoogle, 
  setPasswordForGoogleUser 
} = require('../controller/user.controller');
const router = express.Router();

// Regular authentication routes
router.post('/signup', signup);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:userId', resetPassword);
router.post('/verify-otp', verifyOtp);
router.post('/verify-email/:token', verifyEmail);

// Server-side Google OAuth routes
router.get('/google', initiateGoogleAuth);
router.get('/google/callback', handleGoogleCallback);
router.delete('/unlink-google/:userId', unlinkGoogle);
router.post('/set-password/:userId', setPasswordForGoogleUser);
//Pin Routes


router.post('/set-login-pin', LoginPin);
router.post('/set-transaction-pin', TransactionPin);
router.post('/verify-pin', verifyPin);




module.exports = router