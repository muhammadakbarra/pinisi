import Link from 'next/link';
import Image from 'next/image';

export default function JalurSawi() {
    const sawis = [
        { name: 'Sawi 1', href: '/jalur-sawi/sawi-1' },
        { name: 'Sawi 2', href: '/jalur-sawi/sawi-2' },
        { name: 'Sawi 2.1', href: '/jalur-sawi/sawi-2-1' },
        { name: 'Sawi 3', href: '/jalur-sawi/sawi-3' },
    ];

    return (
        <main className='relative min-h-screen bg-[#f9f295] overflow-hidden'>
            {/* Layer Background Image dengan Opacity */}
            <div className='absolute inset-0 z-0 opacity-40'>
                <Image 
                    src='/latar-belakang-lontara.jpeg'
                    alt='Background Lontara'
                    fill
                    className='object-cover'
                    priority
                />
            </div>

            {/* Konten Utama Mobile */}
            <div className='relative z-10 p-8 md:hidden flex flex-col items-center'>
                <div className='w-full flex items-center mb-12 mt-4'>
                    <Link href="/" className="text-gray-900 text-3xl mr-4 hover:scale-110 transition-transform">
                        ←
                    </Link>
                    <h1 className='text-4xl font-black tracking-tight text-gray-900'>
                        Jalur Sawi
                    </h1>
                </div>

                <div className='w-full space-y-4 px-2'>
                    {sawis.map((sawi) => (
                        <Link 
                            key={sawi.name}
                            href={sawi.href}
                            className='group block w-full bg-white hover:bg-[#f8c24a] active:bg-[#f8c24a] p-6 rounded-2xl shadow-sm border border-black/5 active:scale-95 transition-all duration-200'
                        >
                            <div className='flex items-center justify-between'>
                                <span className='text-xl font-bold text-gray-800'>{sawi.name}</span>
                                <span className='text-2xl font-black transition-all duration-300 transform group-hover:translate-x-2 text-[#f8c24a] group-hover:text-gray-900'>
                                    →
                                </span>
                            </div>
                        </Link>
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
