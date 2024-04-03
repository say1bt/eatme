import axios from "axios";
import {
  GOOGLE_REDIRECT_URL,
  GOOGLE_TOKEN_URL,
} from "../constants/route_constants.js";
import {
  AUTHORIZATION_CODE,
  CONTENT_TYPE,
  HEADER_APPLICATION,
} from "../constants/auth_constants.js";
import User from "../model/user_model.js";

const getGoogleUser = async ({ id_token, access_token }) => {
  try {
    const res = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
      {
        headers: {
          Authorization: `Bearer ${id_token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching Google user:", error);
    throw new Error(error.message);
  }
};

const getGoogleOAuthTokens = async ({ code }) => {
  const values = {
    code,
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: GOOGLE_REDIRECT_URL,
    grant_type: AUTHORIZATION_CODE,
  };

  try {
    const res = await axios.post(GOOGLE_TOKEN_URL, qs.stringify(values), {
      headers: {
        [CONTENT_TYPE]: HEADER_APPLICATION,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error.response.data.error);
    console.error("Failed to fetch Google OAuth Tokens");
    throw new Error(error.message);
  }
};

const findAndUpdateUser = async (query, update, options = {}) => {
  try {
    const user = await User.findOne({ where: query });

    if (!user) {
      throw new Error("User not found");
    }
    const [numAffectedRows, updatedUser] = await User.update(update, {
      where: query,
      returning: true,
    });

    if (numAffectedRows === 0) {
      throw new Error("User not found");
    }

    return updatedUser[0];
  } catch (error) {
    console.error("Error finding and updating user:", error);
    throw new Error("Could not find and update user");
  }
};

export { getGoogleOAuthTokens, getGoogleUser, findAndUpdateUser };
