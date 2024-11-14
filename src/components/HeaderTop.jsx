import React, { useEffect, useRef } from "react";

function HeaderTop() {
  const links = ["Home", "About", "Services", "Contact", "Signup"];
  const navbarRef = useRef(null); // Reference to the navbar element
  const menuIconRef = useRef(null); // Reference to the menu icon

  useEffect(() => {
    const handleDocumentClick = (event) => {
      // Check if the click was outside the navbar and the menu icon
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        !menuIconRef.current.contains(event.target)
      ) {
        // Hide the navbar if clicked outside
        navbarRef.current.classList.remove("menu-active");
      }

      // Check if a link inside the navbar was clicked
      if (
        navbarRef.current &&
        navbarRef.current.contains(event.target) &&
        event.target.tagName === "A"
      ) {
        // Hide the navbar if a link is clicked
        navbarRef.current.classList.remove("menu-active");
      }
    };

    document.addEventListener("click", handleDocumentClick);

    // Cleanup listener on component unmount
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleMenuButtonClick = () => {
    if (navbarRef.current) {
      navbarRef.current.classList.toggle("menu-active");
    }
    console.log("menu button clicked!");
  };

  return (
    <div className="header-top">
      <i
        className="fa-solid fa-bars menu-icon"
        onClick={handleMenuButtonClick}
        ref={menuIconRef} // Attach the ref to the menu icon
      ></i>
      <p className="logo">
        <span className="red">I</span>
        <span className="blue">T</span>
        <span>G</span>
      </p>
      <nav className="header-nav" ref={navbarRef}>
        <ul>
          {links.map((link, index) => (
            <li key={index} className="header-li">
              <a href={`#${link}`}>{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default HeaderTop;
