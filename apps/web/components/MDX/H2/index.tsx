import type { HeaderProps } from "@/components/MDX";

function H2(props: HeaderProps): JSX.Element {
  return (
    <h2 {...props} className="my-6 text-4xl font-semibold">
      {props.children}
    </h2>
  );
}

export { H2 };
