"use client";

import NextImage from "next/image";
import useResizeObserver from "use-resize-observer";
import { PreventPullToRefresh } from "@/components/PreventPullToRefresh";
import { Header } from "@/components/Header";
import { Pill } from "@/components/Pill";
import { Construction } from "@/components/Construction";
import image1 from "@/assets/sebastian-svenson-unsplash.jpeg";

function Home(): JSX.Element {
  const { ref, height } = useResizeObserver({ box: "content-box" });

  return (
    <>
      <PreventPullToRefresh />

      <Header />

      <section className="relative h-[100vh] min-h-[100vh] w-full dark:bg-black">
        <main className="p-4 dark:bg-black dark:text-white">
          <section className="font-serif text-[124px] font-light italic leading-[1.2em] text-black dark:text-white">
            Thyatdora Ny
          </section>

          <section className="h-[100vh] font-serif text-4xl font-light text-black dark:text-white">
            <p>
              A creative fullstack developer who designs, code, and research.
            </p>
            <p>Borned and raised in Phnom Penh Cambodia.</p>

            <figure className="w-ful relative -mx-4 mt-4 h-[500px]">
              <NextImage
                alt="Image 1"
                className="object-cover"
                fill
                src={image1}
              />

              <figcaption className="absolute bottom-0 left-4 translate-y-[100%] py-2 text-sm italic leading-tight">
                (source: unsplash)
              </figcaption>
            </figure>
          </section>

          <section className="flex flex-col gap-4 font-serif text-4xl tracking-tight text-black dark:text-white">
            <p>
              Everyone called me Dora. I am passionate in creating a great
              product, website, greate user experience.
            </p>

            <p>
              I loves using the lastest technologies to make sure your product
              keeps up to date.
            </p>

            <ul className="flex flex-row gap-2">
              <Pill color="blue" component="li" text="React" />
              <Pill color="yellow" component="li" text="Typescript" />
              <Pill color="black" component="li" text="Next.js" />
              <Pill color="green" component="li" text="MDX" />
            </ul>
          </section>
        </main>

        <footer
          className="sticky border-t-[1.5px] border-black bg-white p-4  text-black dark:border-white dark:bg-black dark:text-white"
          ref={ref}
          style={{
            bottom: `calc(-${height}px + 15px)`,
          }}
        >
          <p className="flex-1 font-serif text-xs uppercase">
            All Right Reversed 2023 ・ Thyatdora Ny
          </p>

          <p className="pt-[156px] font-serif text-4xl">
            (There is time where we need to wait 🚜)
          </p>
        </footer>

        <Construction />
      </section>
    </>
  );
}

export default Home;
