import { UserRoutes } from '@/lib/constants/routes';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import HomeLogoLink from './home-logo-link';

export default async function PublicNavbar() {
  const { userId } = await auth();

  return (
    <nav className="flex justify-between items-center p-4 bg-black">
      <HomeLogoLink />
      <div className="flex gap-4">
        <SignedOut>
          <SignInButton mode="modal">
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button className="text-blue-500 hover:underline">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <Link
            href={UserRoutes.DASHBOARD.replace(':userId', userId ?? '')}
            className="text-blue-500 hover:underline"
          >
            Dashboard
          </Link>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
