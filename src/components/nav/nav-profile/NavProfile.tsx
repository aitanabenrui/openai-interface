import './NavProfile.css'

interface NavProfileProps{
    text: string;
    icon?: boolean;
}
export const NavProfile = ({text, icon}:NavProfileProps) => {
    const initial = text.charAt(0).toUpperCase();

    return (
        <button className='nav-profile-button'>
            <div className="nav-profile">
                {icon && ( //si el primer valor es true (icon) se renderiza el icono con la inicial
                    <div className="nav-profile-icon">
                        {initial}
                    </div>
                )}
                <span className="nav-profile-text">{text}</span>
            </div>
        </button>
    )
}