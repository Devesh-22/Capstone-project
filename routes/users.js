var express = require('express');
var router = express.Router();
const User = require('../models/users'); // Adjust the path if your model is elsewhere

// Handle form submission
router.post('/submit', async (req, res) => {
  const { name, phoneNumber, service, Address, details } = req.body;

  try {
    // Create a new user entry
    const user = new User({
      name,
      phoneNumber,
      service,
      Address,
      details,
    });

    // Save the user entry to the database
    await user.save();

    res.status(201).json(res.render('thank'));
  } catch (error) {
    console.error(error);
    res.status(500).json(res.send("sorry, the information is not submitted"));
  }
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

