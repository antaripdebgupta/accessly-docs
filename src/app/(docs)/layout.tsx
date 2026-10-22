import { Header } from "@/components/site/Header";
import { Container } from "@/components/site/Container";
import { Sidebar } from "@/components/docs/Sidebar";
import { TableOfContents } from "@/components/docs/TableOfContents";
import { DocsJsonLd } from "@/components/docs/DocsJsonLd";

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Container className="flex flex-1">
        <Sidebar />
        <main
          id="main-content"
          tabIndex={-1}
          className="min-w-0 flex-1 py-8 lg:px-10 lg:py-10"
        >
          <DocsJsonLd />
          {children}
        </main>
        <TableOfContents />
      </Container>
    </>
  );
}
