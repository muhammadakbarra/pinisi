'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
    const router = useRouter();
    const [isNavigating, setIsNavigating] = useState<string | null>(null);

    const jalurs = [
        { name: 'Jalur Sawi', href: '/jalur-sawi' },
        { name: 'Jalur A', href: '/jalur-a' },
        { name: 'Jalur B', href: '/jalur-b' },
        { name: 'Jalur C', href: '/jalur-c' },
    ];

    const handleNavigation = (href: string, name: string) => {
        setIsNavigating(name);
        // Delay 300ms agar user bisa melihat feedback warna aktif
        setTimeout(() => {
            router.push(href);
        }, 300);
    };

    return (
        <main className='relative min-h-screen bg-[#f9f295]'>
            {/* Konten Utama Mobile */}
            <div className='p-8 md:hidden flex flex-col items-center'>
                <h1 className='text-5xl font-black tracking-[0.2em] text-gray-900 mt-12 mb-16'>
                    PINISI
                </h1>

                <div className='w-full space-y-4 px-2'>
                    {jalurs.map((jalur) => (
                        <button 
                            key={jalur.name}
                            onClick={() => handleNavigation(jalur.href, jalur.name)}
                            className={`group block w-full text-left p-6 rounded-2xl shadow-sm border border-black/5 active:scale-95 transition-all duration-200 
                                ${isNavigating === jalur.name ? 'bg-[#f8c24a]' : 'bg-white hover:bg-[#f8c24a]'}`}
                        >
                            <div className='flex items-center justify-between'>
                                <span className='text-xl font-bold text-gray-800'>{jalur.name}</span>
                                <span className={`text-2xl font-black transition-all duration-300 transform group-hover:translate-x-2 
                                    ${isNavigating === jalur.name ? 'text-gray-900 translate-x-2' : 'text-[#f8c24a] group-hover:text-gray-900'}`}>
                                    →
                                </span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Modal untuk Layar Besar */}
            <div className='hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:flex items-center justify-center p-4'>
                <div className='bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center border border-gray-100'>
                    <div className='mb-6 inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full'>
                        <span className='text-3xl'>📱</span>
                    </div>
                    
                    <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                        Optimasi Perangkat Mobile
                    </h2>
                    
                    <p className='text-gray-600 leading-relaxed mb-8'>
                        Halo! Pinisi saat ini sedang dirancang khusus untuk memberikan pengalaman terbaik di perangkat 
                        <span className='font-semibold text-blue-600'> smartphone</span>.
                    </p>
                    
                    <div className='bg-gray-50 rounded-xl p-4 text-sm text-gray-500'>
                        Silakan buka melalui HP Anda atau perkecil jendela browser ini untuk melihat progres tampilan kami.
                    </div>

                    <div className='mt-8 pt-6 border-t border-gray-100'>
                        <p className='text-xs text-gray-400 italic'>
                            Pinisi Development Team
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
