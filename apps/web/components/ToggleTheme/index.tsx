import React from "react";
import cx from "cx";
import { useColorScheme } from "@/components/ColorScheme";

function ToggleTheme(
  props: React.ComponentProps<"button">,
): React.ReactElement {
  const { className } = props;
  const [colorScheme, setColorScheme] = useColorScheme();
  const isDark = colorScheme === "dark";

  const onClick = (): void => {
    const next = isDark ? "light" : "dark";
    setColorScheme(next);
  };

  return (
    <button
      aria-checked={isDark}
      className={cx("flex flex-row items-center gap-2 text-inherit", className)}
      onClick={onClick}
      role="switch"
      type="button"
    >
      <div className="mt-[-4px] h-[12px] w-[12px] rounded-full bg-black dark:bg-white" />
      {isDark ? "Light" : "Dark"}
    </button>
  );
}

export { ToggleTheme };
