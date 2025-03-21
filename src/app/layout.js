import localFont from "next/font/local";
import "./globals.css";
import { Cairo, Lalezar } from "next/font/google"
import { getUserSession, getAdminSession } from "../../lib/lib";
import { Navbar } from "@/components/Navbar";
import yassin from '../assets/al-yassin.jpg'

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
  description: "شركة الياسين لمولدات الطاقه الشمسيه و مواسير المياه والواح الطقه",
  openGraph: {
    title: "Al Yassin - الياسين",
    description: "شركة الياسين لمولدات الطاقه الشمسيه و مواسير المياه والواح الطقه",
    images: [{url: yassin.src}],
  },
};


export default async function RootLayout({ children }) {
  const userSession = await getUserSession();
  const adminSession = await getAdminSession();
  return (
    <html lang="ar" dir='ltr' >
      <body
        className={`bg-[url('../assets/solar-plate2.jpg')] bg-cover bg-fixed bg-bottom
          ${geistSans.variable} ${cairo.variable} ${lalezar.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
