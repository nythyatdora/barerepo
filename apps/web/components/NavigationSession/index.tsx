"use client";
import { useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { proxy, useSnapshot } from "valtio";

interface NavigationSessionProps {
  children?: React.ReactNode;
}

const store = proxy({
  previousPathname: "/",
  currentPathname: "/",
});

const usePreviousPathname = (): string => useSnapshot(store).previousPathname;

function NavigationSession(props: NavigationSessionProps): JSX.Element {
  const pathname = usePathname();

  const saveToSession = useCallback(() => {
    // Set the previous path as the value of the current path.
    const previousPathname = store.currentPathname;
    store.previousPathname = previousPathname;
    // Set the current path value by looking at the browser's location object.
    store.currentPathname =
      globalThis.location.pathname + globalThis.location.search;
  }, []);

  useEffect(() => {
    saveToSession();
  }, [pathname, saveToSession]);

  return <>{props.children}</>;
}

export { NavigationSession, usePreviousPathname };
