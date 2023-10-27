import { PolicyRecord } from "../../data/policyManager";
import { Link } from "react-router-dom";

import setIcon from "../../utils/setIcon";

type Props = {
  policy: PolicyRecord;
};

const PolicyCard = ({
  policy: {
    policyNumber,
    policyType,
    policyStatus,
    effectiveDateRange,
    policyAddress,
    mailingAddress,
    premiumPaid,
    premiumDue,
    scheduledPayment,
    scheduledDate,
    frequency,
    isAutopay,
    agencyName,
    agencyAddress,
    agencyPhone
  }
}: Props) => {
  return (
    <div className="card policy-card">
      <div className="card-content">
        <h2 className="card-subheader">Policy Information</h2>
        <p>Policy Number: {policyNumber}</p>
        <p>Account Number: {policyNumber}</p>
        <p>
          Policy Status: <span>Active</span>
        </p>
        <p>Policy Address: {policyAddress}</p>
        <p>Mailing Address: {mailingAddress}</p>
        <p>Effective: {effectiveDateRange}</p>
        <p>Billing Frequency: {frequency}</p>
      </div>
      <div className="card-content">
        <h2 className="card-subheader">Agency Information</h2>
        <p>Name: {agencyName}</p>
        <p>Address: {agencyAddress}</p>
        <p>Phone: {agencyPhone}</p>
        <hr />
      </div>
      <div className="amount-due">
        {premiumDue !== "$0.00" ? (
          <>
            <p className="amount">{premiumDue}</p>
            <p>Payment scheduled for {scheduledDate}</p>
          </>
        ) : (
          <>
            <span className="material-symbols-outlined">check_circle</span>
            <p>Your policy is paid in full.</p>
          </>
        )}
      </div>
      <div className="btn-group">
        <Link to="/billing" className="btn primary">
          Go to billing
        </Link>
      </div>
    </div>
  );
};
export default PolicyCard;
