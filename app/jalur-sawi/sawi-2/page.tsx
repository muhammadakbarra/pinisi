'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

export default function Sawi2() {
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
                {/* Card Teks Cerita 1 */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInVariants}
                    className='bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-white/20 mt-4'
                >
                    <div className='space-y-4 text-lg text-gray-800 leading-relaxed font-medium text-justify'>
                        <p>
                            Ya memang, kisah terpecahnya perahu Sawerigading di Tanjung Bira itu tidak terdapat dalam satu pun dari sekian ratus <Link href="https://brill.com/view/journals/bki/155/3/article-p362_3.xml?language=en" target="_blank" className="text-blue-600 underline">naskah siklus La Galigo</Link>: Dalam jalur ceritanya, Sawerigading akhirnya kembali ke Luwu dengan selamat, di mana ia dinobatkan <Link href="https://digitalcollections.universiteitleiden.nl/view/item/107930" target="_blank" className="text-blue-600 underline">menjadi penghulu Dunia Bawah</Link>, menggantikan pamannya.
                        </p>
                        <p>
                            Dan, ya, lagi – negeri ‘Cina’ yang ia tuju pada pelayarannya mencari jodoh <Link href="https://www.jstor.org/stable/26281594?seq=9" target="_blank" className="text-blue-600 underline">bukan Tiongkok</Link>, tetapi dalam teks-teks aslinya selalu dijuluki “Tana Ugi”, ‘<Link href="https://drive.google.com/open?id=1KuYlbDbleq7xoFMKA-Nopp65yBHT5a3P&usp=drive_fs" target="_blank" className="text-blue-600 underline">Tanah [Orang] Bugis</Link>’.
                        </p>
                    </div>
                </motion.div>

                {/* Card Teks Cerita 2 */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInVariants}
                    className='bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-white/20'
                >
                    <div className='space-y-4 text-lg text-gray-800 leading-relaxed font-medium text-justify'>
                        <p>
                            Nah, bukan itu saja – perahunya tidak dibangun oleh Sawerigading (atau, ya, manusia sekali pun), tetapi dibuat oleh pamannya, Sang Dewa Dunia Bawah, dengan kekuatan sihirnya.
                        </p>
                        <p>
                            Dan, dalam beribu-ribu halaman naskah La Galigo <Link href="https://www.scribd.com/doc/263321885/Berlayar-ke-Tompotikka-Suatu-Episode-La-Galigo" target="_blank" className="text-blue-600 underline">tidak sesekali pun</Link> muncul kata ‘pinisi’ – ada banyak jenis perahu, tetapi ‘pinisi’ tidak ada. Bahkan sudah pernah ada penawaran hadiah 10 juta Rupiah bagi yang bisa menunjukkan ‘pinisi’ dalam naskah-naskah La Galigo, tetapi sampai hari ini belum ada yang berani mengklaim uangnya.
                        </p>
                    </div>
                </motion.div>

                {/* Card Foto Potongan Berita */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInVariants}
                    className='bg-white/90 backdrop-blur-sm p-4 rounded-3xl shadow-xl border border-white/30'
                >
                    <div className='relative w-full aspect-[2.5/1] rounded-2xl overflow-hidden'>
                        <Image 
                            src='/sawi/sawi-2.png'
                            alt='Potongan Berita Hadiah 10 Juta'
                            fill
                            className='object-cover'
                        />
                    </div>
                </motion.div>

                {/* Card Tantangan 10 Juta */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInVariants}
                    className='bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-white/20'
                >
                    <p className='text-lg text-gray-800 leading-relaxed font-bold text-justify text-pretty'>
                        … Bestie pun boleh coba: Ini ada <Link href="https://digitalcollections.universiteitleiden.nl/view/item/29355#page/1/mode/1up" target="_blank" className="text-blue-600 underline">tautan</Link> ke naskah epos La Galigo paling lengkap yang ada. Kalau dapat, ya langsung hubungi kami, dan kami bayarkan 10 juta itu!
                    </p>
                </motion.div>

                {/* Tombol Navigasi Bawah */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className='mt-4 pb-12 flex justify-between items-center'
                >
                    <Link href="/jalur-sawi/sawi-1" className='bg-white px-6 py-3 rounded-2xl shadow-md text-gray-800 font-bold active:scale-95 transition-transform'>
                        ← Kembali
                    </Link>
                    <Link href="/jalur-sawi/sawi-2-1" className='bg-[#f8c24a] px-6 py-3 rounded-2xl shadow-md text-gray-900 font-bold active:scale-95 transition-transform'>
                        Lanjut →
                    </Link>
                </motion.div>
            </div>

        </main>
    );
}
