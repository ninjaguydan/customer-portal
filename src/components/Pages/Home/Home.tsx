import PolicyGrid from "./PolicyGrid";

const Home = () => {
  return (
    <>
      <section className="greeting-home">
        <h1 className="page-header greeting">
          Hey, Johnny! <br /> <span>We've got you covered</span>
        </h1>
        <aside className="quick-tools">
          <h2 className="section-header">Quick Tools</h2>
          <div className="btn-group">
            <button className="btn secondary">
              <span
                className="material-symbols-outlined badge"
                aria-hidden="true"
              >
                badge
              </span>{" "}
              ID Cards
            </button>
            <button className="btn secondary">
              <span className="material-symbols-outlined" aria-hidden="true">
                help
              </span>
              FAQ
            </button>
            <button className="btn primary">Pay A Bill</button>
          </div>
        </aside>
      </section>
      <section>
        <h2 className="section-header">Notifications</h2>
        <div className="card notifications">
          <div className="info">
            <span className="material-symbols-outlined" aria-hidden="true">
              info
            </span>
            <div>
              <p className="title">New bill issued</p>
              <p>Homeowners #001877352</p>
              <p>Amount: $359.14</p>
              <p>Due by 01/28/23</p>
            </div>
          </div>
          <button className="btn primary">Go to Billing</button>
        </div>
      </section>
      <section>
        <h2 className="section-header">Policies & Payments</h2>
        <PolicyGrid view="HOME" />
      </section>
    </>
  );
};

export default Home;
