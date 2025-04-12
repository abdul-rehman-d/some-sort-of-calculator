import { SignedIn, UserButton } from '@clerk/nextjs';
import HomeLogoLink from './home-logo-link';

export default function SignedInNavbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-black">
      <HomeLogoLink />
      <div className="flex gap-4">
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
