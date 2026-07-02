import Link from 'next/link';

export default function RootPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <div className="max-w-xl rounded-3xl bg-white p-8 text-center shadow-soft">
        <h1 className="text-3xl font-black text-slate-950">GlobalTrade Pro</h1>
        <p className="mt-3 text-slate-600">Choose a language to view the foreign trade website.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link className="rounded-full bg-brand-600 px-5 py-3 font-semibold text-white" href="/en/">English</Link>
          <Link className="rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-800" href="/zh/">中文</Link>
        </div>
      </div>
    </main>
  );
}
