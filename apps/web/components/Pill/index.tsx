"use client";
import { tv } from "tva";

interface PillProps {
  component?: React.ElementType;
  text: string;
  color: string;
}

const styles = tv({
  slots: {
    color: "mr-2 h-[16px] w-[16px] rounded-full bg-gray-500",
  },
  variants: {
    color: {
      blue: {
        color: "bg-blue-500",
      },
      pink: {
        color: "bg-pink-500",
      },
      black: {
        color: "bg-black dark:bg-white",
      },
      green: {
        color: "bg-green-500",
      },
      orange: {
        color: "bg-rose-500",
      },
      grey: {
        color: "bg-gray-500",
      },
      yellow: {
        color: "bg-yellow-500",
      },
    },
  },
});

function Pill(props: PillProps): JSX.Element {
  const { component: Component = "div", color, text } = props;

  const slot = styles({ color: color as never });

  return (
    <Component className="flex h-[50px] cursor-default flex-row items-center rounded-full border-2 border-black px-3 dark:border-white">
      <div className={slot.color()} />
      <div className="font-sans text-[26px] font-light leading-[1em] tracking-tight dark:text-white">
        {text}
      </div>
    </Component>
  );
}

export { Pill };
