import React from "react";

import UserView from "./views/UserView";
import AdminView from "./views/AdminView";
export default function Home(props) {
  let userLevel = JSON.parse(sessionStorage.getItem("auth-details")).level;
  let userLocation = JSON.parse(
    sessionStorage.getItem("auth-details")
  ).location;
  return (
    <>
      <section>
        {userLevel === 1 ? (
          <UserView
            isAuth={props.isAuth}
            handleLogoutSubmit={props.handleLogoutSubmit}
            userLocation={userLocation}
            rootURL={props.rootURL}
            pageName={props.pageName}
          />
        ) : (
          <AdminView
            isAuth={props.isAuth}
            handleLogoutSubmit={props.handleLogoutSubmit}
            userLocation={userLocation}
            rootURL={props.rootURL}
            pageName={props.pageName}

          />
        )}
      </section>
    </>
  );
}
