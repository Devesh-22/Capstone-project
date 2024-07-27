const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Service-center')


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
