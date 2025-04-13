import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
} from '@/components/ui/sidebar';
import { auth } from '@clerk/nextjs/server';
import { NavSidebarList } from './nav-sidebar-list';
import { HomeLogoLink } from './navbar';

export async function NavSidebar() {
  const { userId } = await auth();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <HomeLogoLink />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <NavSidebarList userId={userId} />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
