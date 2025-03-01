import type { Metadata } from 'next'

import './globals.scss'
// import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Dichvumat.com',
  description: 'Dichvumat.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/logo.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins&family=Space+Grotesk&display=swap" rel="stylesheet" />

        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        {/* <meta name="google-site-verification" content="LKEpipjdtmVnz751czvAtz6m37lhqnmK4BoK9QB1rio" /> */}
        {/* <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NJVDBGP4');
            `,
          }}
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-88D2CR652Q" strategy="afterInteractive"/>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-88D2CR652Q');
          `}
        </Script> */}
      </head>
      <body>{children}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NJVDBGP4"
        height="0" width="0" style={{display: "none", visibility: "hidden"}}></iframe></noscript>
      </body>
    </html>
  )
}
