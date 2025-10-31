// page.jsx (Home.js)
"use client";
import Image from "next/image";
import { useState, useRef } from "react"; 
// Impor semua komponen
import Button1 from "./Components/Button1";
import Kocheng from './Components/Kocheng';
import Button2 from "./Components/Button2";
import TextType from "./Components/TextType";
import Audio from "./Components/Audio";
import Button3 from "./Components/Button3"; 

export default function Home() {
  const [clickCount, setClickCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); // State untuk status audio
  const audioRef = useRef(null); // Ref untuk elemen audio
  // NILAI AWAL DIUBAH MENJADI FALSE, agar Button3 bisa muncul saat isButton3Ready = true
  const [isHidden, setIsHidden] = useState(false); 

  const isButton3Ready = clickCount >= 3;
  const tampilkeun = clickCount >= 1;

  // --- Fungsi Baru: Menghentikan Audio saat Video Diklik ---
  const handleVideoClick = () => {
    if (isPlaying) {
        const audio = audioRef.current;
        audio.pause();
        setIsPlaying(false);
    }
    // Opsional: Untuk membuka video di layar penuh atau melakukan aksi lain, Anda bisa tambahkan di sini.
  };
  // --------------------------------------------------------

  // Data untuk Bagian Galeri Responsif (Dibiarkan tidak diubah)
  var galleryData = [
    { 
      id: 1, 
      text: "Tersenyum seperti tidak ada masalah. Padahal dompetnya kosong.", 
      imageSrc: "/poto.jpg", 
      reverse: false 
    },
    { 
      id: 2, 
      text: "ini pap ke jaja! bersama ocako aneh disuruh joging malah jalan", 
      imageSrc: "/jelek2.jpg", 
      reverse: true 
    },
    { 
      id: 3, 
      text: "Ini poto orang jelek yang pernah ada, untung cuma satu. (eh, ada 9 lagi)", 
      imageSrc: "/poto2.jpg", 
      reverse: false 
    },
    { 
      id: 4, 
      text: "anak babi", 
      imageSrc: "/icha'.jpg", 
      reverse: true 
    },
    { 
      id: 5, 
      text: "Satu-satunya hal yang lebih terang dari flash kamera adalah masa depan tukang fotonya.", 
      imageSrc: "/jelek2.jpg", 
      reverse: false 
    },
    { 
      id: 6, 
      text: "AOWKOWWOK INILOH ORANG YANG BERHARAP KACAMATA GW HILANG BIAR BISA CARI KACAMATA BARENG", 
      imageSrc: "/jelek3.jpg", 
      reverse: true 
    },
    { 
      id: 7, 
      text: "Momen ini membuktikan: Angle yang tepat tidak bisa menyelamatkan semuanya. Tapi yaudah lah ya.", 
      imageSrc: "/jelek4.jpg", 
      reverse: false 
    },
    { 
      id: 8, 
      text: "anjay ganteng", 
      imageSrc: "/jelek5.jpg", 
      reverse: true 
    },
    { 
      id: 9, 
      text: "ininih tba-tiba ada aja di galeri gw.. ewww", 
      imageSrc: "/jelek6.jpg", 
      reverse: false 
    },
    { 
      id: 10, 
      text: "disini lu buka hp gw -_ , auah males", 
      imageSrc: "/jelek7.jpg", 
      reverse: true 
    },
    { 
      id: 11, 
      text: "biasanya yang suka ambil makanan orang itu adalah monyet, tpi kok ini anjing seringg abisin makanann gw ya", 
      imageSrc: "/jelek8.jpg", 
      reverse: false 
    },
    { 
      id: 12, 
      text: "ini poto paling cantik yang pernah ada si", 
      imageSrc: "/jelek9.jpg", 
      reverse: true 
    },
  ];

  return (
    <>
    <div className="block top-0 left-0 w-full h-full -z-10 overflow-hidden">
      
      <div className=" min-h-screen flex flex-col items-center justify-center pt-20 pb-10 px-4 bg-gradient-to-b" style={{
        background: `
        radial-gradient(ellipse at 20% 30%, rgba(56, 189, 248, 0.4) 0%, transparent 60%),
        radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 70%),
        radial-gradient(ellipse at 60% 20%, rgba(236, 72, 153, 0.25) 0%, transparent 50%),
        radial-gradient(ellipse at 40% 80%, rgba(34, 197, 94, 0.2) 0%, transparent 65%)
      `,
      }}>
        <Audio ref={audioRef} /> 
        <div className="p-8 max-w-sm w-full 
                      bg-white/10          
                      backdrop-blur-md     
                      shadow-xl 
                      rounded-xl 
                      border border-white/30
                      text-white
                      text-center mb-20">
          <h1 className="font-bold text-6xl mb-4">Pasyas Tamvan</h1>
          <Kocheng/>
          <h1 className="font-bold text-2xl">Apakah pasyas tamvan?</h1>
          
          <div className="foot flex flex-col sm:flex-row gap-4 justify-center mt-5">
            <Button1/> 
            <Button2 clickCount={clickCount} setClickCount={setClickCount} />
          </div>
        </div>
        
        {isButton3Ready && !isHidden && ( 
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-sm px-4">
                <Button3 
                  audioRef={audioRef} 
                  isPlaying={isPlaying} 
                  setIsPlaying={setIsPlaying} 
                  setIsHidden={setIsHidden} 
                />
            </div>
        )}

      </div>
      
      {tampilkeun && (
          <div className="content-container block bg-gray-900 h-auto px-4 sm:px-10 lg:px-20 pt-10 pb-16">
        
          <div className="p-4 text-center mb-10 border-b border-gray-700">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-500 mb-4">
                ✨ Anjay Mabar ✨
            </h2>
            <TextType 
              text={["Dibuat oleh orang tertampan yang pernah anda temui.", "Semoga hari-harimu membaik dan dietnya lancar!"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="text-gray-200 text-lg font-mono"
            />
          </div>
          {galleryData.map(item => (
            <div 
              key={item.id} 
              className={`flex flex-col gap-6 mb-16 p-4  
                          md:flex-row md:items-center ${item.reverse ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-xs h-64 sm:h-80 rounded-lg overflow-hidden transform hover:scale-[1.02] transition duration-300 shadow-2xl">
                  <Image 
                    src={item.imageSrc} 
                    alt={`Gambar kenangan ${item.id}`} 
                    layout="fill" 
                    objectFit="cover" 
                    className="grayscale hover:grayscale-0 transition duration-500"
                  />
                </div>
              </div>
              
              <div className="md:w-1/2 p-4">
                <h3 className="text-2xl font-bold mb-3 text-amber-400">jelek</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        
          <div className="mt-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-500 mb-8 border-b border-gray-700 pb-4">
                  Video Khusus Anak ajg
              </h2>
              <div 
                  className="relative mx-auto w-full max-w-4xl h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-2xl cursor-pointer"
                  onClick={handleVideoClick} 
              >
                  <iframe
                      className="ancok justify-center top-0 left-0 w-250 h-110 pointer-events-none shadow-2xl rounded-xl absolute" 
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                      title="Video Spesial"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                  ></iframe>
              </div>
          </div>

        </div>
      )}
      
    </div>
    </>
  );
}