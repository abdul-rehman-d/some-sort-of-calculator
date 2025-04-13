import { SignedInNavbar } from '@/components/common/navbar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SignedInNavbar />
      <main className="flex-grow">{children}</main>
    </>
  );
}
