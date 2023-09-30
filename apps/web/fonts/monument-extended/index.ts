import localFont from "next/font/local";

const monumentExtended = localFont({
  src: [
    {
      path: "./PPMonumentExtended-Black.woff",
      style: "normal",
      weight: "900",
    },
    {
      path: "./PPMonumentExtended-BlackItalic.woff",
      style: "italic",
      weight: "900",
    },
    {
      path: "./PPMonumentExtended-Bold.woff",
      style: "normal",
      weight: "700",
    },
    {
      path: "./PPMonumentExtended-BoldItalic.woff",
      style: "italic",
      weight: "700",
    },
    {
      path: "./PPMonumentExtended-Light.woff",
      style: "normal",
      weight: "300",
    },
    {
      path: "./PPMonumentExtended-LightItalic.woff",
      style: "italic",
      weight: "300",
    },
    {
      path: "./PPMonumentExtended-Regular.woff",
      style: "normal",
      weight: "400",
    },
    {
      path: "./PPMonumentExtended-RegularItalic.woff",
      style: "italic",
      weight: "400",
    },
    {
      path: "./PPMonumentExtended-Thin.woff",
      style: "normal",
      weight: "100",
    },
    {
      path: "./PPMonumentExtended-ThinItalic.woff",
      style: "italic",
      weight: "100",
    },
  ],
  variable: "--font-monument-extended",
});

export { monumentExtended };
