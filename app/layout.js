import Header from "./components/header/header";
import "./globals.css";

export const metadata = {
  title: "X-Shop",
  description: "X-Shop",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
