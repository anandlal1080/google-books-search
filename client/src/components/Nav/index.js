import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <a className="navbar-brand" href="/">
        Search
      </a>
      <a className="navbar-brand" href="/saved">
        Saved
      </a>
    </nav>
  );
}

export default Nav;
