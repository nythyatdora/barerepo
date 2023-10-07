import fs from "node:fs";
import path from "node:path";
import NextLink from "next/link";
import { cache } from "react";
import { Header } from "@/components/Header";
import { getExamplePath } from "@/utilities/routings/getExamplePath";

interface Example {
  name: string;
}

interface ExamplesPayload {
  items: Example[];
  total: number;
}

const getExamples = cache(async (): Promise<ExamplesPayload> => {
  const examplesPath = path.join(process.cwd(), "app/examples/(react)");
  const examples = (await fs.promises.readdir(examplesPath))
    .filter((foldername) => foldername.endsWith(".js"))
    .map((foldername) => {
      return {
        name: foldername,
      };
    });

  return {
    items: examples,
    total: examples.length,
  };
});

async function ExamplesList(): Promise<JSX.Element> {
  const examples = await getExamples();

  return (
    <ul className="flex flex-col gap-4">
      {examples.items.map((file) => (
        <li
          className="font-serif text-4xl tracking-tight hover:underline dark:text-white"
          key={file.name}
        >
          <NextLink href={getExamplePath(file.name)}>{file.name}</NextLink>
        </li>
      ))}
    </ul>
  );
}

function Examples(): JSX.Element {
  return (
    <>
      <Header />

      <section className="relative h-[100vh] min-h-[100vh] w-full p-4">
        <ExamplesList />
      </section>
    </>
  );
}

export default Examples;
