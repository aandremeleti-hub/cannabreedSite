import { Titillium_Web, Lato } from 'next/font/google';
import './globals.css';

const titilliumWeb = Titillium_Web({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-title',
  display: 'swap',
});

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'Cannabreed',
  description: 'Cannabreed — Genética canábica de alta performance.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${titilliumWeb.variable} ${lato.variable}`}>
        {children}
      </body>
    </html>
  );
}
