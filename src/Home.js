import React from "react";

import UserView from "./views/UserView";
import AdminView from "./views/AdminView";

import SingleShowSearch from "./components/SingleShowSearch";
import ActorsSearch from "./components/ActorsSearch";

function RenderLocation(props) {
  switch (props.userLocation) {
    case 1:
      return (
        <SingleShowSearch
          handleQueryChange={props.handleQueryChange}
          getSingleShow={props.getSingleShow}
          singleShow={props.singleShow}
          htmlRemover={props.htmlRemover}
        />
      );
    case 2:
      return (
        <ActorsSearch
          handleQueryChange={props.handleQueryChange}
          getActors={props.getActors}
          actors={props.actors}
        />
      );
    case 3:
      return (
        <ActorsSearch
          handleQueryChange={props.handleQueryChange}
          getActors={props.getActors}
          actors={props.actors}
        />
      );
    default:
      return (
        <ActorsSearch
          handleQueryChange={props.handleQueryChange}
          getActors={props.getActors}
          actors={props.actors}
        />
      );
  }
}
export default function Home(props) {
  let userLevel = JSON.parse(sessionStorage.getItem("auth-details")).level;
  let userLocation = JSON.parse(
    sessionStorage.getItem("auth-details")
  ).location;
  function pageName() {
    switch (userLocation) {
      default:
        return "Show Search";
      case 1:
        return "Show Search";
      case 2:
        return "Multi-Show Search";
      case 3:
        return "People Search";
    }
  }

  return (
    <>
      <section>
        {userLevel === 1 ? (
          <UserView
            isAuth={props.isAuth}
            handleLogoutSubmit={props.handleLogoutSubmit}
            userLocation={userLocation}
            RenderLocation={RenderLocation}
            rootURL={props.rootURL}
            pageName={pageName}
            handleQueryChange={props.handleQueryChange}
            singleShow={props.singleShow}
            getSingleShow={props.getSingleShow}
            actors={props.actors}
            getActors={props.getActors}
            htmlRemover={props.htmlRemover}
          />
        ) : (
          <AdminView
            isAuth={props.isAuth}
            handleLogoutSubmit={props.handleLogoutSubmit}
            userLocation={userLocation}
            RenderLocation={RenderLocation}
            rootURL={props.rootURL}
            pageName={pageName}
            handleQueryChange={props.handleQueryChange}
            singleShow={props.singleShow}
            getSingleShow={props.getSingleShow}
            actors={props.actors}
            getActors={props.getActors}
            htmlRemover={props.htmlRemover}
          />
        )}
      </section>
    </>
  );
}
