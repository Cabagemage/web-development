import './globals.css';

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <p className="text-gradient font-display text-7xl font-bold sm:text-9xl">
            404
          </p>
          <p className="mt-4 max-w-md text-slate-400">Page not found</p>
          <a href="/" className="btn-primary mt-8">
            Go home
          </a>
        </main>
      </body>
    </html>
  );
}
