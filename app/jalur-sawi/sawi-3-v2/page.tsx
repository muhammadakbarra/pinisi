'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Sawi3V2() {
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
            <div className='relative z-10 p-6 md:hidden flex flex-col min-h-screen gap-10 overflow-y-auto pb-24'>
                {/* Teks Cerita 1 Tanpa Card */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInVariants}
                    className='mt-4 space-y-6 text-lg text-gray-900 leading-relaxed font-bold text-justify'
                >
                    <p>
                        Nah – bukan hanya petualangan Sawerigading, tetapi ada sekian banyak cerita lain yang mencoba menerangkan asal-usul kata dan perahu pinisi itu.
                    </p>
                    <p>
                        Ada, misalnya, klaim bahwa istilah itu berasal <Link href="https://www.kilat.com/nasional/84411145959/mengenal-kapal-pinisi-benda-warisan-budaya-dunia-yang-berasal-dari-sulawesi-selatan-berikut-sejarahnya" target="_blank" className="text-blue-700 underline decoration-2">dari nama kota Venesia</Link>, salah satu pelabuhan historis Italia, dari mana mungkin ...
                    </p>
                </motion.div>

                {/* Foto Venesia Tanpa Card */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInVariants}
                >
                    <div className='relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl'>
                        <Image 
                            src='/sawi/sawi3.jpg'
                            alt='Peta Kota Venesia'
                            fill
                            className='object-cover'
                        />
                    </div>
                    <p className='text-[10px] text-gray-800 mt-2 text-center italic font-bold'>
                        Venesia; salah satu pusat maritim historis di Eropa
                    </p>
                </motion.div>

                {/* Teks Cerita 2 Tanpa Card */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInVariants}
                    className='text-lg text-gray-900 leading-relaxed font-bold text-justify'
                >
                    <p>
                        berasal jenis layar itu, atau yang pada zaman terdahulu sering dikunjungi pelaut Bira untuk menjual rempah-rempah Nusantara; ada yang menyebutkan bahwa <Link href="https://www.facebook.com/groups/168096826919034/posts/1033140220414686/" target="_blank" className="text-blue-700 underline decoration-2">salah seorang raja Tallo</Link> awal abad ke-17 menamakan perahunya ‘pinisi’; dan ada pun yang berpendapat bahwa <Link href="https://bulukumbakab.go.id/rubrik/kapal-pinishi" target="_blank" className="text-blue-700 underline decoration-2">kata ‘mappanisi’</Link>, ‘memakal [celah-celah antar papan lambung]’ dalam Bahasa Bugis. Akhir-akhir ini bahkan muncul cerita <Link href="https://arifuddinali.blogspot.com/2009/07/pearahu-pinisi.html" target="_blank" className="text-blue-700 underline decoration-2">seseorang yang bernama Pinisi</Link> yang konon mengajarkan orang Bira cara membuat jenis layar penisi itu ...
                    </p>
                </motion.div>

                {/* Debunking & Tantangan Tanpa Card */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInVariants}
                    className='space-y-8'
                >
                    <p className='text-lg text-gray-900 leading-relaxed font-bold text-justify'>
                        Bagaimana deh – sayangnya tak satu dari terka-terkaan itu dapat dibuktikan: Kata ‘pinisi’ sama sekali tak terdapat dalam <Link href="https://lib.ui.ac.id/detail?id=20213248&lokasi=lokal" target="_blank" className="text-blue-700 underline decoration-2">naskah-naskah Sulawesi Selatan</Link>, baik asal Makassar, Bugis maupun Mandar, yang dikarang sebelum abad ke-20 sehingga tak mungkin ada raja Makassar abad ke-17 yang menciptakannya; layar tipe sekunar <Link href="https://www.jstor.org/stable/41562610" target="_blank" className="text-blue-700 underline decoration-2">tidak berasal dari Venesia</Link>, dan tidak pernah ada <Link href="https://www.archiviodistatovenezia.it/it/" target="_blank" className="text-blue-700 underline decoration-2">Catatan</Link> bahwa perahu Sulawesi bersandar di pelabuhannya; ia pun tak terdapat dalam berbagai rekaman dan arsip Kompeni-Kompeni Hindia Timur <Link href="https://www.nationaalarchief.nl/onderzoeken/zoekhulpen/overzicht-van-voc-archieven-1594-1814" target="_blank" className="text-blue-700 underline decoration-2">Belanda</Link> dan <Link href="https://www.eastindiacompany.amdigital.co.uk/" target="_blank" className="text-blue-700 underline decoration-2">inggris</Link>; para tukang perahu di Bontobahari berbahasa Konjo, bukan Bugis, dan, ya, lambung <Link href="/jalur-sawi/sawi-4-v2" className="text-blue-700 underline decoration-2">tipe-tipe perahu</Link> lain seperti padewakang, pajala atau palari dipakal juga .... 
                    </p>
                    <p className='text-xl text-gray-900 leading-relaxed font-black text-justify bg-black/5 p-6 rounded-3xl border-2 border-black/10'>
                        Dan, sama dengan adanya ‘pinisi’ dalam naskah-naskah La Galigo, bila Bestie mendapatkan perahu pinisi Sulawesi dalam arsip-arsip pelabuhan Venesia atau Kompeni Dagang Belanda dan Inggris itu, laporkanlah, and kami langsung berikan 10 juta lagi!
                    </p>
                    <p className='text-lg text-gray-800 italic font-bold text-justify leading-relaxed pt-6 border-t border-black/10'>
                        Tapi ya, apakah entah pernah ada seorang yang bernama Pinisi yang nongkrong-nongkrong di Bira itu lain lagi ceritanya ....
                    </p>
                </motion.div>

                {/* Tombol Navigasi Bawah */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className='mt-auto pb-12 flex justify-between items-center'
                >
                    <Link href="/jalur-sawi/sawi-2-1-v2" className='bg-white/90 px-6 py-3 rounded-2xl shadow-md text-gray-900 font-bold active:scale-95 transition-transform border border-black/5'>
                        ← Kembali
                    </Link>
                    <Link href="/jalur-sawi/sawi-4-v2" className='bg-[#f8c24a] px-6 py-3 rounded-2xl shadow-md text-gray-900 font-bold active:scale-95 transition-transform border border-black/5'>
                        Lanjut →
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
