import React from "react";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import logo from "../assets/logo.svg";
import { useAppContext } from "./context";

const Sidebar = () => {
  const { sidebarOpen, closeSidebar } = useAppContext();
  return (
    <>
      <aside className={sidebarOpen ? `sidebar show-sidebar` : "sidebar"}>
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="logo"></img>
          <button onClick={closeSidebar} className="close-sidebar-btn">
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
