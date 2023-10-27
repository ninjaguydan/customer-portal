import { createPortal } from "react-dom";

type Props = {
  isOpen: boolean;
  openMenu: () => void;
};

const MenuBtn = ({ isOpen, openMenu }: Props) => {
  return (
    <button
      id="menu-btn"
      className={`menu-btn ${isOpen ? "open" : ""}`}
      onClick={openMenu}
    >
      <div className="menu-btn_burger"></div>
    </button>
  );
};

export default MenuBtn;
