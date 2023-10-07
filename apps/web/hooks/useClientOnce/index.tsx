import { useEffectOnce, useIsClient } from "usehooks-ts";

function useClientOnce(callback: () => void): void {
  const isClient = useIsClient();
  useEffectOnce(() => {
    if (isClient) callback();
  });
}

export { useClientOnce };
