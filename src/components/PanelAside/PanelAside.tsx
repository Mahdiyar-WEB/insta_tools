import styles from "./panelAside.module.css";
import { useState } from "react";
import UserMenu from "./UserMenu/UserMenu";
import { NavLink } from "react-router-dom";
import {MdWidgets} from "react-icons/md";
import {FaUserClock} from "react-icons/fa";

const PanelAside = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className={`py-3 text-white bg-black d-flex flex-column align-items-center ${styles.container}`}
    >
      <div className={styles.content}>
        <h6 className="fw-normal mb-4">INS Tools</h6>
        <div className={styles.divider}></div>
        <UserMenu />
        <div className={`${styles.divider} mt-2`}></div>
        <div className="d-flex flex-column w-100 py-2 px-3">
          <NavLink
            className={(status) =>
              status.isActive ? styles.active : styles.link
            }
            to="/panel/products"
          >
            <MdWidgets size={25} className="me-3"/>
            Products
          </NavLink>
          <NavLink
            className={(status) =>
              status.isActive ? styles.active : styles.link
            }
            to="/panel/history"
          >
            <FaUserClock size={25} className="me-3"/>
            History
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default PanelAside;
