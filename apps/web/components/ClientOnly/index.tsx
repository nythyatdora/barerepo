import { useEffect, useState } from "react";

function ClientOnly({ children }): JSX.Element | null {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <>{children || null}</>;
}

export { ClientOnly };
