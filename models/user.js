const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  refreshToken: {
    type: String,
    required: true
  },
  totalWipes: {
    type: Number,
    required: true
  },
  raidEvents: [{
    type: Schema.Types.ObjectId,
    ref: 'RaidEvent'
  }],
  friends: [{
    _id: {
      type: Schema.Types.ObjectId,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    totalWipes: {
      type: Number,
      required: true
    },
    raidEvents: [{
      type: Schema.Types.ObjectId,
      ref: 'RaidEvent'
    }],
  }]
})

module.exports = mongoose.model('User', userSchema);