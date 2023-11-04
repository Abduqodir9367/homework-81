import React from "react";
import "./Sidebar.scss";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <section className="sidebar">
        <div className="sidebar-icons">
          <img className="logo" src="../logo.png" alt="logo" />

          <img src="../products.png" alt="icon" className="products" />

          <img src="../login.png" alt="icon" className="login" />

          <Link href={'add'}><img src="../add.png" alt="icon" className="add" /></Link>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
