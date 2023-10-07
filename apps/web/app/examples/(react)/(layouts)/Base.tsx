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
        <header className="flex flex-col gap-2 border-b-2 border-black p-4 pb-4 dark:border-white">
          <h1 className="font-serif text-4xl tracking-tight dark:text-white">{`file: ${pathname}`}</h1>
        </header>

        {props.children}
      </div>
    </>
  );
}

export { Layout };
