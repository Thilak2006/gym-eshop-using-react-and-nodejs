const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log('Login attempt:', { email, password });
    if (!user) {
      console.log('User not found');
      return res.status(400).json({ error: 'Invalid email or password' });
    }
    if (user.password !== password) {
      console.log('Password mismatch', user.password, password);
      return res.status(400).json({ error: 'Invalid email or password' });
    }
    res.json({ message: 'Login successful', user: { name: user.username, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router; 