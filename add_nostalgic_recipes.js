const fs = require('fs');

const recipesToAdd = `  {
    id: "maggi-remas-goncang",
    name: "Maggi Remas Goncang (Ala Mamee)",
    category: "kudap",
    categoryLabel: "🍜 Geng Mi Segera",
    time: "1 minit",
    gear: "Tangan Anda Sahaja",
    bannerIcon: "💥",
    image: "",
    bannerGradient: "linear-gradient(135deg, #eab308 0%, #ca8a04 100%)",
    desc: "Tahap kemalasan infiniti. Mi segera yang dihancurkan di dalam peket, ditabur perencah kari, dan digoncang pusing. Kudapan rangup masin yang tak perlukan setitik air pun.",
    vibe: "Rangup krup krap yang sangat 'addictive', rasa MSG yang berdosa tapi nikmat.",
    cravingCall: "Nak mengunyah sambil tengok movie tapi malas nak bangun masak air, malas nak basuh mangkuk, nak yang terus boleh suap.",
    pantryTags: ["maggi", "kudap"],
    ingredients: [
      "1 Peket Mi Segera (Kari/Ayam/Asam Laksa)"
    ],
    steps: [
      "Jangan buka peket! Ramas dan tumbuk-tumbuk peket mi segera tu sampai mi di dalam hancur sikit.",
      "Koyakkan peket, keluarkan plastik perencah. Taburkan HANYA SEPARUH perencah ke dalam peket mi (kalau letak semua nanti masin berdesing).",
      "Picit tutup bahagian atas peket, goncang bersungguh-sungguh macam buat 'shake'.",
      "Ngap terus dari peket. Jilat jari yang penuh perencah tu di akhir sesi."
    ],
    chefTip: "Serbuk perencah kari Maggi tu sebenarnya sedap gila buat tabur kat atas pisang goreng atau ubi kentang goreng kalau taknak makan dengan mi!"
  },
  {
    id: "bubur-kicap-bilis",
    name: "Bubur Nasi Lebihan Kicap Bilis",
    category: "nasi",
    categoryLabel: "🍚 Geng Nasi & Karbo",
    time: "15 minit",
    gear: "Periuk Kecil",
    bannerIcon: "🍲",
    image: "",
    bannerGradient: "linear-gradient(135deg, #9ca3af 0%, #4b5563 100%)",
    desc: "Penyelamat perut bila rasa tak sedap badan atau lapar tengah malam. Nasi sejuk siang tadi dipanaskan balik jadi bubur, dikahwinkan dengan kicap manis dan bilis goreng.",
    vibe: "Panas-panas selesa meresap ke dalam perut, rasa masin manis yang tenang.",
    cravingCall: "Perut sebu, tekak rasa pahit nak makan makanan berat, tapi perlukan benda panas yang lembut untuk sejukkan perut.",
    pantryTags: ["beras", "bilis"],
    ingredients: [
      "1-2 senduk nasi putih lebihan",
      "1 cawan air (lebih kalau nak cair)",
      "1 sudu besar kicap manis",
      "Segenggam ikan bilis goreng atau bawang goreng",
      "Sedikit lada sulah (pilihan)"
    ],
    steps: [
      "Masukkan nasi sejuk dan air ke dalam periuk. Buka api perlahan dan biarkan ia mereneh sampai nasi jadi lembik jadi bubur.",
      "Kacau-kacau supaya tak kerak kat bawah. Bila tekstur dah cantik, tutup api.",
      "Renjiskan kicap manis di atas permukaan bubur yang panas berasap tu.",
      "Taburkan ikan bilis goreng garing dan lada sulah. Makan pelan-pelan sambil hirup!"
    ],
    chefTip: "Kalau nak rasa bubur macam kat kedai, campakkan setengah kiub pati ayam masa tengah rebus nasi sejuk tu."
  },
  {
    id: "sosej-scramble-butter",
    name: "Sosej Kuali Scramble Butter",
    category: "lauk",
    categoryLabel: "🍳 Geng Telur & Sosej",
    time: "6 minit",
    gear: "Kuali Leper",
    bannerIcon: "🌭",
    image: "",
    bannerGradient: "linear-gradient(135deg, #f87171 0%, #b91c1c 100%)",
    desc: "Gabungan bahan 'frozen' paling epik. Sosej digoreng lempap dengan mentega cair, dicampur dengan telur hancur. Lauk bujang ringkas untuk ganding dengan roti atau nasi.",
    vibe: "Bauan mentega menusuk kalbu campur aroma telur dadar dan sosej garing.",
    cravingCall: "Lapar benda berdaging tapi yang tinggal cuma sosej beku dalam peti ais. Nak buat jadi lauk sedap tapi cepat.",
    pantryTags: ["telur"],
    ingredients: [
      "2-3 batang sosej (hiris membulat atau kelar-kelar)",
      "1 sudu besar mentega / marjerin",
      "1 biji telur ayam",
      "Sedikit sos cili atau mayo untuk 'topping'"
    ],
    steps: [
      "Cairkan mentega dalam kuali panas. Masukkan hirisan sosej dan goreng sampai bahagian tepi sosej jadi garing-garing.",
      "Tolakkan sosej ke tepi kuali sikit. Pecahkan telur terus ke dalam kuali yang ada lebihan butter tu.",
      "Kacau-kacau telur (scramble) dan gaulkan balik semuanya bersama sosej tadi.",
      "Angkat dan tuang atas pinggan. Picitkan sos cili bentuk zigzag kat atas. Settle!"
    ],
    chefTip: "Masa pecahkan telur tu, biarkan telur tu masak sikit je dulu baru kacau. Nanti telur tu berketul cantik, takdela hancur lebur macam serbuk."
  },
  {
    id: "biskut-mentega-gula",
    name: "Biskut Lemak Sapu Mentega Gula",
    category: "kudap",
    categoryLabel: "☕ Geng Kudap & Minum Malam",
    time: "2 minit",
    gear: "Pisau Sapu & Pinggan",
    bannerIcon: "🧈",
    image: "",
    bannerGradient: "linear-gradient(135deg, #fde047 0%, #a16207 100%)",
    desc: "Snek zaman budak-budak tengok kartun pagi Ahad. Biskut lemak disapu mentega tebal dan ditabur gula pasir yang berkilau. Kombinasi masin lemak dan manis krup-krap!",
    vibe: "Nostalgia zaman sekolah rendah, simple tapi buat tak boleh berhenti mengunyah.",
    cravingCall: "Nak benda manis dan rangup, tapi taknak coklat atau keropok masin. Nak rasa 'homey' dan simple.",
    pantryTags: ["biskut"],
    ingredients: [
      "4-5 keping biskut lemak (Hup Seng / Jacob's / Ping Pong)",
      "Mentega atau marjerin (Planta dll) secukupnya",
      "1 sudu besar gula pasir"
    ],
    steps: [
      "Ambil sekeping biskut lemak.",
      "Sapukan lapisan mentega dengan berani di atas permukaannya. Tak perlu malu-malu, biar tebal sikit baru sedap.",
      "Ambil secubit gula pasir dan taburkan serata atas mentega tadi. (Gula akan melekat pada mentega).",
      "Ngap terus! Boleh juga lapiskan dengan satu lagi biskut jadi macam 'sandwich' biskut."
    ],
    chefTip: "Gunakan gula pasir kasar berbanding gula halus. Tekstur krup-krap gula tu lah rahsia utama yang buat dia sangat ketagih!"
  }
];`;

let code = fs.readFileSync('app.js', 'utf8');
const rx = /^\];/m;
const match = rx.exec(code);

if (match) {
  code = code.substring(0, match.index - 1) + ',\n' + recipesToAdd + code.substring(match.index + 2);
  fs.writeFileSync('app.js', code);
  console.log('Successfully injected 4 nostalgic recipes!');
} else {
  console.log('Could not find the end of RECIPES array');
}
