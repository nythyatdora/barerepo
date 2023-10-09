import { useState, useEffect } from "react";

function ServerOnly({ children }): JSX.Element | null {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted) {
    return null;
  }

  return <>{children || null}</>;
}

export { ServerOnly };
