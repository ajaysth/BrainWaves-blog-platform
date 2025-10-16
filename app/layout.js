import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { checkUser } from "@/lib/checkUser"; // your custom function
import Footer from "@/components/footer";

export default async function RootLayout({ children }) {
  try {
    await checkUser();
  } catch (error) {
    console.error("Error in checkUser:", error);
  }

  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={true}
          >
            <header className="flex justify-end items-center p-4 gap-4 h-16">
              <Navbar />
            </header>
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
