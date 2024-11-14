import React from "react";
import HeaderTop from "./HeaderTop";

function Header() {
  return (
    <header className="header">
      <HeaderTop />
      <div className="header-overlay">
        <h1 className="header-title">Welcome to ITG, Gambia</h1>
        <h2 className="header-description">
          ITG Gambia is the most trustworthy, well-seasoned business helper in
          the whole of The Gambia.
        </h2>
      </div>
    </header>
  );
}

export default Header;
