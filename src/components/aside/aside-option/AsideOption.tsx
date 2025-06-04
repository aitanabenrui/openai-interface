import './AsideOption.css';
import { Icons } from '../../icons/Icons';
import type { IconName } from '../../icons/Icons';

interface AsideOptionProps{
    text: string;
    icon?: IconName;
}

export const AsideOption = ({text, icon}:AsideOptionProps) => {
  return (
    <div className='aside_option_container'>
        <div> {icon && <Icons name={icon} size={24} viewBox="0 0 24 24" />}</div>
        <h2 className={icon ? 'no-padding' : ''}>{text}</h2>
    </div>
  );
};