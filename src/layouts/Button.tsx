

type ButtonSize = "sm" | "default" | "lg";
type ButtonVariant = "solid" | "outline";

interface ButtonProps {
    className?: string;
    size?: ButtonSize;
    variant?: ButtonVariant;
    children?: React.ReactNode;
    onClick?: () => void;
    href?: string;
    download?: string | boolean;
}

const Button = ({ className = "", size = "default", variant = "solid", children, onClick, href, download }: ButtonProps) => {
    const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all duration-200 inline-flex items-center justify-center ";
    const variantClasses: Record<ButtonVariant, string> = {
        solid: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25",
        outline: "bg-transparent border border-primary text-primary hover:bg-primary/10",
    };
    const sizeClasses: Record<ButtonSize, string> = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    
    if (href) {
        return (
            <a href={href} className={classes} download={download} onClick={onClick}>
                <span className="relative flex items-center justify-center gap-2">
                    {children}
                </span>
            </a>
        )
    }

    return (
        <button className={classes} onClick={onClick}>
            <span className="relative flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    )
}

export default Button