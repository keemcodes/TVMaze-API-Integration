import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

import UserView from "./UserView";
import AdminView from "./AdminView";
export default function Home(props) {
  let userLevel = JSON.parse(sessionStorage.getItem("auth-details")).level;
  console.log(userLevel);
  return (
    <>
      {userLevel === 1 ? (
        <UserView
          isAuth={props.isAuth}
          handleLogoutSubmit={props.handleLogoutSubmit}
        />
      ) : (
        <AdminView
          isAuth={props.isAuth}
          handleLogoutSubmit={props.handleLogoutSubmit}
        />
      )}
    </>
  );
}
