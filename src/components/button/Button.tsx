import '../../App.css'

type ButtonProps = {
    label: string; 
    variant?: 'solid' | 'outline';
}

export const Button = ({label, variant = 'solid'} : ButtonProps) => {
    const base = 'px-4 py-2 rounded-md font-medium text-sm transition'; 
    const solid = 'bg-[var(--color-button)] text-[var(--color-button-text)] hover:brightness-95';
    const outline =  'border border-[var(--color-button)] text-[var(--color-button)] hover:bg-[var(--color-button)] hover:text-white'; 
    
    return (
        <button className={`${base} ${variant === 'solid' ? solid : outline}`}>
            {label}
        </button>
    )
}