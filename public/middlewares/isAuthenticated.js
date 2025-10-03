const jwt = require('jsonwebtoken');
const { User } = require('../../models/user.model');

const isAuthenticated = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send('Unauthorized');
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id); 
    next();
  } catch (err) {
    res.status(401).send('Unauthorized');
  }
};

module.exports = isAuthenticated;