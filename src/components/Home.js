import React from "react";
import { FaBars } from "react-icons/fa";
import { useAppContext } from "./context";
const Home = () => {
  const { openSidebar, openModal } = useAppContext();
  return (
    <>
      <main>
        <button className="sidebar-toggle" onClick={openSidebar}>
          <FaBars />
        </button>
        <div className="modal-btn">
          <button onClick={openModal} className="show-modal-btn">
            SHOW MODAL
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
