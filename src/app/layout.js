// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Whatsapp from "./Components/Whatsapp/page";
// import Script from "next/script";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function RootLayout({ children }) {
//   return (
//     <>
//       <html lang="en">
//         <head>
//           <Script id="gtm-head" strategy="afterInteractive">
//             {`
//             (function(w,d,s,l,i){
//               w[l]=w[l]||[];
//               w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
//               var f=d.getElementsByTagName(s)[0],
//                   j=d.createElement(s),
//                   dl=l!='dataLayer' ? '&l='+l : '';
//               j.async=true;
//               j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
//               f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','GTM-5VXRK94N');
//           `}
//           </Script>

//           {/* Global Google tag (GA4 + Google Ads) */}
//           <Script
//             src="https://www.googletagmanager.com/gtag/js?id=G-CVMF02X5Z3"
//             strategy="afterInteractive"
//           />

//           <Script id="google-tags" strategy="afterInteractive">
//             {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}

//             gtag('js', new Date());

//             // GA4
//             gtag('config', 'G-CVMF02X5Z3');

//             // Google Ads
//             gtag('config', 'AW-596807168');
//           `}
//           </Script>
//           <title>Car Rental Service in India | CozyCabz</title>
//           <meta
//             name="description"
//             content="Book safe, clean, and affordable cabs in 200+ cities with CozyCabz. Enjoy premium rides, expert drivers, 24/7 support, and trusted service for every trip."
//           ></meta>
//         </head>

//         <body className={`${geistSans.variable} ${geistMono.variable}`}>
//           <noscript>
//             <iframe
//               src="https://www.googletagmanager.com/ns.html?id=GTM-5VXRK94N"
//               height="0"
//               width="0"
//               style={{ display: "none", visibility: "hidden" }}
//             />
//           </noscript>
//           {children}
//         </body>
//         <Whatsapp />
//       </html>
//     </>
//   );
// }

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Whatsapp from "./Components/Whatsapp/page";
import Script from "next/script";
import "mapbox-gl/dist/mapbox-gl.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Car Rental Service in India | CozyCabz",
  description:
    "Book safe, clean, and affordable cabs in 200+ cities with CozyCabz. Enjoy premium rides, expert drivers, 24/7 support, and trusted service for every trip.",

  keywords: [
    "car rental india",
    "cab service india",
    "airport transfer",
    "corporate cab service",
    "chauffeur service",
    "cozycabz",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "https://www.cozycabz.com/",
  },

  openGraph: {
    title: "Car Rental Service in India | CozyCabz",
    description:
      "Book safe, clean, and affordable cabs in 200+ cities with CozyCabz.",
    url: "https://www.cozycabz.com/",
    siteName: "CozyCabz",
    images: [
      {
        url: "https://www.cozycabz.com/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Car Rental Service in India | CozyCabz",
    description:
      "Book safe, clean, and affordable cabs in 200+ cities with CozyCabz.",
    images: ["https://www.cozycabz.com/logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Google Tag Manager */}{" "}
        <Script id="gtm-head" strategy="afterInteractive">
          {`             (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer' ? '&l='+l : '';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5VXRK94N');
          `}{" "}
        </Script>
        {/* GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CVMF02X5Z3"
          strategy="afterInteractive"
        />
        <Script id="ga4-config" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-CVMF02X5Z3');
        gtag('config', 'AW-596807168');
        gtag('config', 'AW-650029308');
      `}
        </Script>
        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;
          n.push=n;
          n.loaded=!0;
          n.version='2.0';
          n.queue=[];
          t=b.createElement(e);
          t.async=!0;
          t.src=v;
          s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s);
          }(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');

          fbq('init', '717377001455206');
          fbq('track', 'PageView');
        `,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5VXRK94N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Whatsapp />
        <div id="datepicker-portal"></div>
      </body>
    </html>
  );
}
