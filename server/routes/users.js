const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const usersRouter = require('express').Router();
usersRouter.use(cors);

let User = require('../models/user.model');

usersRouter.route('/').get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// User sign up
usersRouter.route('/signup').post(async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      const hash = bcrypt.hashSync(req.body.password, 10);
      const newUser = new User({
        username: req.body.username,
        password: hash,
      });

      const savedUser = await newUser.save();
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
          data: savedUser,
        },
        process.env.SECRET_KEY
      );

      res.send({ username: savedUser.username, token, message: 'User added!' });
    } else {
      res.send({ message: 'User already exists' });
    }
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

// User login
usersRouter.route('/login').post(async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        username: user.username,
      });
    } else {
      res.send({
        message: 'Username or password is not correct',
      });
    }
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

module.exports = usersRouter;
