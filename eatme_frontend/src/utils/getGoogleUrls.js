import {
  CODE,
  CONSENT,
  GOOGLE_USER_EMAIL_SCOPE,
  GOOGLE_USER_PROFILE_SCOPE,
  OFFLINE,
} from "../constants/api_constants";

const getGoogleOAuthURL = () => {
  console.log({
    redirect_uri: process.env.REACT_APP_GOOGLE_OAUTH_REDIRECT_URL,
    client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    access_type: OFFLINE,
    response_type: CODE,
    prompt: CONSENT,
    scope: [GOOGLE_USER_PROFILE_SCOPE, GOOGLE_USER_EMAIL_SCOPE].join(" "),
  });

  const options = {
    redirect_uri: process.env.REACT_APP_GOOGLE_OAUTH_REDIRECT_URL,
    client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    access_type: OFFLINE,
    response_type: CODE,
    prompt: CONSENT,
    scope: [GOOGLE_USER_PROFILE_SCOPE, GOOGLE_USER_EMAIL_SCOPE].join(" "),
  };

  const qs = new URLSearchParams(options);

  return `${process.env.REACT_APP_ROOT_URL}?${qs.toString()}`;
};

export default getGoogleOAuthURL;
