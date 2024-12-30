import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface IconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
  color?: "primary" | "secondary" | "accent" | "disabled";
}

/**
 * @component Icon
 * @description A themed wrapper for Lucide icons that maintains consistency with the design system
 * @example
 * import { Heart } from 'lucide-react'
 * <Icon icon={Heart} color="primary" size={24} />
 */
export function Icon({
  icon: LucideIcon,
  size = 24,
  className,
  color = "primary",
}: IconProps) {
  const colorClasses = {
    primary: "text-primary-main",
    secondary: "text-text-secondary",
    accent: "text-text-accent",
    disabled: "text-text-disabled",
  };

  return (
    <LucideIcon
      size={size}
      className={cn(
        "transition-colors duration-200",
        colorClasses[color],
        className
      )}
    />
  );
}
