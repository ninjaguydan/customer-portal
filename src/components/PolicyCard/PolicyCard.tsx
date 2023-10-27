import { PolicyRecord } from "../../data/policyManager";
import useDeviceWidth from "../../hooks/useDeviceWidth";
import { Link } from "react-router-dom";

import setIcon from "../../utils/setIcon";

type Props = {
  policy: PolicyRecord;
  view: string;
};

const PolicyCard = ({
  policy: {
    policyNumber,
    policyType,
    policyStatus,
    effectiveDateRange,
    policyAddress,
    premiumPaid,
    premiumDue,
    scheduledDate,
    isAutopay,
    mailingAddress,
    frequency,
    agencyName,
    agencyAddress,
    agencyPhone
  },
  view
}: Props) => {
  const [breakpoint] = useDeviceWidth();

  if (view === "HOME") {
    return (
      <div className="card policy-card">
        <h3 className="card-header">
          <span className="material-symbols-outlined" aria-hidden="true">
            {setIcon(policyType)}
          </span>
          {policyType}
          <span className="visually-hidden">Policy#{policyNumber}</span>
        </h3>
        <div className="card-content">
          {breakpoint !== "MOBILE" && <p>Policy #{policyNumber}</p>}
          <p className={`autopay ${isAutopay && "success"} ${breakpoint}`}>
            Autopay: {isAutopay ? "ON" : "OFF"}
          </p>
          {breakpoint !== "MOBILE" && (
            <>
              <p>Effective: {effectiveDateRange}</p>
              <p>Address: {policyAddress}</p>
              <p>Premium paid: {premiumPaid}</p>
              <p>Premium due: {premiumDue}</p>
              <hr />
            </>
          )}
          <div className="amount-due">
            {premiumDue !== "$0.00" ? (
              <>
                <p className="amount">{premiumDue}</p>
                <p>Payment scheduled for {scheduledDate}</p>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined" aria-hidden="true">
                  check_circle
                </span>
                <p>Your policy is paid in full.</p>
              </>
            )}
          </div>
        </div>
        <div className="btn-group">
          <Link to={`/policy/${policyNumber}`} className="btn secondary">
            View Policy
          </Link>
          <Link to="/billing" className="btn primary">
            Go to billing
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card policy-card">
        <h3 className="card-header">
          <span className="material-symbols-outlined" aria-hidden="true">
            {setIcon(policyType)}
          </span>
          {policyType}
          <span className="visually-hidden">Policy#{policyNumber}</span>
        </h3>

        <div className="card-content">
          <h4 className="card-subheader">Agency Information</h4>
          <p>Policy #{policyNumber}</p>
          <p>Account Number: {policyNumber}</p>
          <p>
            Policy Status:{" "}
            <span
              className={policyStatus === "Cancelled" ? "false" : "success"}
            >
              {policyStatus}
            </span>
          </p>
          {breakpoint !== "MOBILE" && (
            <>
              <p>Policy Address: {policyAddress}</p>
              <p>Mailing Address: {mailingAddress}</p>
              <p>Effective: {effectiveDateRange}</p>
              <p>Billing Method: {frequency}</p>
            </>
          )}
        </div>

        {breakpoint !== "MOBILE" && (
          <div className="card-content">
            <h4 className="card-subheader">Agency Information</h4>
            <p>Name: {agencyName}</p>
            <p>Address: {agencyAddress}</p>
            <p>Phone: {agencyPhone}</p>
          </div>
        )}

        <div className="btn-group">
          <Link to={`/policy/${policyNumber}`} className="btn primary">
            Coverages & Documents
          </Link>
        </div>
      </div>
    );
  }
};
export default PolicyCard;
