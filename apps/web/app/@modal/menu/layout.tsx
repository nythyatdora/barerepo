"use client";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps): JSX.Element {
  const pathname = usePathname();
  return <>{pathname === "/menu" ? props.children : null}</>;
}

export default Layout;
