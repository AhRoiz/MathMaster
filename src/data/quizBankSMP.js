// Quiz Bank Data - SMP (Sekolah Menengah Pertama)
// Minimal 10 pertanyaan per bab, quiz akan mengambil 5 soal secara random

export const quizBankSMP = {
    //  KELAS 7 
    "smp7-1": [ // Bilangan & Himpunan
        { question: "Hasil dari -5 + 12 adalah...", options: ["-7", "7", "17", "-17"], correctAnswer: 1 },
        { question: "Himpunan A = {1, 2, 3} dan B = {2, 3, 4}. A ∩ B = ...", options: ["{1, 2, 3, 4}", "{2, 3}", "{1, 4}", "{}"], correctAnswer: 1 },
        { question: "A ∪ B dari soal sebelumnya adalah...", options: ["{1, 2, 3, 4}", "{2, 3}", "{1}", "{}"], correctAnswer: 0 },
        { question: "-8 × (-3) = ...", options: ["-24", "-11", "11", "24"], correctAnswer: 3 },
        { question: "Jika A = {bilangan prima < 10}, maka n(A) = ...", options: ["3", "4", "5", "6"], correctAnswer: 1 },
        { question: "Komplemen dari A terhadap S adalah...", options: ["Anggota A saja", "Anggota S yang bukan A", "Gabungan A dan S", "Irisan A dan S"], correctAnswer: 1 },
        { question: "15 ÷ (-3) = ...", options: ["-5", "5", "-12", "12"], correctAnswer: 0 },
        { question: "Diagram yang menggambarkan hubungan antar himpunan adalah...", options: ["Diagram batang", "Diagram garis", "Diagram Venn", "Diagram lingkaran"], correctAnswer: 2 },
        { question: "Jika A ⊂ B, maka...", options: ["Semua anggota A ada di B", "Semua anggota B ada di A", "A dan B sama", "A dan B tidak beririsan"], correctAnswer: 0 },
        { question: "-12 - (-5) = ...", options: ["-17", "-7", "7", "17"], correctAnswer: 1 }
    ],
    "smp7-2": [ // Aljabar Dasar
        { question: "Bentuk sederhana dari 3x + 5x adalah...", options: ["8x", "15x", "8x²", "35x"], correctAnswer: 0 },
        { question: "Koefisien dari 7y² adalah...", options: ["y", "2", "7", "7y"], correctAnswer: 2 },
        { question: "Konstanta dari 5x + 3 adalah...", options: ["5", "x", "3", "5x"], correctAnswer: 2 },
        { question: "Hasil dari 2(3x + 4) adalah...", options: ["6x + 4", "6x + 8", "5x + 6", "6x + 6"], correctAnswer: 1 },
        { question: "Variabel dari 4ab + 2 adalah...", options: ["4", "ab", "2", "4ab"], correctAnswer: 1 },
        { question: "Bentuk sederhana 5x - 2x + 3x adalah...", options: ["6x", "8x", "10x", "0"], correctAnswer: 0 },
        { question: "(2x)(3x) = ...", options: ["5x", "6x", "5x²", "6x²"], correctAnswer: 3 },
        { question: "4x² + 2x² = ...", options: ["6x²", "6x⁴", "8x²", "8x⁴"], correctAnswer: 0 },
        { question: "Suku-suku sejenis dapat...", options: ["Dikalikan", "Dijumlahkan/dikurangkan", "Dibagi", "Dipangkatkan"], correctAnswer: 1 },
        { question: "5(x - 2) + 3x = ...", options: ["8x - 10", "8x - 2", "8x + 10", "2x - 10"], correctAnswer: 0 }
    ],
    "smp7-3": [ // PLSV
        { question: "Penyelesaian dari x + 5 = 12 adalah...", options: ["5", "7", "12", "17"], correctAnswer: 1 },
        { question: "Jika 2x = 14, maka x = ...", options: ["7", "12", "16", "28"], correctAnswer: 0 },
        { question: "Penyelesaian 3x - 4 = 11 adalah...", options: ["3", "5", "7", "15"], correctAnswer: 1 },
        { question: "Jika x/3 = 6, maka x = ...", options: ["2", "3", "9", "18"], correctAnswer: 3 },
        { question: "Penyelesaian 2(x + 3) = 16 adalah...", options: ["5", "6.5", "8", "10"], correctAnswer: 0 },
        { question: "Jika 5x + 3 = 3x + 11, maka x = ...", options: ["2", "4", "7", "8"], correctAnswer: 1 },
        { question: "Pertidaksamaan x > 5 memiliki penyelesaian...", options: ["x = 5", "x < 5", "x = 6, 7, 8, ...", "x = 4, 3, 2, ..."], correctAnswer: 2 },
        { question: "Jika 4x - 7 = x + 8, maka x = ...", options: ["3", "5", "7", "15"], correctAnswer: 1 },
        { question: "Penyelesaian -2x = 10 adalah...", options: ["-20", "-5", "5", "20"], correctAnswer: 1 },
        { question: "Jika 3(x - 2) = 2(x + 1), maka x = ...", options: ["4", "6", "8", "10"], correctAnswer: 2 }
    ],
    "smp7-4": [ // Aritmetika Sosial
        { question: "Harga beli Rp 50.000, harga jual Rp 60.000. Keuntungannya...", options: ["Rp 10.000", "Rp 50.000", "Rp 60.000", "Rp 110.000"], correctAnswer: 0 },
        { question: "Persentase keuntungan = ...", options: ["(Untung/Harga jual) × 100%", "(Untung/Harga beli) × 100%", "(Harga jual/Harga beli) × 100%", "(Harga beli/Untung) × 100%"], correctAnswer: 1 },
        { question: "Harga beli Rp 80.000, dijual Rp 72.000. Kerugiannya...", options: ["Rp 8.000", "Rp 72.000", "Rp 80.000", "Rp 152.000"], correctAnswer: 0 },
        { question: "Diskon 20% dari Rp 100.000 adalah...", options: ["Rp 20.000", "Rp 80.000", "Rp 100.000", "Rp 120.000"], correctAnswer: 0 },
        { question: "Harga setelah diskon 25% dari Rp 200.000 adalah...", options: ["Rp 25.000", "Rp 50.000", "Rp 150.000", "Rp 175.000"], correctAnswer: 2 },
        { question: "Bruto - Neto = ...", options: ["Bruto", "Neto", "Tara", "Diskon"], correctAnswer: 2 },
        { question: "Modal Rp 500.000, untung 20%. Harga jual...", options: ["Rp 100.000", "Rp 400.000", "Rp 520.000", "Rp 600.000"], correctAnswer: 3 },
        { question: "Bunga tunggal = ...", options: ["Modal × Bunga × Waktu", "Modal + Bunga + Waktu", "Modal × Bunga / Waktu", "(Modal × Bunga) / 100"], correctAnswer: 0 },
        { question: "Tabungan Rp 1.000.000 dengan bunga 12%/tahun. Bunga 1 tahun...", options: ["Rp 12.000", "Rp 120.000", "Rp 1.012.000", "Rp 1.120.000"], correctAnswer: 1 },
        { question: "Pajak pertambahan nilai (PPN) biasanya...", options: ["5%", "10%", "15%", "20%"], correctAnswer: 1 }
    ],
    "smp7-5": [ // Garis & Sudut
        { question: "Dua garis yang tidak pernah bertemu disebut...", options: ["Berpotongan", "Berimpit", "Sejajar", "Bersilangan"], correctAnswer: 2 },
        { question: "Sudut yang saling berpelurus jumlahnya...", options: ["90°", "180°", "270°", "360°"], correctAnswer: 1 },
        { question: "Sudut yang saling berpenyiku jumlahnya...", options: ["90°", "180°", "270°", "360°"], correctAnswer: 0 },
        { question: "Dua sudut bertolak belakang besarnya...", options: ["Berbeda", "Sama besar", "Jumlahnya 90°", "Jumlahnya 180°"], correctAnswer: 1 },
        { question: "Sudut sehadap pada dua garis sejajar dipotong transversal...", options: ["Berbeda", "Sama besar", "Jumlahnya 90°", "Jumlahnya 180°"], correctAnswer: 1 },
        { question: "Sudut dalam berseberangan pada garis sejajar...", options: ["Berbeda", "Sama besar", "Jumlahnya 90°", "Jumlahnya 180°"], correctAnswer: 1 },
        { question: "Sudut dalam sepihak pada garis sejajar jumlahnya...", options: ["90°", "180°", "270°", "360°"], correctAnswer: 1 },
        { question: "Jika sudut A = 65°, sudut pelurus A = ...", options: ["25°", "65°", "115°", "295°"], correctAnswer: 2 },
        { question: "Jika sudut B = 40°, sudut penyiku B = ...", options: ["40°", "50°", "140°", "320°"], correctAnswer: 1 },
        { question: "Dua garis yang berpotongan membentuk ... sudut", options: ["2", "3", "4", "5"], correctAnswer: 2 }
    ],

    //  KELAS 8 
    "smp8-1": [ // Pola Bilangan
        { question: "Suku ke-5 dari barisan 2, 5, 8, 11, ... adalah...", options: ["13", "14", "15", "17"], correctAnswer: 1 },
        { question: "Beda dari barisan 3, 7, 11, 15, ... adalah...", options: ["3", "4", "7", "11"], correctAnswer: 1 },
        { question: "Rumus suku ke-n barisan aritmatika adalah...", options: ["a + (n−1)b", "a × bⁿ", "a + nb", "a × n"], correctAnswer: 0 },
        { question: "Suku ke-10 dari barisan 5, 8, 11, 14, ... adalah...", options: ["29", "32", "35", "38"], correctAnswer: 1 },
        { question: "Barisan 2, 6, 18, 54, ... adalah barisan...", options: ["Aritmatika", "Geometri", "Fibonacci", "Prima"], correctAnswer: 1 },
        { question: "Rasio dari barisan 3, 6, 12, 24, ... adalah...", options: ["2", "3", "6", "12"], correctAnswer: 0 },
        { question: "Suku ke-4 dari barisan 2, 4, 8, 16, ... adalah...", options: ["8", "16", "32", "64"], correctAnswer: 1 },
        { question: "Pola bilangan segitiga: 1, 3, 6, 10, ... suku ke-5 adalah...", options: ["12", "13", "14", "15"], correctAnswer: 3 },
        { question: "Barisan Fibonacci: 1, 1, 2, 3, 5, 8, ... suku ke-7 adalah...", options: ["11", "12", "13", "14"], correctAnswer: 2 },
        { question: "Jika suku pertama = 4 dan beda = 3, suku ke-6 adalah...", options: ["16", "19", "22", "25"], correctAnswer: 1 }
    ],
    "smp8-2": [ // Koordinat Kartesius
        { question: "Titik (4, -3) terletak di kuadran...", options: ["I", "II", "III", "IV"], correctAnswer: 3 },
        { question: "Titik yang terletak pada sumbu X memiliki ordinat...", options: ["Positif", "Negatif", "Nol", "Tak hingga"], correctAnswer: 2 },
        { question: "Jarak titik (3, 0) ke titik asal adalah...", options: ["0", "3", "6", "9"], correctAnswer: 1 },
        { question: "Titik (-5, -2) terletak di kuadran...", options: ["I", "II", "III", "IV"], correctAnswer: 2 },
        { question: "Titik tengah dari (2, 4) dan (6, 8) adalah...", options: ["(4, 6)", "(8, 12)", "(3, 5)", "(4, 4)"], correctAnswer: 0 },
        { question: "Titik (0, 5) terletak pada...", options: ["Sumbu X", "Sumbu Y", "Kuadran I", "Kuadran II"], correctAnswer: 1 },
        { question: "Jarak antara (1, 2) dan (4, 6) adalah...", options: ["3", "4", "5", "7"], correctAnswer: 2 },
        { question: "Pencerminan titik (3, 2) terhadap sumbu Y adalah...", options: ["(-3, 2)", "(3, -2)", "(-3, -2)", "(2, 3)"], correctAnswer: 0 },
        { question: "Titik (a, b) dengan a > 0 dan b > 0 terletak di kuadran...", options: ["I", "II", "III", "IV"], correctAnswer: 0 },
        { question: "Absis titik (-7, 5) adalah...", options: ["5", "7", "-5", "-7"], correctAnswer: 3 }
    ],
    "smp8-3": [ // Relasi Fungsi
        { question: "Relasi yang memasangkan tepat satu anggota domain ke kodomain disebut...", options: ["Himpunan", "Relasi", "Fungsi", "Korespondensi"], correctAnswer: 2 },
        { question: "Domain dari fungsi adalah...", options: ["Himpunan hasil", "Daerah asal", "Daerah kawan", "Range"], correctAnswer: 1 },
        { question: "Jika f(x) = 2x + 3, maka f(4) = ...", options: ["8", "11", "14", "20"], correctAnswer: 1 },
        { question: "Kodomain disebut juga...", options: ["Daerah asal", "Daerah kawan", "Daerah hasil", "Range"], correctAnswer: 1 },
        { question: "Jika f(x) = x² - 1, maka f(3) = ...", options: ["4", "6", "8", "10"], correctAnswer: 2 },
        { question: "Range adalah...", options: ["Seluruh kodomain", "Anggota kodomain yang punya pasangan", "Seluruh domain", "Daerah asal"], correctAnswer: 1 },
        { question: "Jika f(x) = 3x - 5, maka f(-2) = ...", options: ["-11", "-1", "1", "11"], correctAnswer: 0 },
        { question: "Fungsi f: x → 2x + 1 sama dengan...", options: ["f(x) = x + 1", "f(x) = 2x + 1", "f(x) = 2x - 1", "f(x) = x + 2"], correctAnswer: 1 },
        { question: "Jika f(x) = x² dan g(x) = x + 2, maka f(g(1)) = ...", options: ["3", "5", "9", "11"], correctAnswer: 2 },
        { question: "Banyaknya fungsi dari A = {1, 2} ke B = {a, b} adalah...", options: ["2", "4", "6", "8"], correctAnswer: 1 }
    ],
    "smp8-4": [ // Persamaan Garis
        { question: "Gradien garis y = 3x + 2 adalah...", options: ["2", "3", "5", "6"], correctAnswer: 1 },
        { question: "Persamaan garis dengan gradien 2 melalui titik (0, 5) adalah...", options: ["y = 2x + 5", "y = 5x + 2", "y = 2x - 5", "y = 5x - 2"], correctAnswer: 0 },
        { question: "Gradien garis melalui (1, 2) dan (3, 8) adalah...", options: ["2", "3", "4", "6"], correctAnswer: 1 },
        { question: "Dua garis sejajar memiliki gradien yang...", options: ["Berbeda", "Sama", "Berlawanan", "Hasil kalinya -1"], correctAnswer: 1 },
        { question: "Gradien garis 2x + y = 8 adalah...", options: ["-2", "2", "4", "8"], correctAnswer: 0 },
        { question: "Dua garis tegak lurus memiliki gradien yang hasil kalinya...", options: ["0", "1", "-1", "2"], correctAnswer: 2 },
        { question: "Garis y = -x + 3 melalui titik...", options: ["(0, 3)", "(3, 0)", "(0, -3)", "A dan B benar"], correctAnswer: 3 },
        { question: "Persamaan garis melalui (2, 1) dengan gradien 3 adalah...", options: ["y = 3x - 5", "y = 3x + 5", "y = 3x - 1", "y = 3x + 1"], correctAnswer: 0 },
        { question: "Titik potong garis y = 2x + 4 dengan sumbu Y adalah...", options: ["(0, 2)", "(0, 4)", "(2, 0)", "(4, 0)"], correctAnswer: 1 },
        { question: "Garis yang sejajar dengan y = 4x + 1 adalah...", options: ["y = -4x + 2", "y = 4x - 3", "y = x + 4", "y = -x/4 + 1"], correctAnswer: 1 }
    ],
    "smp8-5": [ // Pythagoras
        { question: "Pada segitiga siku-siku dengan sisi 3, 4, 5, sisi miringnya adalah...", options: ["3", "4", "5", "12"], correctAnswer: 2 },
        { question: "Rumus Pythagoras adalah...", options: ["a + b = c", "a² + b² = c²", "a × b = c", "a² - b² = c²"], correctAnswer: 1 },
        { question: "Sisi miring segitiga dengan sisi siku-siku 6 dan 8 adalah...", options: ["10", "14", "48", "100"], correctAnswer: 0 },
        { question: "Jika sisi miring = 13 dan satu sisi = 5, sisi lainnya...", options: ["8", "12", "18", "144"], correctAnswer: 1 },
        { question: "Triple Pythagoras yang benar adalah...", options: ["3, 4, 6", "5, 12, 13", "6, 7, 8", "8, 9, 10"], correctAnswer: 1 },
        { question: "Segitiga dengan sisi 5, 12, 13 adalah segitiga...", options: ["Lancip", "Tumpul", "Siku-siku", "Sama sisi"], correctAnswer: 2 },
        { question: "Diagonal persegi dengan sisi 1 adalah...", options: ["1", "√2", "2", "√3"], correctAnswer: 1 },
        { question: "Tinggi segitiga sama sisi dengan sisi 6 adalah...", options: ["3", "3√3", "6", "6√3"], correctAnswer: 1 },
        { question: "Jika a² + b² < c², segitiga tersebut...", options: ["Lancip", "Siku-siku", "Tumpul", "Sama kaki"], correctAnswer: 2 },
        { question: "Jika a² + b² > c², segitiga tersebut...", options: ["Lancip", "Siku-siku", "Tumpul", "Sama sisi"], correctAnswer: 0 }
    ],
    "smp8-6": [ // Lingkaran
        { question: "Sudut pusat yang menghadap busur yang sama dengan sudut keliling adalah...", options: ["Sama besar", "Setengah sudut keliling", "Dua kali sudut keliling", "Tiga kali sudut keliling"], correctAnswer: 2 },
        { question: "Sudut keliling yang menghadap diameter adalah...", options: ["45°", "90°", "180°", "360°"], correctAnswer: 1 },
        { question: "Panjang busur = ... × keliling", options: ["Sudut pusat / 360°", "Sudut pusat / 180°", "360° / Sudut pusat", "Sudut pusat × 2"], correctAnswer: 0 },
        { question: "Luas juring = ... × luas lingkaran", options: ["Sudut pusat / 360°", "Sudut pusat / 180°", "360° / Sudut pusat", "Sudut pusat × 2"], correctAnswer: 0 },
        { question: "Garis singgung lingkaran ... dengan jari-jari di titik singgung", options: ["Sejajar", "Berimpit", "Tegak lurus", "Berpotongan miring"], correctAnswer: 2 },
        { question: "Jika sudut pusat = 60° dan jari-jari = 6 cm, panjang busur (π = 3,14)...", options: ["3,14 cm", "6,28 cm", "12,56 cm", "18,84 cm"], correctAnswer: 1 },
        { question: "Sudut keliling yang menghadap busur sama adalah...", options: ["Berbeda", "Sama besar", "Dobel", "Setengah"], correctAnswer: 1 },
        { question: "Dua garis singgung dari titik luar ke lingkaran...", options: ["Berbeda panjang", "Sama panjang", "Tegak lurus", "Sejajar"], correctAnswer: 1 },
        { question: "Jumlah sudut segi empat tali busur adalah...", options: ["180°", "270°", "360°", "540°"], correctAnswer: 2 },
        { question: "Jika jari-jari = 7 cm dan sudut pusat = 90°, luas juring (π = 22/7)...", options: ["38,5 cm²", "77 cm²", "154 cm²", "308 cm²"], correctAnswer: 0 }
    ],

    //  KELAS 9 
    "smp9-1": [ // Pangkat & Akar
        { question: "2⁵ = ...", options: ["10", "25", "32", "64"], correctAnswer: 2 },
        { question: "√144 = ...", options: ["11", "12", "13", "14"], correctAnswer: 1 },
        { question: "3⁻² = ...", options: ["-9", "-6", "⅑", "9"], correctAnswer: 2 },
        { question: "(2³)² = ...", options: ["12", "32", "64", "128"], correctAnswer: 2 },
        { question: "∛27 = ...", options: ["3", "9", "27", "81"], correctAnswer: 0 },
        { question: "5⁰ = ...", options: ["0", "1", "5", "Tidak terdefinisi"], correctAnswer: 1 },
        { question: "2⁴ × 2³ = ...", options: ["2⁷", "2¹²", "4⁷", "4¹²"], correctAnswer: 0 },
        { question: "√50 dapat disederhanakan menjadi...", options: ["5√2", "2√5", "10√5", "25√2"], correctAnswer: 0 },
        { question: "8^(2/3) = ...", options: ["2", "4", "8", "16"], correctAnswer: 1 },
        { question: "√12 + √27 = ...", options: ["√39", "5√3", "6√3", "39"], correctAnswer: 1 }
    ],
    "smp9-2": [ // Persamaan Kuadrat
        { question: "Akar-akar persamaan x² - 5x + 6 = 0 adalah...", options: ["2 dan 3", "-2 dan -3", "1 dan 6", "-1 dan -6"], correctAnswer: 0 },
        { question: "Rumus ABC untuk ax² + bx + c = 0 adalah x = ...", options: ["(−b ± √(b²−4ac))÷2a", "(b ± √(b²−4ac))÷2a", "(−b ± √(b²+4ac))÷2a", "(−b ± √(4ac−b²))÷2a"], correctAnswer: 0 },
        { question: "Diskriminan persamaan kuadrat adalah...", options: ["b² − 4ac", "b² + 4ac", "4ac − b²", "−b÷2a"], correctAnswer: 0 },
        { question: "Jika D < 0, persamaan kuadrat memiliki...", options: ["2 akar real berbeda", "2 akar real sama", "Tidak ada akar real", "1 akar real"], correctAnswer: 2 },
        { question: "Jumlah akar-akar x² - 7x + 12 = 0 adalah...", options: ["3", "5", "7", "12"], correctAnswer: 2 },
        { question: "Hasil kali akar-akar x² - 7x + 12 = 0 adalah...", options: ["3", "5", "7", "12"], correctAnswer: 3 },
        { question: "Akar-akar persamaan x² - 4 = 0 adalah...", options: ["2 dan 2", "-2 dan 2", "4 dan -4", "1 dan 4"], correctAnswer: 1 },
        { question: "Persamaan kuadrat dengan akar 3 dan 5 adalah...", options: ["x² - 8x + 15 = 0", "x² + 8x + 15 = 0", "x² - 8x - 15 = 0", "x² + 8x - 15 = 0"], correctAnswer: 0 },
        { question: "Diskriminan dari x² + 4x + 4 = 0 adalah...", options: ["-16", "0", "16", "32"], correctAnswer: 1 },
        { question: "Jika D = 0, persamaan kuadrat memiliki...", options: ["2 akar berbeda", "2 akar sama (kembar)", "Tidak ada akar", "3 akar"], correctAnswer: 1 }
    ],
    "smp9-3": [ // Transformasi
        { question: "Pencerminan titik (2, 3) terhadap sumbu X adalah...", options: ["(-2, 3)", "(2, -3)", "(-2, -3)", "(3, 2)"], correctAnswer: 1 },
        { question: "Translasi titik (1, 2) oleh (3, 4) menghasilkan...", options: ["(4, 6)", "(-2, -2)", "(3, 8)", "(4, 4)"], correctAnswer: 0 },
        { question: "Rotasi 90° searah jarum jam terhadap titik asal mengubah (x, y) menjadi...", options: ["(-y, x)", "(y, -x)", "(-x, -y)", "(-x, y)"], correctAnswer: 1 },
        { question: "Dilatasi dengan pusat O dan faktor skala 2 mengubah (3, 4) menjadi...", options: ["(6, 8)", "(1.5, 2)", "(5, 6)", "(9, 16)"], correctAnswer: 0 },
        { question: "Pencerminan terhadap garis y = x mengubah (a, b) menjadi...", options: ["(-a, b)", "(a, -b)", "(b, a)", "(-b, -a)"], correctAnswer: 2 },
        { question: "Rotasi 180° terhadap titik asal mengubah (x, y) menjadi...", options: ["(y, x)", "(-y, -x)", "(-x, -y)", "(x, -y)"], correctAnswer: 2 },
        { question: "Translasi adalah transformasi yang...", options: ["Membalik", "Memutar", "Menggeser", "Memperbesar"], correctAnswer: 2 },
        { question: "Pencerminan terhadap sumbu Y mengubah (5, 3) menjadi...", options: ["(-5, 3)", "(5, -3)", "(-5, -3)", "(3, 5)"], correctAnswer: 0 },
        { question: "Dilatasi dengan faktor skala k < 1 akan...", options: ["Memperbesar", "Memperkecil", "Tidak berubah", "Membalik"], correctAnswer: 1 },
        { question: "Rotasi 90° berlawanan arah jarum jam mengubah (x, y) menjadi...", options: ["(-y, x)", "(y, -x)", "(-x, -y)", "(x, y)"], correctAnswer: 0 }
    ],
    "smp9-4": [ // Kesebangunan
        { question: "Dua bangun dikatakan sebangun jika...", options: ["Ukuran sama", "Bentuk sama", "Perbandingan sisi bersesuaian sama", "Keliling sama"], correctAnswer: 2 },
        { question: "Dua segitiga sebangun jika...", options: ["Sisi-sisi sama", "Sudut-sudut bersesuaian sama", "Keliling sama", "Luas sama"], correctAnswer: 1 },
        { question: "Faktor skala kesebangunan disebut juga...", options: ["Konstanta", "Koefisien", "Faktor pembanding", "Gradien"], correctAnswer: 2 },
        { question: "Dua bangun kongruen berarti...", options: ["Bentuk sama, ukuran beda", "Bentuk dan ukuran sama", "Bentuk beda, ukuran sama", "Semuanya beda"], correctAnswer: 1 },
        { question: "Jika segitiga ABC ~ DEF dengan perbandingan 2:3, dan AB = 4, maka DE = ...", options: ["3", "6", "8", "12"], correctAnswer: 1 },
        { question: "Syarat dua segitiga sebangun adalah...", options: ["SSS saja", "AA atau SSS atau SAS", "Harus kongruen", "Sisi sama"], correctAnswer: 1 },
        { question: "Jika segitiga ABC ~ DEF, maka ∠A = ...", options: ["∠B", "∠C", "∠D", "∠E"], correctAnswer: 2 },
        { question: "Perbandingan luas dua bangun sebangun dengan faktor k adalah...", options: ["k", "k²", "k³", "2k"], correctAnswer: 1 },
        { question: "Perbandingan volume dua bangun sebangun dengan faktor k adalah...", options: ["k", "k²", "k³", "3k"], correctAnswer: 2 },
        { question: "Foto dan ukuran asli merupakan contoh...", options: ["Kongruensi", "Kesebangunan", "Refleksi", "Rotasi"], correctAnswer: 1 }
    ],
    "smp9-5": [ // Bangun Lengkung
        { question: "Volume tabung dengan r = 7 cm dan t = 10 cm (π = 22/7) adalah...", options: ["440 cm³", "1.540 cm³", "3.080 cm³", "4.620 cm³"], correctAnswer: 1 },
        { question: "Rumus volume kerucut adalah...", options: ["πr²t", "⅓πr²t", "½πr²t", "⅔πr²t"], correctAnswer: 1 },
        { question: "Volume bola dengan r = 3 cm (π = 22/7) adalah...", options: ["37,68 cm³", "113,04 cm³", "904,32 cm³", "4.186,67 cm³"], correctAnswer: 1 },
        { question: "Luas selimut tabung adalah...", options: ["πr²", "2πrt", "πr²t", "2πr(r+t)"], correctAnswer: 1 },
        { question: "Luas permukaan bola adalah...", options: ["πr²", "2πr²", "4πr²", "4/3πr³"], correctAnswer: 2 },
        { question: "Volume kerucut dengan r = 3 cm dan t = 14 cm (π = 22/7) adalah...", options: ["44 cm³", "132 cm³", "396 cm³", "1.188 cm³"], correctAnswer: 1 },
        { question: "Perbandingan volume kerucut : tabung : bola dengan r dan t sama adalah...", options: ["1 : 2 : 3", "1 : 3 : 2", "2 : 3 : 1", "3 : 2 : 1"], correctAnswer: 1 },
        { question: "Garis pelukis kerucut adalah...", options: ["Tinggi", "Jari-jari", "Garis dari puncak ke tepi alas", "Diameter"], correctAnswer: 2 },
        { question: "Luas selimut kerucut adalah...", options: ["πrs", "πr²t", "πr²", "2πrs"], correctAnswer: 0 },
        { question: "Volume bola dengan diameter 14 cm (π = 22/7) adalah...", options: ["718,67 cm³", "1.437,33 cm³", "2.874,67 cm³", "4.312 cm³"], correctAnswer: 1 }
    ]
};
