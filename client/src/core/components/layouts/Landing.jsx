// components : Names in Uppercase like a className in java
import React from "react";

const Landing = () => {
  return (
    <>
      <section class="landing">
        <div class="dark-overlay">
          <div class="landing-inner">
            <h1 class="x-large">Developer Connector</h1>
            <p class="lead">
              Create a developer profile/portfolio, share posts and get help
              from other developers
            </p>
            <div class="buttons">
              <a href="register.html" class="btn btn-primary">
                Sign Up
              </a>
              <a href="login.html" class="btn btn-light">
                Login
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
  // <> </> this is called as react fragment used to avoid unnecessary divs in the DOM tree
  // we can also use <div> </div> instead of react fragment
};

export default Landing;
