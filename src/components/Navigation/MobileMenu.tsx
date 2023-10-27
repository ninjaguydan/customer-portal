import { NavLink } from "react-router-dom";
import { createPortal } from "react-dom";

type Props = {
  className: string;
  closeMenu: () => void;
};
const Navigation = ({ className, closeMenu }: Props) => {
  return createPortal(
    <nav className={`site-nav ${className}`}>
      <NavLink to="/" onClick={closeMenu}>
        <span className="material-symbols-outlined" aria-hidden="true">
          home
        </span>
        Home
      </NavLink>
      <hr />
      <NavLink to="/billing" onClick={closeMenu}>
        <span className="material-symbols-outlined" aria-hidden="true">
          local_atm
        </span>
        Billing
      </NavLink>
      <hr />
      <NavLink to="/policy" onClick={closeMenu}>
        <span className="material-symbols-outlined" aria-hidden="true">
          shield
        </span>
        Policy
      </NavLink>
      <hr />
      <NavLink to="/settings" onClick={closeMenu}>
        <span className="material-symbols-outlined" aria-hidden="true">
          settings
        </span>
        Setting
      </NavLink>
      <hr />
    </nav>,
    document.body
  );
};
export default Navigation;
