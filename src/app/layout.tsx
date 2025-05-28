import './globals.css';
import type { Metadata } from 'next';
import { Manrope, Noto_Sans } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
  weight: ['400', '500', '700', '800'],
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans',
  weight: ['400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Williamson County Investments Corporation',
  description: 'Especialistas em restauração e revitalização de edifícios históricos.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${manrope.variable} ${notoSans.variable}`}>
      <body>
        <div className='relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden'>
          {children}
        </div>
      </body>
    </html>
  );
}
