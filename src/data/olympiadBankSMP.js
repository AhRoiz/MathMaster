// OSN/Olympiad Quiz Bank - SMP (Sekolah Menengah Pertama)
// Soal-soal setara Olimpiade Sains Nasional tingkat SMP
// Mencakup: Aljabar, Geometri, Teori Bilangan, Kombinatorika

export const olympiadBankSMP = [
    // ==================== ALJABAR ====================
    { question: "Jika x + 1÷x = 5, maka nilai x² + 1÷x² adalah...", options: ["21", "23", "25", "27"], correctAnswer: 1 },
    { question: "Jika (a + b)² = 49 dan ab = 10, maka a² + b² adalah...", options: ["29", "39", "19", "59"], correctAnswer: 0 },
    { question: "Penyelesaian dari |2x - 3| = 7 adalah...", options: ["x = 5 atau x = -2", "x = 2 atau x = 5", "x = -5 atau x = 2", "x = 5 atau x = 2"], correctAnswer: 0 },
    { question: "Jika 3^x = 81, maka nilai 3^(x-2) adalah...", options: ["3", "9", "27", "81"], correctAnswer: 1 },
    { question: "Nilai dari √(50) + √(18) - √(8) adalah...", options: ["5√2", "6√2", "7√2", "8√2"], correctAnswer: 1 },
    { question: "Jika f(x) = 2x - 3, maka f(f(4)) adalah...", options: ["5", "7", "9", "11"], correctAnswer: 1 },
    { question: "Hasil dari (x² − 9)÷(x − 3) untuk x ≠ 3 adalah...", options: ["x − 3", "x + 3", "x² − 3", "3 − x"], correctAnswer: 1 },
    { question: "Jika log₂ 8 = a, maka log₂ 32 adalah...", options: ["a + 2", "2a", "5a/3", "a + 3"], correctAnswer: 0 },
    { question: "Akar-akar persamaan x² - 5x + k = 0 adalah p dan q. Jika p - q = 3, maka k = ...", options: ["4", "6", "8", "10"], correctAnswer: 0 },
    { question: "Nilai dari 1 + 2 + 4 + 8 + ... + 512 adalah...", options: ["1023", "1024", "1025", "2047"], correctAnswer: 0 },

    // ==================== TEORI BILANGAN ====================
    { question: "Sisa pembagian 2^100 oleh 7 adalah...", options: ["1", "2", "4", "6"], correctAnswer: 1 },
    { question: "Berapa banyak faktor positif dari 360?", options: ["20", "22", "24", "26"], correctAnswer: 2 },
    { question: "FPB dari 2^5 × 3^4 × 5² dan 2³ × 3^5 × 7 adalah...", options: ["2³ × 3⁴", "2⁵ × 3⁵", "2³ × 3⁴ × 5² × 7", "648"], correctAnswer: 0 },
    { question: "Jumlah semua faktor positif dari 28 adalah...", options: ["28", "42", "56", "84"], correctAnswer: 2 },
    { question: "Bilangan prima kembar yang terbesar di bawah 50 adalah...", options: ["29 dan 31", "41 dan 43", "47 dan 49", "37 dan 39"], correctAnswer: 1 },
    { question: "Angka satuan dari 7^2023 adalah...", options: ["1", "3", "7", "9"], correctAnswer: 1 },
    { question: "Berapa banyak bilangan bulat positif n < 100 sehingga n dan 100 relatif prima?", options: ["40", "50", "60", "80"], correctAnswer: 0 },
    { question: "Jika n! berakhiran dengan 6 angka 0, maka n terkecil adalah...", options: ["25", "28", "30", "24"], correctAnswer: 0 },
    { question: "Jumlah semua digit dari 10^50 - 1 adalah...", options: ["450", "500", "50", "49"], correctAnswer: 0 },
    { question: "Hasil dari 1! + 2! + 3! + ... + 10! mod 7 adalah...", options: ["0", "1", "5", "6"], correctAnswer: 2 },

    // ==================== GEOMETRI ====================
    { question: "Dalam segitiga ABC, sudut A = 40°, sudut B = 60°. Sudut luar di C adalah...", options: ["80°", "100°", "120°", "140°"], correctAnswer: 1 },
    { question: "Diagonal persegi panjang dengan panjang 12 cm dan lebar 5 cm adalah...", options: ["13 cm", "15 cm", "17 cm", "11 cm"], correctAnswer: 0 },
    { question: "Luas segitiga dengan sisi 13, 14, 15 cm (gunakan rumus Heron) adalah...", options: ["84 cm²", "91 cm²", "78 cm²", "105 cm²"], correctAnswer: 0 },
    { question: "Jika lingkaran luar segitiga siku-siku memiliki diameter 10 cm, sisi miring segitiga adalah...", options: ["5 cm", "10 cm", "20 cm", "15 cm"], correctAnswer: 1 },
    { question: "Volume bola yang luasnya sama dengan luas permukaan kubus bersisi 6 cm adalah...", options: ["36π cm³", "72π cm³", "108π cm³", "144π cm³"], correctAnswer: 0 },
    { question: "Panjang garis singgung dari titik berjarak 13 cm dari pusat lingkaran berjari-jari 5 cm adalah...", options: ["8 cm", "10 cm", "12 cm", "14 cm"], correctAnswer: 2 },
    { question: "Luas daerah yang dibatasi oleh tiga lingkaran berjari-jari sama yang saling bersinggungan adalah...", options: ["r²(√3 − π÷2)", "r²√3 − πr²÷2", "r²(3 − π)", "r²(2√3 − π)"], correctAnswer: 0 },
    { question: "Jumlah sudut dalam poligon yang jumlah diagonalnya 35 adalah...", options: ["1080°", "1260°", "1440°", "1620°"], correctAnswer: 1 },
    { question: "Tinggi segitiga sama sisi dengan keliling 18 cm adalah...", options: ["3√3 cm", "6√3 cm", "9 cm", "4,5√3 cm"], correctAnswer: 0 },
    { question: "Jika dua segitiga sebangun dengan perbandingan sisi 2:3, perbandingan luasnya adalah...", options: ["2:3", "4:9", "8:27", "1:1,5"], correctAnswer: 1 },

    // ==================== KOMBINATORIK & PELUANG ====================
    { question: "Berapa banyak cara menyusun huruf dalam kata 'MATEMATIKA'?", options: ["151.200", "302.400", "604.800", "75.600"], correctAnswer: 0 },
    { question: "Dari 10 siswa, berapa cara memilih ketua, wakil, dan sekretaris?", options: ["720", "120", "90", "1000"], correctAnswer: 0 },
    { question: "Peluang jumlah mata dadu dari 2 dadu = 7 adalah...", options: ["⅑", "⅙", "⁵⁄₃₆", "⁷⁄₃₆"], correctAnswer: 1 },
    { question: "Berapa banyak bilangan 4 digit yang semua digitnya genap?", options: ["500", "400", "625", "256"], correctAnswer: 0 },
    { question: "C(10,3) + C(10,4) = C(11,k). Nilai k adalah...", options: ["3", "4", "7", "Tidak ada"], correctAnswer: 1 },
    { question: "10 orang duduk melingkar. Berapa banyak susunan berbeda?", options: ["362.880", "3.628.800", "40.320", "10!"], correctAnswer: 0 },
    { question: "Peluang mendapat tepat 2 nilai 6 dari 3 pelemparan dadu adalah...", options: ["5/72", "25/216", "15/216", "5/216"], correctAnswer: 2 },
    { question: "Berapa banyak jalur terpendek dari (0,0) ke (4,3) pada grid?", options: ["35", "70", "21", "28"], correctAnswer: 0 },
    { question: "Dari 52 kartu, peluang dapat 5 kartu dengan hearts semua adalah...", options: ["33/66.640", "1287/2.598.960", "13/52⁵", "1/4165"], correctAnswer: 1 },
    { question: "Jika P(A) = 0,6 dan P(B) = 0,5, serta P(A∩B) = 0,3, maka P(A∪B) adalah...", options: ["0,7", "0,8", "0,9", "1,1"], correctAnswer: 1 },

    // ==================== FUNGSI & LOGIKA ====================
    { question: "Jika f(x+1) = x² - 1, maka f(3) adalah...", options: ["3", "5", "8", "0"], correctAnswer: 0 },
    { question: "Nilai minimum dari x² + 4x + 7 adalah...", options: ["3", "5", "7", "11"], correctAnswer: 0 },
    { question: "Jika f(x) = 2x + 1 dan g(x) = x², maka (g∘f)(2) adalah...", options: ["9", "25", "10", "17"], correctAnswer: 1 },
    { question: "Jika x + y = 10 dan xy = 21, maka x³ + y³ adalah...", options: ["370", "352", "468", "559"], correctAnswer: 0 },
    { question: "Jumlah semua nilai x yang memenuhi x² - |x| - 6 = 0 adalah...", options: ["0", "3", "-3", "6"], correctAnswer: 0 },
    { question: "Jika logₐ b = 2 dan log_b a = x, maka x adalah...", options: ["2", "½", "4", "−2"], correctAnswer: 1 },
    { question: "Nilai dari sin²30° + cos²60° adalah...", options: ["¼", "½", "¾", "1"], correctAnswer: 1 },
    { question: "Jika tan θ = ¾, maka sin θ + cos θ adalah...", options: ["⁷⁄₅", "1", "¹⁄₅", "⁵⁄₇"], correctAnswer: 0 },
    { question: "Gradien garis yang tegak lurus dengan 2x - 3y + 5 = 0 adalah...", options: ["-3/2", "3/2", "-2/3", "2/3"], correctAnswer: 0 },
    { question: "Titik potong garis y = 2x - 3 dan y = -x + 6 adalah...", options: ["(3, 3)", "(2, 1)", "(4, 5)", "(1, -1)"], correctAnswer: 0 }
];
