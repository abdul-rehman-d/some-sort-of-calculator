import { UserRoutes } from '@/lib/constants/routes';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';

export default async function DashboardAuthLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ userId: string }>;
}>) {
  const authPromise = auth();
  const [{ userId }, { userId: paramId }] = await Promise.all([authPromise, params]);

  if (userId !== paramId) {
    console.log('Unauthorized access attempt detected', {
      userId,
      paramId: paramId,
    });
    return (
      <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
        <h1 className="text-4xl font-bold">Unauthorized</h1>
        <div className="text-center mt-4">
          <p>
            Sneaky boy, go to your own{' '}
            <Link
              href={UserRoutes.DASHBOARD.replace(':userId', userId ?? '')}
              className="text-blue-500 hover:underline"
            >
              Dashboard
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return children;
}
