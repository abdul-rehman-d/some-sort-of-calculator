import { UserRoutes } from '@/lib/constants/routes';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ThemeToggle } from './theme-toggler';

export async function PublicNavbar() {
  const { userId } = await auth();

  return (
    <NavbarWrapper>
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
  return <NavbarWrapper />;
}

function NavbarWrapper({ children }: { children?: React.ReactNode }) {
  return (
    <nav className="flex justify-between items-center p-4 border-b">
      <HomeLogoLink />
      <div className="flex gap-4">
        {children}
        <ThemeToggle />
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}

function HomeLogoLink() {
  return (
    <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary">
      <span aria-hidden="true" className="text-primary-foreground text-2xl">
        #
      </span>
      <span className="sr-only">Home</span>
    </Link>
  );
}
