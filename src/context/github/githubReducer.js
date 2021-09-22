import {
  SEARCH_USERS,
  SET_lOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_LOADING,
} from '../types';

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
