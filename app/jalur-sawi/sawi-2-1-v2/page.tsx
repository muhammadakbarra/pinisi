'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Sawi21V2() {
    const fadeInVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
    };

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
            <div className='relative z-10 p-6 md:hidden flex flex-col min-h-screen gap-10 overflow-y-auto'>
                {/* Teks Cerita 1 Tanpa Card */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInVariants}
                    className='mt-4 space-y-6 text-lg text-gray-900 leading-relaxed font-bold text-justify'
                >
                    <p>
                        Nah, dalam teks naskah-naskah La Galigo itu, ‘Cina’ dengan sejelas-jelasnya disamakan dengan “Tana [W]ugi”, ‘Tanah [Orang] Bugis’ ... jadi, Sawerigading sendiri <Link href="https://digitalcollections.universiteitleiden.nl/view/item/30913" target="_blank" className="text-blue-700 underline decoration-2">menyatakan</Link> bahwa ia akan <span className='italic font-black underline decoration-black/20 text-black'>“nadapi i mai sompekku ri tana Wugiq”</span>, ‘mengarahkan ke situ pelayaranku, ke Tanah [Orang] Bugis’.
                    </p>
                    <p>
                        Ketika tiba di depannya, salah seorang sepupu Sawerigading menunjukkan daratan dan <Link href="https://lib.ui.ac.id/detail?id=91432&lokasi=lokal" target="_blank" className="text-blue-700 underline decoration-2">menjelaskan</Link>, <span className='italic font-black underline decoration-black/20 text-black'>“Alé Cina puang asenna / ri Tana Ugiq pattellarenna”</span>, ‘Pusat Cina, Baginda, namanya / Tanah Bugis panggilannya’. Anda bisa mendapatkan keterangan serupa di, misalnya, <Link href="https://digitalcollections.universiteitleiden.nl/view/item/30927" target="_blank" className="text-blue-700 underline decoration-2">sini</Link>, <Link href="https://digitalcollections.universiteitleiden.nl/view/item/31604" target="_blank" className="text-blue-700 underline decoration-2">sini</Link>, atau <Link href="https://digitalcollections.universiteitleiden.nl/view/item/31488" target="_blank" className="text-blue-700 underline decoration-2">sini</Link>.
                    </p>
                </motion.div>

                {/* Teks Cerita 2 Tanpa Card */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInVariants}
                    className='space-y-6 text-lg text-gray-900 leading-relaxed font-bold text-justify'
                >
                    <p>
                        Memang, berbagai <Link href="https://www.jstor.org/stable/j.ctv8bt3bw.22" target="_blank" className="text-blue-700 underline decoration-2">temuan arkeologi dan data sejarah</Link> menunjukkan daerah yang sekarang menjadi Kecamatan Pammana di Kabupaten Wajo sebagai tujuan Sawerigading ... dan, dengan terus-terang, ke mana pun juga pelayarannya, haluan perjalanan Sawerigading ke Cina itu atau rute pelayaran ayahnya, Batara Lattuq, ke Tompo Tikkaq, memang <Link href="https://www.scribd.com/doc/263321885/Berlayar-ke-Tompotikka-Suatu-Episode-La-Galigo" target="_blank" className="text-blue-700 underline decoration-2">tidak masuk akal</Link> ....
                    </p>
                </motion.div>

                {/* Tombol Navigasi Bawah */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className='mt-auto pb-12 flex justify-between items-center'
                >
                    <Link href="/jalur-sawi/sawi-2-v2" className='bg-white/90 px-6 py-3 rounded-2xl shadow-md text-gray-900 font-bold active:scale-95 transition-transform border border-black/5'>
                        ← Kembali
                    </Link>
                    <Link href="/jalur-sawi/sawi-3-v2" className='bg-[#f8c24a] px-6 py-3 rounded-2xl shadow-md text-gray-900 font-bold active:scale-95 transition-transform border border-black/5'>
                        Lanjut →
                    </Link>
                </motion.div>
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
