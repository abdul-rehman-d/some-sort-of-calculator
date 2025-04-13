import { UserRoutes } from '@/lib/constants/routes';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ThemeToggle } from './theme-toggler';
import { SidebarTrigger } from '../ui/sidebar';

export async function PublicNavbar() {
  const { userId } = await auth();

  return (
    <NavbarWrapper slot={<HomeLogoLink />}>
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <Button asChild>
          <Link href={UserRoutes.DASHBOARD.replace(':userId', userId ?? '')}>Dashboard</Link>
        </Button>
      </SignedIn>
    </NavbarWrapper>
  );
}

export function SignedInNavbar() {
  return <NavbarWrapper slot={<SidebarTrigger />} />;
}

function NavbarWrapper({ children, slot }: { children?: React.ReactNode; slot?: React.ReactNode }) {
  return (
    <nav className="flex justify-between items-center p-4 border-b">
      <div className="flex gap-4 items-center">{slot}</div>
      <div className="flex gap-4 items-center">
        {children}
        <ThemeToggle />
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}

export function HomeLogoLink() {
  return (
    <Link
      href="/"
      className="w-10 max-w-full transition-all aspect-square flex items-center justify-center rounded-full bg-primary"
    >
      <span aria-hidden="true" className="text-primary-foreground text-xl">
        #
      </span>
      <span className="sr-only">Home</span>
    </Link>
  );
}
