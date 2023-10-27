import { useParams, Link } from "react-router-dom";

import { POLICIES, PolicyRecord } from "../../../data/policyManager";
import setIcon from "../../../utils/setIcon";
import useDeviceWidth from "../../../hooks/useDeviceWidth";

import PolicyCardFull from "../../PolicyCard/PolicyCardFull";
import DocumentCard from "./DocumentCard";

const Policies = () => {
  const [breakpoint] = useDeviceWidth();
  const { policyNumber } = useParams();
  const policy = POLICIES.filter(
    (policy: PolicyRecord) => policyNumber === policy.policyNumber
  )[0];

  return (
    <>
      <h1 className="page-header">
        <span className="material-symbols-outlined" aria-hidden="true">
          {setIcon(policy.policyType)}
        </span>{" "}
        {policy.policyType} Policy
      </h1>
      <Link to="/policy" className="btn icon back">
        <span className="btn chevron">
          <span className="material-symbols-outlined" aria-hidden="true">
            arrow_back
          </span>
        </span>
        All Policies
      </Link>
      <section className="section-grid">
        <article className="policy-summary">
          <h2 className="section-header">Summary</h2>
          <PolicyCardFull policy={policy} />
        </article>
        <article className="policy-documents">
          <h2 className="section-header">Documents</h2>
          <DocumentCard policyNum={policy.policyNumber} />
        </article>
        <article className="policy-documents service">
          <h2 className="section-header">Service Request Forms</h2>
          <DocumentCard policyNum={policy.policyNumber} />
        </article>
        <article className="policy-summary coverages">
          <h2 className="section-header">Coverages</h2>
          <div className="card policy-card">
            <h3 className="card-subheader">
              Monthly Benefit <span>$25,000</span>
            </h3>
            <p>
              <span className="table-label">Insured:</span> Johnathan Jones
            </p>
            <p>
              <span className="table-label">Plan:</span> 20 Year level term
            </p>
            <p>
              <span className="table-label">Benefit Period:</span> To age 65
            </p>
            <p>
              <span className="table-label">Elimination Period:</span> 180 Days
            </p>
            <p>
              <span className="table-label">
                Current deposit <br /> Interest rate:
              </span>{" "}
              To age 65
            </p>
          </div>
        </article>
        <article className="insured-info">
          <h2 className="section-header">People</h2>
          <div className="card policy-card">
            <h3 className="card-subheader">Policy Owner</h3>
            <div className="insured-group">
              <p>
                <span className="table-label">Name</span> Johnathan Jones
              </p>
              <p>
                <span className="table-label">Address</span> 2505 Court St,{" "}
                {breakpoint === "MOBILE" && <br />} Pekin, IL 61111
              </p>
              <p>
                <span className="table-label">Date of Birth</span> 01/16/1957
              </p>
            </div>
            <hr />
            <h3 className="card-subheader">Policy Payor</h3>
            <div className="insured-group">
              <p>
                <span className="table-label">Name</span> Johnathan Jones
              </p>
              <p>
                <span className="table-label">Address</span> 2505 Court St,{" "}
                {breakpoint === "MOBILE" && <br />} Pekin, IL 61111
              </p>
              <p>
                <span className="table-label">Date of Birth</span> 01/16/1957
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};
export default Policies;
