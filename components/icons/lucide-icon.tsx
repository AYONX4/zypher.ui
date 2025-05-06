"use client";

import { LucideIcon } from "lucide-react";
import { forwardRef } from "react";

interface LucideIconProps extends React.ComponentProps<LucideIcon> {
  icon: LucideIcon;
}

export const LucideIconWrapper = forwardRef<SVGSVGElement, LucideIconProps>(
  ({ icon: Icon, ...props }, ref) => {
    return (
      <Icon
        ref={ref}
        {...props}
        aria-hidden="true"
        suppressHydrationWarning
      />
    );
  }
);

LucideIconWrapper.displayName = "LucideIconWrapper"; 