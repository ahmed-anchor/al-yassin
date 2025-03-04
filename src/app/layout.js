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
  description: "شركة الياسين لمولدات الطاقه الشمسيه و مواسير المياه والواح الطقه",
  openGraph: {
    title: "Al Yassin - الياسين",
    description: "شركة الياسين لمولدات الطاقه الشمسيه و مواسير المياه والواح الطقه",
    images: [{url: "https://scontent.fcai19-2.fna.fbcdn.net/v/t39.30808-6/415991490_884398176712010_5415645002089561395_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=i3-j4__ohswQ7kNvgGlVd3P&_nc_oc=Adh-bNyYEGqdRSRi7EdKq4TETdV_kqOsyWQqaAirUhLFalNrSjWK8iONG81cBGxzGr4&_nc_zt=23&_nc_ht=scontent.fcai19-2.fna&_nc_gid=AG1fvMYBWWDzOM3T0LnBA-x&oh=00_AYA1fO7S2opKYWRoWirr6zCEtF4IqflUR_-PwHSEaCfD8Q&oe=67C170A0"}],
  },
};


export default function RootLayout({ children }) {
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
