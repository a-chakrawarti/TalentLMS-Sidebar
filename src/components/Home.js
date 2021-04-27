import React from "react";
import { FaBars } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <main>
        <button className="sidebar-toggle">
          <FaBars />
        </button>
        <div className="modal-btn">
          <button>Show Modal</button>
        </div>
      </main>
    </>
  );
};

export default Home;