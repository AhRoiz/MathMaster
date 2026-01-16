import React from 'react';
import { Calculator, BookOpen, GraduationCap } from 'lucide-react';

export const curriculumData = {
  SD: {
    theme: "from-green-400 to-emerald-600",
    text: "text-emerald-400",
    bg: "bg-emerald-500",
    icon: <Calculator className="w-6 h-6" />,
    description: "Membangun fondasi logika dan aritmatika dasar sesuai jenjang kelas.",
    hasClasses: true,
    classes: {
      1: {
        title: "Kelas 1: Fondasi Dasar",
        nodes: [
          {
            id: "sd1-1",
            title: "Mengenal Bilangan Cacah",
            desc: "Membaca dan menulis lambang bilangan 1-20 hingga 99.",
            difficulty: "Beginner",
            resources: [
              { type: "youtube", title: "Mengenal Bilangan Cacah", url: "https://youtu.be/UKIlsyeco0k?si=l-GVVZEFzfixrMyt" },
              { type: "youtube", title: "Belajar Berhitung 1 sampai 99", url: "https://youtu.be/wkck2u0LhZk?si=Mw5iWfOpyPY_iSMQ" },
              { type: "youtube", title: "Pengurangan Tidak Baku", url: "https://youtu.be/TWeMxQnA7q8?si=1DwOijFm2HQAHZXd" },
            ],
            quiz: [
              { question: "Lambang bilangan dari sepuluh adalah...", options: ["1", "10", "100", "01"], correctAnswer: 1 },
              { question: "Angka setelah 5 adalah...", options: ["4", "7", "6", "3"], correctAnswer: 2 },
              { question: "Manakah yang lebih besar: 8 atau 3?", options: ["8", "3", "Sama saja", "Tidak tahu"], correctAnswer: 0 }
            ]
          },
          { id: "sd1-2", title: "Operasi Hitung Sederhana", desc: "Penjumlahan & pengurangan dasar.", difficulty: "Easy", resources: [
              { type: "youtube", title: "Bilangan sampai 99", url: "https://youtu.be/oNO4yUDYK4I?si=1bYNN5HqwFoxCfPU" },
              { type: "youtube", title: "Penjumlahan Bersusun", url: "https://youtu.be/oNO4yUDYK4I?si=1bYNN5HqwFoxCfPU" },
          ], quiz: [] },
          { id: "sd1-3", title: "Pengukuran Tidak Baku", desc: "Jengkal & langkah.", difficulty: "Easy", resources: [
              { type: "youtube", title: "Berhitung Angka Tidak Baku", url: "https://youtu.be/TWeMxQnA7q8?si=1DwOijFm2HQAHZXd" },
          ], quiz: [] },
          { id: "sd1-4", title: "Geometri Dasar", desc: "Segitiga, segiempat, lingkaran.", difficulty: "Medium", resources: [
              { type: "youtube", title: "Bangun Datar", url: "https://youtu.be/83mnpRHe1Q4?si=tOaECOFQ4jpcLJbq" },
          ], quiz: [] },
          { id: "sd1-5", title: "Waktu & Jam", desc: "Nama hari & jam utuh.", difficulty: "Medium", resources: [
              { type: "youtube", title: "Mengenal Konsep Waktu", url: "https://youtu.be/TYdqNJ3A0-Y?si=zf273a_ITVYFToVN" },
              { type: "youtube", title: "Belajar Membaca Jam", url: "https://youtu.be/dCMtKTg08SY?si=ralZP2ruF_qUMYux" },
          ], quiz: [] }
        ]
      },
      2: {
        title: "Kelas 2: Pengembangan Operasi",
        nodes: [
          { id: "sd2-1", title: "Bilangan sampai 1000", desc: "Nilai tempat ratusan.", difficulty: "Easy", resources: [
              { type: "youtube", title: "Mengenal Bilangan 1 Sampai 1000", url: "https://youtu.be/oNO4yUDYK4I?si=1bYNN5HqwFoxCfPU" },
          ], quiz: [] },
          { id: "sd2-2", title: "Penjumlahan Bersusun", desc: "Teknik menyimpan.", difficulty: "Medium", resources: [
              { type: "youtube", title: "Penjumlahan Bersusun Panjang", url: "https://youtu.be/aHylF7_UnxU?si=0qB72ANQudO1C5sd" },
              { type: "youtube", title: "Penjumlahan Bersusun Pendek", url: "https://youtu.be/rHZyU9WEHwM?si=CWFfuvHSPyCGbQfR" },
          ], quiz: [] },
          { id: "sd2-3", title: "Perkalian & Pembagian", desc: "Penjumlahan berulang.", difficulty: "Hard", resources: [
              { type: "youtube", title: "Perkalian dan Pembagian", url: "https://youtu.be/8csB-Xq0okw?si=IICd59X8__vKLuct" },
              { type: "youtube", title: "Hubungan Perkalian dan Pembagian", url: "https://youtu.be/jzmFrMb6Htc?si=IoeZ7azk0HyhQKNO" },
          ], quiz: [] },
          { id: "sd2-4", title: "Pengukuran Baku", desc: "Panjang (cm) & Berat (kg).", difficulty: "Medium", resources: [
              { type: "youtube", title: "Mengukur Panjang Benda", url: "https://youtu.be/8csB-Xq0okw?si=IICd59X8__vKLuct" },
              { type: "youtube", title: "Mengukur Berat Benda", url: "https://youtu.be/9c4ta9rysf4?si=fWi-zGdzxTALW2Vr" },
          ], quiz: [] },
          { id: "sd2-5", title: "Uang & Waktu", desc: "Rupiah & durasi.", difficulty: "Medium", resources: [
              { type: "youtube", title: "Jam, Menit dan Detik", url: "https://youtu.be/YHhuzD35Ywk?si=4uZVBjpcrt-NYkn8" },
              { type: "youtube", title: "Kesetaraan Mata Uang", url: "https://youtu.be/RZqvUF9QfKc?si=Bfe8CGyf7-EN2HvQ" },
          ], quiz: [] }
        ]
      },
      3: {
        title: "Kelas 3: Pecahan & Sifat Bangun",
        nodes: [
          { id: "sd3-1", title: "Operasi Ribuan", desc: "Hitung campuran.", difficulty: "Medium", resources: [
            { type: "youtube", title: "Mengenal Bilangan Ribuan", url: "https://youtu.be/srsbEnQRyjw?si=OCHcg23fdTZSI4ZR" },
          ], quiz: [] },
          { id: "sd3-2", title: "Pecahan Sederhana", desc: "Mengenal 1/2, 1/4.", difficulty: "Medium", resources: [
            { type: "youtube", title: "Pecahan", url: "https://youtu.be/0hPRfqPFtt8?si=EL6m7CP3zxZ8aaiK" },
            { type: "youtube", title: "Penjumlahan Pecahan", url: "https://youtu.be/g5TSfen0WPU?si=znwo3TkmyoIx6DOw" },
          ], quiz: [] },
          { id: "sd3-3", title: "Simetri & Sudut", desc: "Simetri lipat.", difficulty: "Hard", resources: [
            { type: "youtube", title: "Mengenal Jenis Sudut", url: "https://youtu.be/OXwzXc61RvE?si=65x09X02cKeTS2_a" },
            { type: "youtube", title: "Simetri Lipat dan Simetri Putar Bangun Datar", url: "https://youtu.be/KNggJHGjD4s?si=f_1eHvfqsyzAKWOe" },
            { type: "youtube", title: "Simetri Putar", url: "https://youtu.be/Szrv0hx_VuA?si=1c-g8PqCBS1O0NZH" },
            { type: "youtube", title: "Menghitung Luas dan Keliling dengan Petak", url: "https://youtu.be/-SoT6A65IQ4?si=EtTxrhXmb3vUG-Du" },
          ], quiz: [] },
          { id: "sd3-4", title: "Keliling & Luas Persegi", desc: "Hitung keliling.", difficulty: "Hard", resources: [
            { type: "youtube", title: "Kesetaraan Mata Uang", url: "https://youtu.be/RZqvUF9QfKc?si=Bfe8CGyf7-EN2HvQ" },
            { type: "youtube", title: "Kesetaraan Mata Uang", url: "https://youtu.be/RZqvUF9QfKc?si=Bfe8CGyf7-EN2HvQ" },
          ], quiz: [] },
          { id: "sd3-5", title: "Data Sederhana", desc: "Diagram batang.", difficulty: "Medium", resources: [], quiz: [] }
        ]
      },
      4: {
        title: "Kelas 4: Bilangan Besar",
        nodes: [
          { id: "sd4-1", title: "Bilangan Besar", desc: "Jutaan.", difficulty: "Medium", resources: [], quiz: [] },
          { id: "sd4-2", title: "KPK & FPB", desc: "Faktor & Kelipatan.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "sd4-3", title: "Pecahan Senilai", desc: "Desimal & Persen.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "sd4-4", title: "Geometri Sudut", desc: "Busur derajat.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "sd4-5", title: "Luas Segitiga", desc: "Alas x Tinggi / 2.", difficulty: "Expert", resources: [], quiz: [] }
        ]
      },
      5: {
        title: "Kelas 5: Perbandingan",
        nodes: [
          { id: "sd5-1", title: "Operasi Pecahan", desc: "Kali bagi pecahan.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "sd5-2", title: "Skala & Kecepatan", desc: "Jarak peta.", difficulty: "Expert", resources: [], quiz: [] },
          { id: "sd5-3", title: "Bangun Ruang", desc: "Kubus & Balok.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "sd5-4", title: "Volume", desc: "Pangkat tiga.", difficulty: "Expert", resources: [], quiz: [] }
        ]
      },
      6: {
        title: "Kelas 6: Persiapan SMP",
        nodes: [
          { id: "sd6-1", title: "Bilangan Bulat Negatif", desc: "Positif & Negatif.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "sd6-2", title: "Lingkaran", desc: "Luas & Keliling Pi.", difficulty: "Expert", resources: [], quiz: [] },
          { id: "sd6-3", title: "Geometri Gabungan", desc: "Volume gabungan.", difficulty: "Expert", resources: [], quiz: [] },
          { id: "sd6-4", title: "Statistika", desc: "Mean, Median, Modus.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "sd6-5", title: "Sistem Koordinat", desc: "Titik pada koordinat Kartesius.", difficulty: "Medium", resources: [], quiz: [] }
        ]
      }
    }
  },
  SMP: {
    theme: "from-blue-400 to-indigo-600",
    text: "text-blue-400",
    bg: "bg-blue-500",
    icon: <BookOpen className="w-6 h-6" />,
    description: "Transisi ke pemikiran aljabar abstrak.",
    hasClasses: true,
    classes: {
      7: {
        title: "Kelas 7: Pengenalan Aljabar",
        nodes: [
          { id: "smp7-1", title: "Bilangan & Himpunan", desc: "Bilangan bulat & Diagram Venn.", difficulty: "Beginner", resources: [], quiz: [{ question: "Hasil dari -5 + 12 adalah...", options: ["-7", "7", "17", "-17"], correctAnswer: 1 }] },
          { id: "smp7-2", title: "Aljabar Dasar", desc: "Variabel & Konstanta.", difficulty: "Medium", resources: [], quiz: [] },
          { id: "smp7-3", title: "PLSV", desc: "Persamaan Linear.", difficulty: "Medium", resources: [], quiz: [] },
          { id: "smp7-4", title: "Aritmetika Sosial", desc: "Untung Rugi.", difficulty: "Easy", resources: [], quiz: [] },
          { id: "smp7-5", title: "Garis & Sudut", desc: "Hubungan antar sudut.", difficulty: "Hard", resources: [], quiz: [] }
        ]
      },
      8: {
        title: "Kelas 8: Relasi & Geometri",
        nodes: [
          { id: "smp8-1", title: "Pola Bilangan", desc: "Barisan aritmatika.", difficulty: "Medium", resources: [], quiz: [] },
          { id: "smp8-2", title: "Koordinat Kartesius", desc: "Sumbu X dan Y.", difficulty: "Easy", resources: [], quiz: [] },
          { id: "smp8-3", title: "Relasi Fungsi", desc: "Domain Kodomain.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "smp8-4", title: "Persamaan Garis", desc: "Gradien.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "smp8-5", title: "Pythagoras", desc: "Segitiga siku-siku.", difficulty: "Medium", resources: [], quiz: [] },
          { id: "smp8-6", title: "Lingkaran", desc: "Sudut pusat.", difficulty: "Expert", resources: [], quiz: [] }
        ]
      },
      9: {
        title: "Kelas 9: Pangkat & Ruang",
        nodes: [
          { id: "smp9-1", title: "Pangkat & Akar", desc: "Eksponen.", difficulty: "Medium", resources: [], quiz: [] },
          { id: "smp9-2", title: "Persamaan Kuadrat", desc: "Akar persamaan.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "smp9-3", title: "Transformasi", desc: "Refleksi Rotasi.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "smp9-4", title: "Kesebangunan", desc: "Kongruen.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "smp9-5", title: "Bangun Lengkung", desc: "Tabung Kerucut.", difficulty: "Expert", resources: [], quiz: [] }
        ]
      }
    }
  },
  SMA: {
    theme: "from-purple-500 to-fuchsia-600",
    text: "text-purple-400",
    bg: "bg-purple-500",
    icon: <GraduationCap className="w-6 h-6" />,
    description: "Matematika lanjut & Kalkulus.",
    hasClasses: true,
    classes: {
      10: {
        title: "Kelas 10: Fondasi Lanjut",
        nodes: [
          { id: "sma10-1", title: "Eksponen & Logaritma", desc: "Sifat pangkat.", difficulty: "Medium", resources: [
            { type: "youtube", title: "Eksponen ", url: "https://youtu.be/AlrOq3W7IZ4?si=t5MLFIXEIMpC4TxY" },
            { type: "youtube", title: "Logaritma ", url: "https://youtu.be/FqYIq9kdshM?si=1aGFhVX_iiDpB_Bi" },
          ], 
          quiz: [
            { question: "2 pangkat 3 sama dengan...", options: ["6", "8", "9", "5"], correctAnswer: 1 }
          ] 
        },
          { id: "sma10-2", title: "SPLTV", desc: "3 Variabel.", difficulty: "Hard", resources: [
            { type: "youtube", title: "Sistem Persamaan Linear Tiga Variabel Part 1 ", url: "https://youtu.be/JVANLCfV70w?si=7dwfxTkMz8uI3WIP" },
            { type: "youtube", title: "Sistem Persamaan Linear Tiga Variabel Part 2 ", url: "https://youtu.be/QgnXXdTq2WU?si=3GOlrwctfu9Z2Hm7" },
            { type: "youtube", title: "3 Metode Penyelesaian SPLTV ", url: "https://youtu.be/uC78QtDvVXY?si=JANFbPXswaJF43UX" },
          ], quiz: [] },
          { id: "sma10-3", title: "Fungsi Komposisi", desc: "f(g(x)) (atau) (f ∘ g)(x).", difficulty: "Medium", resources: [
            { type: "youtube", title: "Operasi Aljabar pada Fungsi ", url: "https://youtu.be/BbwvwIcImMI?si=FSc1l5x2P1q7Tau_" },
            { type: "youtube", title: "Operasi Kompisisi Fungsi ", url: "https://youtu.be/cHsQqTJO9x0?si=gB2WW8gDSVZjXPaJ" },
            { type: "youtube", title: "Fungsi Invers dan Sifat-sifatnya ", url: "https://youtu.be/M2_upzQMK4Q?si=HRBdyX5cP9e9z-5p" },
          ], quiz: [] },
          { id: "sma10-4", title: "Trigonometri", desc: "Sin Cos Tan.", difficulty: "Hard", resources: [
            { type: "youtube", title: "Perbandingan Trigonometri pada Segitiga Siku-siku ", url: "https://youtu.be/2iTbfPEMCeo?si=fzx9pOdjEOd3quxo" },
            { type: "youtube", title: "Identitas Trigonometri ", url: "https://youtu.be/ZZfeb5ceTd0?si=nmHDXTnVOFXwNElE" },
            { type: "youtube", title: "Menentukan Nilai Trigometri Sudut Istimewa ", url: "https://youtu.be/-Y4w7E-cgWU?si=P8Bu9L6v-ZmLMQQz" },
          ], quiz: [] },
          { id: "sma10-5", title: "Vektor", desc: "Dot product.", difficulty: "Medium", resources: [
            { type: "youtube", title: "Belajar Vektor ", url: "https://youtube.com/playlist?list=PLV1yCXnvgPghxrabpTSCD7qBWuG35E2Cd&si=aAdG9AP5fwJMEa1j" },
          ], quiz: [] }
        ]
      },
      11: {
        title: "Kelas 11: Kalkulus Dasar",
        nodes: [
          { id: "sma11-1", title: "Matriks", desc: "Determinan.", difficulty: "Medium", resources: [
            { type: "youtube", title: "Matriks - Pengenalan Matriks ", url: "https://youtu.be/HqssIxIg7T4?si=LIQ4EDWe2iyjW-ed" },
            { type: "youtube", title: "Matriks - Operasi Matriks ", url: "https://youtu.be/2mIQgRSsGyc?si=SlVOT73DOtgi4ve2" },
            { type: "youtube", title: "Matriks - Determinan Matriks ", url: "https://youtu.be/0Ipy1aKNZa8?si=9yQleb9loQrTcZzM" },
            { type: "youtube", title: "Matriks - Minor, Kofaktor dan Adjoin ", url: "https://youtu.be/KWNkmpEpVBY?si=KAZnEymXSds_HJAO" },
            { type: "youtube", title: "Matriks - Invers Matriks ", url: "https://youtu.be/CzrlEdZdhB0?si=WYI-O5xUJ0zpQsn_" },
          ], quiz: [] },
          { id: "sma11-2", title: "Barisan Deret", desc: "Tak hingga.", difficulty: "Medium", resources: [], quiz: [] },
          { id: "sma11-3", title: "Limit", desc: "Mendekati nilai.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "sma11-4", title: "Turunan", desc: "Diferensial.", difficulty: "Expert", resources: [], quiz: [] },
          { id: "sma11-5", title: "Lingkaran Analitik", desc: "Persamaan lingkaran.", difficulty: "Expert", resources: [], quiz: [] }
        ]
      },
      12: {
        title: "Kelas 12: Kalkulus Lanjut",
        nodes: [
          { id: "sma12-1", title: "Dimensi Tiga", desc: "Jarak titik bidang.", difficulty: "Expert", resources: [], quiz: [] },
          { id: "sma12-2", title: "Integral", desc: "Luas daerah.", difficulty: "God Tier", resources: [], quiz: [] },
          { id: "sma12-3", title: "Statistika", desc: "Data kelompok.", difficulty: "Hard", resources: [], quiz: [] },
          { id: "sma12-4", title: "Peluang", desc: "Kombinasi.", difficulty: "Hard", resources: [], quiz: [] }
        ]
      }
    }
  }
};