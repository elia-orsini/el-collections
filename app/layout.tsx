import "../public/style.css";
import { ReactNode } from "react";

import Footer from "../components/Footer";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
};

export default Layout;

export const revalidate = 360; // revalidate at most every 6 minutes
