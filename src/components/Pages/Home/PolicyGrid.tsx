import PolicyCard from "../../PolicyCard/PolicyCard";
import Pagination from "../../Pagination/Pagination";

import { useState, useEffect } from "react";

import { POLICIES, PolicyRecord } from "../../../data/policyManager";
import useDeviceWidth from "../../../hooks/useDeviceWidth";

const PolicyGrid = ({ view }: { view: string }) => {
  const [breakpoint] = useDeviceWidth();
  const [currentPage, setCurrentPage] = useState(1);
  const [policiesPerPage, setPoliciesPerPage] = useState(4);

  // Set Policies Per Page
  useEffect(() => {
    return breakpoint === "MOBILE"
      ? setPoliciesPerPage(4)
      : setPoliciesPerPage(6);
  }, [breakpoint]);

  // Get current policies
  const lastIndex = currentPage * policiesPerPage;
  const firstIndex = lastIndex - policiesPerPage;
  const currentPolicies = POLICIES.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(POLICIES.length / policiesPerPage);

  //Change Page
  const increment = (direction: string) => {
    if (direction === "DOWN" && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "UP" && currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="section-grid">
        {currentPolicies.map((policy: PolicyRecord) => (
          <PolicyCard policy={policy} key={policy.policyNumber} view={view} />
        ))}
      </div>
      <Pagination
        range={[
          firstIndex + 1,
          lastIndex > POLICIES.length ? POLICIES.length : lastIndex
        ]}
        totalPolicies={POLICIES.length}
        increment={increment}
      />
    </>
  );
};
export default PolicyGrid;
