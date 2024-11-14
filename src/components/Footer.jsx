import React from "react";

function Footer() {
  const links = ["About us", "License", "Copyright", "Privacy"];
  return (
    <footer className="footer">
      <h3>Sign Up to our Newsletter:</h3>
      <input
        className="newsletter-signup-input"
        type="text"
        placeholder="Enter your email"
      />
      <button className="newsletter-signup-button">Sign Up</button>
      <ul className="footer-links">
        {links.map((link, index) => (
          <li className="footer-li" key={index}>
            <a className="footer-li-a" href="/">
              {link}
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright-text">
        &copy; 2024 ITG Gambia. Made with ❤ by Ebrima Mbye
      </p>
    </footer>
  );
}

export default Footer;
