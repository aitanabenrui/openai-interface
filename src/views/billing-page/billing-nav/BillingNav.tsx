import { NavButton } from '../../../components/nav/nav-button/NavButton';
import './BillingNav.css'

export const BillingNav = () => {

    return (
        <>
        <div className='billing--nav--content'>
            <h1 className='billing--nav__title'>Billing</h1>
            <div className='billing--nav__buttons'>
                <NavButton label='Overview' ></NavButton>
                <NavButton label='Payment methods' ></NavButton>
                <NavButton label='Billing history' ></NavButton>
                <NavButton label='Credit grants' ></NavButton>
                <NavButton label='Preferences' ></NavButton>
            </div>
        </div>
        </>
    );
};