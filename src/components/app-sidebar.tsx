import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  BookMarked,
  Bot,
  CircleDot,
  Computer,
  Gift,
  GitPullRequest,
  Home,
  LucideIcon,
  MessagesSquare,
  PanelsTopLeft,
  Telescope,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { CloseSidebar } from "./custom-sidebar";
import { Separator } from "./ui/separator";
import { IconType } from "react-icons";
import { RiCopilotFill, RiGitRepositoryLine } from "react-icons/ri";
import { VscCopilot } from "react-icons/vsc";

type SidebarItem = {
  icon: IconType | LucideIcon;
  text: string;
  isActive?: boolean;
};

function SideMenuItem({ icon: Icon, text, isActive }: SidebarItem) {
  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild isActive={isActive}>
            <div>
              <Icon />
              <span>{text}</span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  );
}

export function AppSidebar() {
  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader className="p-4">
        <div className="flex items-center justify-between">
          <FaGithub size={32} />
          <CloseSidebar />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SideMenuItem icon={Home} text="Home" isActive={true} />
          <SideMenuItem icon={CircleDot} text="Issues" />
          <SideMenuItem icon={GitPullRequest} text="Pull requests" />
          <SideMenuItem icon={RiGitRepositoryLine} text="Repositories" />
          <SideMenuItem icon={PanelsTopLeft} text="Projects" />
          <SideMenuItem icon={MessagesSquare} text="Discussions" />
          <SideMenuItem icon={Computer} text="Codespaces" />
          <SideMenuItem icon={VscCopilot} text="Copilot" />
          <Separator />
          <SideMenuItem icon={Telescope} text="Explore" />
          <SideMenuItem icon={Gift} text="Marketplace" />
          <Separator />
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
