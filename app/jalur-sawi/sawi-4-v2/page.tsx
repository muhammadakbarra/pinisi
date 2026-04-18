'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const MuseumGrid = ({ images, allFull = false }: { images: string[], allFull?: boolean }) => {
    return (
        <div className="w-full grid grid-cols-2 gap-3 my-6 items-start">
            {images.map((src, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`${(allFull || index === 0) ? 'col-span-2' : 'col-span-1'} group`}
                >
                    <div className="relative w-full overflow-hidden rounded-xl shadow-lg border-2 border-white/50 bg-white">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                            src={src} 
                            alt="Gallery" 
                            className="w-full h-auto block"
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default function Sawi4V2() {
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
            <div className='fixed inset-0 z-0 opacity-40'>
                <Image src='/latar-belakang-lontara.jpeg' alt='BG' fill className='object-cover' priority />
            </div>

            <div className='relative z-10 p-6 md:hidden flex flex-col min-h-screen gap-10 overflow-y-auto pb-24'>
                {/* Section 1 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants} className="mt-4">
                    <MuseumGrid images={section1Images} />
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInVariants} className='space-y-8 text-lg text-gray-900 leading-relaxed font-bold text-justify'>
                    <p>
                        Bagi seorang pelaut Nusantara, kebanyakan jenis perahu dapat digolongkan dengan tiga cara: Ada istilah yang menandai jenis layarnya, ada yang menggambarkan bentuk lambung, dan ada pun yang berasal dari cara dan tujuan pemakaian perahu itu.
                    </p>
                    <p>
                        Ya, istilah-istilah kepelautan dan pelayaran agaknya rumit bagi orang yang awam akannya – tetapi bagaimana pun, bagi pelaut dan perajin perahu Nusantara perbedaan antara berbagai tipe perahu itu sejelas perbedaan antara rumah-rumah tradisional atau model-model mobil bagi ‘seorang darat’.
                    </p>
                </motion.div>

                {/* Section 2 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}>
                    <MuseumGrid images={section2Images} allFull />
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInVariants} className='space-y-8 text-lg text-gray-900 leading-relaxed font-bold text-justify'>
                    <p>
                        Pembuatan kendaraan laut ‘asli Nusantara’ berbeda secara mendasar dari yang dibuat ‘secara Barat’: ‘Perahu’ Nusantara dibangun dengan menyusun (sebagian) lambungnya dari papan yang disambung dengan pengikat atau pasak sebelum memasang kerangkanya (&apos;gading-gading&apos;).
                    </p>
                    <p>
                        Cara mengonsepkan konstruksinya pun berbeda – untuk merancang sebuah lambung, pengrajin perahu Nusantara menciptakan berbagai pola penyusunan papan, sementara di &apos;Barat&apos; bentuk sebuah kapal kayu ditentukan dengan rangkaian kurva gading-gadingnya.
                    </p>
                </motion.div>

                {/* Section 3 */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}>
                    <MuseumGrid images={section3Images} allFull />
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInVariants} className='space-y-8 text-lg text-gray-900 leading-relaxed font-bold text-justify'>
                    <p>
                        Berbeda pula dengan kebanyakan kapal layar historis buatan ‘Barat’ yang buritannya bersegi-empat, perahu-perahu tradisional Nusantara pada umumnya berburitan lancip; dan sementara lunas dan linggi, balok kayu haluan dan buritan kapal ‘Barat’ sering lurus dan dipasang secara bersudut, pada kebanyakan perahu Nusantara lunas dan linggi melengkung bak bulan yang baru.
                    </p>
                    <p>
                        Bagaimana pun, para pelaut dan pengrajin perahu sejak terdahulu “sangat tertarik akan penerapan berbagai inovasi yang memudahkan dan mengefisienkan lalu lintas laut. Dalam sektor masyarakat itu terdapat banyak orang yang bersedia dan berkemauan untuk berinovasi, dan [mereka] sama sekali tidak bekerja dengan mengikuti tradisi-tradisi saja” (1, hlm. 149).
                    </p>
                    <p className='text-lg font-bold text-gray-500 border-t border-black/10 pt-6 italic'>
                        Salah satu tugas program riset ini adalah mendokumentasikan jenis-jenis perahu Sulawesi Selatan, baik yang masih eksis maupun yang sudah tidak digunakan lagi.
                    </p>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className='mt-8 flex justify-between items-center'>
                    <Link href="/jalur-sawi/sawi-3-v2" className='bg-white/90 px-6 py-4 rounded-2xl shadow-md text-gray-900 font-bold active:scale-95 transition-transform border border-black/5'>← Kembali</Link>
                    <Link href="/jalur-sawi" className='bg-[#f8c24a] px-6 py-4 rounded-2xl shadow-md text-gray-900 font-bold active:scale-95 transition-transform border border-black/5'>Selesai</Link>
                </motion.div>
            </div>
        </main>
    );
}
