export default async function BookPage({ params }) {
  const { id } = await params;

  return (
    <main>
      <h1>Book Details</h1>
      <p>Book ID: {id}</p>
    </main>
  );
}