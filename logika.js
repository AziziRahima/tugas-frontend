// Tugas 1A — Data & Logika
// ATURAN: untuk TIAP fungsi, tulis LANGKAH 1–3 sebagai komentar DULU, baru kode.
// Pakai for...of + if. JANGAN pakai .map / .filter / .find / .reduce dulu (lihat soal.md).

console.table(daftarItem);

// ─────────────────────────────────────────────
// FUNGSI 1 — hitungTersedia(daftar)
// Berapa banyak item yang properti true/false-nya bernilai true?
// ─────────────────────────────────────────────
// LANGKAH 1 — Masukan : daftar Laptop, Keluaran : berapa banyak item yang bernilai true
// LANGKAH 2 — enam Laptop dengan empat yang tersedia -> 4, daftar kosong -> 0
// LANGKAH 3 — Langkah (pseudocode)
//             Mulai jumlah dari 0.
//             Periksa setiap laptop.
//             Jika laptop tersedia bernilai true, tambah jumlah 1.
//             Setelah semua diperiksa, kembalikan jumlah.
// LANGKAH 4 — TERJEMAHKAN
function hitungTersedia(daftar) {
    let jumlah = 0;

    for(const item of daftar) {
        if (item.tersedia === true){
            // Hanya Laptop yang tersedia yang boleh dihitung.
            jumlah++;
        }
    }
    return jumlah;
}


// ─────────────────────────────────────────────
// FUNGSI 2 — cariBerdasarkanId(daftar, id)
// Kembalikan item yang id-nya cocok. Kalau tidak ada, kembalikan null.
// ─────────────────────────────────────────────

// LANGKAH 1 - Masukan: daftar Laptop dan ID yang ingin dicari, Keluaran: data laptop jika ditemukan, atau null jika tidak ditemukan.
// LANGKAH 2 - Jika mencari ID 2, kembalikan data laptop dengan ID 2.
//             Jika mencari id 99 dan tidak ada -> null.
// LANGKAH 3 - LANGKAH (pseudocode)
//             Periksa setiap Laptop dalam daftar.
//             Bandingkan ID laptop dengan ID yang dicari.
//             Jika cocok, kembalikan data Laptop tersebut.
//             Jika semua Laptop sudah diperiksa dan tidak cocok, kembalikan null. 
// LANGKAH 4 - TERJEMAHKAN
function cariBerdasarkanId(daftar, id) {
    for (const item of daftar) {
        if (item.id === id) {
            return item;
        }
    }

    // Mengembalikan null agar jelas bahwa ID tidak ditemukan.
    return null;
}  

// ─────────────────────────────────────────────
// FUNGSI 3 — saringKategori(daftar, kategori)
// Kembalikan ARRAY BARU berisi item dengan kategori itu. Kalau tidak ada, array kosong [].
// ─────────────────────────────────────────────
// LANGKAH 1 - Masukan: daftar Laptop dan kategori yang dicari, Keluaran: array berisi semua Laptop dengan kategori yang cocok.
// LANGKAH 2 - Jika kategori "Office", hasilnya berisi 2 laptop Office.
//             Jika kategori "Bisnis" tidak tersedia -> [].
// LANGKAH 3 - LANGKAH (pseudocode)
//             Buat array kosong untuk menyimpan hasil pencarian.
//             Periksa setiap Laptop dalam daftar.
//             Jika kategorinya cocok, masukkan Laptop ke array hasil.
//             Kembalikan array hasil setelah semua laptop diperiksa ke array hasil.
// LANGKAH 4 - TERJEMAHKAN
function saringKategori(daftar, kategori) {
    const hasil = [];

    for(const item of daftar) {
        if(item.kategori === kategori) {
            hasil.push(item);
        }
    }
    //Array kosong akan dikembalikan jika tidak ada kategoriyang cocok.
    return hasil;
}

// ─────────────────────────────────────────────
// FUNGSI 4 — rataRataTersedia(daftar)
// Rata-rata properti angka, HANYA dari item yang bernilai true.
// Kalau tidak ada satu pun yang true, kembalikan null.
// ─────────────────────────────────────────────
// LANGKAH 1 - Masukan: daftar Laptop, Keluaran: rata-rata harga Laptop yang tersedia, atau null jika tidak ada Laptop yang tersedia.
// LANGKAH 2 - Jika ada 4 Laptop tersedia dengan total harga Rp37.000.000, rata-ratanya adalah Rp9.250.000.
//             Jika tidak ada Lptop tersedia -> null.
// LANGKAH 3 - Siapkan variabel total harga dengan nilai awal 0.
//             Siapkan penghitung Laptop dengan nilai awal 0.
//             Periksa setiap Laptop dalam daftar.
//             Jika Laptop tersedia, tambahkan harganya ke total dan tambahkan penghitung sebanyak 1.
//             Jika penghitung 0, kembalikan null.
//             Jika tidak, kembalikan total harga dibagi penghitung.
// LANGKAH 4 - TERJEMAHKAN
function rataRataTersedia(daftar) {
    let totalHarga = 0;
    let jumlahTersedia = 0;

    for (const item of daftar) {
        if(item.tersedia === true) {
            totalHarga += item.harga;
            jumlahTersedia++;
        }
    }
    // Mencegah pembagian dengan nol jika tidak ada laptop tersedia.
    if (jumlahTersedia === 0) {
        return null;
    }
    return totalHarga / jumlahTersedia;
}

// ─────────────────────────────────────────────
// UJI — minimal 2 panggilan per fungsi: satu kasus normal, satu kasus tepi
// ─────────────────────────────────────────────
console.log("F1 normal:", hitungTersedia(daftarItem));
console.log("F1 kasus tepi:", hitungTersedia([]));

console.log("F2 normal:", cariBerdasarkanId(daftarItem, 2));
console.log("F2 tidak ditemukan:", cariBerdasarkanId(daftarItem, 99));

console.log("F3 kategori Office:", saringKategori(daftarItem, "Office"));
console.log("F3 kategori tidak ada:", saringKategori(daftarItem, "Bisnis"));

console.log("F4 rata-rata tersedia:", rataRataTersedia(daftarItem));

const semuaTidakTersedia = [
    { id: 7, nama: "Axioo Hype 3 ", kategori: "Mahasiswa", harga: 4000000, tersedia: false}
];

console.log("F4 tidak ada yang tersedia:", rataRataTersedia(semuaTidakTersedia));
// __________________________________________________
