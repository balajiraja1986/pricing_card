import React from "react";

function PricingCard(props) {
  return (
    <>
      {props.data.plan === "Free" && (
        <div className="card mb-5 mb-lg-0">
          {<div className="card-body">
              <h5 className="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
              <h6 className="card-price text-center">${props.data.price}<span className="period">/month</span></h6>
              <hr/>
              <ul className="fa-ul">
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.data.users}</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.data.storage}</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.data.publicprojects}</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.data.access}</li>
                <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.data.privateprojects}</li>
                <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.data.support}</li>
                <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.data.subdomain}
                </li>
                <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.data.reports}</li>
              </ul>
              <div className="d-grid">
              <button type="button" className="btn btn-primary text-uppercase">Button</button>
       
              </div>
            </div>}
        </div>
      )}

      {props.data.plan === "Plus" && (
        <div className="card mb-5 mb-lg-0">
          {<div className="card-body">
              <h5 className="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
              <h6 className="card-price text-center">${props.data.price}<span className="period">/month</span></h6>
              <hr/>
              <ul className="fa-ul">
                <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>{props.data.users}</strong></li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.data.storage}</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.data.publicprojects}</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.data.access}</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.data.privateprojects}</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.data.support}</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.data.subdomain}
                </li>
                <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{props.data.reports}</li>
              </ul>
              <div className="d-grid">
              <button type="button" className="btn btn-primary text-uppercase">Button</button>                
              </div>
            </div>}
        </div>
      )}

      {props.data.plan === "Pro" && (
        <div className="card mb-5 mb-lg-0">
          {<div className="card-body">
              <h5 className="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
              <h6 className="card-price text-center">${props.data.price}<span className="period">/month</span></h6>
              <hr/>
              <ul className="fa-ul">
                <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>{props.data.users}</strong></li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.data.storage}</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.data.publicprojects}</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.data.access}</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.data.privateprojects}</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.data.support}</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>{props.data.subdomain}
                </strong></li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.data.reports}</li>
              </ul>
              <div className="d-grid">
              <button type="button" className="btn btn-primary text-uppercase">Button</button>                
              </div>
            </div>}
        </div>
      )}
    </>
  );
}

export default PricingCard;
