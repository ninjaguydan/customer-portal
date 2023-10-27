import { useState } from "react";
import { POLICIES, PolicyRecord } from "../../../data/policyManager";

import BillingCard from "./BillingCard";

const Billing = () => {
  const [openTab, setOpenTab] = useState("SUMMARY");

  return (
    <>
      <h1 className="page-header">
        <span className="material-symbols-outlined" aria-hidden="true">
          local_atm
        </span>{" "}
        Billing
      </h1>
      <section>
        <div className="billing-tabs flex-center">
          <button
            className={`card-subheader ${openTab === "SUMMARY" ? "open" : ""}`}
            onClick={() => {
              setOpenTab("SUMMARY");
            }}
          >
            Summary
          </button>
          <button
            className={`card-subheader ${openTab === "HISTORY" ? "open" : ""}`}
            onClick={() => {
              setOpenTab("HISTORY");
            }}
          >
            History
          </button>
        </div>
        {openTab === "SUMMARY" ? (
          <div className={`billing-card ${openTab}`}>
            <article className="flex-col">
              <div className="billing-header-group">
                <div>
                  <p>
                    <span className="table-label">Account balance:</span>{" "}
                    <strong>$452.00</strong>
                  </p>
                  <p>
                    <span className="table-label">Next due date:</span>{" "}
                    <strong>01/12/23</strong>
                  </p>
                </div>
                <button className="btn primary">
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    settings
                  </span>
                  Billing Settings
                </button>
              </div>
              <div className="filter-group">
                <p className="flex-center">
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    filter_alt
                  </span>
                  Filter by
                </p>
                <div>
                  <select name="state" id="state">
                    <option value="AL">Select State</option>
                    <option value="AL">Alabama</option>
                    <option value="AL">Wyoming</option>
                  </select>
                  <select name="priority" id="priority">
                    <option value="AL">Priority</option>
                  </select>
                </div>
              </div>
            </article>
            {POLICIES.map((policy: PolicyRecord) => (
              <BillingCard policy={policy} />
            ))}
          </div>
        ) : (
          <div className={`billing-card ${openTab}`}>
            <article className="flex-col">
              <div className="billing-header-group">
                <div className="filter-group">
                  <p className="flex-center">
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      filter_alt
                    </span>
                    Filter by
                  </p>
                  <div>
                    <select name="state" id="state">
                      <option value="AL">Select State</option>
                      <option value="AL">Alabama</option>
                      <option value="AL">Wyoming</option>
                    </select>
                    <select name="priority" id="priority">
                      <option value="AL">Priority</option>
                    </select>
                  </div>
                </div>
                <div className="btn-group">
                  <button className="btn primary">
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      settings
                    </span>
                    Billing Settings
                  </button>
                  <button className="btn secondary">
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      print
                    </span>
                    Print
                  </button>
                </div>
              </div>
            </article>
            <article className="flex-col">
              <p className="just-between flex-center">
                One time payment - Jan 2, 2023 <strong>$149.00</strong>
              </p>
              <p className="flex-center">
                <span
                  style={{ fontSize: "1.25rem", color: "#26a0c2" }}
                  className="material-symbols-outlined"
                  aria-hidden="true"
                >
                  cottage
                </span>
                Policy #000000000
              </p>
              <p>Visa Card ending in *0000</p>
              <p>Receipt #000000000</p>
            </article>
            <article className="flex-col">
              <p className="just-between flex-center">
                One time payment - Jan 2, 2023 <strong>$149.00</strong>
              </p>
              <p className="flex-center">
                <span
                  style={{ fontSize: "1.25rem", color: "#26a0c2" }}
                  className="material-symbols-outlined"
                  aria-hidden="true"
                >
                  cottage
                </span>
                Policy #000000000
              </p>
              <p>Visa Card ending in *0000</p>
              <p>Receipt #000000000</p>
            </article>
            <article className="flex-col">
              <p className="just-between flex-center">
                One time payment - Jan 2, 2023 <strong>$149.00</strong>
              </p>
              <p className="flex-center">
                <span
                  style={{ fontSize: "1.25rem", color: "#26a0c2" }}
                  className="material-symbols-outlined"
                  aria-hidden="true"
                >
                  cottage
                </span>
                Policy #000000000
              </p>
              <p>Visa Card ending in *0000</p>
              <p>Receipt #000000000</p>
            </article>
          </div>
        )}
      </section>
    </>
  );
};
export default Billing;
