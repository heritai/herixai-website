import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-electric mb-4">404</h1>
        <p className="text-xl text-foreground mb-8">Page non trouvée / Page not found</p>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-electric text-white font-medium glow-electric hover:scale-[1.02] transition"
        >
          Retour à l&apos;accueil / Back to Home
        </Link>
      </div>
    </div>
  );
}

