import Link from 'next/link';

export default function HomeLogoLink() {
  return (
    <Link href="/" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400">
      <span aria-hidden="true" className="text-white text-2xl">
        #
      </span>
      <span className="sr-only">Home</span>
    </Link>
  );
}
