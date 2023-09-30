"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { Header } from "@/components/Header";
import { bytesToSize } from "@/utilities/helpers/bytesToSize";
import { getISOString } from "@/utilities/helpers/getISOString";

interface BaseProps {
  children?: React.ReactNode;
}

function Badge(props: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="focus:ring-ring inline-flex h-min items-center rounded-full border border-gray-300 px-2.5 py-0.5 font-sans text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:text-white">
      {props.children}
    </div>
  );
}

function Base(props: BaseProps): JSX.Element {
  const pathname = usePathname();
  const params = useSearchParams();
  const size = bytesToSize(Number(params.get("size")));
  const mtime = getISOString(params.get("mtime"));
  const ctime = getISOString(params.get("ctime"));

  return (
    <>
      <Header />

      <div className="min-h-[100vh] p-4 dark:bg-black">
        <div className="-m-4 flex flex-col gap-2 border-b-2 border-black p-4 pb-4 dark:border-white">
          <h1 className="font-serif text-4xl tracking-tight dark:text-white">{`file: ${pathname}`}</h1>
          <div className="flex flex-row gap-2">
            <Badge>Size: {size}</Badge>
            <Badge>Created: {mtime}</Badge>
            <Badge>Modified: {ctime}</Badge>
          </div>
        </div>

        {props.children}
      </div>
    </>
  );
}

export { Base };
