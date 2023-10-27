import PolicyGrid from "../Home/PolicyGrid";

const Policies = () => {
  return (
    <>
      <h1 className="page-header">
        <span className="material-symbols-outlined" aria-hidden="true">
          shield
        </span>{" "}
        Your Policies
      </h1>
      <section>
        <h2 className="section-header">Policy List</h2>
        <PolicyGrid view="/POLICY" />
      </section>
    </>
  );
};
export default Policies;
