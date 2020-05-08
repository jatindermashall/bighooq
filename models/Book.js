const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  book: {
    type: Schema.Types.ObjectId,
    ref: 'books'
  },
  text: {
    type: String,
    required: true
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model('post', PostSchema);
