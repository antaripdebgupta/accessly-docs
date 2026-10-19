import Image from "next/image";
import Link from "next/link";
import { cacheLife } from "next/cache";
import { Container } from "@/components/site/Container";
import { GITHUB_URL, NPM_URL } from "@/data/site";
import { footerNavLinks } from "@/data/navigation";

export async function Footer() {
  "use cache";
  cacheLife("days");

  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[var(--border)] py-8">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <Image
              src="/logo.png"
              alt="Accessly UI logo"
              width={24}
              height={24}
              className="h-8 w-8 rounded-md object-cover"
              priority
            />
            <span className="font-semibold text-nowrap text-[var(--text)]">
              Accessly UI
            </span>
            <span aria-hidden="true">·</span>
            <span className="text-nowrap">&copy; {year} · MIT</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {footerNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
              >
                {link.title}
              </Link>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
            >
              GitHub
            </a>
            <a
              href={NPM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
            >
              npm
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
