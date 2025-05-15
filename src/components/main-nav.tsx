"use client";

import { ExpandableTabs } from "@/ui/expandable-tabs";
import { Album, Bolt, Folder, Home, Mail, User } from "lucide-react";
import { useRouter } from "next/navigation";

const menuItems = [
  { title: "Home", icon: Home, href: "/" },
  { title: "About", icon: User, href: "/about" },
  { title: "Tech", icon: Bolt, href: "/tech" },
  { title: "Certificate", icon: Album, href: "/certificate" },
  { title: "Projects", icon: Folder, href: "/projects" },
  { title: "Contact", icon: Mail, href: "/contact" },
];

export function MainNav() {
  const router = useRouter();

  const handleNavigation = (index: number | null) => {
    if (index !== null) {
      router.push(menuItems[index].href);
    }
  };

  return (
    <ExpandableTabs
      tabs={menuItems}
      activeColor="text-foreground"
      className="border-border/40 shadow-lg text-xxs"
      onChange={handleNavigation}
    />
  );
}
