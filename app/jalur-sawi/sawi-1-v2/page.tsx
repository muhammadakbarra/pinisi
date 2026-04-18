'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

export default function Sawi1V2() {
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
            <div className='relative z-10 p-6 md:hidden flex flex-col min-h-screen gap-10'>
                {/* Teks Cerita Tanpa Card */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInVariants}
                    className='mt-4'
                >
                    <p className='text-lg text-gray-900 leading-relaxed font-bold text-justify'>
                        Hai Bestie – sudah pernah dengar bahwa perahu pinisi pertama dibangun oleh seorang pangeran asal Kerajaan Luwu di Sulawesi yang bernama Sawerigading? Alkisah, Sri Pangeran Gagah itu jatuh cinta sama adik kembarnya, dan sebab hal itu tidak diizinkan oleh adat-istiadat maka dia disuruh berlayar merantau demi mencari seorang puteri yang konon secantik adik kembarnya jauh-jauh di Cina sana. Sebuah perahu besar, ‘Waka Welenreng’, dibangun.
                    </p>
                </motion.div>

                {/* Foto & Konteks Tanpa Card */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInVariants}
                >
                    <div className='relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-3 shadow-lg'>
                        <Image 
                            src='/sawi/sawi-1.jpg'
                            alt='Perahu Sawerigading'
                            fill
                            className='object-cover'
                        />
                    </div>
                    <div className='px-2 text-gray-900'>
                        <p className='text-xs leading-snug font-bold'>
                            Perahu Sawerigading; naskah La Galigo satu-satunya yang dilengkapi dengan gambar, milik pribadi, Wajo
                        </p>
                        <p className='text-[10px] mt-1 italic font-medium'>
                            Sulawesi Selatan; foto oleh S. Koolhof
                        </p>
                    </div>
                </motion.div>

                {/* Teks Lanjutan Tanpa Card */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInVariants}
                    className='space-y-8'
                >
                    <div className='space-y-6 text-lg text-gray-900 leading-relaxed font-bold text-justify'>
                        <p>
                            untuknya; dan setelah <Link href="https://www.tokopedia.com/arena-buku-id/cinta-laut-dan-kekuasaan-dalam-epos-la-galigo-nurhayati-rahman" target="_blank" className="text-blue-700 underline decoration-2">menjalani berbagai petualangan</Link>, Sawerigading akhirnya berhasil meminang puteri yang bernama We Cudaiq itu ….
                        </p>
                        <p>
                            Suatu hari Sawerigading rindu akan kampung halamannya, dan ia memutuskan pulang bersama isterinya. Akan tetapi, karena pernah berjanji takkan kembali ke Luwu, ya, ketika mau melewati Tanjung Bira kapalnya dihantam ombak dan pecah … ada pecahan hanyut ke sini-situ, dan penduduk setempat mengumpul-kannya dan merakitnya ulang sehingga belajar caranya membuat dan melayarkan perahu pinisi. Ada pun beberapa versi cerita itu yang bisa Anda simak di <Link href="https://panrita.news/2017/10/18/mengenal-makna-ilahiah-dua-tiang-tujuh-layar-perahu-phinisi-bulukumba/" target="_blank" className="text-blue-700 underline decoration-2">sini</Link>, <Link href="https://ila-galigo.blogspot.com/2010/11/perahu-pinisi.html" target="_blank" className="text-blue-700 underline decoration-2">sini</Link>, atau <Link href="https://ila-galigo.blogspot.com/2010/11/perahu-pinisi.html" target="_blank" className="text-blue-700 underline decoration-2">sini</Link>.
                        </p>
                    </div>
                    
                    <p className='pt-6 border-t border-black/10 text-gray-800 italic font-bold text-justify leading-relaxed'>
                        Nah, bagaimana pun jua, kisah itu hanya cerita belaka – alias dikarang-karang saja ‘<Link href="https://www.abebooks.com/Konjo-Boatbuilders-Bugis-Prahus-South-Sulawesi/31351391101/bd" target="_blank" className="text-blue-700 underline decoration-2">untuk membenarkan monopoli pembuatan perahu</Link>’ di daerah Bontobahari ….
                    </p>
                </motion.div>

                {/* Tombol Navigasi Bawah */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className='mt-auto pb-4 flex justify-between items-center'
                >
                    <Link href="/jalur-sawi" className='bg-white/90 px-6 py-3 rounded-2xl shadow-md text-gray-900 font-bold active:scale-95 transition-transform border border-black/5'>
                        ← Kembali
                    </Link>
                    <Link href="/jalur-sawi/sawi-2-v2" className='bg-[#f8c24a] px-6 py-3 rounded-2xl shadow-md text-gray-900 font-bold active:scale-95 transition-transform border border-black/5'>
                        Lanjut →
                    </Link>
                </motion.div>
            </div>

        </main>
    );
}
