import './NavButton.css'

type NavButtonProps = {
  label: string;
};

export const NavButton = ({label}: NavButtonProps) => {

  return (
    <button className='nav-button'>
      {label}
    </button>
  );
};