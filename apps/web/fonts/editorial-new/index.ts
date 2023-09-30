import localFont from "next/font/local";

const editorialNew = localFont({
  src: [
    {
      path: "./PPEditorialNew-Bold.woff",
      style: "normal",
      weight: "700",
    },
    {
      path: "./PPEditorialNew-BoldItalic.woff",
      style: "italic",
      weight: "700",
    },
    {
      path: "./PPEditorialNew-Heavy.woff",
      style: "normal",
      weight: "900",
    },
    {
      path: "./PPEditorialNew-HeavyItalic.woff",
      style: "italic",
      weight: "900",
    },
    {
      path: "./PPEditorialNew-Italic.woff",
      style: "italic",
      weight: "400",
    },
    {
      path: "./PPEditorialNew-Regular.woff",
      style: "normal",
      weight: "400",
    },
    {
      path: "./PPEditorialNew-Thin.woff",
      style: "normal",
      weight: "100",
    },
    {
      path: "./PPEditorialNew-ThinItalic.woff",
      style: "italic",
      weight: "100",
    },
    {
      path: "./PPEditorialNew-Ultralight.woff",
      style: "normal",
      weight: "200",
    },
    {
      path: "./PPEditorialNew-UltralightItalic.woff",
      style: "italic",
      weight: "200",
    },
  ],
  variable: "--font-editorial-new",
});

export { editorialNew };
