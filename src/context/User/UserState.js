import React, { useReducer } from 'react';
import { SET_USERS, SET_CURRENT_USER, SET_USER } from './types';
import UserContext from './UserContext';
import UserReducer from './UserReducer';
import { getUsers, updateUser, getUser } from '../../services/users.mjs';

const UserState = (props) => {
  const initialState = {
    users: [],
    currentUser: {
      id: '',
      userName: '',
      password: '',
      tableNumber: 0,
      partyOf: 0,
      confirmed: 0,
    },
    loginUser: {},
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getAllUsers = async () => {
    const res = await getUsers();

    if (res) {
      dispatch({
        type: SET_USERS,
        payload: res,
      });
    }
  };

  const setCurrentUser = (user) => {
    if (user) {
      dispatch({
        type: SET_CURRENT_USER,
        payload: user,
      });
    }
  };

  const updateOneUser = async (id, body) => {
    await updateUser(id, body);

    return true;
  };

  const getOneUser = async (userName) => {
    const res = await getUser(userName);

    if (res) {
      dispatch({
        type: SET_USER,
        payload: res[0],
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        getAllUsers,
        setCurrentUser,
        updateOneUser,
        getOneUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;
