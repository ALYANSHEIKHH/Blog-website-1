import React, { forwardRef } from "react";
import { DropdownMenuItem as RadixDropdownMenuItem } from "@radix-ui/react-dropdown-menu";

type DropdownMenuItemProps = {
  onClick?: () => void; // Add other props as necessary
  children: React.ReactNode;
};

// Use HTMLDivElement for the forwarded ref type
const DropdownMenuItem = forwardRef<HTMLDivElement, DropdownMenuItemProps>(
  ({ children, onClick, ...props }, ref) => (
    <RadixDropdownMenuItem ref={ref} onClick={onClick} {...props}>
      {children}
    </RadixDropdownMenuItem>
  )
);

DropdownMenuItem.displayName = "DropdownMenuItem"; // Set display name for better debugging

export default DropdownMenuItem;
