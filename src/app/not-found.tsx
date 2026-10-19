import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { Container } from "@/components/site/Container";
import { LinkButton } from "@/components/site/LinkButton";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        tabIndex={-1}
        className="flex flex-1 items-center justify-center py-24 sm:py-32"
      >
        <Container className="flex flex-col items-center text-center">
          <h1 className="font-display text-7xl font-semibold tracking-tight text-[var(--text)] sm:text-8xl">
            404
          </h1>
          <p className="mt-4 text-base text-[var(--text-muted)] sm:text-lg">
            This page could not be found.
          </p>
          <div className="mt-8">
            <LinkButton href="/" variant="primary">
              Back to home
            </LinkButton>
          </div>
        </Container>
      </main>
    </>
  );
}
