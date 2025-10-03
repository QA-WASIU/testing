
const { createVirtualAccount } = require('../services/flutterwave.services');

async function generateAccount(req, res) {
  const { email, phone_number } = req.body;

  if (!email && !phone_number) {
    return res.status(400).json({ error: 'Email or phone number is required' });
  }

  const accountNumber = generateAccountNumber();
  const tx_ref = `TX-${Date.now()}`;

  try {
    const flutterwaveResponse = await createVirtualAccount({ email, phone_number, tx_ref });

    const account = {
      accountNumber,
      email,
      phone_number,
      flutterwave: flutterwaveResponse
    };

    saveAccount(account);

    res.status(201).json({
      message: 'Account created successfully',
      account
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to create account',
      error
    });
  }
}

module.exports = { generateAccount };
