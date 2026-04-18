'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const ImageSlider = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="w-full space-y-4">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-black/5">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                    >
                        <Image 
                            src={images[currentIndex]} 
                            alt={`Slide ${currentIndex + 1}`} 
                            fill 
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
            
            {/* Dot Indicators */}
            <div className="flex justify-center gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            currentIndex === index ? 'w-8 bg-gray-900' : 'w-2 bg-gray-900/30'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default function Sawi4V2() {
    const slide1Images = [
        '/sawi/slide/1.jpg',
        '/sawi/slide/2.jpg',
        '/sawi/slide/3.jpg',
        '/sawi/slide/4.jpg',
        '/sawi/slide/5.jpg',
        '/sawi/slide/6.jpg',
        '/sawi/slide/7.jpg',
        '/sawi/slide/8.jpg',
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
            <div className='relative z-10 p-6 md:hidden flex flex-col min-h-screen gap-10 overflow-y-auto pb-20'>
                {/* Image Slider 1 Tanpa Card */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInVariants}
                    className="mt-4"
                >
                    <ImageSlider images={slide1Images} />
                </motion.div>

                {/* Teks Cerita 1 Tanpa Card */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInVariants}
                    className='mt-4 space-y-8 text-lg text-gray-900 leading-relaxed font-bold text-justify'
                >
                    <p>
                        Bagi seorang pelaut Nusantara, kebanyakan jenis perahu dapat digolongkan dengan tiga cara: Ada istilah yang menandai jenis layarnya, ada yang menggambarkan bentuk lambung, dan ada pun yang berasal dari cara dan tujuan pemakaian perahu itu.
                    </p>
                    <p>
                        Ya, istilah-istilah kepelautan dan pelayaran agaknya rumit bagi orang yang awam akannya – tetapi bagaimana pun, bagi pelaut dan perajin perahu Nusantara perbedaan antara berbagai tipe perahu itu sejelas perbedaan antara rumah-rumah tradisional atau model-model mobil bagi ‘seorang darat’.
                    </p>
                </motion.div>

                {/* Image Slider 2 Tanpa Card */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInVariants}
                >
                    <ImageSlider images={slide2Images} />
                </motion.div>

                {/* Teks Cerita 2 Tanpa Card */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInVariants}
                    className='space-y-8 text-lg text-gray-900 leading-relaxed font-bold text-justify'
                >
                    <p>
                        Pembuatan kendaraan laut ‘asli Nusantara’ berbeda secara mendasar dari yang dibuat ‘secara Barat’: ‘Perahu’ Nusantara dibangun dengan menyusun (sebagian) lambungnya dari papan yang disambung dengan pengikat atau pasak sebelum memasang kerangkanya (&apos;gading-gading&apos;); ‘kapal’ yang bermodel ‘Barat’ dibuat dengan mendirikan dahulu gading-gadingnya yang berikutnya ‘dilapisi’ dengan papan.
                    </p>
                    <p>
                        Dengan ini, cara mengonsepkan konstruksinya pun berbeda – untuk merancang sebuah lambung, pengrajin perahu Nusantara menciptakan berbagai pola penyusunan papan, sementara di &apos;Barat&apos; bentuk sebuah kapal kayu ditentukan dengan rangkaian kurva yang dihasilkan gading-gadingnya.
                    </p>
                </motion.div>

                {/* Image Slider 3 Tanpa Card */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInVariants}
                >
                    <ImageSlider images={slide3Images} />
                </motion.div>

                {/* Teks Cerita 3 Tanpa Card */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInVariants}
                    className='space-y-8 text-lg text-gray-900 leading-relaxed font-bold text-justify'
                >
                    <p>
                        Berbeda pula dengan kebanyakan kapal layar historis buatan ‘Barat’ yang buritannya bersegi-empat, perahu-perahu tradisional Nusantara pada umumnya berburitan lancip; dan sementara lunas dan linggi, balok kayu haluan dan buritan kapal ‘Barat’ sering lurus dan dipasang secara bersudut, pada kebanyakan perahu Nusantara lunas dan linggi melengkung bak bulan yang baru.
                    </p>
                    <p>
                        Bagaimana pun, para pelaut dan pengrajin perahu sejak terdahulu “sangat tertarik akan penerapan berbagai inovasi yang memudahkan dan mengefisienkan lalu lintas laut. Dalam sektor masyarakat itu terdapat banyak orang yang bersedia dan berkemauan untuk berinovasi, dan [mereka] sama sekali tidak bekerja dengan mengikuti tradisi-tradisi saja” (1, hlm. 149) – alhasil, sudah jauh sebelum kedatangan para saudagar-advonturir Eropa mereka mengadopsi berbagai teknologi yang mereka saksikan pada kapal asal luar Nusantara, dan mengintegrasikannya dalam tradisi kemaritiman Nusantara yang sudah berlangsung ribuan tahun. Perpaduan berbagai teknologi inilah yang menjadi dasar bagi tipe-tipe perahu yang kini dapat kita temui.
                    </p>
                    <p className='text-lg font-bold text-gray-500 border-t border-black/10 pt-6 italic'>
                        Salah satu tugas program riset ini adalah mendokumentasikan jenis-jenis perahu Sulawesi Selatan, baik yang masih eksis maupun yang sudah tidak digunakan lagi.
                    </p>
                </motion.div>

                {/* Tombol Navigasi Bawah */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className='mt-4 flex justify-between items-center'
                >
                    <Link href="/jalur-sawi/sawi-3-v2" className='bg-white/90 px-6 py-3 rounded-2xl shadow-md text-gray-900 font-bold active:scale-95 transition-transform border border-black/5'>
                        ← Kembali
                    </Link>
                    <Link href="/jalur-sawi" className='bg-[#f8c24a] px-6 py-3 rounded-2xl shadow-md text-gray-900 font-bold active:scale-95 transition-transform border border-black/5'>
                        Selesai
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
