import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "lg";
}

export function Button({ className, variant = "default", size = "default", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060914]",
        variant === "default" && "bg-white text-black hover:bg-cyan-100",
        variant === "outline" && "border border-white/15 bg-white/5 text-white hover:bg-white/10",
        size === "default" && "h-10 rounded-full px-4 py-2 text-sm",
        size === "lg" && "h-11 rounded-full px-8 text-base",
        className
      )}
      {...props}
    />
  );
}
