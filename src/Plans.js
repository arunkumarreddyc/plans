import React from "react";

function Plans(props) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {props.plan}
          </h5>
          <h6 className="card-price text-center">
            ${props.amount}
            <span className="period">/month</span>
          </h6>
          <hr />

          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>

              <strong>{props.noofusers}</strong>
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              {props.storage} Storage
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              Unlimited Public Projects
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check" />
              </span>
              Community Access
            </li>
            <li className="text-muted">
              <span className="fa-li">
                <i className="fas fa-times" />
              </span>
              Unlimited Private Projects
            </li>
            <li className="text-muted">
              <span className="fa-li">
                <i className="fas fa-times" />
              </span>
              Dedicated Phone Support
            </li>
            <li className="text-muted">
              <span className="fa-li">
                <i className="fas fa-times" />
              </span>
              {props.subdomain}
            </li>
            <li className="text-muted">
              <span className="fa-li">
                <i className="fas fa-times" />
              </span>
              Monthly Status Reports
            </li>
          </ul>

          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
