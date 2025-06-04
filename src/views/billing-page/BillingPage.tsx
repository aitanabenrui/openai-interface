import { BillingNav } from "./billing-nav/BillingNav";
import './BillingPage.css'
import { BillingOverview } from "./billing-overview/BillingOverview";

export const BillingPage = () => {
    return (
        <>
        <div className="billing--nav">
            <BillingNav/>
        </div>
        <div className="billing--overview--page">
            <BillingOverview />
        </div>
        </>
    );
}