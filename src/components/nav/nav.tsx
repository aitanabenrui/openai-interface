import './Nav.css'
import { NavButton } from './nav-button/NavButton'
import { NavProfile } from './nav-profile/NavProfile'

export const Nav = () => {
    return (
        <div className='nav'>
            <div className='nav-left'>
                <NavProfile text='Marcus Zucus' icon={true} />
            </div>
            <div className='nav-right'>
                <NavButton label='Playground'></NavButton>
                <NavButton label='Dashboard'></NavButton>
                <NavButton label='Docs'></NavButton>
                <NavButton label='API reference'></NavButton>
            </div>
        </div>
    )
} 