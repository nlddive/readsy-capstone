import "./globals.css";
import Navigation from "@/components/navigation/Navigation";

export const metadata = {
  title: "Readsy",
  description: "Discover, share, and experience books together.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-50 text-neutral-950 antialiased">
        <div className="flex min-h-screen">
          <Navigation />

          <main className="min-w-0 flex-1 pb-20 md:pb-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}