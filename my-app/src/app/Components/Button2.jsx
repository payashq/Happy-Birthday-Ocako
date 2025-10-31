// Button2.jsx (atau Button2.js)
"use client";
// Hapus import useState, Hapus import Button3 (karena Home yang akan merender)

// Terima props: hitungan saat ini dan fungsi untuk mengubah hitungan
export default function Button2({ clickCount, setClickCount }) {
  const messages = ["YUPPSS!", "bener nih?!", "😍😍😍😍"];

  const handleClick = () => {
    // Panggil setter function dari parent (Home)
    setClickCount(prev => {
      const newCount = prev + 1;

      // Hentikan penambahan hitungan setelah 3
      if (prev < 3) {
          return newCount;
      }
      return prev;
    });
  };

  // Logika tampilan Button2 tetap di sini: tombol hilang jika >= 3
  const isHidden = clickCount >= 3; 

  // Ambil pesan, pastikan tidak error jika count > messages.length
  let displayMessage = messages[clickCount] || "xixixixi";
  if (clickCount >= messages.length) {
      displayMessage = "xixixixi";
  }


  return (
    // Terapkan kondisi isHidden pada div Button2
    <div
      onClick={handleClick}
      className={`flex h-auto w-auto items-center justify-center bg-gray-400 text-white font-bold py-2 px-4 rounded-2xl cursor-pointer transition-all duration-500 ease-in-out ${
        isHidden
          ? "scale-0 opacity-0" // Logika menghilang
          : clickCount === 0
          ? "scale-100"
          : clickCount === 1
          ? "scale-120"
          : "scale-160 bg-pink-400" 
      }`}
    >
      <h1 className="text-black font-mono">
        {displayMessage}
      </h1> 
    </div>
  );
}