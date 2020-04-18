const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    body: { type: String, required: true },
    createdBy: { type: String, required: true },
    createdDate: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
