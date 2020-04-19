import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation.component';
import PostCollection from './components/PostCollection.component';
import SignUp from './components/SignUp.component';
import Login from './components/Login.component';
// import NewPost from './components/NewPost.component';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navigation />
        <br />
        <Route path="/" exact component={PostCollection} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        {/* <Route path="/post/new" component={NewPost} /> */}
      </Container>
    </BrowserRouter>
  );
}

export default App;
