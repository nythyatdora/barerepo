import fs from "node:fs";
import path from "node:path";
import NextLink from "next/link";
import { cache } from "react";
import { Header } from "@/components/Header";
import { getExamplePath } from "@/utilities/routings/getExamplePath";

interface Example {
  name: string;
}

interface ExamplePayload {
  items: Example[];
  total: number;
}

const getExamples = cache(async (): Promise<ExamplePayload> => {
  const examplePath = path.join(process.cwd(), "app/example/(react)");
  const example = (await fs.promises.readdir(examplePath))
    .filter((foldername) => foldername.endsWith(".js"))
    .map((foldername) => {
      return {
        name: foldername,
      };
    });

  return {
    items: example,
    total: example.length,
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
