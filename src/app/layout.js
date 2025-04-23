import localFont from "next/font/local";
import "./globals.css";
import { Cairo, Lalezar } from "next/font/google"
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

const cairo = Cairo({
  subsets: ['latin'],
  variable: '--font-cairo',
  weight: '400',
})

const lalezar = Lalezar({
  subsets: ['latin'],
  variable: '--font-lalezar',
  weight: '400',
})

export const metadata = {
  title: "Al Yassin - الياسين",
  description: "شركة الياسين لمولدات الطاقه الشمسيه و مواسير المياه والواح الطاقه",
  openGraph: {
    title: "Al Yassin - الياسين",
    description: "شركة الياسين لمولدات الطاقه الشمسيه و مواسير المياه والواح الطاقه",
    images: [{url: 'assets/al-yassin.jpg'}],
  },
};


export default async function RootLayout({ children }) {

  return (
    <html lang="ar" dir='ltr' >
      <body
        className={`bg-[url('/assets/solar-plate2.jpg')] bg-cover bg-fixed bg-bottom
          ${geistSans.variable} ${cairo.variable} ${lalezar.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
