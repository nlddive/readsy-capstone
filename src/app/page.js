import Link from "next/link";
import { Search, ArrowRight, Bookmark, Heart, MessageCircle } from "lucide-react";

const featuredBooks = [
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    color: "bg-stone-300",
  },
  {
    title: "Tomorrow, and Tomorrow, and Tomorrow",
    author: "Gabrielle Zevin",
    color: "bg-rose-200",
  },
  {
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    color: "bg-emerald-200",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-8 md:px-10 md:py-12">
      {/* Header */}
      <header className="mb-10">
        <p className="mb-2 text-sm font-medium text-neutral-500">
          Welcome back
        </p>

        <h1 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
          Discover your next favorite story.
        </h1>

        <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600">
          Find books, share what you&apos;re reading, and connect with people
          who love the same stories.
        </p>
      </header>

      {/* Search */}
      <section className="mb-12">
        <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-4 shadow-sm">
          <Search size={20} className="shrink-0 text-neutral-400" />

          <input
            type="text"
            placeholder="Search books, authors, or moods..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400"
          />
        </div>
      </section>

      {/* Featured */}
      <section className="mb-14">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
              Explore
            </p>

            <h2 className="mt-1 text-xl font-semibold">For you</h2>
          </div>

          <Link
            href="/discover"
            className="flex items-center gap-1 text-sm font-medium text-neutral-600 hover:text-neutral-950"
          >
            See all
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {featuredBooks.map((book) => (
            <article key={book.title} className="group">
              <div
                className={`aspect-[3/4] ${book.color} flex items-end rounded-2xl p-4 transition-transform duration-200 group-hover:-translate-y-1`}
              >
                <div>
                  <p className="text-lg font-semibold leading-tight text-neutral-900">
                    {book.title}
                  </p>

                  <p className="mt-1 text-sm text-neutral-700">
                    {book.author}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Feed */}
      <section>
        <div className="mb-5">
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
            Community
          </p>

          <h2 className="mt-1 text-xl font-semibold">Your feed</h2>
        </div>

        <article className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm md:p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-neutral-200" />

            <div>
              <p className="text-sm font-semibold">Alex Morgan</p>
              <p className="text-xs text-neutral-500">
                Currently reading
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-neutral-100 p-6">
            <p className="text-sm font-medium uppercase tracking-wider text-neutral-500">
              Reading now
            </p>

            <h3 className="mt-2 text-2xl font-semibold">
              The Secret History
            </h3>

            <p className="mt-1 text-sm text-neutral-600">
              Donna Tartt
            </p>

            <p className="mt-5 max-w-xl text-sm leading-6 text-neutral-700">
              &quot;Some books stay with you long after you finish the last
              page. This one is definitely becoming one of them.&quot;
            </p>
          </div>

          <div className="mt-5 flex items-center gap-5 text-neutral-500">
            <button className="flex items-center gap-2 text-sm hover:text-neutral-950">
              <Heart size={18} />
              124
            </button>

            <button className="flex items-center gap-2 text-sm hover:text-neutral-950">
              <MessageCircle size={18} />
              18
            </button>

            <button className="ml-auto hover:text-neutral-950">
              <Bookmark size={18} />
            </button>
          </div>
        </article>
      </section>
    </div>
  );
}