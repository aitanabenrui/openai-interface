import './BillingFooterButton.css'
import cardIcon from '../../../assets/icons/credit-card.png'
import prefsIcon from '../../../assets/icons/settings-grey.png'
import pricingIcon from '../../../assets/icons/stats.png'
import billingIcon from '../../../assets/icons/doc.png'
import usageIcon from '../../../assets/icons/setting-bar.png'
import arrowIcon from '../../../assets/icons/arrow.png'

interface BillingFooterButtonProps {
    issue: 'payment' | 'preferences' | 'pricing' | 'billing' | 'usage';
}

const issueContent = {
  payment: {
    icon: cardIcon,
    title: 'Payment methods',
    subtitle: 'Add or change payment method',
  },
  preferences: {
    icon: prefsIcon,
    title: 'Preferences',
    subtitle: 'Manage billing information',
  },
  pricing: {
    icon: pricingIcon,
    title: 'Pricing',
    subtitle: 'View pricing and FAQs',
  },
  billing: {
    icon: billingIcon,
    title: 'Billing history',
    subtitle: 'View past and current invoices',
  },
  usage: {
    icon: usageIcon,
    title: 'Usage',
    subtitle: 'Set monthly spend limits',
  },
} as const;

export const BillingFooterButton = ({issue}:BillingFooterButtonProps) => {
    const { icon, title, subtitle } = issueContent[issue];
    return (
        <div className="billing-footer-button">
            <div className="billing-footer-button__icon">
                <img src={icon} alt={`${issue} icon`} />
            </div>
        <div className="billing-footer-button__text">
          <div className='billing-footer-button__text-arrow'>
            <h4>{title}</h4>
            <div className="billing-footer-button__arrow">
              <img className="arrow-icon" src={arrowIcon} alt="arrow" />
            </div>
          </div>
            <p>{subtitle}</p>
        </div>
    </div>
    );
};
