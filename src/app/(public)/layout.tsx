import Footer from '@/components/common/footer';
import { PublicNavbar } from '@/components/common/navbar';

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PublicNavbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
