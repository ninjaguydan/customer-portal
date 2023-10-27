const DocumentCard = ({ policyNum }: { policyNum: string }) => {
  return (
    <div className="card">
      <div className="tiles">
        <p className="card-subheader">Policy #{policyNum}</p>
        <div className="checkbox-tile">
          <input id="policy-declaration" type="checkbox" />
          <label htmlFor="policy-declaration">Policy Declaration</label>
          <span className="material-symbols-outlined">menu</span>
        </div>
        <div className="checkbox-tile">
          <input id="coi" type="checkbox" />
          <label htmlFor="coi">Certificate of Insurance</label>
          <span className="material-symbols-outlined">menu</span>
        </div>
        <div className="checkbox-tile">
          <input id="renewal" type="checkbox" />
          <label htmlFor="renewal">Renewal</label>
          <span className="material-symbols-outlined">menu</span>
        </div>
        <div className="checkbox-tile">
          <input id="new-business" type="checkbox" />
          <label htmlFor="new-business">New Business</label>
          <span className="material-symbols-outlined">menu</span>
        </div>
        <div className="checkbox-tile">
          <input id="2022" type="checkbox" />
          <label htmlFor="2022">2022</label>
          <span className="material-symbols-outlined">menu</span>
        </div>
        <div className="checkbox-tile">
          <input id="2021" type="checkbox" />
          <label htmlFor="2021">2021</label>
          <span className="material-symbols-outlined">menu</span>
        </div>
      </div>
      <div className="btn-group">
        <button className="btn icon">
          <span className="material-symbols-outlined">print</span>
        </button>
        <button className="btn icon">
          <span className="material-symbols-outlined">download</span>
        </button>
        <button className="btn primary">Open in New Tab</button>
      </div>
    </div>
  );
};
export default DocumentCard;
