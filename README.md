# 💌 Maaf ya, Sayang — Website Permintaan Maaf

Website interaktif bertema scrapbook/kawaii untuk minta maaf ke pacar kamu.
Dibangun dengan **Next.js 16**, **TypeScript**, **Tailwind CSS**, dan
**Framer Motion**.

5 halaman (Home → Letter → Memories → Promise → For You) berpindah dengan
horizontal slide transition ala Framer, tanpa reload halaman.

---

## 1. Jalankan di komputer kamu

Butuh [Node.js](https://nodejs.org) versi 18.18 ke atas.

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## 2. Personalisasi (wajib dibaca!)

Semua teks di website ada di satu file supaya gampang diedit:

📄 **`content.ts`** — ganti nama panggilan, isi surat, janji-janji, dan
pesan di halaman "For You".

📸 **Foto kenangan** — taruh foto kalian berdua di folder
`public/images/` (lihat `public/images/README.txt`), lalu sesuaikan nama
filenya di `content.ts` bagian `memories.photos`.

🎵 **Musik** — taruh file lagu (mp3) di folder khusus `public/music/`
dengan nama `song.mp3` (lihat `public/music/README.txt`). Sesaat setelah
website dibuka, akan muncul pop-up minta izin "Mau nyalain musik?". Kalau
pacar kamu klik **Yuk, putar**, musik langsung diputar. Kalau klik
**Nggak dulu**, musik tidak diputar tapi tetap bisa dinyalakan manual
lewat tombol play di mini player pojok kiri bawah kapan saja.

🐰 **Gambar kelinci & navbar** — sudah pakai gambar custom kamu sendiri,
ada di `public/mascot/` (kelinci-sedih, kelinci-surat, kelinci-love,
kelinci-promise, gift) dan `public/navbar/` (ikon menu Home/Letter/
Memories/Promise/For You). Kalau mau ganti gambar, tinggal timpa file
dengan nama yang sama, atau ubah path `src` di komponen halaman terkait
(`components/pages/*.tsx` dan `components/Navbar.tsx`).

🎨 **Warna & font** — bisa diubah di `tailwind.config.ts` (warna) dan
`app/layout.tsx` (font Google Fonts: Baloo 2, Caveat, Quicksand).

---

## 3. Upload ke GitHub

```bash
git init
git add .
git commit -m "Website permintaan maaf 💌"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

Ganti `USERNAME/NAMA-REPO` dengan repo GitHub kamu. Kalau repo belum ada,
buat dulu lewat [github.com/new](https://github.com/new) (bisa dipilih
**Private** kalau nggak mau orang lain lihat isi kodenya).

---

## 4. Deploy ke Vercel

1. Buka [vercel.com/new](https://vercel.com/new) dan login pakai akun GitHub.
2. Pilih repo yang tadi kamu push.
3. Vercel otomatis mendeteksi ini project Next.js — biarkan semua setting
   default, lalu klik **Deploy**.
4. Tunggu ± 1 menit, nanti kamu dapat link seperti
   `https://nama-repo.vercel.app` yang bisa langsung dikirim ke pacar kamu 💗

Setiap kali kamu `git push` perubahan baru, Vercel otomatis re-deploy.

---

## Struktur project

```
app/
  layout.tsx        → font & metadata
  page.tsx           → orkestrasi navigasi & transisi slide antar halaman
  globals.css         → style dasar (paper card, washi tape, dll)
components/
  Mascot.tsx           → maskot kelinci dengan 5 ekspresi berbeda
  Background.tsx      → pola dekorasi lembut (hati, pita, bunga, dst)
  CursorTrail.tsx     → jejak sparkle/heart mengikuti cursor
  Navbar.tsx            → navigasi rounded pastel dengan blur
  MusicWidget.tsx     → pop-up izin musik + mini player
  Sticker.tsx           → wrapper animasi wobble/hover untuk sticker
  pages/
    Home.tsx
    Letter.tsx           → amplop dengan animasi unfold
    Memories.tsx        → grid polaroid
    PromisePage.tsx     → checklist janji dengan animasi
    ForYou.tsx            → gift box + confetti hati & sparkle
content.ts             → semua teks & data foto (edit di sini)
```

Selamat mencoba, semoga pacarnya baikan lagi ya 🥹💗
