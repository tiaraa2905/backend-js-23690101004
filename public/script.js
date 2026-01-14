/* ===============================
   🌸 INTERAKTIVITAS JAVASCRIPT
   =============================== */

// TOMBOL UBAH MODE TEMA
const toggleBtn = document.getElementById("toggleTheme");

toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  console.log("Tombol warna diklik");

  if (document.body.classList.contains("dark")) {
    toggleBtn.innerText = "Mode Terang";
  } else {
    toggleBtn.innerText = "Mode Gelap";
  }
});

// TOMBOL SAPA
const sapaBtn = document.getElementById("sapaSaya");
const greeting = document.getElementById("greeting");

sapaBtn.addEventListener("click", function () {
  console.log("Tombol sapa diklik");

  let nama = prompt("Masukkan nama Anda:");

  if (nama && nama.trim() !== "") {
    greeting.innerText = `Halo, ${nama}! Senang bertemu denganmu 😊`;
  } else {
    greeting.innerText = "Halo! Nama kamu belum dimasukkan.";
  }
});

/* ===============================
   🌼  REFLEKSI SINGKAT
   ===============================
   Bagian yang paling sulit adalah memahami cara kerja event listener,
   karena harus tahu kapan fungsi dijalankan. Momen “WOW” terjadi saat
   tombol benar-benar bisa mengubah warna tampilan dan muncul sapaan
   sesuai nama yang dimasukkan. Rasanya seperti membuat website menjadi hidup!
*/