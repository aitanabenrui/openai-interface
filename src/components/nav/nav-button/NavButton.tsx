type NavButtonProps = {
  label: string;
};

export const NavButton = ({label}: NavButtonProps) => {

  return (
    <button>
      {label}
    </button>
  );
};