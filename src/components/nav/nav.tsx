import './Nav.css'
import { NavButton } from './nav-button/NavButton'
import { NavProfile } from './nav-profile/NavProfile'
import settings from '../../assets/icons/settings.png'

export const Nav = () => {
    return (
        <div className='nav'>
            <div className='nav-left'>
                <NavProfile text='Marcus Zucus' icon={true} />
                <p>/</p>
                <NavProfile text='Empresaurios' icon={false} />
            </div>
            <div className='nav-right'>
                <NavButton label='Playground'></NavButton>
                <NavButton label='Dashboard'></NavButton>
                <NavButton label='Docs'></NavButton>
                <NavButton label='API reference'></NavButton>
                <div className='nav-right_settings'>
                    <img className='nav-right_settings-icon' src={settings} alt='settings' />
                </div>
                <div className='nav-right_profile'>
                    M
                </div>
            </div>
        </div>
    )
} 