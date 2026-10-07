const fs = require('fs');

const recipesToAdd = `  {
    id: "pisang-rebus-kelapa",
    name: "Pisang Rebus Cicah Kelapa Parut",
    category: "kudap",
    categoryLabel: "🍌 Geng Pisang & Ubi",
    time: "10 minit",
    gear: "Periuk Rebus",
    bannerIcon: "🍌",
    image: "images/cekodok_pisang.jpg",
    bannerGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    desc: "Pisang Abu atau Nipah yang direbus empuk bersama kulitnya, kemudian dikupas dan dicicah atau digaul bersama kelapa parut bergaram. Tekstur kenyal-kenyal empuk yang sangat memuaskan.",
    vibe: "Kenyal empuk berwap panas, lemak masin kelapa, klasik habis!",
    cravingCall: "Tekak rasa nak mengunyah benda yang mengenyangkan, manis semula jadi dan tak berminyak langsung.",
    pantryTags: ["pisang", "kudap"],
    ingredients: [
      "3-4 biji Pisang Abu atau Pisang Nipah (jangan terlalu masak/lembik)",
      "3 sudu besar kelapa parut segar / kering",
      "Secubit garam halus",
      "Sedikit gula (jika suka lebih manis)"
    ],
    steps: [
      "Bersihkan pisang (tak perlu buang kulit). Rebus dalam periuk berisi air mendidih selama 10-15 minit.",
      "Bila kulit pisang mula pecah sikit dan isi nampak empuk, angkat dan toskan.",
      "Dalam mangkuk kecil, ramas kelapa parut bersama secubit garam dan gula.",
      "Kupas kulit pisang yang masih panas, potong bulat-bulat, dan gaul bersama kelapa parut. Ngap!"
    ],
    chefTip: "Rebus pisang sekali dengan kulitnya supaya isinya kekal pejal, tak lembik berair, dan rasa manis aslinya terpelihara."
  },
  {
    id: "lempeng-kelapa-peknga",
    name: "Lempeng Kelapa Klasik (Peknga)",
    category: "lempeng",
    categoryLabel: "🥞 Geng Lempeng & Pancake",
    time: "8 minit",
    gear: "Kuali Leper (Pan)",
    bannerIcon: "🥥",
    image: "images/lempeng_telur.jpg",
    bannerGradient: "linear-gradient(135deg, #fcd34d 0%, #b45309 100%)",
    desc: "Lempeng kampung nostalgia yang padat dengan hirisan/parutan kelapa segar. Digoreng leper sehingga tepinya garing krup-krap, sangat ngam dicicah sambal tumis atau kari lebihan.",
    vibe: "Garing tepi, lembut di tengah, penuh rasa lemak kelapa bakar",
    cravingCall: "Teringin nak makan lempeng tapi nak yang berlemak-lemak sikit, rindu masakan tok kat kampung.",
    pantryTags: ["tepung", "kudap"],
    ingredients: [
      "1 cawan tepung gandum",
      "1/2 cawan kelapa parut segar",
      "Secubit garam",
      "Air suam secukupnya (untuk bancuhan)",
      "Sedikit minyak / mentega untuk menggoreng"
    ],
    steps: [
      "Satukan tepung gandum, kelapa parut, dan secubit garam di dalam mangkuk.",
      "Tuangkan air suam sikit-sikit sambil kacau sehingga menjadi adunan bater yang sederhana pekat (tidak terlalu cair).",
      "Panaskan sedikit minyak atau mentega di atas kuali leper (pan).",
      "Sendukkan adunan, leperkan, dan masak sehingga bahagian bawah garing keemasan. Terbalikkan dan masak rata. Siap sedia untuk dicicah!"
    ],
    chefTip: "Guna api sederhana kecil masa membakar supaya kelapa kat dalam tu sempat masak dan keluarkan minyak wangi (aroma kelapa bakar)."
  },
  {
    id: "keledek-rebus-simple",
    name: "Keledek Rebus Lembut Manis",
    category: "lenyek",
    categoryLabel: "🥔 Geng Lenyek & Empuk",
    time: "10 minit",
    gear: "Periuk / Microwave",
    bannerIcon: "🍠",
    image: "images/keledek_madu.jpg",
    bannerGradient: "linear-gradient(135deg, #c026d3 0%, #701a75 100%)",
    desc: "Keledek manis yang direbus atau dikukus ringkas. Dimakan suam-suam bersama secubit mentega atau kelapa parut. Paling simple, manis semula jadi dan buat perut rasa sangat tenteram.",
    vibe: "Manis berjus, empuk cair di mulut, penenang perut yang sejati",
    cravingCall: "Perut lapar tapi nak benda yang sihat, manis, dan tak guna banyak tenaga untuk prepare.",
    pantryTags: ["ubi"],
    ingredients: [
      "1-2 ketul keledek (oren, kuning atau ungu)",
      "Air untuk merebus",
      "Sedikit mentega atau kelapa parut (sebagai pelengkap/topping)"
    ],
    steps: [
      "Basuh keledek bersih-bersih. (Boleh kupas kulit atau biarkan kulitnya jika suka).",
      "Potong kepada ketulan besar dan rebus dalam air mendidih selama 10 minit sehingga empuk bila dicucuk garfu.",
      "Toskan air rebusan. Biarkan keledek berwap panas.",
      "Makan kosong begitu sahaja, atau sapukan sikit mentega di atasnya, atau gaul dengan kelapa parut bergaram. Settle!"
    ],
    chefTip: "Kalau malas pakai periuk, basuh keledek, cucuk dengan garfu kelilingnya, balut dengan tisu basah dan microwave 5-7 minit. Terus empuk!"
  },
  {
    id: "pulut-gaul-kelapa",
    name: "Pulut Pagi (Gaul Kelapa Parut)",
    category: "nasi",
    categoryLabel: "🍚 Geng Nasi & Karbo",
    time: "15 minit",
    gear: "Periuk Kukus / Rice Cooker",
    bannerIcon: "🍚",
    image: "images/nasi_impit.jpg",
    bannerGradient: "linear-gradient(135deg, #fcd34d 0%, #ea580c 100%)",
    desc: "Beras pulut dikukus panas-panas, digaul mesra bersama kelapa parut masin dan ditabur gula (merah atau putih). Kudapan ruji Pantai Timur yang cukup mengenyangkan untuk alas perut malam!",
    vibe: "Kenyal pulut wap panas, manis gula bersulam lemak masin kelapa",
    cravingCall: "Rasa nak makan pulut macam kenduri tapi versi paling malas dan cepat nak buat di rumah.",
    pantryTags: ["beras", "kudap"],
    ingredients: [
      "1 cawan beras pulut (direndam seketika jika sempat)",
      "1/2 cawan air (untuk mengukus/masak pulut)",
      "3 sudu besar kelapa parut",
      "Garam secubit",
      "Gula merah / gula perang / gula pasir"
    ],
    steps: [
      "Kukus beras pulut (atau masak dalam rice cooker dengan paras air kurang sedikit dari masak nasi biasa) sehingga pulut kembang lembut.",
      "Sementara pulut masak, ramas kelapa parut dengan secubit garam halus.",
      "Kaut pulut yang panas berasap ke dalam pinggan.",
      "Gaulkan pulut bersama kelapa parut tadi. Taburkan sedikit gula kegemaran awak di atasnya. Sedia dijamu!"
    ],
    chefTip: "Kalau nak pulut nampak kilat cantik, letak sikit je minyak masak masa tengah menanak/mengukus pulut tu."
  }
];`;

let code = fs.readFileSync('app.js', 'utf8');
const rx = /^\];/m;
const match = rx.exec(code);

if (match) {
  // Replace the closing bracket with the new recipes (which already contain the closing bracket)
  code = code.substring(0, match.index - 1) + ',\n' + recipesToAdd + code.substring(match.index + 2);
  fs.writeFileSync('app.js', code);
  console.log('Successfully injected recipes!');
} else {
  console.log('Could not find the end of RECIPES array');
}
