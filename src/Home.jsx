import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

import UserView from "./UserView";
export default function Home(props) {
  let userLevel = JSON.parse(sessionStorage.getItem("auth-details")).level;
  console.log(userLevel);
  return <>{userLevel === 1 ? <UserView isAuth={props.isAuth} /> : "Admin"}</>;
}
