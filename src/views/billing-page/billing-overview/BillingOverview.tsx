import './BillingOverview.css'
import info from '../../../assets/icons/info.svg'
import { Button } from '../../../components/button/Button';
import { BillingFooterButton } from '../billing-footer-button/BillingFooterButton';

export const BillingOverview = () => {
    return (
        <>
            <div className="billing--overview">
                <h3>Pay as you go</h3>
                <div className="billing--overview__credit">
                    <h5>Credit balance</h5>
                    <img className='info-icon' src={info} alt='info icon' />
                </div>
                <p className='billing--overview__number'>$3.35</p>
                <div className='billing--overview__buttons'>
                    <Button label='Add to credit balance' variant='gray' ></Button>
                    <Button label='Cancel plan' variant='gray' ></Button>
                </div>
                <div className='billing--overview__warning'>
                    <div className='billing--overview__warning__title'>
                        <img className='info-icon' src={info} alt='info icon' />
                        <h3>Auto recharge is off</h3>
                    </div>
                    <p>When your credit balance reaches $0, your API requests will stop working. Enable automatic recharge to automatically keep your credit balance topped up.</p>
                    <Button label='Enable auto recharge'></Button>
                </div>
                <div className='billing--overview__footer'>
                    <div className='billing--overview__footer-left'>
                        <BillingFooterButton issue='payment'></BillingFooterButton>
                        <BillingFooterButton issue='preferences'></BillingFooterButton>
                        <BillingFooterButton issue='pricing'></BillingFooterButton>
                    </div>
                    <div  className='billing--overview__footer-right'>
                        <BillingFooterButton issue='billing'></BillingFooterButton>
                        <BillingFooterButton issue='usage'></BillingFooterButton>
                    </div>
                </div>
            </div>
        </>
    );
};