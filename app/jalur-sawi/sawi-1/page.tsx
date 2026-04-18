'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

export default function Sawi1() {
    const fadeInVariants: Variants = {
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
            <div className='relative z-10 p-6 md:hidden flex flex-col min-h-screen gap-6'>
                {/* Card Teks Cerita */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInVariants}
                    className='bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-white/20 mt-4'
                >
                    <p className='text-lg text-gray-800 leading-relaxed font-medium text-justify'>
                        Hai Bestie – sudah pernah dengar bahwa perahu pinisi pertama dibangun oleh seorang pangeran asal Kerajaan Luwu di Sulawesi yang bernama Sawerigading? Alkisah, Sri Pangeran Gagah itu jatuh cinta sama adik kembarnya, dan sebab hal itu tidak diizinkan oleh adat-istiadat maka dia disuruh berlayar merantau demi mencari seorang puteri yang konon secantik adik kembarnya jauh-jauh di Cina sana. Sebuah perahu besar, ‘Waka Welenreng’, dibangun.
                    </p>
                </motion.div>

                {/* Card Foto & Konteks */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInVariants}
                    className='bg-white/90 backdrop-blur-sm p-4 rounded-3xl shadow-xl border border-white/30'
                >
                    <div className='relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-3'>
                        <Image 
                            src='/sawi/sawi-1.jpg'
                            alt='Perahu Sawerigading'
                            fill
                            className='object-cover'
                        />
                    </div>
                    <div className='px-2'>
                        <p className='text-xs text-gray-700 leading-snug font-semibold'>
                            Perahu Sawerigading; naskah La Galigo satu-satunya yang dilengkapi dengan gambar, milik pribadi, Wajo
                        </p>
                        <p className='text-[10px] text-gray-500 mt-1 italic'>
                            Sulawesi Selatan; foto oleh S. Koolhof
                        </p>
                    </div>
                </motion.div>

                {/* Card Teks Lanjutan */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInVariants}
                    className='bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-white/20'
                >
                    <div className='space-y-6 text-lg text-gray-800 leading-relaxed font-medium text-justify'>
                        <p>
                            untuknya; dan setelah <Link href="https://www.tokopedia.com/arena-buku-id/cinta-laut-dan-kekuasaan-dalam-epos-la-galigo-nurhayati-rahman" target="_blank" className="text-blue-600 underline">menjalani berbagai petualangan</Link>, Sawerigading akhirnya berhasil meminang puteri yang bernama We Cudaiq itu ….
                        </p>
                        <p>
                            Suatu hari Sawerigading rindu akan kampung halamannya, dan ia memutuskan pulang bersama isterinya. Akan tetapi, karena pernah berjanji takkan kembali ke Luwu, ya, ketika mau melewati Tanjung Bira kapalnya dihantam ombak dan pecah … ada pecahan hanyut ke sini-situ, dan penduduk setempat mengumpul-kannya dan merakitnya ulang sehingga belajar caranya membuat dan melayarkan perahu pinisi. Ada pun beberapa versi cerita itu yang bisa Anda simak di <Link href="https://panrita.news/2017/10/18/mengenal-makna-ilahiah-dua-tiang-tujuh-layar-perahu-phinisi-bulukumba/" target="_blank" className="text-blue-600 underline">sini</Link>, <Link href="https://ila-galigo.blogspot.com/2010/11/perahu-pinisi.html" target="_blank" className="text-blue-600 underline">sini</Link>, atau <Link href="https://ila-galigo.blogspot.com/2010/11/perahu-pinisi.html" target="_blank" className="text-blue-600 underline">sini</Link>.
                        </p>
                        <p className='pt-4 border-t border-black/5 text-gray-600 italic leading-relaxed'>
                            Nah, bagaimana pun jua, kisah itu hanya cerita belaka – alias dikarang-karang saja ‘<Link href="https://www.abebooks.com/Konjo-Boatbuilders-Bugis-Prahus-South-Sulawesi/31351391101/bd" target="_blank" className="text-blue-600 underline">untuk membenarkan monopoli pembuatan perahu</Link>’ di daerah Bontobahari ….
                        </p>
                    </div>
                </motion.div>

                {/* Tombol Navigasi Bawah */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className='mt-auto pb-4 flex justify-between items-center'
                >
                    <Link href="/jalur-sawi" className='bg-white px-6 py-3 rounded-2xl shadow-md text-gray-800 font-bold active:scale-95 transition-transform'>
                        ← Kembali
                    </Link>
                    <Link href="/jalur-sawi/sawi-2" className='bg-[#f8c24a] px-6 py-3 rounded-2xl shadow-md text-gray-900 font-bold active:scale-95 transition-transform'>
                        Lanjut →
                    </Link>
                </motion.div>
            </div>

        </main>
    );
}
