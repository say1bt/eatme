import * as actionTypes from "../actionTypes/user_actionTypes";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_REQUEST:
    case actionTypes.USER_LOGOUT_REQUEST:
      return { ...state, loading: true, error: null };

    case actionTypes.USER_LOGIN_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: null };

    case actionTypes.USER_LOGOUT_SUCCESS:
      return { ...state, user: null, loading: false, error: null };

    case actionTypes.USER_LOGIN_FAILURE:
    case actionTypes.USER_LOGOUT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default userReducer;
