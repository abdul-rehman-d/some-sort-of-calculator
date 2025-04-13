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
      <NavSidebar />

      <div className="flex-grow bg-background flex flex-col transition-[margin] ease-linear duration-200 peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm">
        <SignedInNavbar />
        <main className="flex-grow">{children}</main>
      </div>
    </SidebarProvider>
  );
}
