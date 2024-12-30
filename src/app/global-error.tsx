'use client';

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  // Log error to console
  console.error('Global error:', error);

  return (
    <html>
      <body>
        <div className="flex min-h-screen items-center justify-center bg-red-50 p-4">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-red-600">Something went wrong!</h2>
            <p className="text-gray-600">We apologize for the inconvenience. Please try again later.</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}