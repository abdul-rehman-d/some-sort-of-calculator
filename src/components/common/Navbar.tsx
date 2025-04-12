import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="w-10 h-10 rounded-full bg-black" />
      <div className="flex gap-4">
        <Link href="/" className="text-blue-500 hover:underline">
          Home
        </Link>
        <Link href="/app" className="text-blue-500 hover:underline">
          App
        </Link>
      </div>
    </nav>
  );
}
