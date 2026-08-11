async function getHealthStatus() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Health check failed");
  }

  return response.json();
}

export default async function HealthPage() {
  const data = await getHealthStatus();

  return (
    <main className="mx-auto max-w-3xl px-5 py-10 md:px-10 md:py-14">
      <div className="mb-8">
        <p className="text-sm font-medium text-neutral-500">System</p>

        <h1 className="mt-1 text-3xl font-semibold tracking-tight">
          Health Check
        </h1>

        <p className="mt-3 text-neutral-600">
          A simple check that Readsy can fetch and render external data.
        </p>
      </div>

      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-emerald-500" />

          <p className="font-semibold text-emerald-900">
            Fetch successful
          </p>
        </div>

        <div className="mt-6 rounded-xl bg-white p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
            Response data
          </p>

          <pre className="mt-3 overflow-x-auto text-sm text-neutral-700">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      </div>
    </main>
  );
}