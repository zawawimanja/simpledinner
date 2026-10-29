# 🌙 Resepi Malam — Comfort Food Malam Mudah

Aplikasi web pemilihan menu makan malam, dibina khas untuk yang suka makanan **lembut, empuk, berkanji, berkrim dan panas** — dengan laluan cepat ke menu yang lebih sihat bila perlu.

Direka untuk menyelesaikan dilema *"pening nak makan apa lewat malam"*: tick bahan yang ada dalam dapur, terus keluar menu yang ngam. Tiada login, tiada build step, semua jalan di pelayar.

---

## 🌟 Ciri-Ciri Utama

1. **🧺 "Check Dapur" (Pantry Filter)** — 29 chip bahan (telur, roti, kentang, bawang, ayam, sardin, bilis, pasta, dll). Menu ditapis **OR**: cukup satu bahan yang kau ada.
2. **🌱 Tapis Tahap Kesihatan** — 🟢 Bagus & Sihat / 🟡 Sederhana / 🔴 Kurang Sihat. Setiap menu ada nota gizi ringkas (sebab label dan cadangan penambahbaikan).
3. **🗂️ 13 Tab Kategori** — semua menu boleh dicapai ikut geng makanan, bukan sekadar "semua".
4. **📋 Resipi Pantas** — fokus 100% pada terus masak: **Kenapa Tekak Kau Nak Benda Ni**, **Perkakas Minima** (Air Fryer / 1 Periuk / Microwave), **Bahan Minimum** dan **langkah ekspres**.
5. **🔍 Carian & Kongsi** — cari ikut nama/bahan, kongsi ke WhatsApp, X, native share atau salin pautan.
6. **📸 Gambar Hidangan** — menu yang belum ada gambar akan paparkan gradien + ikon automatik (tak ada `broken image`).

---

## 🍽️ Geng Kategori

- 🍞 Geng Roti Gardenia
- 🍟 Geng Kudap & Goreng
- 🥟 Geng Frozen Kuih
- 🌯 Geng Wrap & Shawarma
- 🍜 Geng Maggi & Nasi Impit
- 🥞 Geng Lempeng & Cucur
- 🥣 Geng Bubur & Sup
- 🥔 Geng Lenyek & Empuk
- 🥗 Geng Salad Fresh
- 🍛 Geng Lauk & Masak
- 🍚 Geng Nasi & Karbo
- 🍝 Geng Pasta & Barat
- ✨ Semua Menu

---

## 🛠️ Teknologi

- **HTML5 & Vanilla CSS3** — midnight dark mode, glassmorphism, responsif sepenuhnya untuk telefon.
- **Vanilla JavaScript** — data `RECIPES` (99 menu) dan `HEALTH_METRICS` serta logik render/tapis dalam `app.js`. Tiada framework, tiada CDN.
- **Web Audio API** — sintesis bunyi "tick" ringkas semasa interaksi.

---

## 🧩 Peraturan Data (baca sebelum tambah menu)

- `category` mesti sepadan dengan `data-category` sesuatu tab dalam `index.html` — kalau tak ada tab, menu itu hanya muncul di "Semua Menu".
- Setiap `pantryTags` mesti ada chip `data-item` yang sepadan dalam `index.html` — tag tanpa chip tak akan pernah keluar dalam tapisan.
- Setiap menu perlu entri `HEALTH_METRICS[id]`. Kalau tiada, ia jatuh ke default 🟡 Sederhana secara senyap (walaupun menu itu rebus/kukus).
- `categoryLabel` hanya untuk paparan (badge dalam modal), bukan kunci grouping — sub-varian yang bermakna dibiarkan.

---

## 🚀 Cara Menjalankan Secara Tempatan

```bash
# Buka pelayan tempatan
python3 -m http.server 8088

# Layari di pelayar web:
http://localhost:8088
```

Alternatif: buka terus `index.html` dalam pelayar.

---

## 📁 Struktur Fail

| Fail | Peranan |
|---|---|
| `index.html` | Struktur, tab & chip bahan |
| `app.js` | Data resipi, metadata kesihatan, logik tapisan & modal |
| `styles.css` | Tema gelap, grid kad, modal |
| `images/` | Gambar hidangan (nama fail ikut `id` menu) |
| `add_*_recipes.js`, `find_dupes.js`, `remove_dupes.js`, `fix_images.js` | Skrip utiliti sekali guna untuk injeksi/audit data |
| `app_old.js`, `replace_ui.js`, `scratch_target.txt` | Fail lama — tidak dirujuk oleh aplikasi |
