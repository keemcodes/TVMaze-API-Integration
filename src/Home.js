import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

import UserView from "./views/UserView";
import AdminView from "./views/AdminView";
export default function Home(props) {
  let userLevel = JSON.parse(sessionStorage.getItem("auth-details")).level;
  return (
    <>
    <section>

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
    </section>
    </>
  );
}
