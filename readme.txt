# Dasar Pengembangan Web: Front-End & Back-End

Dokumen ini berisi penjelasan singkat mengenai perbedaan tanggung jawab antara Front-End dan Back-End, metode pengiriman data HTTP, serta pentingnya validasi data di sisi server.

---

## 1. Analogi Toko: Front-End vs Back-End

Dalam membangun sebuah aplikasi web, kita bisa membayangkan sebuah **Toko Kelontong**:

* Front-End (Etalase & Pelayanan): Adalah segala sesuatu yang dilihat dan berinteraksi langsung dengan pelanggan. Ini mencakup desain rak, tata letak barang, label harga, dan keramahan kasir. 
    * Fokus: Estetika, kenyamanan pengguna (User Experience), dan responsivitas tampilan.
* Back-End (Gudang & Administrasi): Adalah bagian "di balik layar" yang tidak terlihat oleh pelanggan. Di sini terjadi proses pengecekan stok di gudang, pencatatan keuangan di buku besar, dan pemesanan barang ke supplier.
    * Fokus: Logika bisnis, pengelolaan database, keamanan, dan performa server.

---

## 2. Pengiriman Data: GET vs POST

Dua metode utama yang digunakan untuk mengirimkan informasi dari browser (client) ke server:

| Fitur | Method GET | Method POST |
| :--- | :--- | :--- |
| Lokasi Data | Terlampir pada URL (Query String). | Tersembunyi di dalam Request Body. |
| Visibilitas | Terlihat oleh pengguna di alamat browser. | Tidak terlihat secara langsung. |
| Kapasitas| Terbatas (tergantung limit karakter URL). | Sangat besar (bisa untuk upload file/gambar). |
| Keamanan | Rendah (tidak untuk data sensitif). | Lebih tinggi (cocok untuk data rahasia). |

Kapan menggunakan POST?
Mengirim data sensitif (Password, NIK, dll).
Melakukan operasi yang mengubah data di server (Simpan, Update, Hapus).
Mengirim file atau teks yang sangat panjang.

## 3. Validasi Input di Sisi Server (Back-End)

Meskipun Front-End sudah memiliki validasi (JavaScript), validasi di Back-End tetap wajib dilakukan karena:

1.  Keamanan Utama: Validasi Front-End dapat dengan mudah dimatikan atau dilewati oleh pengguna teknis (melalui konsol browser atau alat seperti Postman).
2.  Integritas Data: Back-End adalah pertahanan terakhir sebelum data masuk ke database. Validasi di sini memastikan tidak ada data korup atau serangan berbahaya (seperti SQL Injection) yang merusak sistem.
3. Sumber Data Beragam: Server tidak hanya menerima data dari website, tapi bisa juga dari aplikasi mobile atau pihak ketiga. Validasi di server memastikan semua data dari sumber mana pun tetap konsisten.

> Kesimpulan: Validasi Front-End adalah untuk UX (User Experience), sedangkan validasi Back-End adalah untuk security (Keamanan).

Dibuat untuk keperluan edukasi pengembangan web.
