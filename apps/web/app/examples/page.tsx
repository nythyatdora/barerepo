import fs from "node:fs";
import path from "node:path";
import NextLink from "next/link";
import type { Url } from "next/dist/shared/lib/router/router";
import { Header } from "@/components/Header";

const reactDir = path.resolve("./app/examples/(react)");
const reactExamples = fs
  .readdirSync(reactDir)
  .filter((name) => !["(base)"].includes(name))
  .map((name) => {
    const stat = fs.statSync(path.join(reactDir, name));
    return {
      name,
      size: stat.size,
      ctime: stat.ctime,
      mtime: stat.mtime,
    };
  });

const getExamplePath = (file: {
  name: string;
  size: number;
  ctime: Date;
  mtime: Date;
}): Url => ({
  pathname: `/examples/${file.name}`,
  query: {
    size: file.size,
    ctime: file.ctime.getTime(),
    mtime: file.mtime.getTime(),
  },
});

function Examples(): JSX.Element {
  return (
    <>
      <Header />

      <section className="relative h-[100vh] min-h-[100vh] w-full dark:bg-black">
        <div className="p-4">
          <ul className="flex flex-col gap-4">
            {reactExamples.map((file) => (
              <li
                className="font-serif text-4xl tracking-tight hover:underline dark:text-white"
                key={file.name}
              >
                <NextLink href={getExamplePath(file)}>{file.name}</NextLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Examples;
