type CardProps = {
    title: string;
    description: string;
}

export const Card = ({title, description}: CardProps) => {
    return (
        <div className="bg-white p-4 border border-[var(--color-border)] rounded-md shadow-sm hover:shadow-md transition">
            <h3 className="font-medium text-[var(--color-text)]">{title}</h3>
            <p className="text-sm text-[var(--color-muted)]">{description}</p>
        </div>
    )
}