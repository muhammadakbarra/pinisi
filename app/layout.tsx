import type { Metadata } from 'next';
import MobileModal from '@/components/MobileModal';

import './globals.css';

export const metadata: Metadata = {
    title: 'Pinisi',
    description: 'Pinisi',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className='h-full antialiased'>
            <body className='min-h-full flex flex-col text-black'>
                {children}
                <MobileModal />
            </body>
        </html>
    );
}
