import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "nythyatdora.com",
  description: "A porfolio by Dora.",
};

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps): JSX.Element {
  return <>{props.children}</>;
}

export default Layout;
