"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  SquareKanban,
  TrendingUp,
  Pencil,
  Clock3,
  Folder,
  ClipboardList,
  GraduationCap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "Products",
    icon: SquareKanban,
    path: "/dashboard/products",
  },
  {
    name: "Progress",
    icon: TrendingUp,
    path: "/dashboard/progress",
  },
  {
    name: "Assignments",
    icon: Pencil,
    path: "/dashboard/assignments",
  },
  {
    name: "Schedule",
    icon: Clock3,
    path: "/dashboard/schedule",
  },
  {
    name: "Resources",
    icon: Folder,
    path: "/dashboard/resources",
  },
  {
    name: "Reports",
    icon: ClipboardList,
    path: "/dashboard/reports",
  },
  {
    name: "Certificates",
    icon: GraduationCap,
    path: "/dashboard/certificates",
  },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="!border-0">
      <SidebarHeader className="h-[62px]">
        <div className="flex h-[52px] items-center rounded-md p-2">
          <h1
            className="
        text-3xl
        font-bold
        leading-10
        tracking-normal
        text-[#0C9733]
      "
            style={{
              fontFamily: "GC Epic Pro, system-ui, sans-serif",
            }}
          >
            SWAPPROo
          </h1>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {menuItems.map((item) => {
                const isActive = pathname === item.path;
                const Icon = item.icon;

                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className="
                        h-9 rounded-md
                        text-[#404040]
                        hover:bg-[#F5F5F5]
                        data-[active=true]:bg-[#EFFFB2]
                        data-[active=true]:text-[#171717]
                        "
                    >
                      <Link
                        href={item.path}
                        className="flex w-full items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4" />

                          <span className="text-sm font-normal">
                            {item.name}
                          </span>
                        </div>

                        {item.name === "Assignments" && (
                          <Badge
                            className="
                                h-5 min-w-5 rounded-full
                                bg-white/90
                                px-1.5 py-0.5
                                text-center align-middle
                                text-xs font-medium leading-4 text-[#171717]
                                shadow-none
                                bg-[#1717171A] 
                            "
                          >
                            3
                          </Badge>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
