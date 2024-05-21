import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import Footer from '@/app/components/Footer/Footer';
import "./globals.css";


const poppins = Poppins({ subsets: ["latin"], weight: '400', });

export const metadata = {
  title: "Yrgo Next.js lesson",
  description: "first lesson at Yrgo next.js course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
        <Footer />
    </html>
  );
}
