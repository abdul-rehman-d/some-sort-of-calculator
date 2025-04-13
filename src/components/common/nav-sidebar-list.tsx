'use client';
import { SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { UserRoutes } from '@/lib/constants/routes';
import { Calendar, FileText, Home, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  {
    title: 'Home',
    url: UserRoutes.DASHBOARD,
    icon: Home,
  },
  {
    title: 'Clients',
    url: UserRoutes.CLIENTS,
    icon: Users,
  },
  {
    title: 'Timesheets',
    url: UserRoutes.TIMESHEETS,
    icon: Calendar,
  },
  {
    title: 'Summary',
    url: UserRoutes.SUMMARY,
    icon: FileText,
  },
];

export function NavSidebarList({ userId }: { userId?: string | null }) {
  const path = usePathname();

  const itemsToRender = items.map((item) => ({
    ...item,
    url: item.url.replace(':userId', userId ?? ''),
  }));

  const activeItem = itemsToRender.find((item) => item.url === path);

  return itemsToRender.map((item) => (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton asChild isActive={activeItem?.title === item.title}>
        <Link href={item.url}>
          <item.icon />
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  ));
}
