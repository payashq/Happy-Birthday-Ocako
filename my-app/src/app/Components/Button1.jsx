"use client";
import { useState } from "react";

export default function Button1() {
  const [clickCount, setClickCount] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  
  // daftar kata yang ingin ditampilkan
  const messages = ["Tidak!", "Yakin nih ngga?!", "yakin ga nyesel?"];

    const restartApp = () => {
    window.location.reload();
  }
  
  const handleClick = () => {
    setClickCount(prev => {
      const newCount = prev + 1;

      // kalau sudah diklik 3x, tombol hilang
      if (newCount >= 3) {
        setIsHidden(true);
        alert("ANJENG!");
        restartApp();
      }
      
      return newCount;
    });
  };

  return (
    <div
      onClick={handleClick}
      className={`flex h-auto w-auto items-center justify-center bg-gray-400 text-white font-bold py-2 px-4 rounded-2xl mt-5 cursor-pointer transition-all duration-500 ease-in-out ${
        isHidden
          ? "scale-0 opacity-0"
          : clickCount === 0
          ? "scale-100"
          : clickCount === 1
          ? "scale-80"
          : "scale-60"
      }`}
    >
      <h1 className="text-black font-mono">
        {messages[clickCount] || "Bye 👋"}
      </h1> 
      {/* cara menampilkan pesan sesuai jumlah klik */}
    </div>
  );
}
