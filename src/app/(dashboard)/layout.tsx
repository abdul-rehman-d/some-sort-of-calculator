import { NavSidebar } from '@/components/common/nav-sidebar';
import { SignedInNavbar } from '@/components/common/navbar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { cookies } from 'next/headers';

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <aside>
        <NavSidebar />
      </aside>

      <div className="flex-grow flex flex-col">
        <SignedInNavbar />
        <main className="flex-grow">{children}</main>
      </div>
    </SidebarProvider>
  );
}
