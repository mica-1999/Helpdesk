/**
 * Global layout for the helpdesk application.
 * 
 * It imports global.css for styling and remixicon for icons.
 * It wraps the application in NextAuthSessionProvider and ThemeProvider.
 * It also includes a ToastContainer for notifications and a StickyButton for theme toggling.
 * 
 */

import type { Metadata } from "next";
import "./globals.css";
import 'remixicon/fonts/remixicon.css';
import NextAuthSessionProvider from "./sessionWrapper";
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeBtn from "@/components/themebtn/Button";

export const metadata: Metadata = {
  title: "Helpdesk System",
  description: "Internal helpdesk management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'Dark') {
                    document.documentElement.classList.add('dark');
                  } else if (theme === 'Light' || !theme) {
                    document.documentElement.classList.remove('dark');
                  } else if (theme === 'Auto') {
                    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                      document.documentElement.classList.add('dark');
                    } else {
                      document.documentElement.classList.remove('dark');
                    }
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className="antialiased"
        suppressHydrationWarning
      >
        {/* NextAuthSessionProvider must be the outermost provider */}
        <NextAuthSessionProvider>
          <ThemeProvider>
            <ToastContainer />
            {children}
            <ThemeBtn />
          </ThemeProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
