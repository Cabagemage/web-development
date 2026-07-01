import './globals.css';

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <p className="text-gradient font-display text-7xl font-bold sm:text-9xl">
            404
          </p>
          <h1 className="mt-4 text-2xl font-semibold text-white">
            Page not found
          </h1>
          <p className="mt-3 max-w-md text-slate-400">
            This page does not exist or has been moved.
          </p>
          <a href="/" className="btn-primary mt-8">
            Go to homepage
          </a>
        </main>
      </body>
    </html>
  );
}
