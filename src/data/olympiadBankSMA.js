// OSN/Olympiad Quiz Bank - SMA (Sekolah Menengah Atas)
// Soal-soal setara Olimpiade Sains Nasional tingkat SMA
// Mencakup: Aljabar, Geometri, Teori Bilangan, Kombinatorika, Kalkulus

export const olympiadBankSMA = [
    // ==================== ALJABAR ====================
    { question: "Jika x + 1÷x = 3, maka x² + 1÷x² adalah...", options: ["5", "7", "9", "11"], correctAnswer: 1 },
    { question: "Jika x + y = 5 dan x² + y² = 17, maka xy adalah...", options: ["4", "6", "8", "10"], correctAnswer: 0 },
    { question: "Hasil dari (1 + i)(2 - i)(3 + 2i) untuk i² = -1 adalah...", options: ["11 + 7i", "13 + 9i", "9 + 13i", "7 + 11i"], correctAnswer: 2 },
    { question: "Jika |z - 2| = |z - 4i|, maka z terletak pada garis dengan persamaan...", options: ["x - 2y + 3 = 0", "x + 2y - 3 = 0", "2x + y - 6 = 0", "x - 2y - 3 = 0"], correctAnswer: 0 },
    { question: "Jumlah semua koefisien dari (2x - 3)^10 adalah...", options: ["1", "-1", "0", "(-1)^10"], correctAnswer: 1 },
    { question: "Jika α dan β akar dari x² - 5x + 3 = 0, maka α³ + β³ adalah...", options: ["80", "95", "110", "125"], correctAnswer: 0 },
    { question: "Nilai dari log₂ 3 × log₃ 4 × log₄ 8 adalah...", options: ["1", "2", "3", "4"], correctAnswer: 2 },
    { question: "Jika 2ˣ + 2⁻ˣ = 3, maka 4ˣ + 4⁻ˣ adalah...", options: ["5", "7", "9", "11"], correctAnswer: 1 },
    { question: "Jumlah deret 1 + 2x + 3x² + 4x³ + ... untuk |x| < 1 adalah...", options: ["1÷(1−x)²", "x÷(1−x)²", "(1+x)÷(1−x)²", "1÷(1−x)"], correctAnswer: 0 },
    { question: "Jika f(x) = x² + ax + b memiliki minimum di x = 2 dan f(2) = 3, maka a + b adalah...", options: ["-1", "3", "7", "11"], correctAnswer: 2 },

    // ==================== TEORI BILANGAN ====================
    { question: "Sisa pembagian 3^2023 oleh 5 adalah...", options: ["1", "2", "3", "4"], correctAnswer: 1 },
    { question: "Berapa banyak trailing zeros dari 100! ?", options: ["20", "24", "22", "26"], correctAnswer: 1 },
    { question: "Jika φ adalah fungsi Euler, maka φ(100) adalah...", options: ["40", "50", "60", "80"], correctAnswer: 0 },
    { question: "Banyaknya bilangan bulat positif n ≤ 2023 yang habis dibagi 3 atau 7 adalah...", options: ["770", "866", "963", "674"], correctAnswer: 1 },
    { question: "Jika gcd(a, b) = 12 dan lcm(a, b) = 360, maka a × b adalah...", options: ["3600", "4320", "5040", "2880"], correctAnswer: 1 },
    { question: "Angka satuan dari 2^1000 + 3^1000 adalah...", options: ["3", "5", "7", "9"], correctAnswer: 2 },
    { question: "Bilangan prima terbesar yang kurang dari 1000 adalah...", options: ["991", "997", "983", "977"], correctAnswer: 1 },
    { question: "Jumlah semua pembagi positif ganjil dari 360 adalah...", options: ["30", "42", "60", "78"], correctAnswer: 2 },
    { question: "n terkecil sehingga n! habis dibagi 2^10 adalah...", options: ["10", "11", "12", "13"], correctAnswer: 2 },
    { question: "Jika 10^n ≡ 1 (mod 7), maka n terkecil adalah...", options: ["3", "6", "7", "9"], correctAnswer: 1 },

    // ==================== GEOMETRI ====================
    { question: "Dalam segitiga dengan sisi 7, 8, 9, nilai cos dari sudut terbesar adalah...", options: ["⅓", "⅗", "⅙", "¹¹⁄₅₆"], correctAnswer: 1 },
    { question: "Luas segitiga dengan titik sudut (0,0), (4,0), (2,3) adalah...", options: ["6", "8", "10", "12"], correctAnswer: 0 },
    { question: "Jari-jari lingkaran dalam segitiga dengan sisi 3, 4, 5 adalah...", options: ["1", "2", "2,5", "1,5"], correctAnswer: 0 },
    { question: "Volume tetrahedron beraturan dengan rusuk 6 adalah...", options: ["18√2", "36√2", "72√2", "9√2"], correctAnswer: 0 },
    { question: "Jarak dari titik (1, 2, 2) ke bidang 2x + y - 2z + 3 = 0 adalah...", options: ["1", "2", "3", "4"], correctAnswer: 0 },
    { question: "Luas permukaan bola yang menyinggung semua rusuk kubus bersisi 2 adalah...", options: ["6π", "8π", "12π", "4π"], correctAnswer: 0 },
    { question: "Sudut antara diagonal ruang kubus dan diagonal sisi adalah...", options: ["30°", "45°", "arctan(√2)", "arctan(1/√2)"], correctAnswer: 3 },
    { question: "Jika vektor a = (1, 2, 3) dan b = (3, 2, 1), maka a × b adalah...", options: ["(-4, 8, -4)", "(4, -8, 4)", "(-4, -8, -4)", "(4, 8, 4)"], correctAnswer: 0 },
    { question: "Keliling elips dengan sumbu mayor 10 dan minor 6 (aproksimasi Ramanujan) kira-kira...", options: ["25,1", "50,2", "17,7", "35,4"], correctAnswer: 1 },
    { question: "Persamaan lingkaran yang melalui (0,0), (4,0), (0,6) adalah...", options: ["x² + y² - 4x - 6y = 0", "x² + y² + 4x + 6y = 0", "(x-2)² + (y-3)² = 13", "A dan C benar"], correctAnswer: 3 },

    // ==================== KOMBINATORIK & PELUANG ====================
    { question: "Koefisien x⁵ dalam ekspansi (1 + x)¹⁰ adalah...", options: ["210", "252", "120", "126"], correctAnswer: 1 },
    { question: "Berapa banyak anagram dari MISSISSIPPI?", options: ["34.650", "39.916.800", "11.880", "332.640"], correctAnswer: 0 },
    { question: "Dari 52 kartu, peluang dapat straight flush adalah...", options: ["1/64.974", "1/72.193", "1/649.740", "1/2.598.960"], correctAnswer: 0 },
    { question: "Catalan number ke-5, C₅ adalah...", options: ["14", "42", "132", "429"], correctAnswer: 1 },
    { question: "Berapa banyak cara membagi 12 orang menjadi 3 grup berisi 4 orang?", options: ["5775", "34.650", "15.400", "4620"], correctAnswer: 0 },
    { question: "Derangement dari 5 elemen, D₅ adalah...", options: ["44", "53", "45", "40"], correctAnswer: 0 },
    { question: "P(X = 3) jika X ~ Binomial(10, 0,4) adalah (pembulatan)...", options: ["0,215", "0,121", "0,250", "0,042"], correctAnswer: 0 },
    { question: "E[X] jika X ~ Poisson(λ = 5) adalah...", options: ["5", "25", "√5", "10"], correctAnswer: 0 },
    { question: "Berapa banyak pohon spanning dari graf lengkap K₄?", options: ["8", "12", "16", "24"], correctAnswer: 2 },
    { question: "Jumlah Σ k⋅C(n,k) untuk k=0 sampai n adalah...", options: ["n⋅2^(n-1)", "2^n", "n!", "n⋅2^n"], correctAnswer: 0 },

    // ==================== KALKULUS ====================
    { question: "lim(x→0) (sin 3x)÷(tan 2x) adalah...", options: ["¾", "⅔", "1", "0"], correctAnswer: 0 },
    { question: "lim(x→∞) (1 + 1÷x)ˣ adalah...", options: ["1", "e", "∞", "0"], correctAnswer: 1 },
    { question: "Turunan dari f(x) = xˣ untuk x > 0 adalah...", options: ["xˣ (1 + ln x)", "xˣ ln x", "x ⋅ xˣ⁻¹", "xˣ ÷ x"], correctAnswer: 0 },
    { question: "∫ ln x dx adalah...", options: ["x ln x − x + C", "x ln x + C", "ln x ÷ x + C", "1÷x + C"], correctAnswer: 0 },
    { question: "Jika f(x) = e^(sin x), maka f''(0) adalah...", options: ["0", "1", "-1", "e"], correctAnswer: 1 },
    { question: "Luas daerah antara y = x² dan y = x adalah...", options: ["⅙", "⅓", "½", "¼"], correctAnswer: 0 },
    { question: "Volume benda putar dari y = √x, 0 ≤ x ≤ 4 diputar terhadap sumbu x adalah...", options: ["4π", "8π", "16π", "2π"], correctAnswer: 1 },
    { question: "Σ (1÷n²) untuk n=1 sampai ∞ konvergen ke...", options: ["1", "π²÷6", "e", "ln 2"], correctAnswer: 1 },
    { question: "Deret Taylor dari eˣ di x = 0 koefisien x³ adalah...", options: ["½", "⅓", "⅙", "1"], correctAnswer: 2 },
    { question: "Jika y' = 2xy dengan y(0) = 1, maka y(1) adalah...", options: ["e", "e²", "1", "2e"], correctAnswer: 0 }
];
