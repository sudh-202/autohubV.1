import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'


// Metadata is used to specify the title and description of the page.
export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover the best cars in the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"relative"}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}

 // For language translation,

//  'use client';

// import { Footer, Navbar } from '@/components';
// import './globals.css';
// import type { Metadata } from 'next';
// import { appWithTranslation } from 'next-i18next';
// import '../i18next';
// import { AppProps } from 'next/app';

// export const metadata: Metadata = {
//   title: 'Car Hub',
//   description: 'Discover the best cars in the world.',
// };

// function RootLayout({ Component, pageProps }: AppProps) {
//   return (
//     <html lang="en">
//       <body className="relative">
//         <Navbar />
//         <Component {...pageProps} />
//         <Footer />
//       </body>
//     </html>
//   );
// }

// export default appWithTranslation(RootLayout);


