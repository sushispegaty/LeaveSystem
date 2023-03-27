import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isloggedIn: false,
  userDetails: { employeeId: "", name: "", role: "" },
  getUserDetail: (empId, name, role) => {},
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [userDetails, setUserDeatils] = useState({});
  const userIsLoggedIn = !!token;
  const logoutHandler = () => {
    setToken(null);
  };

  const getUserDetailhandler = (EmpId, Name, Role) => {
    setUserDeatils({ employeeId: EmpId, name: Name, role: Role });
  };
  const loginHandler = (token) => {
    setToken(token);
  };

  const contextValue = {
    token: token,
    isloggedIn: userIsLoggedIn,
    userDetails: userDetails,
    login: loginHandler,
    logout: logoutHandler,

    getUserDetail: getUserDetailhandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
