import NextLink from "next/link";
import { getRootPath } from "@/utilities/routings/getRootPath";

function NotFound(): JSX.Element {
  return (
    <div className="flex h-[100vh] w-full items-center justify-center font-serif text-[144px] italic leading-[1em]">
      <div className="flex flex-col items-center">
        <div>404: Not Found</div>

        <div className="text-sm">
          (You are accessing the path that doesn&rsquo;t even exist.)
        </div>

        <NextLink
          className="mt-8 text-4xl not-italic leading-[1em] hover:underline"
          href={getRootPath()}
        >
          Home
        </NextLink>
      </div>
    </div>
  );
}

export default NotFound;
