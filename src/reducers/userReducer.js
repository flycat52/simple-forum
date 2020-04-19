import { getReducer } from '../utils/reducerUtil';

const initialState = {
  busy: false,
  userSession: null,
};

const userReducer = {
  RESET_USER: () => ({ ...initialState }),
  ADDING_USER: () => ({
    ...initialState,
    busy: true,
  }),
  ADDEDED_USER: (state, { payload }) => ({
    userSession: payload,
    busy: false,
  }),
  FETCHING_USER: () => ({
    ...initialState,
    busy: true,
  }),
  FETCHED_USER: (userSession, { response }) => ({
    userSession: response,
    busy: false,
  }),
};

export default getReducer(initialState, userReducer);
