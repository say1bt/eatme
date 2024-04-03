const AUTHORIZATION_CODE = "authorization_code";
const CONTENT_TYPE = "Content-Type";
const HEADER_APPLICATION = "application/x-www-form-urlencoded";

const accessTokenCookieOptions = {
  maxAge: 900000,
  httpOnly: true,
  domain: "localhost",
  path: "/",
  sameSite: "lax",
  secure: false,
};

const refreshTokenCookieOptions = {
  ...accessTokenCookieOptions,
  maxAge: 90000000,
};

export {
  AUTHORIZATION_CODE,
  CONTENT_TYPE,
  HEADER_APPLICATION,
  accessTokenCookieOptions,
  refreshTokenCookieOptions,
};
