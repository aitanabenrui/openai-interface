type ButtonProps = {
  label: string;
  variant?: 'green' | 'white';
};

export const Button = ({ label, variant = 'green' }: ButtonProps) => {
  const base = `px-4 py-2 rounded-md text-sm font-semibold transition`;

  const variants = {
    green: `bg-[var(--color-green)] text-white hover:brightness-95`,
    white: `bg-[var(--color-white-bg)] text-[var(--color-text-dark)] hover:bg-[var(--color-white-hover)]`,
  };

  return (
    <button className={`${base} ${variants[variant]}`}>
      {label}
    </button>
  );
};