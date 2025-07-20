import "./globals.css";
import StoreRubber from "../../lib/RTK/storeRubber";
import ErrorHandling from "./_components/ErrorHandling";

export const metadata = {
  title: "Exam-app",
  description: "Clone exam project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreRubber>
        <body className={`antialiased`}>
          <ErrorHandling>{children}</ErrorHandling>
        </body>
      </StoreRubber>
    </html>
  );
}
