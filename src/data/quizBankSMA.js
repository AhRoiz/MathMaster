// Quiz Bank Data - SMA (Sekolah Menengah Atas)
// Minimal 10 pertanyaan per bab, quiz akan mengambil 5 soal secara random

export const quizBankSMA = {
    //  KELAS 10 
    "sma10-1": [ // Eksponen & Logaritma
        { question: "2³ sama dengan...", options: ["6", "8", "9", "5"], correctAnswer: 1 },
        { question: "log₁₀ 100 = ...", options: ["1", "2", "10", "100"], correctAnswer: 1 },
        { question: "Bentuk sederhana dari 2³ × 2⁴ adalah...", options: ["2⁷", "2¹²", "4⁷", "4¹²"], correctAnswer: 0 },
        { question: "log₂ 8 = ...", options: ["2", "3", "4", "8"], correctAnswer: 1 },
        { question: "Nilai dari 5⁰ adalah...", options: ["0", "1", "5", "Tidak terdefinisi"], correctAnswer: 1 },
        { question: "Jika logₐ b = c, maka a^c = ...", options: ["a", "b", "c", "abc"], correctAnswer: 1 },
        { question: "3⁻² = ...", options: ["-9", "-6", "⅑", "9"], correctAnswer: 2 },
        { question: "log 1000 = ... (basis 10)", options: ["1", "2", "3", "4"], correctAnswer: 2 },
        { question: "(aᵐ)ⁿ = ...", options: ["aᵐ⁺ⁿ", "aᵐⁿ", "aᵐ⁻ⁿ", "aᵐ/ⁿ"], correctAnswer: 1 },
        { question: "log 2 + log 5 = ...", options: ["log 7", "log 10", "1", "B dan C benar"], correctAnswer: 3 }
    ],
    "sma10-2": [ // SPLTV
        { question: "SPLTV adalah sistem persamaan linear dengan ... variabel", options: ["1", "2", "3", "4"], correctAnswer: 2 },
        { question: "Metode untuk menyelesaikan SPLTV adalah...", options: ["Substitusi, Eliminasi, Campuran", "Hanya substitusi", "Hanya eliminasi", "Tidak ada metode"], correctAnswer: 0 },
        { question: "Dari x + y + z = 6, x - y + z = 2, x + y - z = 4, nilai x adalah...", options: ["1", "2", "3", "4"], correctAnswer: 2 },
        { question: "Syarat SPLTV memiliki solusi tunggal adalah...", options: ["Determinan = 0", "Determinan ≠ 0", "Semua koefisien sama", "Konstanta = 0"], correctAnswer: 1 },
        { question: "Jika 2x + y + z = 9, x + 2y + z = 6, x + y + 2z = 9, nilai z adalah...", options: ["1", "2", "3", "4"], correctAnswer: 2 },
        { question: "Bentuk umum SPLTV adalah...", options: ["ax + by = c", "ax + by + cz = d", "ax² + bx + c = 0", "ax³ + bx² + cx + d = 0"], correctAnswer: 1 },
        { question: "Himpunan penyelesaian SPLTV yang konsisten tunggal berupa...", options: ["Himpunan kosong", "Satu titik (x, y, z)", "Garis", "Bidang"], correctAnswer: 1 },
        { question: "SPLTV yang tidak memiliki solusi disebut...", options: ["Konsisten", "Inkonsisten", "Dependen", "Independen"], correctAnswer: 1 },
        { question: "Dari x + y = 5, y + z = 7, x + z = 6, nilai x + y + z adalah...", options: ["6", "7", "8", "9"], correctAnswer: 3 },
        { question: "Dalam metode eliminasi, kita ... salah satu variabel", options: ["Menambah", "Menghilangkan", "Mengalikan", "Membagi"], correctAnswer: 1 }
    ],
    "sma10-3": [ // Fungsi Komposisi
        { question: "Jika f(x) = 2x + 1 dan g(x) = x², maka (f ∘ g)(2) = ...", options: ["5", "9", "10", "25"], correctAnswer: 1 },
        { question: "(f ∘ g)(x) berarti...", options: ["f(x) × g(x)", "f(g(x))", "g(f(x))", "f(x) + g(x)"], correctAnswer: 1 },
        { question: "Jika f(x) = x + 3 dan g(x) = 2x, maka (g ∘ f)(x) = ...", options: ["2x + 3", "2x + 6", "2x + 5", "x + 6"], correctAnswer: 1 },
        { question: "Invers dari f(x) = 2x + 4 adalah...", options: ["f⁻¹(x) = (x−4)÷2", "f⁻¹(x) = (x+4)÷2", "f⁻¹(x) = 2x − 4", "f⁻¹(x) = −2x + 4"], correctAnswer: 0 },
        { question: "Jika f(x) = 3x - 1, maka f⁻¹(8) = ...", options: ["2", "3", "23", "25"], correctAnswer: 1 },
        { question: "(f ∘ f⁻¹)(x) = ...", options: ["0", "1", "x", "f(x)"], correctAnswer: 2 },
        { question: "Jika f(x) = x² - 1 dan g(x) = √x, maka (f ∘ g)(4) = ...", options: ["1", "3", "7", "15"], correctAnswer: 1 },
        { question: "Invers dari f(x) = (x−3)÷2 adalah...", options: ["f⁻¹(x) = 2x + 3", "f⁻¹(x) = 2x − 3", "f⁻¹(x) = (x+3)÷2", "f⁻¹(x) = x÷2 + 3"], correctAnswer: 0 },
        { question: "Jika (f ∘ g)(x) = 4x² + 1 dan g(x) = 2x, maka f(x) = ...", options: ["x² + 1", "2x + 1", "4x + 1", "x + 1"], correctAnswer: 0 },
        { question: "Syarat fungsi f(x) memiliki invers adalah...", options: ["f(x) > 0", "f(x) bijektif", "f(x) kontinu", "f(x) terdiferensial"], correctAnswer: 1 }
    ],
    "sma10-4": [ // Trigonometri
        { question: "sin 30° = ...", options: ["½", "½√2", "½√3", "1"], correctAnswer: 0 },
        { question: "cos 60° = ...", options: ["½", "½√2", "½√3", "1"], correctAnswer: 0 },
        { question: "tan 45° = ...", options: ["0", "½", "1", "√3"], correctAnswer: 2 },
        { question: "sin² x + cos² x = ...", options: ["0", "1", "2", "sin 2x"], correctAnswer: 1 },
        { question: "Dalam segitiga siku-siku, sin θ = ...", options: ["sisi depan ÷ sisi miring", "sisi samping ÷ sisi miring", "sisi depan ÷ sisi samping", "sisi miring ÷ sisi depan"], correctAnswer: 0 },
        { question: "cos 0° = ...", options: ["0", "½", "1", "Tidak terdefinisi"], correctAnswer: 2 },
        { question: "tan 90° = ...", options: ["0", "1", "∞", "Tidak terdefinisi"], correctAnswer: 3 },
        { question: "sin 90° = ...", options: ["0", "½", "1", "Tidak terdefinisi"], correctAnswer: 2 },
        { question: "Jika sin x = ⅗, maka cos x = ... (kuadran I)", options: ["⅗", "⅘", "⁵⁄₄", "⁵⁄₃"], correctAnswer: 1 },
        { question: "Nilai dari sin 150° adalah...", options: ["-½", "½", "-½√3", "½√3"], correctAnswer: 1 }
    ],
    "sma10-5": [ // Vektor
        { question: "Vektor adalah besaran yang memiliki...", options: ["Besar saja", "Arah saja", "Besar dan arah", "Satuan saja"], correctAnswer: 2 },
        { question: "Jika a⃗ = (2, 3) dan b⃗ = (1, 4), maka a⃗ + b⃗ = ...", options: ["(3, 7)", "(1, -1)", "(2, 12)", "(3, 1)"], correctAnswer: 0 },
        { question: "Panjang vektor a⃗ = (3, 4) adalah...", options: ["5", "7", "12", "25"], correctAnswer: 0 },
        { question: "Hasil kali dot a⃗ · b⃗ jika a⃗ = (2, 3) dan b⃗ = (4, 1) adalah...", options: ["8", "11", "14", "26"], correctAnswer: 1 },
        { question: "Vektor satuan adalah vektor dengan panjang...", options: ["0", "1", "2", "Sembarang"], correctAnswer: 1 },
        { question: "Jika a⃗ = (1, 2, 3) dan b⃗ = (4, 5, 6), maka a⃗ · b⃗ = ...", options: ["12", "24", "32", "64"], correctAnswer: 2 },
        { question: "Dua vektor tegak lurus jika hasil kali dot-nya...", options: ["Positif", "Negatif", "Nol", "Satu"], correctAnswer: 2 },
        { question: "Vektor 3a⃗ jika a⃗ = (2, 1) adalah...", options: ["(5, 4)", "(6, 3)", "(6, 1)", "(2, 3)"], correctAnswer: 1 },
        { question: "Proyeksi vektor a⃗ pada b⃗ adalah...", options: ["(a⃗ · b⃗)÷|b⃗|", "(a⃗ · b⃗)÷|b⃗|² × b⃗", "|a⃗| × |b⃗|", "a⃗ × b⃗"], correctAnswer: 1 },
        { question: "Sudut antara dua vektor dapat dihitung dengan...", options: ["cos θ = (a⃗ · b⃗)÷(|a⃗||b⃗|)", "sin θ = (a⃗ · b⃗)÷(|a⃗||b⃗|)", "tan θ = |a⃗|÷|b⃗|", "cos θ = |a⃗| + |b⃗|"], correctAnswer: 0 }
    ],

    //  KELAS 11 
    "sma11-1": [ // Matriks
        { question: "Matriks berordo 2×3 memiliki ... elemen", options: ["2", "3", "5", "6"], correctAnswer: 3 },
        { question: "Hasil kali matriks A(2×3) dengan B(3×4) berordo...", options: ["2×3", "3×3", "2×4", "3×4"], correctAnswer: 2 },
        { question: "Determinan matriks [[2,3],[1,4]] adalah...", options: ["5", "7", "8", "11"], correctAnswer: 0 },
        { question: "Matriks identitas 2×2 adalah...", options: ["[[1,0],[0,1]]", "[[1,1],[1,1]]", "[[0,0],[0,0]]", "[[1,0],[1,0]]"], correctAnswer: 0 },
        { question: "Transpose dari [[1,2],[3,4]] adalah...", options: ["[[1,3],[2,4]]", "[[4,3],[2,1]]", "[[1,2],[3,4]]", "[[-1,-2],[-3,-4]]"], correctAnswer: 0 },
        { question: "Jika det(A) = 0, maka matriks A...", options: ["Memiliki invers", "Singular", "Identitas", "Nol"], correctAnswer: 1 },
        { question: "Invers matriks A ada jika det(A) ...", options: ["= 0", "≠ 0", "< 0", "> 0"], correctAnswer: 1 },
        { question: "[[1,2],[3,4]] + [[5,6],[7,8]] = ...", options: ["[[6,8],[10,12]]", "[[4,4],[4,4]]", "[[5,12],[21,32]]", "[[6,6],[10,10]]"], correctAnswer: 0 },
        { question: "A × A⁻¹ = ...", options: ["A", "A²", "O", "I"], correctAnswer: 3 },
        { question: "Adjoin matriks A adalah transpose dari matriks...", options: ["A", "A⁻¹", "Kofaktor A", "Minor A"], correctAnswer: 2 }
    ],
    "sma11-2": [ // Barisan Deret
        { question: "Suku ke-n barisan aritmatika: Uₙ = ...", options: ["a + (n−1)b", "a × rⁿ⁻¹", "a + nb", "a × rⁿ"], correctAnswer: 0 },
        { question: "Jumlah n suku pertama barisan aritmatika: Sₙ = ...", options: ["n÷2(a + Uₙ)", "n(a + b)", "a(rⁿ − 1)÷(r−1)", "n × a"], correctAnswer: 0 },
        { question: "Suku ke-5 barisan geometri 2, 6, 18, ... adalah...", options: ["54", "162", "486", "1458"], correctAnswer: 1 },
        { question: "Jumlah deret geometri tak hingga dengan |r| < 1: S∞ = ...", options: ["a÷(1−r)", "a÷(r−1)", "a × r", "a + r"], correctAnswer: 0 },
        { question: "Barisan 1, ½, ¼, ⅛, ... memiliki r = ...", options: ["½", "2", "-½", "-2"], correctAnswer: 0 },
        { question: "Jumlah deret 1 + ½ + ¼ + ⅛ + ... = ...", options: ["1", "2", "3", "∞"], correctAnswer: 1 },
        { question: "Suku pertama = 3, beda = 4. Suku ke-10 adalah...", options: ["36", "39", "40", "43"], correctAnswer: 1 },
        { question: "Jumlah 20 suku pertama barisan 2, 5, 8, 11, ... adalah...", options: ["590", "610", "630", "650"], correctAnswer: 1 },
        { question: "Jika Uₙ = 3n + 2, maka U₅ = ...", options: ["15", "17", "19", "21"], correctAnswer: 1 },
        { question: "Barisan 3, 6, 12, 24, ... memiliki rasio...", options: ["2", "3", "4", "6"], correctAnswer: 0 }
    ],
    "sma11-3": [ // Limit
        { question: "lim(x→2) (x² − 4)÷(x − 2) = ...", options: ["0", "2", "4", "Tidak ada"], correctAnswer: 2 },
        { question: "lim(x→∞) (3x² + 2)÷(x² + 1) = ...", options: ["0", "2", "3", "∞"], correctAnswer: 2 },
        { question: "lim(x→0) sin(x)÷x = ...", options: ["0", "1", "∞", "Tidak ada"], correctAnswer: 1 },
        { question: "lim(x→0) (1 − cos x)÷x² = ...", options: ["0", "½", "1", "2"], correctAnswer: 1 },
        { question: "Jika lim(x→a) f(x) = L, maka fungsi f...", options: ["Kontinu di a", "Mendekati L saat x mendekati a", "f(a) = L", "Tidak terdefinisi di a"], correctAnswer: 1 },
        { question: "lim(x→∞) 1÷x = ...", options: ["0", "1", "∞", "Tidak ada"], correctAnswer: 0 },
        { question: "lim(x→3) (x² − 9)÷(x − 3) = ...", options: ["0", "3", "6", "9"], correctAnswer: 2 },
        { question: "Bentuk tak tentu 0÷0 diselesaikan dengan...", options: ["Langsung substitusi", "Faktorisasi/L'Hopital", "Tidak bisa diselesaikan", "Hasilnya selalu 0"], correctAnswer: 1 },
        { question: "lim(x→∞) (2x³ + x)÷(x³ + 5) = ...", options: ["0", "1", "2", "∞"], correctAnswer: 2 },
        { question: "lim(x→0) tan(x)÷x = ...", options: ["0", "1", "∞", "Tidak ada"], correctAnswer: 1 }
    ],
    "sma11-4": [ // Turunan
        { question: "Jika f(x) = x³, maka f'(x) = ...", options: ["x²", "3x²", "3x³", "x³÷3"], correctAnswer: 1 },
        { question: "Turunan dari f(x) = 5 adalah...", options: ["0", "1", "5", "5x"], correctAnswer: 0 },
        { question: "Jika f(x) = 2x⁴ + 3x², maka f'(x) = ...", options: ["8x³ + 6x", "8x³ + 3x", "2x³ + 3x", "8x⁴ + 6x²"], correctAnswer: 0 },
        { question: "Turunan dari sin x adalah...", options: ["-sin x", "cos x", "-cos x", "tan x"], correctAnswer: 1 },
        { question: "Turunan dari eˣ adalah...", options: ["xeˣ⁻¹", "eˣ", "eˣ⁻¹", "xe"], correctAnswer: 1 },
        { question: "Rumus turunan (f × g)' = ...", options: ["f' × g'", "f' × g + f × g'", "(f' + g')", "f'÷g'"], correctAnswer: 1 },
        { question: "Turunan dari ln x adalah...", options: ["1÷x", "x", "eˣ", "ln x"], correctAnswer: 0 },
        { question: "Jika f(x) = (2x + 1)³, maka f'(x) = ...", options: ["3(2x + 1)²", "6(2x + 1)²", "(2x + 1)²", "2(2x + 1)³"], correctAnswer: 1 },
        { question: "Titik stasioner terjadi ketika f'(x) = ...", options: ["-1", "0", "1", "∞"], correctAnswer: 1 },
        { question: "Turunan cos x adalah...", options: ["sin x", "-sin x", "cos x", "-cos x"], correctAnswer: 1 }
    ],
    "sma11-5": [ // Lingkaran Analitik
        { question: "Persamaan lingkaran dengan pusat (0, 0) dan r = 5 adalah...", options: ["x² + y² = 5", "x² + y² = 25", "(x-5)² + y² = 25", "x + y = 5"], correctAnswer: 1 },
        { question: "Persamaan lingkaran dengan pusat (a, b) dan jari-jari r adalah...", options: ["x² + y² = r²", "(x-a)² + (y-b)² = r²", "(x+a)² + (y+b)² = r²", "x² + y² + ax + by = r"], correctAnswer: 1 },
        { question: "Pusat lingkaran x² + y² - 4x + 6y - 12 = 0 adalah...", options: ["(4, -6)", "(2, -3)", "(-2, 3)", "(-4, 6)"], correctAnswer: 1 },
        { question: "Jari-jari lingkaran x² + y² = 49 adalah...", options: ["7", "14", "49", "98"], correctAnswer: 0 },
        { question: "Persamaan garis singgung lingkaran x² + y² = 25 di titik (3, 4) adalah...", options: ["3x + 4y = 25", "4x + 3y = 25", "3x - 4y = 25", "x + y = 7"], correctAnswer: 0 },
        { question: "Posisi titik (1, 1) terhadap lingkaran x² + y² = 9 adalah...", options: ["Di dalam", "Di luar", "Pada lingkaran", "Di pusat"], correctAnswer: 0 },
        { question: "Dua lingkaran bersinggungan luar jika jarak pusat = ...", options: ["r₁ - r₂", "r₁ + r₂", "|r₁ - r₂|", "r₁ × r₂"], correctAnswer: 1 },
        { question: "Persamaan x² + y² + Dx + Ey + F = 0 adalah lingkaran jika...", options: ["D² + E² - 4F > 0", "D² + E² - 4F < 0", "D² + E² - 4F = 0", "D + E + F = 0"], correctAnswer: 0 },
        { question: "Jari-jari lingkaran x² + y² - 6x - 8y = 0 adalah...", options: ["3", "4", "5", "10"], correctAnswer: 2 },
        { question: "Panjang garis singgung dari titik (6, 8) ke lingkaran x² + y² = 25 adalah...", options: ["5", "√75", "10", "√50"], correctAnswer: 1 }
    ],

    //  KELAS 12 
    "sma12-1": [ // Dimensi Tiga
        { question: "Jarak titik A ke bidang α ditentukan oleh garis yang...", options: ["Sejajar bidang", "Tegak lurus bidang", "Miring terhadap bidang", "Berimpit dengan bidang"], correctAnswer: 1 },
        { question: "Pada kubus ABCD.EFGH, diagonal ruang AC menghubungkan...", options: ["A ke C", "A ke G", "A ke H", "B ke H"], correctAnswer: 1 },
        { question: "Sudut antara garis dan bidang diukur dari garis ke...", options: ["Garis lain pada bidang", "Proyeksi garis pada bidang", "Normal bidang", "Titik pada bidang"], correctAnswer: 1 },
        { question: "Pada kubus rusuk 6, jarak A ke bidang BDG adalah...", options: ["2√3", "3√3", "4√3", "6√3"], correctAnswer: 0 },
        { question: "Dua bidang yang tidak sejajar memiliki...", options: ["Garis potong", "Tidak beririsan", "Berimpit", "Tegak lurus"], correctAnswer: 0 },
        { question: "Diagonal ruang kubus dengan rusuk a adalah...", options: ["a", "a√2", "a√3", "2a"], correctAnswer: 2 },
        { question: "Sudut antara bidang ABCD dan ABGH pada kubus adalah...", options: ["0°", "45°", "60°", "90°"], correctAnswer: 3 },
        { question: "Jarak dua garis sejajar adalah...", options: ["Panjang garis penghubung tegak lurus", "Panjang garis miring", "Tidak terdefinisi", "Selalu 0"], correctAnswer: 0 },
        { question: "Pada balok 3×4×5, diagonal ruang adalah...", options: ["5√2", "5√3", "√50", "12"], correctAnswer: 0 },
        { question: "Proyeksi garis pada bidang adalah...", options: ["Titik", "Garis", "Bidang", "Titik atau garis"], correctAnswer: 3 }
    ],
    "sma12-2": [ // Integral
        { question: "∫ x² dx = ...", options: ["x³ + C", "x³÷3 + C", "2x + C", "3x² + C"], correctAnswer: 1 },
        { question: "∫ 5 dx = ...", options: ["5x + C", "5 + C", "0", "C"], correctAnswer: 0 },
        { question: "∫ cos x dx = ...", options: ["sin x + C", "-sin x + C", "cos x + C", "-cos x + C"], correctAnswer: 0 },
        { question: "∫ eˣ dx = ...", options: ["xeˣ + C", "eˣ + C", "eˣ÷x + C", "eˣ⁺¹ + C"], correctAnswer: 1 },
        { question: "∫₀² 2x dx = ...", options: ["2", "4", "6", "8"], correctAnswer: 1 },
        { question: "∫ 1÷x dx = ...", options: ["ln|x| + C", "-1÷x² + C", "x + C", "eˣ + C"], correctAnswer: 0 },
        { question: "Luas daerah di bawah kurva y = f(x) dari a ke b adalah...", options: ["∫ₐᵇ f(x) dx", "f(b) - f(a)", "f'(x)", "[f(x)]ₐᵇ"], correctAnswer: 0 },
        { question: "∫ sin x dx = ...", options: ["cos x + C", "-cos x + C", "sin x + C", "-sin x + C"], correctAnswer: 1 },
        { question: "∫₁³ x dx = ...", options: ["2", "4", "6", "8"], correctAnswer: 1 },
        { question: "∫ (3x² + 2x) dx = ...", options: ["x³ + x² + C", "6x + 2 + C", "x³ + 2x + C", "3x + x + C"], correctAnswer: 0 }
    ],
    "sma12-3": [ // Statistika
        { question: "Mean data kelompok = ...", options: ["Σfᵢxᵢ÷Σfᵢ", "Σfᵢ÷n", "Σxᵢ÷n", "fᵢ × xᵢ"], correctAnswer: 0 },
        { question: "Modus data kelompok terletak pada kelas dengan...", options: ["Frekuensi terkecil", "Frekuensi terbesar", "Nilai tengah", "Tepi atas"], correctAnswer: 1 },
        { question: "Simpangan baku adalah akar dari...", options: ["Mean", "Median", "Variansi", "Modus"], correctAnswer: 2 },
        { question: "Variansi mengukur...", options: ["Nilai tengah", "Penyebaran data", "Nilai terbanyak", "Jumlah data"], correctAnswer: 1 },
        { question: "Quartil Q₂ sama dengan...", options: ["Mean", "Modus", "Median", "Range"], correctAnswer: 2 },
        { question: "Desil D₅ sama dengan...", options: ["Q₁", "Q₂", "Q₃", "Mean"], correctAnswer: 1 },
        { question: "Persentil P₅₀ sama dengan...", options: ["Mean", "Median", "Modus", "Range"], correctAnswer: 1 },
        { question: "Jangkauan (range) = ...", options: ["Data max - Data min", "Q₃ - Q₁", "Mean - Median", "Σxᵢ/n"], correctAnswer: 0 },
        { question: "Jangkauan antar kuartil (IQR) = ...", options: ["Q₃ - Q₂", "Q₂ - Q₁", "Q₃ - Q₁", "Q₃ + Q₁"], correctAnswer: 2 },
        { question: "Distribusi normal memiliki bentuk kurva...", options: ["Miring kiri", "Miring kanan", "Simetris (lonceng)", "Seragam"], correctAnswer: 2 }
    ],
    "sma12-4": [ // Peluang
        { question: "Peluang kejadian pasti adalah...", options: ["0", "½", "1", "∞"], correctAnswer: 2 },
        { question: "P(A) + P(A') = ...", options: ["0", "½", "1", "2"], correctAnswer: 2 },
        { question: "Kombinasi C(5,2) = ...", options: ["5", "10", "20", "25"], correctAnswer: 1 },
        { question: "Permutasi P(4,2) = ...", options: ["6", "8", "12", "24"], correctAnswer: 2 },
        { question: "Jika A dan B saling lepas, P(A ∪ B) = ...", options: ["P(A) + P(B)", "P(A) × P(B)", "P(A) + P(B) - P(A ∩ B)", "P(A|B) × P(B)"], correctAnswer: 0 },
        { question: "Jika A dan B independen, P(A ∩ B) = ...", options: ["P(A) + P(B)", "P(A) × P(B)", "P(A|B)", "P(A) - P(B)"], correctAnswer: 1 },
        { question: "n! berarti...", options: ["n × (n-1)", "n × (n-1) × ... × 1", "1 × 2 × ... × n", "B dan C benar"], correctAnswer: 3 },
        { question: "C(n,r) = ...", options: ["n!÷(n−r)!", "n!÷r!", "n!÷[r!(n−r)!]", "r!÷n!"], correctAnswer: 2 },
        { question: "Peluang mendapat angka genap dari satu dadu adalah...", options: ["⅙", "⅓", "½", "⅔"], correctAnswer: 2 },
        { question: "Jika P(A) = 0,3, maka P(A') = ...", options: ["0,3", "0,7", "0,03", "3"], correctAnswer: 1 }
    ]
};
