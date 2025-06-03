
import './Aside.css';
import { AsideOption } from './aside-option/AsideOption';

export const Aside = () => {
  return (
    <aside>
        <div className='aside_nav'>
            <p className='aside_titles'>SETTINGS</p>
            <AsideOption text="Your profile"/>
            <div className='aside_separator'></div>
            <p className='aside_titles'>ORGANIZATION</p>
            <AsideOption text="General"/>
            <AsideOption text="API Keys"/>
            <AsideOption text="Admin Keys"/>
            <AsideOption text="Members"/>
            <AsideOption text="Projects"/>
            <AsideOption text="Billing"/>
            <AsideOption text="Limits"/>
            <AsideOption text="Usage"/>
            <AsideOption text="Data Controls"/>
            <div className='aside_separator'></div>
            <p className='aside_titles'>PROJECT</p>
            <AsideOption text="General"/>
            <AsideOption text="API Keys"/>
            <AsideOption text="Members"/>
            <AsideOption text="Limits"/>
        </div>
        <div className='aside_miscellaneous'>
            <AsideOption text="Cookbook" icon="cookbook"/>
            <AsideOption text="Forum" icon='forum'/>
            <AsideOption text="Help" icon='help'/>
        </div>
    </aside>

  );
};