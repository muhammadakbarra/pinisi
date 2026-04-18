'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const MuseumGrid = ({ images, allFull = false }: { images: string[], allFull?: boolean }) => {
    return (
        <div className="w-full grid grid-cols-2 gap-4 my-8 items-start">
            {images.map((src, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`${(allFull || index === 0) ? 'col-span-2' : 'col-span-1'} group`}
                >
                    <div className="relative w-full rounded-2xl shadow-xl border-4 border-white bg-white overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                            src={src} 
                            alt="Gallery" 
                            className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default function Sawi4() {
    const section1Images = [
        '/sawi/slide/1.jpg',
        '/sawi/slide/2.jpg',
        '/sawi/slide/3.jpg',
        '/sawi/slide/4.jpg',
        '/sawi/slide/5.jpg',
        '/sawi/slide/6.jpg',
        '/sawi/slide/7.jpg',
    ];

    const section2Images = [
        '/sawi/slide-2/1.jpg',
        '/sawi/slide-2/2.jpg',
    ];

    const section3Images = [
        '/sawi/slide-2/3.png',
        '/sawi/slide-2/4.jpg',
    ];

    const fadeInVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
    };

    return (
        <main className='relative min-h-screen bg-[#f9f295] overflow-x-hidden font-serif'>
            {/* Background Texture */}
            <div className='absolute inset-0 z-0 opacity-40'>
                <Image src='/latar-belakang-lontara.jpeg' alt='BG' fill className='object-cover' priority />
            </div>

            <div className='relative z-10 p-6 md:hidden flex flex-col min-h-screen gap-6 overflow-y-auto pb-20'>
                {/* Section 1: Grid Campuran */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants} className="mt-4">
                    <MuseumGrid images={section1Images} />
                </motion.div>

                {/* Teks 1 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInVariants} className='bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-white/20'>
                    <div className='space-y-4 text-lg text-gray-800 leading-relaxed font-medium text-justify'>
                        <p>
                            Bagi seorang pelaut Nusantara, kebanyakan jenis perahu dapat digolongkan dengan tiga cara: Ada istilah yang menandai jenis layarnya, ada yang menggambarkan bentuk lambung, dan ada pun yang berasal dari cara dan tujuan pemakaian perahu itu.
                        </p>
                        <p>
                            Ya, istilah-istilah kepelautan dan pelayaran agaknya rumit bagi orang yang awam akannya – tetapi bagaimana pun, bagi pelaut and perajin perahu Nusantara perbedaan antara berbagai tipe perahu itu sejelas perbedaan antara rumah-rumah tradisional atau model-model mobil bagi ‘seorang darat’.
                        </p>
                    </div>
                </motion.div>

                {/* Section 2: 2 Foto Besar */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}>
                    <MuseumGrid images={section2Images} allFull />
                </motion.div>

                {/* Teks 2 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInVariants} className='bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-white/20'>
                    <div className='space-y-4 text-lg text-gray-800 leading-relaxed font-medium text-justify'>
                        <p>
                            Pembuatan kendaraan laut ‘asli Nusantara’ berbeda secara mendasar dari yang dibuat ‘secara Barat’: ‘Perahu’ Nusantara dibangun dengan menyusun (sebagian) lambungnya dari papan yang disambung dengan pengikat atau pasak sebelum memasang kerangkanya (&apos;gading-gading&apos;); ‘kapal’ yang bermodel ‘Barat’ dibuat dengan mendirikan dahulu gading-gadingnya yang berikutnya ‘dilapisi’ dengan papan.
                        </p>
                        <p>
                            Cara mengonsepkan konstruksinya pun berbeda – untuk merancang sebuah lambung, pengrajin perahu Nusantara menciptakan berbagai pola penyusunan papan, sementara di &apos;Barat&apos; bentuk sebuah kapal kayu ditentukan dengan rangkaian kurva yang dihasilkan gading-gadingnya.
                        </p>
                    </div>
                </motion.div>

                {/* Section 3: 2 Foto Besar */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}>
                    <MuseumGrid images={section3Images} allFull />
                </motion.div>

                {/* Teks Penutup */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInVariants} className='bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-white/20'>
                    <div className='space-y-4 text-lg text-gray-800 leading-relaxed font-medium text-justify'>
                        <p>
                            Berbeda pula dengan kebanyakan kapal layar historis buatan ‘Barat’ yang buritannya bersegi-empat, perahu-perahu tradisional Nusantara pada umumnya berburitan lancip; dan sementara lunas dan linggi, balok kayu haluan dan buritan kapal ‘Barat’ sering lurus dan dipasang secara bersudut, pada kebanyakan perahu Nusantara lunas dan linggi melengkung bak bulan yang baru.
                        </p>
                        <p>
                            Bagaimana pun, para pelaut dan pengrajin perahu sejak terdahulu “sangat tertarik akan penerapan berbagai inovasi yang memudahkan dan mengefisienkan lalu lintas laut. Dalam sektor masyarakat itu terdapat banyak orang yang bersedia dan berkemauan untuk berinovasi, dan [mereka] sama sekali tidak bekerja dengan mengikuti tradisi-tradisi saja” (1, hlm. 149).
                        </p>
                        <p className='text-gray-500 italic pt-4 border-t border-black/5 font-medium'>
                            Salah satu tugas program riset ini adalah mendokumentasikan jenis-jenis perahu Sulawesi Selatan, baik yang masih eksis maupun yang sudah tidak digunakan lagi.
                        </p>
                    </div>
                </motion.div>

                {/* Tombol Navigasi Bawah */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className='mt-4 flex justify-between items-center'>
                    <Link href="/jalur-sawi/sawi-3" className='bg-white px-6 py-3 rounded-2xl shadow-md text-gray-900 font-bold active:scale-95 transition-transform'>
                        ← Kembali
                    </Link>
                    <Link href="/jalur-sawi" className='bg-[#f8c24a] px-6 py-3 rounded-2xl shadow-md text-gray-900 font-bold active:scale-95 transition-transform'>
                        Selesai
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
