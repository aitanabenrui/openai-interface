import './AsideOption.css';
import { Icons } from '../../icons/Icons';

interface AsideOptionProps{
    text: string
    icon?: string
}

export const AsideOption = ({text, icon}:AsideOptionProps) => {
  return (
    <div className='aside_option_container'>
        <div> {icon && <Icons name={icon}/>}</div>
        <h2 className= {icon ? 'no-padding' : ''}>{text}</h2>
    </div>
  );
};