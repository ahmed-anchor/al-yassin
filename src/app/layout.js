import localFont from "next/font/local";
import "./globals.css";
import { Bangers, Lalezar } from "next/font/google"
import { getUserSession, getAdminSession } from "../../lib/lib";
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
  description: "شركة الياسين لمولدات الطاقه الشمسيه و مواسير المياه والواح الطقه",
  openGraph: {
    title: "Al Yassin - الياسين",
    description: "شركة الياسين لمولدات الطاقه الشمسيه و مواسير المياه والواح الطقه",
    images: [{url: "https://scontent.fcai26-1.fna.fbcdn.net/v/t39.30808-6/415991490_884398176712010_5415645002089561395_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=pPSn-GUtb-MQ7kNvgEGf5mD&_nc_oc=AdhzFJ2nRwtkngYMCNYUHUTt2b1DJYxz9imKK55YSL2v94ZvNSDWwVJ3U-QnsGjrmHs&_nc_zt=23&_nc_ht=scontent.fcai26-1.fna&_nc_gid=A20zuHb9xbTl6CMa0m1RJRd&oh=00_AYGZkpiF_5c2vN-we14fcEZ0HACJw0_jvzj70Hym9TXnJg&oe=67D65060"}],
  },
};


export default async function RootLayout({ children }) {
  const userSession = await getUserSession();
  const adminSession = await getAdminSession();
  return (
    <html lang="ar" dir='ltr' >
      <body
        className={`bg-[url('../assets/solar-plate2.jpg')] bg-cover bg-fixed bg-bottom
          ${geistSans.variable} ${bangers.variable} ${lalezar.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
