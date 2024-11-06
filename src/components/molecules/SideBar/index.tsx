"use client";

import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { memo, useMemo } from "react";
import { usePathname } from "next/navigation";

import type { LucideIcon } from "lucide-react";

import Box from "@/components/atoms/Box";
import SideBarItem from "./SideBarItem";

interface SideBarProps {
  children?: React.ReactNode;
}

const Sidebar = ({ children }: SideBarProps) => {
  const pathname = usePathname();
  const routes = useMemo(() => {
    return [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        href: "/search",
        active: pathname === "/search",
      },
    ];
  }, [pathname]);

  return (
    <nav className="w-[25%] p-2">
      <Box>
        <div className="flex flex-col gap-y-4 px-5 py-4">
          {routes.map((item) => (
            <SideBarItem
              key={item.label}
              label={item.label}
              icon={item.icon as LucideIcon}
              active={item.active}
              href={item.href}
            />
          ))}
        </div>
      </Box>

      {children}
    </nav>
  );
};

export default memo(Sidebar);
