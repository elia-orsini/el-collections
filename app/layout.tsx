import { ReactNode } from "react";
import "../public/style.css";
import Footer from "../components/Footer";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>

      <Footer />
    </html>
  );
};

export default Layout;
