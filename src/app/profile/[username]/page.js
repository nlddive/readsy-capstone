export default async function ProfilePage({ params }) {
  const { username } = await params;

  return (
    <main>
      <h1>Profile</h1>
      <p>Username: {username}</p>
    </main>
  );
}