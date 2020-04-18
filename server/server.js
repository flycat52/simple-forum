const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
var dotenvExpand = require('dotenv-expand');

dotenvExpand(dotenv.config());

const postsRouter = require('./routes/posts');
const usersRouter = require('./routes/users');

const app = express();
const port = process.env.PORT || 5050;

// middleware
app.use(cors());
app.use(express.json());

// database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.use('/posts', postsRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
