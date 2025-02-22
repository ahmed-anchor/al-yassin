import localFont from "next/font/local";
import "./globals.css";
import { Bangers, Lalezar } from "next/font/google"
import { Navbar } from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const bangers = Bangers({
  subsets: ['latin'],
  variable: '--font-bangers',
  weight: '400',
})

const lalezar = Lalezar({
  subsets: ['latin'],
  variable: '--font-lalezar',
  weight: '400',
})

export const metadata = {
  title: "Al Yassin - الياسين",
  description: "شركة الياسين لمولدات الطاقه الشمسيه و",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir='ltr' >
      <body
        className={`bg-[url('../assets/solar-plates.webp')] bg-cover bg-fixed bg-no-repeat
          ${geistSans.variable} ${bangers.variable} ${lalezar.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
