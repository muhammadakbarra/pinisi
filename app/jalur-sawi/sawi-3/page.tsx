'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

export default function Sawi3() {
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
            <div className='relative z-10 p-6 md:hidden flex flex-col min-h-screen gap-6 overflow-y-auto'>
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
                            Nah – bukan hanya petualangan Sawerigading, tetapi ada sekian banyak cerita lain yang mencoba menerangkan asal-usul kata dan perahu pinisi itu.
                        </p>
                        <p>
                            Ada, misalnya, klaim bahwa istilah itu berasal <Link href="https://www.kilat.com/nasional/84411145959/mengenal-kapal-pinisi-benda-warisan-budaya-dunia-yang-berasal-dari-sulawesi-selatan-berikut-sejarahnya" target="_blank" className="text-blue-600 underline">dari nama kota Venesia</Link>, salah satu pelabuhan historis Italia, dari mana mungkin ...
                        </p>
                    </div>
                </motion.div>

                {/* Card Foto Venesia */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInVariants}
                    className='bg-white/90 backdrop-blur-sm p-4 rounded-3xl shadow-xl border border-white/30'
                >
                    <div className='relative w-full aspect-[4/3] rounded-2xl overflow-hidden'>
                        <Image 
                            src='/sawi/sawi3.jpg'
                            alt='Peta Kota Venesia'
                            fill
                            className='object-cover'
                        />
                    </div>
                    <p className='text-[10px] text-gray-500 mt-2 text-center italic'>
                        Venesia; salah satu pusat maritim historis di Eropa
                    </p>
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
                            berasal jenis layar itu, atau yang pada zaman terdahulu sering dikunjungi pelaut Bira untuk menjual rempah-rempah Nusantara; ada yang menyebutkan bahwa <Link href="https://www.facebook.com/groups/168096826919034/posts/1033140220414686/" target="_blank" className="text-blue-600 underline">salah seorang raja Tallo</Link> awal abad ke-17 menamakan perahunya ‘pinisi’; dan ada pun yang berpendapat bahwa <Link href="https://bulukumbakab.go.id/rubrik/kapal-pinishi" target="_blank" className="text-blue-600 underline">kata ‘mappanisi’</Link>, ‘memakal [celah-celah antar papan lambung]’ dalam Bahasa Bugis. Akhir-akhir ini bahkan muncul cerita <Link href="https://arifuddinali.blogspot.com/2009/07/pearahu-pinisi.html" target="_blank" className="text-blue-600 underline">seseorang yang bernama Pinisi</Link> yang konon mengajarkan orang Bira cara membuat jenis layar penisi itu ...
                        </p>
                    </div>
                </motion.div>

                {/* Card Debunking & Tantangan */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInVariants}
                    className='bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-white/20'
                >
                    <div className='space-y-6 text-lg text-gray-800 leading-relaxed font-medium text-justify'>
                        <p>
                            Bagaimana deh – sayangnya tak satu dari terka-terkaan itu dapat dibuktikan: Kata ‘pinisi’ sama sekali tak terdapat dalam <Link href="https://lib.ui.ac.id/detail?id=20213248&lokasi=lokal" target="_blank" className="text-blue-600 underline">naskah-naskah Sulawesi Selatan</Link>, baik asal Makassar, Bugis maupun Mandar, yang dikarang sebelum abad ke-20 sehingga tak mungkin ada raja Makassar abad ke-17 yang menciptakannya; layar tipe sekunar <Link href="https://www.jstor.org/stable/41562610" target="_blank" className="text-blue-600 underline">tidak berasal dari Venesia</Link>, dan tidak pernah ada <Link href="https://www.archiviodistatovenezia.it/it/" target="_blank" className="text-blue-600 underline">Catatan</Link> bahwa perahu Sulawesi bersandar di pelabuhannya; ia pun tak terdapat dalam berbagai rekaman dan arsip Kompeni-Kompeni Hindia Timur <Link href="https://www.nationaalarchief.nl/onderzoeken/zoekhulpen/overzicht-van-voc-archieven-1594-1814" target="_blank" className="text-blue-600 underline">Belanda</Link> dan <Link href="https://www.eastindiacompany.amdigital.co.uk/" target="_blank" className="text-blue-600 underline">inggris</Link>; para tukang perahu di Bontobahari berbahasa Konjo, bukan Bugis, dan, ya, lambung <Link href="/jalur-sawi/sawi-4" className="text-blue-600 underline">tipe-tipe perahu</Link> lain seperti padewakang, pajala atau palari dipakal juga .... 
                        </p>
                        <p className='font-bold bg-yellow-100/50 p-4 rounded-2xl border-l-4 border-[#f8c24a]'>
                            Dan, sama dengan adanya ‘pinisi’ dalam naskah-naskah La Galigo, bila Bestie mendapatkan perahu pinisi Sulawesi dalam arsip-arsip pelabuhan Venesia atau Kompeni Dagang Belanda dan Inggris itu, laporkanlah, dan kami langsung berikan 10 juta lagi!
                        </p>
                        <p className='italic text-gray-600 border-t border-black/5 pt-4'>
                            Tapi ya, apakah entah pernah ada seorang yang bernama Pinisi yang nongkrong-nongkrong di Bira itu lain lagi ceritanya ....
                        </p>
                    </div>
                </motion.div>

                {/* Tombol Navigasi Bawah */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className='mt-4 pb-12 flex justify-between items-center'
                >
                    <Link href="/jalur-sawi/sawi-2-1" className='bg-white px-6 py-3 rounded-2xl shadow-md text-gray-800 font-bold active:scale-95 transition-transform'>
                        ← Kembali
                    </Link>
                    <Link href="/jalur-sawi/sawi-4" className='bg-[#f8c24a] px-6 py-3 rounded-2xl shadow-md text-gray-900 font-bold active:scale-95 transition-transform'>
                        Lanjut →
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
