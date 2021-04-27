import React from "react";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import logo from "../assets/logo.svg";

const Sidebar = () => {
  return (
    <>
      <aside className={`sidebar show-sidebar`}>
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="logo"></img>
          <button className="close-sidebar-btn">
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.url}>
                  {item.icon}
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="social-icons">
          {social.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.url}>{item.icon}</a>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
