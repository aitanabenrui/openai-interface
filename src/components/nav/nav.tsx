import './Nav.css'
import { NavButton } from './nav-button/NavButton'

export const Nav = () => {
    return (
        <div className='nav'>
            <NavButton label='Playground'></NavButton>
            <NavButton label='Dashboard'></NavButton>
            <NavButton label='Docs'></NavButton>
            <NavButton label='API reference'></NavButton>
        </div>
    )
} 