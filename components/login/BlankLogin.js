import Link from "next/link";
import React from "react";

const BlankLogin = () => {
  return (
    <div className="blank-login">
      <form>
        <p className="login-title">
          <b>Login</b>
        </p>
        <hr className="login-hr" />
        <input
          type="email"
          name="email"
          className="custom-input"
          placeholder="Email"
          required
          id="id_email"
        />
        <input
          type="password"
          name="password"
          className="custom-input"
          placeholder="Password"
          required
          id="id_password"
        />
        <div>
          <input type="submit" value="Log In" className="submit" />
        </div>
        <Link href="/register" legacyBehavior>
          <a className="question">Don't have an Account? Register Now.</a>
        </Link>
      </form>
    </div>
  );
};

export default BlankLogin;
