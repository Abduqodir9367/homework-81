import React from "react";
import "./Header.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="nav-links">
          <div className="lft">
            <h2>Products</h2>
            <p>Home / Products</p>
          </div>

          <Link href={"add"}>
            <button className="exit">Add </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
