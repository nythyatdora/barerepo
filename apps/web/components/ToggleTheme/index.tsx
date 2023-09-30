import cx from "cx";
import React, { useState } from "react";

function ToggleTheme(
  props: React.ComponentProps<"button">,
): React.ReactElement {
  const { className } = props;
  const [isDark, setIsDark] = useState(false);

  const onClick = (): void => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark");
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
