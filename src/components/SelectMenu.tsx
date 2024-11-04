import React from 'react';

// Assuming cn is a utility function that joins class names
import { cn } from '@/utils/cn';

interface DropdownMenuProps {
  className?: string; // Make className optional
  inset?: boolean;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ className, inset, ...props }) => {
  return (
    <div
      className={cn(
        "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        inset ? "pl-8" : '', // Provide default class for inset
        className || '' // Ensure className is a string
      )}
      {...props}
    />
  );
};

export default DropdownMenu;
