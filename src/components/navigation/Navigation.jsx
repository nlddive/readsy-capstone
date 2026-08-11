import Link from "next/link";
import {
  Compass,
  House,
  Library,
  LayoutGrid,
  Plus,
  BookOpen,
  User,
} from "lucide-react";

const navigationItems = [
  {
    label: "Home",
    href: "/",
    icon: House,
  },
  {
    label: "Discover",
    href: "/discover",
    icon: Compass,
  },
  {
    label: "Library",
    href: "/library",
    icon: Library,
  },
  {
    label: "Reading",
    href: "/reading",
    icon: BookOpen,
  },
  {
    label: "Moodboards",
    href: "/moodboards",
    icon: LayoutGrid,
  },
];

export default function Navigation() {
  return (
    <>
      <aside className="hidden md:flex md:w-64 md:flex-col md:border-r md:border-black/10 md:bg-white">
        <div className="flex h-full flex-col px-6 py-8">
          <Link
            href="/"
            className="mb-10 text-2xl font-semibold tracking-tight"
          >
            Readsy
          </Link>

          <nav className="flex flex-1 flex-col gap-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-950"
                >
                  <Icon size={20} strokeWidth={1.8} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-black/10 pt-4">
            <Link
              href="/create"
              className="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-950"
            >
              <Plus size={20} strokeWidth={1.8} />
              <span>Create</span>
            </Link>

            <Link
              href="/profile/you"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-950"
            >
              <User size={20} strokeWidth={1.8} />
              <span>Profile</span>
            </Link>
          </div>
        </div>
      </aside>

      <nav className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-black/10 bg-white md:hidden">
        {navigationItems.slice(0, 4).map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-1 flex-col items-center gap-1 py-3 text-xs font-medium text-neutral-600"
            >
              <Icon size={20} strokeWidth={1.8} />
              <span>{item.label}</span>
            </Link>
          );
        })}

        <Link
          href="/profile/you"
          className="flex flex-1 flex-col items-center gap-1 py-3 text-xs font-medium text-neutral-600"
        >
          <User size={20} strokeWidth={1.8} />
          <span>Profile</span>
        </Link>
      </nav>
    </>
  );
}