import MenuBtn from "../MenuBtn/MenuBtn";
import PekinLogo from "../../media/pekin-logo.svg";
import Navigation from "../../components/Navigation/Navigation";
import MobileMenu from "../../components/Navigation/MobileMenu";
import { Link } from "react-router-dom";

import { useState } from "react";
import useDeviceWidth from "../../hooks/useDeviceWidth";

export default function SiteHeader() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [breakpoint] = useDeviceWidth();

  return (
    <header className={`site-header ${breakpoint} ${menuIsOpen && "open"}`}>
      {breakpoint !== "DESKTOP" && (
        <MenuBtn
          isOpen={menuIsOpen}
          openMenu={() => setMenuIsOpen(!menuIsOpen)}
        />
      )}
      <Link
        to="/customer-portal"
        className="pekin-logo"
        onClick={() => {
          setMenuIsOpen(false);
        }}
      >
        <img src={PekinLogo} alt="Pekin Insurance logo" />
      </Link>
      {breakpoint !== "DESKTOP" && (
        <Link to="/settings" className="btn icon mobile-settings">
          <span className="material-symbols-outlined"> settings </span>
        </Link>
      )}
      {menuIsOpen && breakpoint !== "DESKTOP" ? (
        <MobileMenu
          className={`${menuIsOpen && "open"}`}
          closeMenu={() => {
            setMenuIsOpen(false);
          }}
        />
      ) : (
        <Navigation />
      )}
    </header>
  );
}
