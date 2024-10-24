import localFont from "next/font/local";
import "./globals.css";
import StoreRubber from "../../lib/RTK/storeRubber";

export const metadata = {
  title: "Exam-app",
  description: "Clone exam project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreRubber>
        <body className={`antialiased`}>{children}</body>
      </StoreRubber>
    </html>
  );
}
