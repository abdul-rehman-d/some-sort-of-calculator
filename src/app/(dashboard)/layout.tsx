import { NavSidebar } from '@/components/common/nav-sidebar';
import { SignedInNavbar } from '@/components/common/navbar';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
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
