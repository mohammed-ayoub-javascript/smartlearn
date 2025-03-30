import { Bot, Calendar, Home, Inbox, MessageCircle, Search, Settings, User2 } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "الرئيسية",
    url: "/app",
    icon: Home,
  },
  {
    title: "الذكاء الاصطناعي",
    url: "/app/ai",
    icon: Bot,
  },
  {
    title: "المنتدى العام",
    url: "/app/public",
    icon: MessageCircle,
  },
  {
    title: "حسابي",
    url: "/app/account",
    icon: User2,
  },
  {
    title: "الاعدادات",
    url: "/app/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar side="right"  variant="floating" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
