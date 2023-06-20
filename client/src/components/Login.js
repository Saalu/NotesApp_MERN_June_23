import React, { useState } from "react";

function Login() {
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div>
      <div className="lgin">
        <h2>Login</h2>
        <form>
          <input
            type="email"
            name="email"
            id="login-email"
            placeholder="Email"
            value={user.email}
          />
          <input
            type="password"
            name="password"
            id="login-password"
            placeholder="Password"
            value={user.password}
          />

          <button type="submit">Login</button>
          <p>You don't have an account</p>
          <span>Register Now</span>
        </form>
      </div>
      <div className="register">
        <h2>Register</h2>
        <form>
          <input
            type="name"
            name="name"
            id="login-name"
            placeholder="Name"
            value={user.name}
          />
          <input
            type="email"
            name="email"
            id="login-email"
            placeholder="Email"
            value={user.email}
          />
          <input
            type="password"
            name="password"
            id="login-password"
            placeholder="Password"
            value={user.password}
          />

          <button type="submit">Login</button>
          <p>You don't have an account</p>
          <span>Register Now</span>
        </form>
      </div>
    </div>
  );
}

export default Login;
