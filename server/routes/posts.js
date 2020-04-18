const postsRouter = require('express').Router();
let Post = require('../models/post.model');
let Comment = require('../models/comment.model');

// Get all posts
postsRouter.route('/').get((req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Add new post
postsRouter.route('/add').post((req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const author = req.body.author;
  const createdDate = Date.now();

  const newPost = new Post({ title, content, author, createdDate });

  newPost
    .save()
    .then(() => res.json('Post added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Get one post by id
postsRouter.route('/:id').get((req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Update post content
postsRouter.route('/update/:id').post((req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      post.content = req.body.content;
      post
        .save()
        .then(() => res.json('Post updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Find one post and add comment
postsRouter.route('/comment/add').post((req, res) => {
  const comment = new Comment({
    body: req.body.comment.body,
    createdBy: req.body.comment.createdBy,
    createdDate: Date.now(),
  });

  Post.findOneAndUpdate({ _id: req.body.id }, { $push: { comments: comment } })
    .then((post) =>
      post
        .save()
        .then(() => res.json('Comment added'))
        .catch((err) => res.status(400).json('Error: ' + err))
    )
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = postsRouter;
