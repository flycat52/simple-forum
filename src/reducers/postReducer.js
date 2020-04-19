import { getReducer } from '../utils/reducerUtil';

const initialState = {
  busy: false,
  postCollection: [],
};

const postReducer = {
  RESET_POSTS: () => ({ ...initialState }),
  FETCHING_POSTS: () => ({
    busy: true,
  }),
  FETCHED_POSTS: (postCollection, { response }) => ({
    postCollection: [...response],
    busy: false,
  }),
};

export default getReducer(initialState, postReducer);
