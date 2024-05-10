import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';
import styles from './layout.module.css';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'Masya cat',
    description: 'Funny cat',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <main className={styles.main}>
            {children}
        </main>
        </body>
        </html>
    );
}
