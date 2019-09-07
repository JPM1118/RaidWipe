const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const raidEventSchema = new Schema({
  destinyRaidName: {
    type: String,
    required: true
  },
  sections: [{
    _id: {
      type: mongoose.Types.ObjectId,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    fireteam: [{
      name: {
        type: String,
        required: true
      },
      wipes: {
        type: Number,
        required: true
      }
    }]
  }]
},
  { timestamps: true }
)

module.exports = mongoose.model('RaidEvent', raidEventSchema)