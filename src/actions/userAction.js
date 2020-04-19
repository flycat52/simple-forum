import axios from 'axios';

export const RESET_USER = 'RESET_USER';
export const ADDING_USER = 'ADDING_USER';
export const ADDED_USER = 'ADDED_USER';
export const FETCHING_USER = 'FETCHING_USER';
export const FETCHED_USER = 'FETCHED_USER';

const resetUser = () => ({ type: RESET_USER });

const addingUser = () => ({
  type: ADDING_USER,
  submittedOn: +new Date(),
});

const addedUser = (response) => ({
  type: ADDED_USER,
  payload: {
    response,
  },
});

const fetchingUser = () => ({
  type: FETCHING_USER,
  submittedOn: +new Date(),
});

const fetchedUser = (response) => ({
  type: FETCHED_USER,
  response,
});

export const addUser = (user) => async (dispatch) => {
  dispatch(addingUser());
  try {
    const url = `${process.env.REACT_APP_APP_DOMAIN}/users/signup`;
    const response = await axios.post(url, user);
    dispatch(addedUser(response.data));
  } catch (err) {
    dispatch(resetUser());
  }
};

export const fetchUser = (user) => async (dispatch) => {
  dispatch(fetchingUser());
  try {
    const url = `${process.env.REACT_APP_APP_DOMAIN}/users/login`;
    const response = await axios.post(url, user, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
      },
    });
    dispatch(fetchedUser(response.data));
  } catch (err) {
    dispatch(resetUser());
  }
};
