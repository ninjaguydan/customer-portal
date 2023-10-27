import { PolicyRecord } from "../../../data/policyManager";
import setIcon from "../../../utils/setIcon";
import useDeviceWidth from "../../../hooks/useDeviceWidth";
import { useState } from "react";

type Props = {
  policy: PolicyRecord;
};

const BillingCard = ({ policy }: Props) => {
  const [breakPoint] = useDeviceWidth();
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="flex-col">
      <h3 className="card-header">
        <span className="material-symbols-outlined" aria-hidden="true">
          {setIcon(policy.policyType)}
        </span>
        {policy.policyType}
      </h3>
      <p>
        <span className="table-label">Policy Number:</span>{" "}
        <strong>#{policy.policyNumber}</strong>
      </p>
      <p>Period: {policy.effectiveDateRange} </p>
      <button
        className={`btn icon expand ${expanded ? "open" : ""}`}
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {breakPoint !== "MOBILE" && (expanded ? "Collapse" : "Expand")}
        <span className="material-symbols-outlined">expand_more</span>
      </button>
      {expanded && (
        <div className="epanded-content flex-col">
          <p className="just-between flex-center">
            Minimum due {policy.scheduledDate}:{" "}
            <strong>{policy.scheduledPayment}</strong>
          </p>
          <p className="just-between flex-center">
            Billing Frequency: <strong>{policy.frequency}</strong>
          </p>
          <p className="just-between flex-center">
            Billing Premium: <strong>{policy.premiumDue}</strong>
          </p>
          <p className="just-between flex-center">
            Unpaid Balance: <strong>$1,000.00</strong>
          </p>
          <p className="just-between flex-center">
            Paperless Billing: <strong>ON</strong>
          </p>
          <button className="btn primary">Pay bill</button>
        </div>
      )}
    </article>
  );
};
export default BillingCard;
