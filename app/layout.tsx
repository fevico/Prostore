import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {APP_DESCRIPTION, APP_NAME, SERVER_URL} from "@/lib/constants";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],                
});   

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],     
});       

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | Prostore`,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};        

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        {children}
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />   
        </ThemeProvider>  
      </body>
    </html>
  ); 
}
