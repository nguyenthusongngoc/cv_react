import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../../../../core/auth/auth";
import ApiService, { endpoint } from "../../../../core/service/api";
const Login = (props) => {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();
  let { from } = location.state || { from: { pathname: "/user" } };
  let login = (data) => {
    auth.signin(() => {
      history.replace(from);
    });
  };
  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [listUser, setListUser] = useState(null);
  useEffect(() => {
    async function getApiUser() {
      const res = await ApiService(endpoint.user);
      setListUser(res.data);
    }
    getApiUser();
  }, []);

  const handleChangeUserName = (e) => {
    const value = e.target.value;
    setUserName(value);
  };
  const handleChangePassword = (e) => {
    const value = e.target.value;
    setPassWord(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(listUser);
    const findUser = listUser.find((item) => item.email === userName);
    if (findUser) {
      if (findUser.password === password) {
        login(findUser);
      } else {
        
      }
    } else {
    }
  };

  return (
    <main id="login" className="login">
      <div className="login-form col-md-9 col-sm-12 m-auto">
        <h2 className="form-title">Login</h2>
        <form className="row" onSubmit={handleSubmit}>
          <div className="col-12">
            <label>E-mail / Username</label>
            <input
              value={userName}
              className="form-control"
              type="text"
              placeholder="E-mail / Username"
              onChange={handleChangeUserName}
            />
          </div>
          <div className="col-12">
            <label>Password</label>
            <input
              value={password}
              className="form-control"
              type="text"
              placeholder="Password"
              onChange={handleChangePassword}
            />
          </div>
          <div className="col-md-12">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="newaccount"
              />
              <label className="custom-control-label" htmlFor="newaccount">
                Keep me signed in
              </label>
            </div>
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
