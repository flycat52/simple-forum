import axios from 'axios';

export const RESET_POSTS = 'RESET_POSTS';
export const FETCHING_POSTS = 'FETCHING_POSTS';
export const FETCHED_POSTS = 'FETCHED_POSTS';

const resetPosts = () => ({ type: RESET_POSTS });

const fetchingPosts = () => ({
  type: FETCHING_POSTS,
  submittedOn: +new Date(),
});

const fetchedPosts = (response) => ({
  type: FETCHED_POSTS,
  response,
});

export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchingPosts());

  try {
    const url = `${process.env.REACT_APP_APP_DOMAIN}/posts`;
    const response = await axios.get(url);
    dispatch(fetchedPosts(response.data));
  } catch (err) {
    dispatch(resetPosts());
    console.log(err);
  }
};
