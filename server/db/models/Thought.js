const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: '8/20/2023' // Today's date
  },
  username: {
    type: String,
    required: true
  },
  reactions: [{
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }]
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
