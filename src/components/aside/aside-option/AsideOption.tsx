import './AsideOption.css';
import cookbookIcon from '../../../assets/icons/cookbook-icon.png'
import forumIcon from '../../../assets/icons/forum-icon.png'
import helpIcon from '../../../assets/icons/help-icon.png'
import { useLocation } from 'react-router';

interface AsideOptionProps{
    text: string;
    icon?: 'cookbook' | 'forum' | 'help';
}
//La palabra clave key aquí hace referencia a una variable genérica que tomará uno de los valores posibles de la propiedad icon (es decir, 'cookbook', 'forum' o 'help').
const iconMap: { [key in 'cookbook' | 'forum' | 'help']: string } = { //forma de definir un tipo dinámico. AsideOptionProps['icon'] es un tipo literal que puede ser 'cookbook', 'forum' o 'help'.
  cookbook: cookbookIcon,
  forum: forumIcon,
  help: helpIcon,
};

export const AsideOption = ({text, icon}:AsideOptionProps) => {
  const location = useLocation(); // Obtén la ruta actual
  const isActive = location.pathname.includes(text); // Compara la ruta con el texto del botón
  return (
    <div className={`aside_option_container ${isActive ? 'active' : ''}`}>
        <div> 
          {icon && <img src={iconMap[icon]} alt={`${icon} icon`} />}
        </div>
        <h2 className={icon ? 'no-padding' : ''}>{text}</h2>
    </div>
  );
};