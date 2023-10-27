type Props = {
  // range = first and last index of currently displayed policies
  range: number[];
  totalPolicies: number;
  increment: (direction: string) => void;
};

const Pagination = ({ range, totalPolicies, increment }: Props) => {
  return (
    <div className="pagination">
      <button
        disabled={range[0] === 1}
        className="btn chevron"
        onClick={() => increment("DOWN")}
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <p>
        Showing{" "}
        <span className="page">
          {range[0]}-{range[1]}
        </span>{" "}
        of <span className="page">{totalPolicies}</span>
      </p>
      <button
        disabled={range[1] === totalPolicies}
        className="btn chevron"
        onClick={() => increment("UP")}
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </div>
  );
};
export default Pagination;
