import React from "react";
import getGoogleOAuthURL from "../../utils/getGoogleUrls";

const SignIn = () => {
  return (
    <div className="signin-container">
      <h2>Sign up or log in</h2>
      <button className="signin-btn facebook">Continue with Facebook</button>
      <button className="signin-btn google">
        <a href={getGoogleOAuthURL()}>Continue with Google</a>
      </button>
      <button className="signin-btn apple">Continue with Apple</button>
      <div className="separator">or</div>
      <button className="signin-btn email">Continue with Email</button>
      <p className="terms">
        By continuing you agree to our <a href="#">T&Cs</a>. Please also check
        out our <a href="#">Privacy Policy</a>. We use your data to offer you a
        personalised experience and to better understand and improve our
        services. For more information see <a href="#">here</a>.
      </p>
    </div>
  );
};

export default SignIn;
