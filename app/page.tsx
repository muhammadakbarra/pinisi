import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
    const jalurs = [
        { name: 'Jalur Sawi', href: '/jalur-sawi' },
        { name: 'Jalur A', href: '/jalur-a' },
        { name: 'Jalur B', href: '/jalur-b' },
        { name: 'Jalur C', href: '/jalur-c' },
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
                <h1 className='text-5xl font-black tracking-[0.2em] text-gray-900 mt-12 mb-16'>
                    PINISI
                </h1>

                <div className='w-full space-y-4 px-2'>
                    {jalurs.map((jalur) => (
                        <Link 
                            key={jalur.name}
                            href={jalur.href}
                            className='group block w-full bg-white hover:bg-[#f8c24a] active:bg-[#f8c24a] p-6 rounded-2xl shadow-sm border border-black/5 active:scale-95 transition-all duration-200'
                        >
                            <div className='flex items-center justify-between'>
                                <span className='text-xl font-bold text-gray-800'>{jalur.name}</span>
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
