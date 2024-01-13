import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DnD APP",
  description: "DnD app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>{/* add extra styles or fonts / seo here dd */}</head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <ReusableLayout />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

const ReusableLayout = ({ children }) => {
  return (
    <div>
      <div className="w-full flex justify-between p-4 border-b border-gray-200">
        <div className="flex gap-4">
          <div>home</div>
          <div>campaigns</div>
        </div>

        <div>log out</div>
      </div>

      <div>{children}</div>
    </div>
  );
};
