import { Header } from "@/components/site/Header";
import { MobileSidebar } from "@/components/docs/MobileSidebar";
import { Sidebar } from "@/components/docs/Sidebar";
import { TableOfContents } from "@/components/docs/TableOfContents";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <MobileSidebar />
      <div className="mx-auto flex w-full max-w-[1400px] flex-1 px-4 sm:px-6 lg:px-8">
        <Sidebar />
        <main id="main-content" className="min-w-0 flex-1 py-8 lg:px-10">
          {children}
        </main>
        <TableOfContents />
      </div>
    </>
  );
}
