// OSN/Olympiad Quiz Bank - SD (Sekolah Dasar)
// Soal-soal setara Olimpiade Sains Nasional tingkat SD
// Mencakup: Bilangan, Aritmatika, Geometri, Statistika, Kombinatorik

export const olympiadBankSD = [
    // ==================== ARITMATIKA & BILANGAN ====================
    { question: "Hasil dari (24 – 8) ÷ 4 + 5 × 2 adalah...", options: ["12", "14", "16", "18"], correctAnswer: 1 },
    { question: "1 jam 45 menit sama dengan berapa menit?", options: ["95", "100", "105", "115"], correctAnswer: 2 },
    { question: "Berat seekor kambing adalah 45 kg. Berapakah beratnya dalam gram?", options: ["4.500", "45.000", "450", "450.000"], correctAnswer: 1 },
    { question: "Bilangan bulat yang terletak di antara –5 dan 2 adalah sebanyak...", options: ["5", "6", "7", "8"], correctAnswer: 1 },
    { question: "FPB dari 15, 25, dan 35 adalah...", options: ["3", "5", "7", "15"], correctAnswer: 1 },
    { question: "KPK dari 8, 12, dan 18 adalah...", options: ["36", "72", "48", "144"], correctAnswer: 1 },
    { question: "Jika 3 orang dapat menyelesaikan pekerjaan dalam 12 hari, berapa hari yang dibutuhkan 4 orang?", options: ["8", "9", "10", "16"], correctAnswer: 1 },
    { question: "Hasil dari 123 × 45 + 123 × 55 adalah...", options: ["12.300", "11.070", "13.530", "10.000"], correctAnswer: 0 },
    { question: "Jika 25% dari suatu bilangan adalah 75, berapakah bilangan tersebut?", options: ["200", "250", "300", "225"], correctAnswer: 2 },
    { question: "Berapa banyak bilangan prima antara 1 dan 50?", options: ["13", "14", "15", "16"], correctAnswer: 2 },

    // ==================== POLA BILANGAN ====================
    { question: "Pola bilangan: 2, 6, 12, 20, 30, ... Bilangan selanjutnya adalah...", options: ["40", "42", "44", "46"], correctAnswer: 1 },
    { question: "Suku ke-10 dari barisan 3, 7, 11, 15, ... adalah...", options: ["39", "41", "43", "45"], correctAnswer: 0 },
    { question: "Jumlah 20 bilangan asli pertama (1+2+3+...+20) adalah...", options: ["200", "210", "220", "190"], correctAnswer: 1 },
    { question: "Jika pola: 1, 1, 2, 3, 5, 8, 13, ... maka suku ke-9 adalah...", options: ["21", "34", "55", "89"], correctAnswer: 1 },
    { question: "Hasil dari 1 + 3 + 5 + 7 + ... + 19 adalah...", options: ["90", "100", "110", "81"], correctAnswer: 1 },
    { question: "Bilangan segitiga ke-6 adalah...", options: ["15", "18", "21", "28"], correctAnswer: 2 },
    { question: "Pola: 1, 4, 9, 16, 25, ... adalah pola bilangan...", options: ["Fibonacci", "Kuadrat", "Prima", "Segitiga"], correctAnswer: 1 },
    { question: "Jumlah digit dari 10^100 adalah...", options: ["1", "100", "101", "1000"], correctAnswer: 2 },
    { question: "Berapa satuan dari 7^2023?", options: ["1", "3", "7", "9"], correctAnswer: 1 },
    { question: "Jika n! = 120, maka n = ...", options: ["4", "5", "6", "7"], correctAnswer: 1 },

    // ==================== GEOMETRI ====================
    { question: "Luas segitiga dengan alas 12 cm dan tinggi 8 cm adalah...", options: ["48 cm²", "96 cm²", "40 cm²", "60 cm²"], correctAnswer: 0 },
    { question: "Keliling persegi panjang dengan diagonal 10 cm dan lebar 6 cm adalah...", options: ["28 cm", "32 cm", "24 cm", "30 cm"], correctAnswer: 0 },
    { question: "Sebuah kubus memiliki volume 64 cm³. Luas permukaannya adalah...", options: ["64 cm²", "96 cm²", "128 cm²", "48 cm²"], correctAnswer: 1 },
    { question: "Jika jari-jari lingkaran 14 cm, luasnya (π = 22/7) adalah...", options: ["308 cm²", "616 cm²", "154 cm²", "88 cm²"], correctAnswer: 1 },
    { question: "Jumlah sudut dalam segi delapan beraturan adalah...", options: ["720°", "900°", "1080°", "1260°"], correctAnswer: 2 },
    { question: "Diagonal ruang kubus dengan rusuk 6 cm adalah...", options: ["6√2 cm", "6√3 cm", "12 cm", "18 cm"], correctAnswer: 1 },
    { question: "Luas daerah yang diarsir jika persegi besar bersisi 10 cm dengan lingkaran di dalamnya (π = 3,14) adalah...", options: ["21,5 cm²", "21,46 cm²", "22 cm²", "78,5 cm²"], correctAnswer: 1 },
    { question: "Berapa banyak diagonal yang dapat dibuat dari segi-8?", options: ["16", "20", "28", "24"], correctAnswer: 1 },
    { question: "Keliling lingkaran dengan luas 154 cm² (π = 22/7) adalah...", options: ["44 cm", "88 cm", "22 cm", "66 cm"], correctAnswer: 0 },
    { question: "Volume kerucut dengan jari-jari 7 cm dan tinggi 12 cm (π = 22/7) adalah...", options: ["308 cm³", "616 cm³", "924 cm³", "1232 cm³"], correctAnswer: 1 },

    // ==================== SOAL CERITA & LOGIKA ====================
    { question: "Dua pekerja mengecat rumah. Pak A butuh 5 jam sendiri, Pak B butuh 3 jam. Bersama-sama mereka butuh waktu...", options: ["1⅞ jam", "2 jam", "4 jam", "8 jam"], correctAnswer: 0 },
    { question: "Andi lebih tua 5 tahun dari Budi. Jumlah umur mereka 35 tahun. Umur Andi adalah...", options: ["15 tahun", "20 tahun", "25 tahun", "30 tahun"], correctAnswer: 1 },
    { question: "Harga 3 buku dan 2 pensil Rp 21.000. Harga 2 buku dan 3 pensil Rp 19.000. Harga 1 buku adalah...", options: ["Rp 5.000", "Rp 6.000", "Rp 4.000", "Rp 7.000"], correctAnswer: 0 },
    { question: "Kereta A berangkat jam 8 dengan kecepatan 60 km/jam. Kereta B berangkat jam 9 dengan kecepatan 80 km/jam. Kapan kereta B menyusul A?", options: ["Jam 11", "Jam 12", "Jam 10", "Jam 13"], correctAnswer: 1 },
    { question: "Dalam suatu kelas, 60% siswa lulus ujian. Jika yang tidak lulus 12 anak, berapa jumlah siswa?", options: ["20", "30", "40", "50"], correctAnswer: 1 },
    { question: "Perbandingan uang Ani dan Beni adalah 3:5. Jika selisihnya Rp 40.000, uang Ani adalah...", options: ["Rp 60.000", "Rp 80.000", "Rp 100.000", "Rp 120.000"], correctAnswer: 0 },
    { question: "Sebuah tangki berisi ¾ penuh. Setelah diisi 20 liter, menjadi ⅞ penuh. Kapasitas tangki adalah...", options: ["120 liter", "160 liter", "200 liter", "80 liter"], correctAnswer: 1 },
    { question: "Rata-rata nilai 5 anak adalah 80. Jika satu anak keluar (nilainya 70), rata-rata baru adalah...", options: ["82", "82,5", "83", "85"], correctAnswer: 1 },
    { question: "Modal Rp 500.000, untung 25%. Setelah diskon 10%, harga jual akhir adalah...", options: ["Rp 562.500", "Rp 625.000", "Rp 550.000", "Rp 575.000"], correctAnswer: 0 },
    { question: "Jika hari ini Rabu, 100 hari lagi adalah hari...", options: ["Sabtu", "Minggu", "Senin", "Jumat"], correctAnswer: 3 },

    // ==================== KOMBINATORIK & PELUANG ====================
    { question: "Berapa banyak bilangan 3 digit yang semua digitnya berbeda?", options: ["648", "720", "504", "600"], correctAnswer: 0 },
    { question: "Dari 5 warna, berapa cara memilih 2 warna berbeda?", options: ["10", "20", "25", "8"], correctAnswer: 0 },
    { question: "Berapa banyak cara menyusun huruf MAMA?", options: ["4", "6", "12", "24"], correctAnswer: 1 },
    { question: "Peluang mendapat mata dadu ganjil dari pelemparan 2 dadu dengan jumlah ganjil adalah...", options: ["¼", "½", "¾", "⅓"], correctAnswer: 1 },
    { question: "Berapa banyak cara membagi 10 anak menjadi 2 kelompok sama besar?", options: ["126", "252", "120", "210"], correctAnswer: 1 },
    { question: "Dari angka 1, 2, 3, 4, 5-berapa bilangan genap 3 digit yang bisa dibuat (tanpa pengulangan)?", options: ["24", "36", "48", "60"], correctAnswer: 0 },
    { question: "Berapa banyak persegi di papan catur 3×3?", options: ["9", "13", "14", "16"], correctAnswer: 2 },
    { question: "7 orang bersalaman masing-masing sekali. Total salaman adalah...", options: ["21", "28", "35", "42"], correctAnswer: 0 },
    { question: "Berapa banyak faktor positif dari 60?", options: ["10", "12", "14", "8"], correctAnswer: 1 },
    { question: "Jika koin dilempar 3 kali, peluang muncul tepat 2 gambar adalah...", options: ["¼", "⅜", "½", "⅛"], correctAnswer: 1 }
];
