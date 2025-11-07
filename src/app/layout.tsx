import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Jane Ngugi - Game Developer & Digital Designer',
    description: 'Interactive web experiences and bold visual content for brands',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    )
}