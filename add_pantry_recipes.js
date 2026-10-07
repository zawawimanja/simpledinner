const fs = require('fs');

const recipesToAdd = `  {
    id: "sardin-tin-limau",
    name: "Sambal Sardin Tin Perah Limau",
    category: "lauk",
    categoryLabel: "🐟 Geng Lauk & Tin",
    time: "5 minit",
    gear: "1 Kuali / Microwave",
    bannerIcon: "🐟",
    image: "",
    bannerGradient: "linear-gradient(135deg, #ef4444 0%, #7f1d1d 100%)",
    desc: "Lauk tin paling *legend* abad ini. Sardin tin dipanaskan, dihancurkan sedikit, ditabur hirisan bawang merah, cili padi, dan diperah limau kasturi/nipis. Masam, pedas, manis.",
    vibe: "Hanyir-hanyir sedap tomato, pedas berdesing cili, masam perahan limau",
    cravingCall: "Malam buta lapar nasi panas atau roti putih, tapi lauk dalam peti dah habis. Cuma ada tin sardin je penyelamat.",
    pantryTags: ["sardin", "bawang"],
    ingredients: [
      "1 tin kecil sardin (Ayam Brand / King Cup / apa-apa jenama)",
      "1/2 biji bawang besar atau 3 biji bawang merah (dihiris)",
      "2-3 tangkai cili padi (diketuk atau hiris)",
      "Sedikit perahan jus limau kasturi / nipis"
    ],
    steps: [
      "Buka tin sardin, tuang terus ke dalam kuali kecil atau mangkuk microwave-safe.",
      "Panaskan atas dapur atau dalam microwave selama 2-3 minit sehingga menggelegak manja.",
      "Taburkan hirisan bawang dan cili padi ke atas sardin yang tengah panas.",
      "Perahkan jus limau, gaul rata. Terus cicah dengan roti keping atau curah atas nasi putih panas!"
    ],
    chefTip: "Bawang tu tak payah masak pun takpe! Bawang mentah yang rangup tu bila kena sos sardin panas, rasa manis dia akan 'potong' rasa hanyir ikan."
  },
  {
    id: "cucur-bawang-bilis",
    name: "Cucur Bawang Ikan Bilis Garing",
    category: "kudap",
    categoryLabel: "🥞 Geng Lempeng & Cucur",
    time: "10 minit",
    gear: "Kuali Minyak",
    bannerIcon: "🧅",
    image: "",
    bannerGradient: "linear-gradient(135deg, #fcd34d 0%, #b45309 100%)",
    desc: "Jemput-jemput paling ikonik kat Malaysia. Bancuhan tepung gandum dengan ikan bilis, hirisan bawang besar dan daun sup. Digoreng garing di luar, lembut gebu di dalam.",
    vibe: "Bau semerbak ikan bilis goreng dan manis bawang cair",
    cravingCall: "Masa hujan malam-malam, tekak tiba-tiba nak mengunyah benda panas yang rangup kat luar dan lembut kat dalam, cicah sos cili.",
    pantryTags: ["tepung", "bilis"],
    ingredients: [
      "1 cawan tepung gandum",
      "Segenggam ikan bilis (dibasuh, kalau rajin tumbuk sikit)",
      "1/2 biji bawang besar (didadu)",
      "Secubit garam dan serbuk kunyit (untuk warna cantik)",
      "Air suam (bancuh sampai pekat sederhana)"
    ],
    steps: [
      "Campurkan tepung, ikan bilis, bawang, garam dan serbuk kunyit ke dalam mangkuk.",
      "Tuang air sedikit demi sedikit sambil gaul. Jangan terlalu cair, pastikan adunan tu kental sikit (boleh dijemput dengan hujung jari).",
      "Panaskan minyak dalam kuali. Jemput adunan sikit-sikit dan masukkan dalam minyak panas.",
      "Goreng sambil golek-golekkan sampai kuning keemasan dan garing. Toskan minyak, sedia dicicah sos botol!"
    ],
    chefTip: "Nak cucur rangup gila kat luar? Gunakan air panas suam masa membancuh tepung, atau campurkan satu sudu besar minyak masak panas ke dalam adunan sebelum menggoreng!"
  },
  {
    id: "biskut-milo-celup",
    name: "Biskut Lemak Celup Milo Pekat",
    category: "kudap",
    categoryLabel: "☕ Geng Kudap & Minum Malam",
    time: "2 minit",
    gear: "Cawan / Mug",
    bannerIcon: "☕",
    image: "",
    bannerGradient: "linear-gradient(135deg, #4ade80 0%, #166534 100%)",
    desc: "Makan malam versi orang bujang paling lagenda. Biskut lemak Hup Seng segi empat dicelup perlahan ke dalam air Milo panas pekat berasap.",
    vibe: "Tenang, simple, dan mengembalikan memori duduk asrama dulu.",
    cravingCall: "Malas tahap dewa nak buka dapur atau panaskan lauk. Nak buat air je lepas tu rendam biskut sambil tengok siri TV.",
    pantryTags: ["biskut", "milo"],
    ingredients: [
      "3 sudu besar serbuk Milo",
      "1 sudu besar susu pekat manis",
      "Air panas menggelegak",
      "Setengah peket Biskut Lemak (Hup Seng / Ping Pong)"
    ],
    steps: [
      "Bancuh Milo pekat dengan susu dan air panas di dalam mug idaman awak.",
      "Buka biskut lemak, susun atas pinggan.",
      "Celupkan biskut lemak ke dalam Milo selama 3-4 saat (jangan lama sangat nanti hancur lebur jatuh dalam cawan!).",
      "Suap terus masuk mulut. Ulang sampai sedar-sedar biskut dah habis sepeket."
    ],
    chefTip: "Seni mencelup biskut sangat kritikal. Kalau celup 2 saat ia masih keras, kalau 5 saat ia akan gugur ke dasar cawan. 3.5 saat adalah waktu keemasan (golden ratio)!"
  },
  {
    id: "makaroni-sardin",
    name: "Makaroni Goreng Sardin Super Ringkas",
    category: "pasta",
    categoryLabel: "🍝 Geng Pasta & Barat",
    time: "12 minit",
    gear: "Periuk Rebus & Kuali",
    bannerIcon: "🍝",
    image: "",
    bannerGradient: "linear-gradient(135deg, #ef4444 0%, #991b1b 100%)",
    desc: "Makaroni rebus lebihan yang digoreng sebat dengan satu tin kecil sardin. Campuran rasa Itali dan selera bujang Melayu.",
    vibe: "Lapar nak makan berat tapi nak lari sikit dari makan nasi atau mi biasa.",
    cravingCall: "Ada nampak makaroni dalam kabinet dapur dan satu tin sardin hujung bucu. Nak gabungkan dua-dua ni jadi satu hidangan epik.",
    pantryTags: ["sardin", "pasta"],
    ingredients: [
      "1 mangkuk kecil makaroni / pasta (direbus empuk)",
      "1 tin kecil sardin (dihancurkan isinya)",
      "2 ulas bawang putih & 1/2 bawang merah (dicincang)",
      "Cili kisar / sos cili",
      "Sedikit kicap manis"
    ],
    steps: [
      "Rebus makaroni dalam air bergaram sehingga empuk, kemudian toskan.",
      "Tumis bawang putih dan bawang merah dalam sedikit minyak sampai naik bau. Masukkan sos cili sikit.",
      "Tuang setin sardin, hancurkan sikit ikan tu dengan sudip, biarkan mereneh sekejap.",
      "Masukkan makaroni yang dah direbus, renjiskan kicap manis sikit untuk warna. Gaul rata sampai agak kering. Siap!"
    ],
    chefTip: "Jangan masukkan kuah tomato sardin tu semua sekali masa menumis kalau taknak makaroni tu jadi terlalu berkuah. Ambil separuh je kuah tomato tu, bakinya buang atau simpan."
  }
];`;

let code = fs.readFileSync('app.js', 'utf8');
const rx = /^\];/m;
const match = rx.exec(code);

if (match) {
  code = code.substring(0, match.index - 1) + ',\n' + recipesToAdd + code.substring(match.index + 2);
  fs.writeFileSync('app.js', code);
  console.log('Successfully injected 4 pantry staples recipes!');
} else {
  console.log('Could not find the end of RECIPES array');
}
