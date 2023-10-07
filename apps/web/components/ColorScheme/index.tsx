"use client";
import { useEffect, useLayoutEffect, useState } from "react";

interface ColorSchemeProps {
  defaultColorScheme: string;
  children?: React.ReactNode;
}

function setColorScheme(value: string): void {
  localStorage.setItem("color-scheme", value);
  document.documentElement.classList.toggle("dark", value === "dark");
  document.documentElement.classList.toggle("bg-dark", value === "dark");
}

function useColorScheme(): [string, (value: string) => void] {
  const [value, setValue] = useState<string>("");

  const updateValue = (nextValue: string): void => {
    setColorScheme(nextValue);
    setValue(nextValue);
  };

  useEffect(() => {
    const colorScheme = localStorage.getItem("color-scheme");
    if (!colorScheme) return;
    setValue(colorScheme);
  }, []);

  return [value, updateValue];
}

function ColorScheme(props: ColorSchemeProps): JSX.Element {
  const { defaultColorScheme } = props;

  useLayoutEffect(() => {
    const colorScheme = localStorage.getItem("color-scheme");
    const light = window.matchMedia("(prefers-color-scheme: light)");
    const dark = window.matchMedia("(prefers-color-scheme: dark)");

    const setup = (): void => {
      if (!colorScheme) {
        firstLoad();
        return;
      }

      setColorScheme(colorScheme);
    };

    const firstLoad = (): void => {
      switch (true) {
        case light.matches:
          setColorScheme("light");
          break;

        case dark.matches:
          setColorScheme("dark");
          break;

        default:
          setColorScheme(defaultColorScheme);
          break;
      }
    };

    const onPreferLight = (event): void => {
      if (!event.matches) return;
      setColorScheme("light");
    };

    const onPreferDark = (event): void => {
      if (!event.matches) return;
      setColorScheme("dark");
    };

    setup();

    light.addEventListener("change", onPreferLight);
    dark.addEventListener("change", onPreferDark);

    return () => {
      light.removeEventListener("change", onPreferLight);
      dark.removeEventListener("change", onPreferDark);
    };
  }, [defaultColorScheme]);

  return <>{props.children}</>;
}

export { ColorScheme, useColorScheme };
