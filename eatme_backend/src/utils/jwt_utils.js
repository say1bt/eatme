import jwt from "jsonwebtoken";

const signJwt = (object, options) => {
  return jwt.sign(object, process.env.ACCESS_SECRET_KEY, {
    ...(options && options),
    algorithm: "RS256",
  });
};

const verifyJwt = (token) => {
  try {
    const decoded = jwt.verify(token, publicKey);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (e) {
    console.error(e);
    return {
      valid: false,
      expired: e.message === "jwt expired",
      decoded: null,
    };
  }
};

export { signJwt, verifyJwt };
