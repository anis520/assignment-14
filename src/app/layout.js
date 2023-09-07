"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";
import { ToastContainer } from "react-toastify";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children} <ToastContainer />
        <ProgressBar
          height="4px"
          color="#8B0000"
          options={{ showSpinner: false }}
        />
      </body>
    </html>
  );
}
