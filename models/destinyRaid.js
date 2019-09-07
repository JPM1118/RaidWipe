const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinyRaidSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  sections: [
    {
      type: String,
      required: true
    }
  ]
})

module.exports = mongoose.model('DestinyRaid', destinyRaidSchema)