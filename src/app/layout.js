import AuthContext from "../../context/AuthContext";
import OnBoarding from "../../context/OnBoarding";

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NiPlug",
  description: "Plug into my Lifestyle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <OnBoarding>{children}</OnBoarding>
        </AuthContext>
      </body>
    </html>
  );
}
