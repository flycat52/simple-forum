const bcrypt = require('bcrypt');

const usersRouter = require('express').Router();
let User = require('../models/user.model');

usersRouter.route('/').get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// User sign up
usersRouter.route('/signup').post((req, res) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        const hash = bcrypt.hashSync(req.body.password, 10);
        const newUser = new User({
          username: req.body.username,
          password: hash,
        });

        newUser.save().then(() => {
          res.json('User added!');
        });
      } else {
        res.json({ error: 'User already exists' });
      }
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

// User login
usersRouter.route('/login').post((req, res) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user && bcrypt.compareSync(req.body.password, user.password)) {
        res.json('login successfully');
      } else {
        res.send('User does not exist');
      }
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = usersRouter;
