// The strucute of the page is :
//  A side bar to go to different pages
// A top bar to go through different pages on home page

import { useState } from "react";
import NavBar from "./NavBar";
//
export default function HomePage() {
  return (
    <>
      <div>
        <h1>
          {" "}
          This is the Page where I fetch api to show some data and with a nav
          bar
        </h1>
        <NavBar />
      </div>
    </>
  );
}
