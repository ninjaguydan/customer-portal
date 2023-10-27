import { useState } from "react";

import Toggle from "../../Toggle/Toggle";

const Settings = () => {
  const [canEditLogin, setCanEditLogin] = useState(false);
  const [canEditBilling, setCanEditBilling] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "Customer@pekininsurance.com",
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [hasPaperless, setHasPaperless] = useState(false);

  const editLogin = () => {
    setCanEditLogin(!canEditLogin);
  };
  const editBilling = () => {
    setCanEditBilling(!canEditBilling);
  };
  const handleLoginData = (event: any) => {
    setLoginData({ ...loginData, [event.target.id]: [event.target.value] });
  };

  return (
    <>
      <h1 className="page-header">
        <span className="material-symbols-outlined" aria-hidden="true">
          settings
        </span>{" "}
        Account Settings
      </h1>
      <section className="section-grid settings">
        <article>
          <div className="card policy-card">
            <h2 className="card-header">
              {" "}
              <span className="material-symbols-outlined" aria-hidden="true">
                logout
              </span>
              Login Information
            </h2>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              {canEditLogin ? (
                <input
                  id="email"
                  type="text"
                  value={loginData.email}
                  onChange={(e) => handleLoginData(e)}
                />
              ) : (
                <div className="read-only-input">{loginData.email}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="oldPassword">
                {canEditLogin && "Old"} Password
              </label>
              {canEditLogin ? (
                <>
                  <input
                    id="oldPassword"
                    type="password"
                    value={loginData.oldPassword}
                    onChange={(e) => handleLoginData(e)}
                  />
                </>
              ) : (
                <div className="edit-btn-group">
                  <div
                    className="read-only-input"
                    style={{ fontSize: ".75rem" }}
                  >
                    &#10033;&#10033;&#10033;&#10033;&#10033;&#10033;&#10033;&#10033;
                  </div>
                  <button className="btn icon primary" onClick={editLogin}>
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      edit
                    </span>
                  </button>
                </div>
              )}
            </div>
            {canEditLogin && (
              <>
                <div className="form-group">
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    id="newPassword"
                    type="password"
                    value={loginData.newPassword}
                    onChange={(e) => handleLoginData(e)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm New Password</label>
                  <input
                    id="confirmPassword"
                    type="password"
                    value={loginData.confirmPassword}
                    onChange={(e) => handleLoginData(e)}
                  />
                </div>
              </>
            )}
            {canEditLogin && (
              <div className="btn-group">
                <button className="btn secondary" onClick={editLogin}>
                  Cancel
                </button>
                <button className="btn primary" onClick={editLogin}>
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </article>
        <article>
          <div className="card policy-card">
            <h2 className="card-header">
              {" "}
              <span className="material-symbols-outlined" aria-hidden="true">
                request_quote
              </span>
              Billing
            </h2>
            <p className="card-subheader">Paperless billing</p>
            <p>Recieve bill due notifications and statements via email.</p>
            <div className="edit-btn-group">
              <div className="toggle-group">
                <Toggle
                  isActive={hasPaperless}
                  onClick={() => {
                    setHasPaperless(!hasPaperless);
                  }}
                />
                <p className={`${hasPaperless ? "success" : "disabled"}`}>
                  <strong>{hasPaperless ? "ON" : "OFF"}</strong>
                </p>
              </div>
              {!canEditBilling && (
                <button className="btn icon primary" onClick={editBilling}>
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    edit
                  </span>
                </button>
              )}
            </div>
            {canEditBilling && (
              <>
                <p>
                  Paperless billingreduces cluter, saves time, and helps out the
                  environment.
                </p>
                <p className="card-subheader">Billing email address</p>
                <p className="flex-center between">
                  {loginData.email}{" "}
                  <span
                    style={{ fontSize: "1rem" }}
                    className="material-symbols-outlined"
                    aria-hidden="true"
                  >
                    edit
                  </span>
                </p>
                <div className="btn-group">
                  <button className="btn secondary" onClick={editBilling}>
                    Cancel
                  </button>
                  <button className="btn primary" onClick={editBilling}>
                    Save Changes
                  </button>
                </div>
              </>
            )}
          </div>
        </article>
        <article>
          <div className="card policy-card">
            <h2 className="card-header">
              {" "}
              <span className="material-symbols-outlined" aria-hidden="true">
                sms
              </span>
              Communications
            </h2>
          </div>
        </article>
        <article>
          <div className="card policy-card">
            <h2 className="card-header">
              {" "}
              <span className="material-symbols-outlined" aria-hidden="true">
                person
              </span>
              Personal Information
            </h2>
          </div>
        </article>
      </section>
    </>
  );
};
export default Settings;
