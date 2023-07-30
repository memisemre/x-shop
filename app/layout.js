import "./globals.css";

export const metadata = {
  title: "X-Shop",
  description: "X-Shop",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
