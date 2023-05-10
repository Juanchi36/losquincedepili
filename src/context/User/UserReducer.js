import { SET_USERS, SET_CURRENT_USER, SET_USER } from './types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_USERS: {
      return {
        ...state,
        users: payload,
      };
    }
    case SET_USER: {
      return {
        ...state,
        loginUser: payload,
      };
    }
    case SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: payload,
      };
    }
    default:
      return undefined
  }
};
