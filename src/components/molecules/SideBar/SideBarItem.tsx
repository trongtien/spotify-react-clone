import { LucideIcon } from "lucide-react";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface SideBarItemProps {
  className?: string;
  icon: LucideIcon;
  label: string;
  href: string;
  active?: boolean;
}

const SideBarItem: React.FC<SideBarItemProps> = ({
  className,
  icon: Icon,
  label,
  href,
  active,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1`,
        active && "text-white",
        className
      )}
    >
      <Icon size="26" />
      <p className="truncate w-full">{label}</p>
    </Link>
  );
};

export default SideBarItem;
