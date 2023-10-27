import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={`site-nav DESKTOP`}>
      <NavLink to="/customer-portal">
        <span className="material-symbols-outlined" aria-hidden="true">
          home
        </span>
        Home
      </NavLink>
      <hr />
      <NavLink to="/billing">
        <span className="material-symbols-outlined" aria-hidden="true">
          local_atm
        </span>
        Billing
      </NavLink>
      <hr />
      <NavLink to="/policy">
        <span className="material-symbols-outlined" aria-hidden="true">
          shield
        </span>
        Policy
      </NavLink>
      <hr />
      <NavLink to="/settings">
        <span className="material-symbols-outlined" aria-hidden="true">
          settings
        </span>
        Setting
      </NavLink>
      <hr />
    </nav>
  );
};
export default Navigation;
