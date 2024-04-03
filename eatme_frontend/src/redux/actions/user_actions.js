import axios from "axios";
import * as actionTypes from "../actionTypes/user_actionTypes";
import { LOGIN_URL, LOGOUT_URL } from "../../constants/api_constants";

const loginAction = (userData) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.USER_LOGIN_REQUEST });

    const response = await axios.post(LOGIN_URL, userData, {
      headers: { "Content-Type": "application/json" },
    });

    dispatch({ type: actionTypes.USER_LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: actionTypes.USER_LOGIN_FAILURE, payload: error.message });
  }
};

const logoutAction = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.USER_LOGOUT_REQUEST });

    const response = await axios.get(LOGOUT_URL);

    dispatch({ type: actionTypes.USER_LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: actionTypes.USER_LOGOUT_FAILURE, payload: error.message });
  }
};

export { loginAction, logoutAction };
