import styles from "./header.module.css";
import { IconButton, Menu, MenuItem, Avatar, Divider } from "@mui/material";
import { FiMenu } from "react-icons/fi";
import { MouseEvent, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiHome2Fill, RiQuestionnaireFill } from "react-icons/ri";
import { FaBoxOpen } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { TiGroup } from "react-icons/ti";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  window.onresize = () => {
    if (window.innerWidth > 767) {
      setAnchorEl(null);
    }
  };

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header className={`${styles.container}`}>
      <nav
        className={`h-100 d-flex justify-content-between align-items-center px-4 ${styles.nav}`}
      >
        <HashLink className="text-white fw-bold" to="">
          LOGO
        </HashLink>
        <IconButton onClick={handleClick} className="text-white d-md-none">
          <FiMenu />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              width: 190,
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem className="pe-0">
            <RiHome2Fill size={20} className="text-secondary me-3" />
            <HashLink className="text-secondary w-100" to="/">
              Home
            </HashLink>
          </MenuItem>
          <MenuItem className="pe-0">
            <FaBoxOpen size={20} className="text-secondary me-3" />
            <HashLink className="text-secondary w-100" to="/#tools">
              Tools
            </HashLink>
          </MenuItem>
          <MenuItem className="pe-0">
            <TiGroup size={20} className="text-secondary me-3" />
            <HashLink className="text-secondary w-100" to="/#about">
              About
            </HashLink>
          </MenuItem>
          <MenuItem className="pe-0">
            <RiQuestionnaireFill size={20} className="text-secondary me-3" />
            <HashLink className="text-secondary w-100" to="/#faq">
              FAQ
            </HashLink>
          </MenuItem>
          <Divider />
          <MenuItem className="pe-0 ps-2">
            <IoLogIn size={24} className="text-secondary me-3 ms-1" />
            <Link className="text-secondary w-100 d-block" to="/login-signup">
              Login / Sign-up
            </Link>
          </MenuItem>
        </Menu>
        <ul className="d-none d-md-flex gap-5 m-0 p-0 fw-bold">
          <li>
            <HashLink className={`text-white-50 ${styles.link}`} to="/#tools">
              Tools
            </HashLink>
          </li>
          <li>
            <HashLink className={`text-white-50 ${styles.link}`} to="/#about">
              About
            </HashLink>
          </li>
          <li>
            <HashLink className={`text-white-50 ${styles.link}`} to="/#faq">
              FAQ
            </HashLink>
          </li>
        </ul>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `d-none d-md-block text-white fw-bold`
              : `d-none d-md-block text-white-50 fw-bold`
          }
          to="/login-signup"
        >
          Login / Sign-up
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
