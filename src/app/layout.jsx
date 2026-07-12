import { Inter, Reem_Kufi } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const reemKufi = Reem_Kufi({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-reem-kufi",
  display: "swap",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${reemKufi.variable}`}>

      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id=GTM-WJT5QXCX'+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WJT5QXCX');
          `}
        </Script>
      </head>

      <body className="relative min-h-screen bg-bg-light font-sans text-text-dark antialiased">

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WJT5QXCX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Main Gradient Background */}
        <div className="fixed inset-0 z-0 bg-gradient-to-br from-blue-50 via-white to-teal-50/40" />

        {/* Grid Pattern */}
        <div className="fixed inset-0 z-0 bg-grid-pattern" />

        {/* Floating Orbs */}
        <div
          className="fixed -right-40 top-20 z-0 h-[600px] w-[600px] rounded-full blur-3xl"
          style={{ background: "rgba(37, 99, 235, 0.08)" }}
        />
        <div
          className="fixed -left-40 bottom-20 z-0 h-[500px] w-[500px] rounded-full blur-3xl"
          style={{ background: "rgba(15, 184, 160, 0.07)" }}
        />
        <div
          className="fixed left-1/3 top-1/2 z-0 h-[400px] w-[400px] rounded-full blur-3xl"
          style={{ background: "rgba(34, 197, 94, 0.06)" }}
        />

        <Header />
        <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}