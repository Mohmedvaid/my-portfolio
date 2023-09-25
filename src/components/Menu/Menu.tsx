import React, { useState } from "react";
import { Box } from "@mui/material";
import { Squash as Hamburger } from "hamburger-react";
import { bubble as Menu } from "react-burger-menu";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    // background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    // link wrapper
    color: "#b8b7ad",
    padding: "0.8em",
    display: "flex",
    flexDirection: "column",
    gap: "1em",
    fontSize: "3rem",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

const SidebarMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state: { isOpen: boolean }) => {
    setMenuOpen(state.isOpen);
  };

  const handleToggle = (toggled: boolean) => {
    setMenuOpen(toggled);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Box zIndex="1001">
        <Hamburger
          toggled={menuOpen}
          toggle={setMenuOpen}
          onToggle={handleToggle}
          size={20}
          color="#b8b7ad"
          direction="right"
        />
      </Box>
      <Box zIndex="1000">
        <Menu
          isOpen={menuOpen}
          onStateChange={handleStateChange}
          styles={styles}
          customBurgerIcon={false}
          customCrossIcon={false}
          right
        >
          {menuOpen && (
            <>
              <MuiLink
                component={RouterLink}
                to="/"
                color="inherit"
                className="menu-item"
              >
                Home
              </MuiLink>
              <MuiLink
                component={RouterLink}
                to="/about"
                color="inherit"
                className="menu-item"
              >
                About
              </MuiLink>
              <MuiLink
                component={RouterLink}
                to="/contact"
                color="inherit"
                className="menu-item"
              >
                Contact
              </MuiLink>
              <MuiLink
                component={RouterLink}
                to="/settings"
                color="inherit"
                className="menu-item"
              >
                Settings
              </MuiLink>
            </>
          )}
        </Menu>
      </Box>
    </Box>
  );
};

export default SidebarMenu;
