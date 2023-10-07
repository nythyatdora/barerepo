import "./globals.css";
import cx from "cx";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans as PlusJakartaSans } from "next/font/google";
import { editorialNew } from "@/fonts/editorial-new";
import { NavigationSession } from "@/components/NavigationSession";
import { ColorSchemeScript } from "@/components/ColorSchemeScript";
import { ColorScheme } from "@/components/ColorScheme";
import { GoogleTagManager } from "@/components/GoogleTagManager";

const plusJakartaSans = PlusJakartaSans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "nythyatdora.com",
  description: "A porfolio by Dora.",
};

interface RootProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout(props: RootProps): JSX.Element {
  const { children, modal } = props;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </head>

      <body
        className={cx(
          editorialNew.variable as string,
          plusJakartaSans.variable,
        )}
      >
        <GoogleTagManager measurementId={process.env.GA_MEASUREMENT_ID} />
        <ColorSchemeScript />
        <ColorScheme defaultColorScheme="light" />
        <NavigationSession />
        {children}
        {modal}
      </body>
    </html>
  );
}
