// Button3.jsx
import React from "react";

// Terima prop 'setIsHidden'
export default function Button3({ audioRef, isPlaying, setIsPlaying, setIsHidden }) {
    
    const toggleAudio = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            // Jika sedang diputar, hentikan dan sembunyikan
            audio.pause();
            setIsPlaying(false);
            // Tambahkan logika untuk menyembunyikan Button3
            if (setIsHidden) {
                setIsHidden(true); 
            }
        } else {
            // Jika sedang dijeda, putar dan sembunyikan (biasanya Button3 hanya untuk memutar pertama kali)
            audio.play().then(() => {
                setIsPlaying(true);
                // Tambahkan logika untuk menyembunyikan Button3
                if (setIsHidden) {
                    setIsHidden(true);
                }
            }).catch(error => {
                console.error("Gagal memutar audio:", error);
            });
        }
    };

    return(
        <div 
            onClick={toggleAudio} // Event untuk mengontrol audio
            className={`kintil flex h-20 w-auto items-center justify-center text-white font-bold py-2 px-4 rounded-2xl mt-5 cursor-pointer transition-all duration-500 ease-in-out ${
                isPlaying ? 'bg-red-500' : 'bg-green-600' // Warna berubah sesuai status
            }`}
        >
            <h1 className="text-lg md:text-xl">
                {isPlaying ? 'Click Me!' : 'Click Me!'}
            </h1>
        </div>
    )
}