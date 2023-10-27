type Props = {
  onClick: () => void;
  isActive: boolean;
};
const Toggle = ({ onClick, isActive }: Props) => {
  return (
    <button className="toggle" onClick={onClick} aria-label="toggle color mode">
      <span className={`slider ${isActive ? "active" : ""}`}></span>
    </button>
  );
};

export default Toggle;
