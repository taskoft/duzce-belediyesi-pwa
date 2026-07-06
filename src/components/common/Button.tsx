import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "icon";
type ButtonSize = "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: ReactNode;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "rounded-xl bg-primary text-on-primary font-label-lg text-label-lg shadow-sm hover:-translate-y-0.5 hover:shadow-md",
  icon: "p-2 rounded-full text-on-surface-variant hover:bg-surface-container-low",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  md: "h-component-height-md",
  lg: "h-component-height-lg",
};

export function Button({
  variant = "primary",
  size = "lg",
  fullWidth = false,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = [
    VARIANT_CLASSES[variant],
    variant === "primary" ? SIZE_CLASSES[size] : "",
    "flex items-center justify-center gap-1 scale-98 transition-all duration-200 active:opacity-80",
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
