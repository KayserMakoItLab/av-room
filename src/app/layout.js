import { DynamicElementProvider } from '../../context';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Room',
  description: 'Customize your own room',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <DynamicElementProvider>
        <body className={inter.className}>{children}</body>
      </DynamicElementProvider>
    </html>
  );
}
