import { useContext } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import Profile from "../Profile/Profile";
import AuthContext from "../Store/Auth-Context";
import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  const authctx = useContext(AuthContext);
  const isloggedIn = authctx.isloggedIn;
  const navigate = useNavigate();
  const logoutHandler = () => {
    authctx.logout();
    navigate("/");
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Leave Mangement System</div>
      </Link>
      <div></div>
      <nav>
        <ul>
          <li>{!isloggedIn && <Link to="/LogIn">Login</Link>}</li>

          <li>{isloggedIn && <Link to="/Profile">Profile</Link>}</li>
          <li>
            {isloggedIn && <button onClick={logoutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
