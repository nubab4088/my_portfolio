import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-6 py-24 text-white flex items-center justify-center">
      <div className="max-w-xl text-center space-y-6">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-teal-300">404</p>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Page not found</h1>
        <p className="text-[#a0a0a0]">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-teal-400 px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition hover:scale-105"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
