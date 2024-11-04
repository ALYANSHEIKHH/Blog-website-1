import React from "react";
import { DropdownMenuContent as RadixDropdownMenuContent } from "@radix-ui/react-dropdown-menu";

type DropdownMenuContentProps = {
  align?: "start" | "center" | "end"; // Add other align options as needed
  children: React.ReactNode; // Ensure that children prop is recognized
};

const DropdownMenuContent = React.forwardRef<HTMLDivElement, DropdownMenuContentProps>(
  ({ align, children, ...props }, ref) => (
    <RadixDropdownMenuContent ref={ref} align={align} {...props}>
      {children}
    </RadixDropdownMenuContent>
  )
);

DropdownMenuContent.displayName = "DropdownMenuContent"; // Set display name for better debugging

export default DropdownMenuContent;
