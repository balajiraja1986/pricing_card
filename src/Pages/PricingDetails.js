import React from "react";
import '../styles/pricingdetails.css'
import PricingCard from "../Components/PricingCard.js";

function PricingDetails() {
const data = [{
    plan :"Free",
    price:"0",
    users:"Single User",
    storage:"5GB Storage",
    publicprojects:"Unlimited Public Projects",
    access:"Community Access",
    privateprojects:"Unlimited Private Projects",
    support:"Dedicated Phone Support",
    subdomain:"Free subdomain",
    reports:"Monthly Status Reports",
},
{
    plan :"Plus",
    price:"9",
    users:"5 Users",
    storage:"50GB Storage",
    publicprojects:"Unlimited Public Projects",
    access:"Community Access",
    privateprojects:"Unlimited Private Projects",
    support:"Dedicated Phone Support",
    subdomain:"Free subdomain",
    reports:"Monthly Status Reports",
}, 
{
    plan :"Pro",
    price:"49",
    users:"Unlimited Users",
    storage:"150GB Storage",
    publicprojects:"Unlimited Public Projects",
    access:"Community Access",
    privateprojects:"Unlimited Private Projects",
    support:"Dedicated Phone Support",
    subdomain:"Unlimited subdomain",
    reports:"Monthly Status Reports",
}];
    return <section className="pricing py-5">
    <div className="container">
      <div className="row">
        {data && data.map((details,index) => (
            <div key = {`pricing-details-${index}`} className="col-lg-4">
                <PricingCard data={details}/> </div>
        ))
      }       
      
      </div>
    </div>
  </section>;
}

export default PricingDetails;