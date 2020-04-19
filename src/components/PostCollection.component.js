import React, { useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions/postAction';

const PostCollection = () => {
  const postCollection = useSelector((state) => state.post.postCollection);
  console.log(postCollection);
  const dispatch = useDispatch();

  const postMapping =
    postCollection &&
    postCollection.map((p, index) => (
      <tr key={index}>
        <td>{p.title}</td>
        <td>{p.comments.length + 1}</td>
        <td>{p.author}</td>
      </tr>
    ));
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <>
      <Button variant="success" href="/post/new">
        New Post
      </Button>
      <p></p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Topics</th>
            <th>Posts</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>{postMapping}</tbody>
      </Table>
    </>
  );
};

export default PostCollection;
