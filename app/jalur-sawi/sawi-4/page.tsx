'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ArchiveStack = ({ images }: { images: string[] }) => {
    return (
        <div className="relative w-full h-[350px] flex items-center justify-center my-12">
            {images.slice(0, 5).map((src, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, rotate: 0, y: 20 }}
                    whileInView={{ 
                        opacity: 1, 
                        rotate: (index % 2 === 0 ? 1 : -1) * (index * 3 + 2),
                        x: (index - 2) * 15,
                        y: index * 2
                    }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.7, type: 'spring' }}
                    className="absolute w-[80%] aspect-[4/3] bg-white p-3 pb-10 shadow-2xl border border-gray-100 rounded-sm"
                    style={{ zIndex: 10 - index }}
                >
                    <div className="relative w-full h-full overflow-hidden bg-gray-50 border border-gray-100">
                        <Image src={src} alt="Archive" fill className="object-cover" />
                    </div>
                    {index === 0 && (
                        <div className="absolute bottom-2 right-4 text-[10px] font-serif text-gray-400 italic">
                            Arsip Riset Pinisi #00{index + 1}
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    );
};

const ImageSlider = ({ images }: { images: string[] }) => {
    // Tetap simpan komponen slider lama untuk perbandingan di section bawah
    return (
        <div className="w-full space-y-4">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black/5">
                <Image src={images[0]} alt="Slide" fill className="object-cover" />
            </div>
        </div>
    );
};

export default function Sawi4() {
    const slide1Images = [
        '/sawi/slide/1.jpg',
        '/sawi/slide/2.jpg',
        '/sawi/slide/3.jpg',
        '/sawi/slide/4.jpg',
        '/sawi/slide/5.jpg',
    ];

    const slide2Images = [
        '/sawi/slide-2/1.jpg',
        '/sawi/slide-2/2.jpg',
    ];

    const slide3Images = [
        '/sawi/slide-2/3.png',
        '/sawi/slide-2/4.jpg',
    ];

    const fadeInVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
    };

    return (
        <main className='relative min-h-screen bg-[#f9f295] overflow-hidden font-serif'>
            <div className='absolute inset-0 z-0 opacity-40'>
                <Image src='/latar-belakang-lontara.jpeg' alt='BG' fill className='object-cover' priority />
            </div>

            <div className='relative z-10 p-6 md:hidden flex flex-col min-h-screen gap-6 overflow-y-auto pb-20'>
                {/* Section 1: Archive Stack Style */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}>
                    <ArchiveStack images={slide1Images} />
                    <p className="text-center text-[10px] text-gray-600 mt-2 font-bold italic">
                        (Saran #1: Tampilan Tumpukan Arsip Foto)
                    </p>
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInVariants} className='bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-white/20'>
                    <div className='space-y-4 text-lg text-gray-800 leading-relaxed font-medium text-justify'>
                        <p>
                            Bagi seorang pelaut Nusantara, kebanyakan jenis perahu dapat digolongkan dengan tiga cara: Ada istilah yang menandai jenis layarnya, ada yang menggambarkan bentuk lambung, dan ada pun yang berasal dari cara dan tujuan pemakaian perahu itu.
                        </p>
                    </div>
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}>
                    <ImageSlider images={slide2Images} />
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInVariants} className='bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-white/20'>
                    <div className='space-y-4 text-lg text-gray-800 leading-relaxed font-medium text-justify'>
                        <p>
                            Pembuatan kendaraan laut ‘asli Nusantara’ berbeda secara mendasar dari yang dibuat ‘secara Barat’: ‘Perahu’ Nusantara dibangun dengan menyusun (sebagian) lambungnya dari papan yang disambung dengan pengikat atau pasak sebelum memasang kerangkanya (&apos;gading-gading&apos;).
                        </p>
                    </div>
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}>
                    <ImageSlider images={slide3Images} />
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInVariants} className='bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-white/20'>
                    <div className='space-y-4 text-lg text-gray-800 leading-relaxed font-medium text-justify'>
                        <p className='text-gray-500 italic'>
                            Salah satu tugas program riset ini adalah mendokumentasikan jenis-jenis perahu Sulawesi Selatan, baik yang masih eksis maupun yang sudah tidak digunakan lagi.
                        </p>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className='mt-4 flex justify-between items-center'>
                    <Link href="/jalur-sawi/sawi-3" className='bg-white px-6 py-3 rounded-2xl shadow-md text-gray-800 font-bold active:scale-95 transition-transform'>← Kembali</Link>
                    <Link href="/jalur-sawi" className='bg-[#f8c24a] px-6 py-3 rounded-2xl shadow-md text-gray-900 font-bold active:scale-95 transition-transform'>Selesai</Link>
                </motion.div>
            </div>
        </main>
    );
}
