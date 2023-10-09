"use client";
import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";

interface BaseProps {
  children?: React.ReactNode;
}

function Layout(props: BaseProps): JSX.Element {
  const pathname = usePathname();

  return (
    <>
      <Header />

      <div className="flex min-h-[100vh] flex-col">
        <header className="fixed left-4 top-4 z-10 flex w-fit flex-col gap-2 border-2 border-black bg-white p-4 pb-4 dark:border-white dark:bg-black">
          <h1 className="font-serif text-4xl tracking-tight dark:text-white">{`file: ${pathname}`}</h1>
        </header>

        {props.children}
      </div>
    </>
  );
}

export { Layout };
