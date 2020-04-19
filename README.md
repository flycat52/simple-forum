This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Before Running

Create `.env` file under root folder, it should include following configuration:

```
NODE_ENV=development
REACT_APP_NODE_PORT=5051

# DOMAIN ASSIGNED TO APP
REACT_APP_APP_DOMAIN=http://localhost:${REACT_APP_NODE_PORT}

ATLAS_URI=mongodb+srv://<username>:<password>@simpleforum-65ynx.gcp.mongodb.net/test?retryWrites=true&w=majority

SECRET_KEY=(ANY STRING VALUE)
```

## Available Scripts

In the project directory, you can run:

`npm install`

## Run client side

`npm start`

## Run server

In the project server directory(>cd server), you need to run:

`npm install`

`npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Run test

In the project directory, and run

`npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm build`

Builds the app for production to the `build` folder.<br />

## Functionalities include:

- Show list of topics
- Sign up user
- User login

## Server side API implementaion

- `GET /users` Get list of users
- `POST /users/signup` Create new user
- `POST /users/login` User login
- `GET /posts` Get list of posts
- `POST /posts/add` Add new post
- `GET /posts/:id` Get one post by id
- `POST /posts/update/:id` Update post by id
- `POST /posts/comment/add` Add comment
