import { AccountCircle, Home } from "@material-ui/icons";
import React from "react";
import style from "./navbar.module.scss";

const Navbar = (props) => {
  return (
    <div className={style.container}>
      <p style={{visibility:'hidden'}}>Logout</p>
      <h1>Glitter Box Counter</h1>
      {props.user ? (
        <div className={style.userBox}>
          <AccountCircle fontSize="large" onClick={props.route} />
        </div>
      ) : props.goto === "home" ? (
        <div className={style.userBox}>
        <Home fontSize="large" onClick={props.route} />
        </div>
      ) : (
        <p onClick={props.route}>{props.goto}</p>
      )}
    </div>
  );
};

export default Navbar;
