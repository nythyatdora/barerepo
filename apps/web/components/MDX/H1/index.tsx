import type { HeaderProps } from "@/components/MDX";

function H1(props: HeaderProps): JSX.Element {
  return (
    <h1
      {...props}
      className="my-6 text-6xl font-normal italic first-of-type:mt-0"
    >
      {props.children}
    </h1>
  );
}

export { H1 };
