'use client';

import { QRCodeSVG } from 'qrcode.react';
import { useEffect, useState } from 'react';

export default function MobileModal() {
    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(() => {
        // Mendapatkan URL saat ini secara dinamis
        if (typeof window !== 'undefined') {
            setCurrentUrl(window.location.href);
        }
    }, []);

    return (
        <div className='hidden fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm md:flex items-center justify-center p-4'>
            <div className='bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center border border-gray-100 flex flex-col items-center'>
                <div className='mb-6 inline-flex items-center justify-center w-16 h-16 bg-[#f9f295]/30 rounded-full'>
                    <span className='text-3xl'>📱</span>
                </div>
                
                <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                    Optimasi Perangkat Mobile
                </h2>
                
                <p className='text-gray-600 leading-relaxed mb-6'>
                    Halo Bestie! Pinisi dirancang khusus untuk memberikan pengalaman terbaik di perangkat 
                    <span className='font-semibold text-[#f8c24a]'> smartphone</span>.
                </p>

                {/* QR Code Section */}
                <div className='bg-white p-4 rounded-2xl shadow-inner border border-gray-100 mb-6'>
                    {currentUrl && (
                        <QRCodeSVG 
                            value={currentUrl} 
                            size={180}
                            bgColor={"#ffffff"}
                            fgColor={"#000000"}
                            level={"L"}
                            includeMargin={false}
                        />
                    )}
                </div>

                <div className='bg-gray-50 rounded-xl p-4 text-sm text-gray-500 mb-8 w-full'>
                    Scan QR Code di atas menggunakan kamera HP Anda untuk membuka halaman ini secara instan.
                </div>

                <div className='w-full pt-6 border-t border-gray-100'>
                    <p className='text-xs text-gray-400 italic'>
                        Pinisi Development Team
                    </p>
                </div>
            </div>
        </div>
    );
}
