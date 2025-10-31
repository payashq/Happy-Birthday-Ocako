// Audio.jsx
import React, { useRef, forwardRef } from 'react';

// Menggunakan forwardRef agar Home bisa mengakses ref-nya
const Audio = forwardRef((props, ref) => {
  return (
    // Audio disembunyikan dan disiapkan untuk kontrol
    <audio ref={ref} loop preload="auto" className="hidden">
      {/* Pastikan file audio berada di folder '/public' Next.js/React */}
      <source src="/Vbg.m4a" type="audio/mpeg" />
      Browser Anda tidak mendukung elemen audio.
    </audio>
  );
});

Audio.displayName = 'Audio'; // Penting untuk forwardRef
export default Audio;