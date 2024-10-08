import "../public/style.css";
import { ReactNode } from "react";

import Footer from "../components/Footer";
import { Metadata } from "next";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="font-[HN]">{children}</main>

        <Footer />
      </body>
    </html>
  );
};

export default Layout;

export const metadata: Metadata = {
  title: {
    template: "%s | elia's database",
    default: "elia's database",
  },
  description:
    "Collecting my favourite films (mostly indie), cafes (specialty coffee) and books.",
  creator: "Elia Orsini",
  applicationName: "elia's database",
  referrer: "origin-when-cross-origin",
};

export const revalidate = 360; // revalidate at most every 6 minutes
