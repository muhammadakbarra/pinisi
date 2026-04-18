import Link from 'next/link';
import Image from 'next/image';

export default function JalurSawi() {
    const sawis = [
        { name: 'Sawi 1', href: '/jalur-sawi/sawi-1' },
        { name: 'Sawi 2', href: '/jalur-sawi/sawi-2' },
        { name: 'Sawi 2.1', href: '/jalur-sawi/sawi-2-1' },
        { name: 'Sawi 3', href: '/jalur-sawi/sawi-3' },
        { name: 'Sawi 4', href: '/jalur-sawi/sawi-4' },
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

        </main>
    );
}
