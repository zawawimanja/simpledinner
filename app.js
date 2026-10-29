const RECIPES = [
  {
    id: "french-fries-panas",
    name: "French Fries Emas Rangup Berempah",
    category: "kudap",
    categoryLabel: "🍟 Geng Kudap & Goreng",
    time: "6 minit",
    gear: "Air Fryer / Kuali Goreng",
    bannerIcon: "🍟",
    image: "images/french_fries.jpg",
    bannerGradient: "linear-gradient(135deg, #f59e0b 0%, #b45309 100%)",
    desc: "Kentang jejari garing keemasan di luar, lembut empuk gebu di dalam. Ditabur garam laut dan herba, dicicah mayo & sos cili.",
    vibe: "Garing masin panas, kepuasan mengunyah paling tinggi!",
    cravingCall: "Malam-malam tekak nak mengunyah benda rangup masin panas sambil santai.",
    pantryTags: ["kentang"],
    ingredients: [
      "1 mangkuk French fries jejari beku",
      "Secubit garam laut & lada hitam",
      "Sedikit serbuk paprika / herba rosemary (pilihan)",
      "Sos cili & mayonis bawang putih untuk cicah"
    ],
    steps: [
      "Keluarkan kentang fries terus dari freezer.",
      "Masukkan ke dalam air fryer pada suhu 200°C selama 6–8 minit (goncang bakul separuh masa) ATAU goreng minyak panas 4 minit.",
      "Angkat bila dah kuning keemasan garing, tabur garam laut dan lada hitam terus masa berasap panas.",
      "Hidang dalam mangkuk dan cicah sos kegemaran!"
    ],
    chefTip: "Jangan defrost fries sebelum masak; masak terus masa beku supaya luar kekal garing dan tak serap minyak."
  },
  {
    id: "jagung-cawan-pasar-malam",
    name: "Jagung Manis Cawan Susu Mentega (Pasar Malam)",
    category: "kudap",
    categoryLabel: "🌽 Sektor Jagung Manis",
    time: "2 minit",
    gear: "1 Cawan & Microwave / Periuk Kecil",
    bannerIcon: "🌽",
    image: "images/jagung_cawan.png",
    bannerGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    desc: "Jagung manis berjus panas dalam cawan digaul marjerin Planta/mentega wangi, sedikit susu pekat manis dan secubit garam. Zero kuali, tak berminyak, ratah sudu demi sudu.",
    vibe: "Manis lemak berjus meletup-letup, aroma mentega wangi berasap, zero basuh periuk",
    cravingCall: "Nak kudapan manis lemak panas yang terus siap dalam 2 minit tanpa buat dapur berasap atau bersepah.",
    pantryTags: ["jagung", "mentega"],
    ingredients: [
      "1 cawan jagung manis tin (toskan airnya)",
      "1 sudu besar marjerin Planta / mentega wangi",
      "1 sudu besar susu pekat manis",
      "Secubit kecil garam halus (rahsia peniaga naikkan lemak)"
    ],
    steps: [
      "Masukkan jagung manis ke dalam cawan seramik atau mangkuk kecil.",
      "Letakkan mentega/Planta dan susu pekat di atas jagung.",
      "Masukkan ke dalam microwave selama 45–60 saat sehingga mentega cair dan jagung berasap panas.",
      "Keluarkan, taburkan secubit garam dan kacau sebati terus dengan sudu.",
      "Terus suap panas-panas sambil santai di sofa!"
    ],
    chefTip: "Secubit garam halus tu rahsia penting peniaga pasar malam — ia potong rasa muak manis dan naikkan rasa lemak berkrim berkali ganda!"
  },
  {
    id: "jagung-nyiur-kampung",
    name: "Jagung Rebus Gaul Nyiur (Kelapa Parut)",
    category: "kudap",
    categoryLabel: "🌽 Sektor Jagung Manis",
    time: "3 minit",
    gear: "1 Mangkuk",
    bannerIcon: "🌽",
    image: "images/jagung_nyiur.png",
    bannerGradient: "linear-gradient(135deg, #f59e0b 0%, #166534 100%)",
    desc: "Makanan kampung sejati! Biji jagung manis panas digaul rata bersama kelapa parut (nyiur) segar, secubit garam halus, dan sedikit gula. Manis, masin, berlemak dan sangat nostalgia sama macam ubi rebus.",
    vibe: "Manis jagung berjus, masin lemak kelapa parut, rasa kembali ke zaman kanak-kanak",
    cravingCall: "Tekak nak kudapan kampung yang sangat simple, manis berjus semula jadi dan lemak-lemak masin kelapa.",
    pantryTags: ["jagung"],
    ingredients: [
      "1 cawan jagung manis (tin atau lerai segar)",
      "3 sudu besar kelapa parut (nyiur) segar / kering",
      "1/2 sudu teh gula putih / gula pasir",
      "Secubit kecil garam halus"
    ],
    steps: [
      "Jika guna jagung tin, toskan airnya. Panaskan jagung sebentar di dalam microwave (1 minit) atau rebus/kukus sekejap hingga berasap panas.",
      "Dalam mangkuk berasingan, ramas atau gaulkan kelapa parut bersama secubit garam dan gula.",
      "Masukkan jagung yang panas-panas itu ke dalam mangkuk kelapa tadi.",
      "Gaul rata supaya setiap butir jagung disaluti serpihan lemak kelapa. Sudukan perlahan-lahan nikmati rasa kampung!"
    ],
    chefTip: "Garam halus jangan tinggal! Ia sangat penting untuk 'potong' manis jagung dan menaikkan rasa lemak masin kelapa (nyiur) tu supaya seimbang."
  },
  {
    id: "cucur-jagung-manis",
    name: "Cucur Jagung Manis Rangup & Lembut",
    category: "lempeng",
    categoryLabel: "🥞 Geng Lempeng & Cucur",
    time: "8 minit",
    gear: "1 Kuali & Sudu",
    bannerIcon: "🌽",
    image: "images/cucur_jagung.jpg",
    bannerGradient: "linear-gradient(135deg, #eab308 0%, #ca8a04 100%)",
    desc: "Kegemaran mutlak: biji jagung manis berjus dibalut bancuhan tepung empuk beraroma wangi bila digoreng keemasan.",
    vibe: "Rangup di tepi, empuk berjus di tengah",
    cravingCall: "Tekak craving rasa manis jagung yang meletup-letup dalam mulut bila dikunyah.",
    pantryTags: ["jagung", "tepung", "telur", "bawang"],
    ingredients: [
      "1 cawan jagung manis (tin/segar)",
      "1 cawan tepung gandum",
      "1 sudu besar tepung beras / jagung",
      "1 biji telur",
      "1/2 biji bawang merah (cincang)",
      "1/2 cawan air panas suam",
      "1/2 sudu teh garam & sedikit kunyit"
    ],
    steps: [
      "Gaul tepung gandum, tepung beras, garam, dan serbuk kunyit dalam mangkuk.",
      "Masukkan telur, jagung manis, dan bawang. Tuang air suam perlahan sampai adunan pekat melekat.",
      "Panaskan sedikit minyak dalam kuali. Sudukan adunan tompok-tompok ke kuali panas.",
      "Goreng 2-3 minit sehingga kuning keemasan, balikkan sekali. Angkat, toskan dan sedia diratah!"
    ],
    chefTip: "Guna air suam membancuh tepung supaya cucur kekal lembut sampai suapan terakhir."
  },
  {
    id: "lempeng-telur-bawang",
    name: "Lempeng Telur Bawang Panas",
    category: "lempeng",
    categoryLabel: "🥞 Geng Lempeng & Cucur",
    time: "7 minit",
    gear: "1 Kuali Leper (Non-Stick)",
    bannerIcon: "🥞",
    image: "images/lempeng_telur.jpg",
    bannerGradient: "linear-gradient(135deg, #d97706 0%, #78350f 100%)",
    desc: "Lempeng gebu dan empuk dengan aroma bawang manis yang dibakar atas kuali leper. Mengenyangkan tanpa rasa muak.",
    vibe: "Gebu lembut, lemak masin wangi kuali",
    cravingCall: "Bosan gila makan roti frozen, nak lempeng panas fresh yang bau wangi satu rumah.",
    pantryTags: ["tepung", "telur", "bawang"],
    ingredients: [
      "1 cawan tepung gandum",
      "1 biji telur",
      "1 cawan air biasa / suam",
      "1/2 biji bawang holland / merah (hiris nipis)",
      "1 tangkai daun bawang (pilihan)",
      "1/2 sudu teh garam",
      "1 sudu teh mentega / marjerin"
    ],
    steps: [
      "Kacau rata tepung, garam, telur, dan air dalam mangkuk sampai tiada ketulan.",
      "Campurkan hirisan bawang ke dalam adunan.",
      "Panaskan kuali non-stick, oles nipis mentega. Tuang satu senduk adunan dan ratakan leper.",
      "Masak 2 minit sehingga keemasan, terbalikkan dan biarkan lagi 1-2 minit. Angkat dan makan panas!"
    ],
    chefTip: "Guna kuali non-stick supaya tak melekat dan tak perlu guna banyak minyak."
  },
  {
    id: "ubi-kayu-cicah-kelapa",
    name: "Ubi Kayu Rebus Empuk Cicah Kelapa Parut",
    category: "lenyek",
    categoryLabel: "🥔 Geng Lenyek & Empuk",
    time: "12 minit",
    gear: "1 Periuk Rebus",
    bannerIcon: "🥔",
    image: "images/ubi_kayu_rebus.jpg",
    bannerGradient: "linear-gradient(135deg, #d97706 0%, #78350f 100%)",
    desc: "Ubi kayu empuk merekah yang direbus panas-panas, dicicah kelapa parut berserat masin gurih dan taburan gula kasar atau sambal tumis pedas. Hidangan malam nostalgia paling comfort!",
    vibe: "Empuk merekah panas, lemak manis gurih kelapa, rasa nostalgia malam kampung",
    cravingCall: "Tekak craving makanan kampung yang simple, empuk berkrim semula jadi dan menenangkan perut malam-malam.",
    pantryTags: ["ubi"],
    ingredients: [
      "300g ubi kayu (kupas kulit, potong kiub/ketul sederhana)",
      "1/2 cawan kelapa parut segar / kering",
      "1/2 sudu teh garam halus (digaul dengan kelapa parut)",
      "1 sudu besar gula pasir atau sambal tumis (pilihan cicahan)"
    ],
    steps: [
      "Kupas kulit ubi kayu dan potong ketul sederhana. Cuci bersih.",
      "Rebus ubi kayu dalam air bergaram (1/2 sudu teh garam) selama 10-12 minit sehingga ubi merekah lembut dan empuk bila dicucuk garfu.",
      "Sementara tunggu ubi empuk, gaulkan kelapa parut dengan secubit garam halus.",
      "Toskan air rebusan ubi kayu panas-panas. Hidangkan di atas pinggan bersama kelapa parut masin-gurih dan taburan gula / sambal tumis!"
    ],
    chefTip: "Rebus ubi kayu bersama secubit garam dan daun pandan (jika ada) untuk aroma kampung yang wangi merebak satu rumah."
  },
  {
    id: "mashed-potato-ekspres",
    name: "Mashed Potato Berkrim Mentega",
    category: "lenyek",
    categoryLabel: "🥔 Geng Lenyek & Empuk",
    time: "8 minit",
    gear: "1 Periuk Kecil & Garfu",
    bannerIcon: "🥔",
    image: "images/mashed_potato.jpg",
    bannerGradient: "linear-gradient(135deg, #d97706 0%, #92400e 100%)",
    desc: "Kentang lenyek gebu berkrim tanpa tunggu lama—dipotong dadu kecil supaya empuk sepantas kilat.",
    vibe: "Paling comfort, gebu gebas, lemak bermentega",
    cravingCall: "Ketagih tekstur empuk gebu yang cair di lidah dengan aroma mentega dan lada hitam.",
    pantryTags: ["kentang", "mentega"],
    ingredients: [
      "2 biji kentang saiz sederhana (kupas & potong dadu kecil 1cm)",
      "1 sudu besar mentega penuh",
      "3 sudu besar susu segar atau susu cair",
      "1/4 sudu teh garam",
      "Serbuk lada hitam & lada sulah secukup rasa"
    ],
    steps: [
      "Potong kentang dadu kecil. Rebus dalam air bergaram 6 minit sampai cucuk garfu terus tembus.",
      "Toskan air rebusan sepenuhnya, biarkan kentang kekal dalam periuk panas.",
      "Masukkan mentega, susu, garam, dan lada hitam terus ke dalam periuk tadi.",
      "Lenyek guna garfu 1 minit sampai gebu dan sebati. Makan terus panas-panas!"
    ],
    chefTip: "Kunci cepat empuk ialah saiz dadu: potong kiub kecil 1cm, bukan seketul besar."
  },
  {
    id: "bubur-oat-savoury",
    name: "Bubur Oat Savoury Telur Goyang",
    category: "bubur",
    categoryLabel: "🥣 Geng Bubur & Sup",
    time: "4 minit",
    gear: "1 Periuk Kecil Sahaja",
    bannerIcon: "🥣",
    image: "images/bubur_oat_telur.jpg",
    bannerGradient: "linear-gradient(135deg, #d97706 0%, #78350f 100%)",
    desc: "Alternatif congee terpantas: oat dimasak masin gurih macam bubur nasi Cina, pekat berkrim bersama telur separuh masak meleleh.",
    vibe: "Super lembut, menenangkan perut, siap 4 minit!",
    cravingCall: "Tekak nak rasa hangat, masin gurih dan licin tanpa perlu tunggu beras kembang.",
    pantryTags: ["nasi", "telur", "mentega", "bawang"],
    ingredients: [
      "1/2 cawan oat segera (instant / rolled oat)",
      "1 1/4 cawan air atau sup stok ayam",
      "1 biji telur ayam",
      "1 sudu teh minyak bijan / mentega",
      "1/2 sudu teh kicap cair / secubit garam",
      "Serbuk lada putih & daun bawang / bawang goreng"
    ],
    steps: [
      "Masukkan oat dan air/stok ke dalam periuk kecil. Masak api sederhana 2 minit sambil kacau sampai pekat likat.",
      "Pecahkan sebiji telur terus ke tengah bubur oat yang panas berasap.",
      "Tutup periuk 1-2 minit biar putih telur mengeras lembut dan kuningnya kekal goyang.",
      "Renjis kicap cair, minyak bijan, tabur lada putih dan hirup panas-panas!"
    ],
    chefTip: "Guna oat segera kalau nak tekstur sehalus bubur nasi tanpa perlu reneh beras berjam-jam."
  },
  {
    id: "chawanmushi-telur",
    name: "Telur Kukus Sutera / Chawanmushi",
    category: "bubur",
    categoryLabel: "🥚 Sektor Telur & Sutera",
    time: "3 minit",
    gear: "Microwave / Pengukus Kecil",
    bannerIcon: "🍮",
    image: "images/chawanmushi.jpg",
    bannerGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    desc: "Telur kukus Jepun yang tersangat licin macam dadih/taufu fa dengan rasa stok ayam umami yang lembut mengalir di kerongkong.",
    vibe: "Licin meluncur, sifar tenaga mengunyah, rasa mewah",
    cravingCall: "Perut penat, nak sesuatu yang suam dan lembut meluncur tanpa beban.",
    pantryTags: ["telur"],
    ingredients: [
      "1 biji telur ayam segar",
      "1/2 cawan air sup stok ayam (atau air suam + secubit kiub pati)",
      "1/2 sudu teh kicap cair / secubit garam",
      "Hiris cendawan / daun sup kecil (pilihan)"
    ],
    steps: [
      "Pukul telur bersama air stok dan sedikit kicap cair perlahan (jangan sampai berbuih banyak).",
      "Tapis bancuhan telur menggunakan penapis kecil terus ke dalam cawan/mangkuk tahan panas (supaya licin).",
      "Tutup cawan dengan piring kecil atau plastik wrap, microwave dengan kuasa rendah/sederhana selama 2.5 - 3 minit.",
      "Keluarkan, renjis sedikit minyak bijan dan nikmati kelicinan sutera panas!"
    ],
    chefTip: "Wajib tapis dan guna kuasa microwave rendah supaya teksturnya licin tanpa rongga kasar."
  },
  {
    id: "maggi-kari-telur",
    name: "Maggi Kari Kuah Pekat Telur Goyang",
    category: "maggi",
    categoryLabel: "🍜 Geng Maggi & Nasi Impit",
    time: "4 minit",
    gear: "1 Periuk Kecil",
    bannerIcon: "🍜",
    image: "images/maggi_kari_telur.jpg",
    bannerGradient: "linear-gradient(135deg, #ea580c 0%, #9a3412 100%)",
    desc: "Lagenda waktu malam: mee kari kenyal berkuah pekat berkrim hasil telur separuh masak yang dipecahkan tepat pada waktunya.",
    vibe: "Panas berempah, kuah pekat berlemak, aroma tak tertahan",
    cravingCall: "Bila bau rempah kari terlintas di fikiran, memang tak boleh tidur selagi tak hirup.",
    pantryTags: ["maggi", "telur"],
    ingredients: [
      "1 bungkus Maggi Kari",
      "1 1/4 cawan air (kurang air = kuah lebih pekat kaw)",
      "1 biji telur ayam",
      "1 keping keju (pilihan - untuk kari berkrim ala mamak)",
      "Hirisan cili & daun bawang"
    ],
    steps: [
      "Didihkan 1 1/4 cawan air dalam periuk kecil. Masukkan perencah kari dan biarkan mendidih wangi.",
      "Masukkan mee maggi, masak selama 1.5 minit sambil leraikan.",
      "Pecahkan sebiji telur terus di tengah. Jangan kacau telur biar kuningnya kekal bulat goyang.",
      "Kecilkan api, biar reneh 1 minit lagi. Tuang dalam mangkuk dan hirup kuah pekatnya!"
    ],
    chefTip: "Jangan letak air banyak sangat; guna 1 cawan suku supaya rasa kari pekat pekat menyalut mee."
  },
  {
    id: "nasi-impit-instant",
    name: "Nasi Impit Instant Sambal / Sup Panas",
    category: "maggi",
    categoryLabel: "🍜 Geng Maggi & Nasi Impit",
    time: "7 minit",
    gear: "1 Periuk",
    bannerIcon: "🍚",
    image: "images/nasi_impit.jpg",
    bannerGradient: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
    desc: "Ketulan nasi padat lembut yang dipotong dadu, dinikmati bersama kuah sambal tumis panas, rendang segera atau dihirup bersama sup.",
    vibe: "Padat kenyang, empuk lembut, nostalgia hari raya",
    cravingCall: "Rindu nak makan nasi impit empuk cicah kuah sedap bila malas masak nasi putih.",
    pantryTags: ["nasi"],
    ingredients: [
      "1-2 ketul nasi impit mini segera (rebus ekspres / microwave)",
      "Sambal tumis / kuah kacang segera / sup ayam panas",
      "Secubit bawang goreng"
    ],
    steps: [
      "Rebus pek nasi impit mini dalam air mendidih (atau potong baki nasi impit sejuk jika sedia ada).",
      "Potong dadu kiub comel bila dah empuk pejal.",
      "Panaskan kuah sambal tumis atau sup stok panas beraroma bawang.",
      "Tuang kuah atas ketulan nasi impit dan tabur bawang goreng. Siap dalam sekelip mata!"
    ],
    chefTip: "Boleh simpan stok nasi impit mini siap rebus dalam peti ais, malam-malam tinggal panaskan 1 minit."
  },
  {
    id: "keropok-lekor",
    name: "Keropok Lekor Goreng Rangup-Kenyal",
    category: "kudap",
    categoryLabel: "🍟 Geng Kudap & Goreng",
    time: "6 minit",
    gear: "Air Fryer / Kuali",
    bannerIcon: "🐟",
    image: "images/keropok_lekor.jpg",
    bannerGradient: "linear-gradient(135deg, #78350f 0%, #451a03 100%)",
    desc: "Hirisan keropok lekor ikan yang digoreng panas: kerak luar rangup garing berbunyi, dalamnya sangat kenyal empuk berjus.",
    vibe: "Garing berkerak luar, kenyal empuk isi ikan di dalam",
    cravingCall: "Bau aroma gorengan lekor panas waktu malam dengan sos pencicah manis pedas.",
    pantryTags: ["kudap"],
    ingredients: [
      "5-6 batang keropok lekor (potong serong)",
      "Minyak masak secukupnya / semburan minyak untuk air fryer",
      "Sos pencicah keropok lekor pedas manis"
    ],
    steps: [
      "Potong serong keropok lekor dengan ketebalan sederhana.",
      "Goreng dalam minyak sederhana panas selama 4-5 minit ATAU masukkan air fryer 180°C selama 7 minit.",
      "Bila kulit luar dah kembung dan garing keemasan, angkat dan toskan minyak.",
      "Cicah dengan sos manis pedas selagi masih berasap!"
    ],
    chefTip: "Goreng guna air fryer dengan sedikit semburan minyak untuk hasil garing tanpa rasa berminyak."
  },
  {
    id: "enoki-goreng-crispy",
    name: "Cendawan Enoki Goreng Crispy",
    category: "kudap",
    categoryLabel: "🍟 Geng Kudap & Goreng",
    time: "5 minit",
    gear: "1 Kuali Menggoreng",
    bannerIcon: "🍄",
    image: "images/enoki_goreng.jpg",
    bannerGradient: "linear-gradient(135deg, #b45309 0%, #78350f 100%)",
    desc: "Jambangan cendawan enoki disalut tepung berempah nipis dan digoreng garing keemasan. Bunyi krup krap yang bikin ketagih!",
    vibe: "Super rangup, ringan macam keropok, wangi bawang putih",
    cravingCall: "Nak kudapan yang rangup gila macam makan snek tapi berasaskan sayur cendawan.",
    pantryTags: ["cendawan", "tepung"],
    ingredients: [
      "1 paket cendawan enoki (potong akar, leraikan kecil)",
      "4 sudu besar tepung goreng serbaguna (Bestari/tepung jagung)",
      "Sedikit serbuk lada putih & paprika",
      "Minyak untuk menggoreng"
    ],
    steps: [
      "Potong buang akar enoki, basuh dan toskan kering. Leraikan jadi jambangan kecil.",
      "Gaulkan enoki dalam tepung kering sehingga setiap urat bersalut nipis (tak perlu bancuh air).",
      "Panaskan minyak, masukkan enoki dan lebarkan macam kipas.",
      "Goreng 2 minit sahaja sampai garing keemasan. Angkat toskan dan tabur sedikit lada sulah!"
    ],
    chefTip: "Pastikan enoki ditos kering sebelum gaul tepung supaya salutan tepung kekal rangup berjam-jam."
  },
  {
    id: "wrap-popcorn-shawarma",
    name: "Wrap Popcorn Chicken Shawarma Meleleh",
    category: "wrap",
    categoryLabel: "🌯 Geng Wrap & Shawarma",
    time: "5 minit",
    gear: "1 Kuali Leper / Toaster",
    bannerIcon: "🌯",
    image: "images/chicken_wrap.jpg",
    bannerGradient: "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    desc: "Kepingan tortilla lembut dibalut popcorn chicken rangup, timun rangup, sos mayonis bawang putih dan limpahan sos keju meleleh.",
    vibe: "Kulit lembut panas, isi ayam rangup bersalut sos",
    cravingCall: "Lapar berat malam hari tapi nak yang mudah pegang sebelah tangan sambil buat kerja.",
    pantryTags: ["wrap", "ayam"],
    ingredients: [
      "1 keping roti wrap / tortilla",
      "Segenggam popcorn chicken / nuget ayam (siap masak air fryer)",
      "Hirisan kobis / salad segar",
      "1 sudu sos cili & mayonis bawang putih",
      "Sedikit sos keju (nacho cheese sauce)"
    ],
    steps: [
      "Masak popcorn chicken dalam air fryer 5 minit sampai garing.",
      "Layurkan roti tortilla atas kuali kering panas selama 30 saat biar lembut gebu.",
      "Susun sayur salad, letak popcorn chicken panas, dan tuang sos cili, mayonis serta sos keju.",
      "Lipat kemas kedua belah tepi dan gulung padat. Panggang sekejap atas kuali biar bercorak garing. Potong dua dan nikmati!"
    ],
    chefTip: "Layurkan tortilla sekejap atas kuali panas sebelum gulung supaya roti tak koyak dan senang dilipat."
  },
  {
    id: "nuget-crispy",
    name: "Nuget Ayam Crispy Air-Fryer",
    category: "kudap",
    categoryLabel: "🍟 Geng Kudap & Goreng",
    time: "6 minit",
    gear: "Air Fryer / Kuali",
    bannerIcon: "🍗",
    image: "images/nuget_ayam.jpg",
    bannerGradient: "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
    desc: "Nuget ayam keemasan yang rangup di luar dan empuk berjus di dalam, cicah sos cili manis atau sos BBQ berasap.",
    vibe: "Kegemaran klasik, sifar renyah, terus siap",
    cravingCall: "Paling senang bila malas fikir: campak dalam air fryer, bunyi 'ting', terus makan.",
    pantryTags: ["kudap"],
    ingredients: [
      "6-8 keping nuget ayam beku",
      "Sos cili thai / sos cheese untuk cicah"
    ],
    steps: [
      "Susun nuget beku dalam bakul air fryer.",
      "Bakar pada suhu 190°C selama 6–7 minit (balikkan sekali pada minit ke-4).",
      "Keluarkan bila dah perang keemasan dan menggelegak rangup.",
      "Cicah dengan sos cili manis panas-panas!"
    ],
    chefTip: "Tak perlu letak minyak langsung jika guna air fryer; lemak semulajadi nuget akan buat salutan jadi super crispy."
  },
  {
    id: "salad-telur-creamy",
    name: "Salad Telur Berkrim (Japanese Egg Salad)",
    category: "salad",
    categoryLabel: "🥗 Geng Salad Fresh",
    time: "3 minit",
    gear: "1 Mangkuk & Garfu",
    bannerIcon: "🥗",
    image: "images/salad_telur.jpg",
    bannerGradient: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
    desc: "Telur rebus hancur digaulkan bersama mayonis Jepun berkrim, lada hitam kasar dan daun bawang. Boleh diratah sejuk atau disapu atas biskut.",
    vibe: "Segar, berkrim sejuk, menyejukkan tekak malam",
    cravingCall: "Nak makanan yang rasa segar, tak berminyak tapi ada rasa lemak berkrim yang memuaskan.",
    pantryTags: ["telur"],
    ingredients: [
      "2 biji telur rebus",
      "1 1/2 sudu besar mayonis (Kewpie / regular)",
      "1/2 sudu kecil susu segar",
      "Secubit garam & lada hitam kasar",
      "Sedikit hirisan daun bawang / timun jepun"
    ],
    steps: [
      "Kupas telur rebus, masukkan dalam mangkuk dan lenyek kasar guna garfu.",
      "Campurkan mayonis, sedikit susu, garam dan lada hitam.",
      "Gaul sebati sampai dapat tekstur berkrim gebu dengan sedikit ketulan telur.",
      "Tabur daun bawang dan makan terus sejuk-sejuk suam!"
    ],
    chefTip: "Guna telur rebus sedia ada di peti sejuk, 2 minit dah siap semangkuk salad berkrim mewah."
  },
  {
    id: "mushroom-soup-telur",
    name: "Mushroom Soup Ekspres + Telur Goyang",
    category: "bubur",
    categoryLabel: "🥣 Geng Bubur & Sup",
    time: "5 minit",
    gear: "1 Periuk Sahaja",
    bannerIcon: "🍄",
    image: "images/mushroom_soup.jpg",
    bannerGradient: "linear-gradient(135deg, #78716c 0%, #292524 100%)",
    desc: "Sup cendawan berkrim pekat dihangatkan terus, ditambah sebiji telur separuh masak dan cicahan biskut tawar.",
    vibe: "Super berkrim, rasa mewah 5 minit siap",
    cravingCall: "Malas nak kupas apa-apa tapi nak rasa macam makan sup hotel sambil baring tengok movie.",
    pantryTags: ["cendawan", "telur", "mentega"],
    ingredients: [
      "1 pek / tin sup cendawan segera",
      "1/2 cawan susu segar atau air",
      "1 biji telur ayam segar",
      "1 sudu kecil mentega",
      "Serbuk lada hitam kasar",
      "Biskut cream cracker / roti tawar (untuk cicah)"
    ],
    steps: [
      "Tuang sup cendawan dan susu ke periuk kecil. Panaskan atas api sederhana sambil kacau sebati.",
      "Bila sup mula berasap panas hampir mendidih, pecahkan sebiji telur terus di tengah sup.",
      "Perlahankan api, tutup periuk 2 minit biar putih telur mengeras tapi kuningnya kekal goyang.",
      "Tuang ke mangkuk, renjis lada hitam dan mentega. Cicah biskut tawar panas-panas!"
    ],
    chefTip: "Pecah telur terus dalam sup bagi tekstur sutera yang mewah tanpa kotorkan kuali lain."
  },
  {
    id: "jacket-potato-microwave",
    name: "Jacket Potato Microwave Mentega & Keju",
    category: "lenyek",
    categoryLabel: "🥔 Geng Lenyek & Empuk",
    time: "6 minit",
    gear: "Microwave Sahaja (Zero Kuali)",
    bannerIcon: "🧀",
    image: "images/jacket_potato.jpg",
    bannerGradient: "linear-gradient(135deg, #ca8a04 0%, #854d0e 100%)",
    desc: "Kentang empuk meleleh disalut mentega cair dan limpahan keju tanpa perlu buka oven.",
    vibe: "Hangat, padat mengenyangkan, sifar kerja basuh",
    cravingCall: "Zero energy nak basuh kuali tapi perut berkeroncong nak makan kentang empuk panas.",
    pantryTags: ["kentang", "mentega"],
    ingredients: [
      "1 biji kentang saiz sederhana/besar",
      "1 sudu besar mentega",
      "1 keping keju cheddar / mozzarella",
      "Secubit garam & serbuk lada hitam",
      "Sedikit oregano / cili flake (pilihan)"
    ],
    steps: [
      "Basuh kulit kentang. Cucuk seluruh permukaan kentang dengan garfu 6-8 kali.",
      "Letak atas pinggan microwave, masak kuasa tinggi (high) 5-6 minit sampai lembut bila ditekan.",
      "Keluarkan, belah tanda 'X' di atas dan picit tepi supaya isinya terbuka empuk.",
      "Sumbat mentega ke tengah isi panas berasap, letak kepingan keju dan biar cair melimpah!"
    ],
    chefTip: "Kentang besar lagi cantik jadi jacket potato, tapi potong dua dulu kalau nak cepat — microwave masak rata dalam 4 minit je. Letak mentega masa isi masih berasap supaya ia meleleh ke dalam semua celah."
  },
  {
    id: "cekodok-bilis-rangup",
    name: "Cekodok Bilis Bawang Rangup & Bulat",
    category: "lempeng",
    categoryLabel: "🥞 Geng Lempeng & Cekodok",
    time: "7 minit",
    gear: "1 Kuali Menggoreng",
    bannerIcon: "🧆",
    image: "images/cekodok_bilis.jpg",
    bannerGradient: "linear-gradient(135deg, #b45309 0%, #78350f 100%)",
    desc: "Cekodok ikan bilis tumbuk dan hirisan bawang merah yang digoreng garing di luar, gebu lembut di dalam. Sangat sedap dicicah sos cili panas.",
    vibe: "Garing berkerak luar, gebu wangi bilis di dalam",
    cravingCall: "Tekak mengidam cekodok panas berasap yang rangup bila digigit waktu malam.",
    pantryTags: ["tepung", "bawang", "kudap"],
    ingredients: [
      "1 cawan tepung gandum",
      "Segenggam ikan bilis (cuci & tumbuk kasar)",
      "1/2 biji bawang merah / holland (hiris nipis)",
      "1 tangkai daun sup / daun bawang",
      "1/2 cawan air panas suam (kunci gebu)",
      "1/2 sudu teh garam"
    ],
    steps: [
      "Gaul tepung gandum, ikan bilis tumbuk, bawang, dan garam dalam mangkuk.",
      "Tuang air panas suam sedikit demi sedikit sambil kacau rata sampai adunan pekat melekit.",
      "Panaskan minyak sederhana. Jemput guna sudu atau jari basah ke dalam minyak panas.",
      "Goreng 3-4 minit sambil balik-balikkan sampai bulat keemasan garing. Angkat dan toskan!"
    ],
    chefTip: "Guna air panas suam masa bancuh tepung supaya cekodok tak serap minyak dan kekal gebu tak liat."
  },
  {
    id: "cekodok-pisang-emas",
    name: "Cekodok Pisang Emas Montok",
    category: "lempeng",
    categoryLabel: "🥞 Geng Lempeng & Cekodok",
    time: "8 minit",
    gear: "1 Kuali Menggoreng",
    bannerIcon: "🍌",
    image: "images/cekodok_pisang.jpg",
    bannerGradient: "linear-gradient(135deg, #b45309 0%, #78350f 100%)",
    desc: "Cekodok pisang klasik berkerak nipis di luar dan sangat lembap empuk di dalam. Paling sedap dimakan panas berwap.",
    vibe: "Manis lemak pisang, lembut gebu berwap",
    cravingCall: "Rindu rasa cekodok pisang kampung yang manis harum panas baru angkat dari kuali.",
    pantryTags: ["pisang", "tepung"],
    ingredients: [
      "3-4 biji pisang masak ranum",
      "3/4 cawan tepung gandum",
      "1 sudu besar gula (pilihan)",
      "1/4 sudu teh garam",
      "Minyak untuk menggoreng"
    ],
    steps: [
      "Lenyek pisang bersama garam dan sedikit gula sampai lumat berair.",
      "Masukkan tepung gandum sedikit demi sedikit. Kacau sampai adunan pekat melekit.",
      "Panaskan minyak sederhana panas. Jemput adunan dengan sudu atau hujung jari terus ke minyak.",
      "Goreng sambil golek-golekkan 3-4 minit sampai perang gelap berkilat. Angkat dan toskan!"
    ],
    chefTip: "Goreng guna api sederhana supaya bahagian dalam masak empuk dan luar tak hangus."
  },
  {
    id: "coleslaw-krim-segar",
    name: "Coleslaw Berkrim Segar (Ala KFC)",
    category: "salad",
    categoryLabel: "🥗 Geng Salad Fresh",
    time: "3 minit",
    gear: "1 Mangkuk & Sudu Sahaja",
    bannerIcon: "🥗",
    image: "images/coleslaw.jpg",
    bannerGradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    desc: "Kobis dan lobak merah yang dicincang halus disalut sos mayonis berkrim, sedikit susu, perahan lemon dan secubit gula. Rangup manis dan sejuk menyegarkan tekak!",
    vibe: "Rangup sejuk, manis berlemak, penyejuk tekak terbaik",
    cravingCall: "Tekak nak benda yang sejuk rangup berlemak manis untuk seimbangkan makanan goreng panas malam ni.",
    pantryTags: ["salad", "kudap"],
    ingredients: [
      "1 cawan kobis (cincang dadu halus)",
      "2 sudu besar lobak merah (cincang halus)",
      "2 sudu besar mayonis (Kewpie / regular)",
      "1 sudu besar susu segar / susu cair",
      "1/2 sudu kecil gula (ikut manis)",
      "1/2 sudu kecil jus lemon / cuka masakan",
      "Secubit garam & lada sulah"
    ],
    steps: [
      "Cincang dadu halus kobis dan lobak merah (ala tekstur coleslaw KFC).",
      "Dalam mangkuk, kacau mayonis, susu, gula, jus lemon, garam, dan lada sulah sampai jadi sos berkrim.",
      "Masukkan sayur cincang ke dalam mangkuk sos, gaul rata sehingga semuanya bersalut pekat.",
      "Ratah terus atau simpan dalam peti ais sekejap untuk rasa sejuk rangup yang luar biasa!"
    ],
    chefTip: "Cincang kobis halus-halus (jangan hiris panjang) supaya kuah mayonis dapat menyaluti setiap butiran sayur dengan sempurna."
  },
  {
    id: "karipap-frozen-berapi",
    name: "Karipap Pusing Frozen Rangup Berlapis",
    category: "frozen",
    categoryLabel: "🥟 Geng Frozen Kuih",
    time: "6 minit",
    gear: "Air Fryer / Kuali Goreng",
    bannerIcon: "🥟",
    image: "images/karipap_pusing.jpg",
    bannerGradient: "linear-gradient(135deg, #f59e0b 0%, #b45309 100%)",
    desc: "Karipap pusing beku digoreng garing keemasan terus dari freezer. Kulit berkerak rapuh berlapis krup krap, isi kentang kari pekat berasap panas.",
    vibe: "Kulit berkerak rangup berlapis krup-krap, inti kentang kari berempah berasap panas",
    cravingCall: "Tengah malam lapar nak mengunyah karipap panas berempah dengan kulit rapuh tanpa renyah menguli tepung.",
    pantryTags: ["frozenkuih", "kudap"],
    ingredients: [
      "4–5 biji karipap kentang/daging beku (frozen)",
      "Sedikit semburan minyak masak (jika guna air fryer)",
      "Sos cili Thai / cili padi kicap untuk dicicah"
    ],
    steps: [
      "Keluarkan karipap terus dari freezer (jangan biarkan lembik defrost).",
      "Pilihan Air Fryer: Susun dalam bakul, sembur sedikit minyak masak, bakar suhu 180°C selama 7-8 minit sampai kulit garing keemasan.",
      "Pilihan Kuali: Panaskan minyak sederhana panas, masukkan karipap beku dan goreng 4-5 minit sambil balik-balikkan perlahan sehingga kuning keemasan.",
      "Angkat dan toskan sekejap minyaknya.",
      "Gigit perlahan-lahan masa panas berasap, nikmati kerangupan kulit dan haruman rempah karinya!"
    ],
    chefTip: "Masak terus dalam keadaan beku keras! Kalau biar defrost sampai lembik, kulitnya mudah koyak dan serap minyak."
  },
  {
    id: "pau-gebu-panas",
    name: "Pau Gebu Lembut Sutera Panas",
    category: "frozen",
    categoryLabel: "🥟 Geng Frozen Kuih",
    time: "4 minit",
    gear: "Pengukus / Microwave Berpenutup",
    bannerIcon: "🥮",
    image: "images/pau_gebu.jpg",
    bannerGradient: "linear-gradient(135deg, #64748b 0%, #334155 100%)",
    desc: "Pau frozen putih gebu selembut sutera. Inti sambal bilis pedas manis, daging atau kaya. Cukup lembut, panas menggebu bila dipegang.",
    vibe: "Lembut gebu macam bantal kapas, isi sambal atau daging berasap panas manis pedas",
    cravingCall: "Nak makanan yang betul-betul empuk lembut, gebu dan panas mengenyangkan dalam beberapa minit.",
    pantryTags: ["frozenkuih", "kudap"],
    ingredients: [
      "2–3 biji pau frozen kegemaran (sambal bilis / daging / kacang merah / kaya)",
      "Sedikit air panas untuk kukusan / basahkan tisu dapur"
    ],
    steps: [
      "Keluarkan pau terus dari peti beku.",
      "Trik Microwave Pantas (1 Minit): Balut pau longgar-longgar dengan tisu dapur bersih yang dibasahkan sedikit air suam. Microwave kuasa sederhana 45–50 saat.",
      "Cara Pengukus Tradisional (4-5 Minit): Didihkan air pengukus, letak pau atas lapik kertas dan kukus 5 minit sehingga naik montok gebu.",
      "Koyak pau panas berasap dan nikmati kelembutan roti sutera dengan inti yang meleleh!"
    ],
    chefTip: "Tisu dapur lembap dalam microwave berfungsi persis periuk stim mini — elak pau jadi kering atau liat macam getah."
  },
  {
    id: "popia-frozen-rangup",
    name: "Popia Sayur & Ayam Frozen Rangup Krup-Krap",
    category: "frozen",
    categoryLabel: "🥟 Geng Frozen Kuih",
    time: "5 minit",
    gear: "Air Fryer / Kuali Menggoreng",
    bannerIcon: "🥢",
    image: "images/popia_goreng.jpg",
    bannerGradient: "linear-gradient(135deg, #d97706 0%, #92400e 100%)",
    desc: "Popia frozen digoreng terus sampai kulit garing nipis keemasan. Inti sengkuang sayur dan ayam yang manis berjus dicicah sos cili manis berkilat.",
    vibe: "Kulit rangup nipis krup-krap, inti sayur manis berjus basah",
    cravingCall: "Mengidam bunyi krup-krap rangup gigitan popia goreng panas dicicah sos cili manis pekat berkilat.",
    pantryTags: ["frozenkuih", "kudap"],
    ingredients: [
      "5–6 batang popia sayur/ayam beku",
      "Minyak masak secukupnya untuk menggoreng / semburan minyak",
      "Sos cili manis pekat pencicah"
    ],
    steps: [
      "Keluarkan popia beku dari freezer.",
      "Masukkan terus ke dalam minyak sederhana panas atau air fryer pada suhu 190°C selama 6 minit.",
      "Golek-golekkan agar setiap sisi kulit masak sekata dan keemasan berkilat.",
      "Angkat, toskan atas tisu minyak, dan cicah terus dengan sos cili manis!"
    ],
    chefTip: "Jangan tinggal popia terlalu lama semasa menggoreng kerana kulit popia nipis mudah cepat garing keemasan."
  },
  {
    id: "cucur-badak-frozen",
    name: "Cucur Badak & Kuih Melayu Frozen Panas",
    category: "frozen",
    categoryLabel: "🥟 Geng Frozen Kuih",
    time: "6 minit",
    gear: "1 Kuali Minyak Panas",
    bannerIcon: "🍠",
    image: "images/cucur_badak.jpg",
    bannerGradient: "linear-gradient(135deg, #ea580c 0%, #9a3412 100%)",
    desc: "Kuih tradisional frozen kegemaran: adunan keledek empuk lembut dengan inti kelapa pedas berempah. Digoreng keemasan panas-panas beraroma.",
    vibe: "Empuk keledek lemak manis, inti kelapa pedas berempah padu",
    cravingCall: "Rindu kuih tradisional Melayu panas-panas waktu malam tanpa payah rebus dan mengadun keledek dari mula.",
    pantryTags: ["frozenkuih", "kudap"],
    ingredients: [
      "4–5 biji cucur badak / onde-onde / keria frozen",
      "Minyak masak untuk menggoreng"
    ],
    steps: [
      "Panaskan minyak sederhana dalam kuali.",
      "Masukkan cucur badak terus dari freezer tanpa dinyahbekukan.",
      "Goreng 4–5 minit dengan api sederhana-kecil supaya bahagian tengah empuk panas dan luar tidak hangus.",
      "Bila dah keemasan gebu, angkat dan toskan.",
      "Makan panas-panas sambil merasa keenakan kelapa berempah di dalamnya!"
    ],
    chefTip: "Guna api sederhana kecil agar inti kelapa dalam panas sekata tanpa lapisan kulit luar cepat gelap."
  },
  {
    id: "sup-telur-enoki-panas",
    name: "Sup Telur Bersarang Cendawan Enoki",
    category: "bubur",
    categoryLabel: "🥣 Geng Bubur & Sup",
    time: "3 minit",
    gear: "1 Periuk Kecil & Mangkuk",
    bannerIcon: "🍲",
    image: "images/sup_telur_enoki.jpg",
    bannerGradient: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
    desc: "Sup jernih panas menenangkan perut malam hari: cendawan enoki segar berjus dan tali telur gebu bersarang. Sangat licin, wangi minyak bijan, tak buat perut sebu.",
    vibe: "Hirup kuah panas suam, enoki kenyal berjus, tali telur gebu sutera",
    cravingCall: "Malam sejuk tekak nak hirup kuah panas yang menenangkan perut sebelum tidur tanpa makanan berat.",
    pantryTags: ["telur", "cendawan"],
    ingredients: [
      "1 paket cendawan enoki segar (potong akar & basuh)",
      "1–2 biji telur ayam (pukul ringan)",
      "1 1/2 cawan air panas",
      "1/2 kiub pati ayam / ikan bilis",
      "Sedikit serbuk lada sulah & titisan minyak bijan (pilihan)"
    ],
    steps: [
      "Didihkan air bersama separuh kiub pati dalam periuk kecil (1 minit).",
      "Masukkan cendawan enoki segar, biar menggelegak 1 minit.",
      "Kacau kuah buat pusaran bulat, tuang telur perlahan-lahan supaya jadi jalur telur halus bersarang (egg drop).",
      "Tutup api, tabur lada sulah dan titis sedikit minyak bijan untuk aroma wangi.",
      "Tuang terus ke dalam mangkuk dan hirup panas-panas!"
    ],
    chefTip: "Kacau kuah berpusar sebelum tuang telur supaya telur masak gebu bersarang macam sup hotel tanpa bergumpal ketul besar."
  },
  {
    id: "tortilla-telur-gulung",
    name: "Tortilla Tekap Telur Gulung (Egg Wrap)",
    category: "wrap",
    categoryLabel: "🌯 Geng Wrap & Shawarma",
    time: "2 minit",
    gear: "1 Kuali Leper Sahaja",
    bannerIcon: "🌯",
    image: "images/tortilla_telur_gulung.jpg",
    bannerGradient: "linear-gradient(135deg, #f59e0b 0%, #b45309 100%)",
    desc: "Pecahkan telur atas kuali, terus tekap kepingan tortilla di atasnya. Balikkan, picit sos cili & mayo, gulung kemas semasa panas. Sangat empuk, sedap dan kenyang tanpa sebu!",
    vibe: "Telur melekat empuk pada roti gandum lembut, picit sos terus gulung panas",
    cravingCall: "Lapar nak makan ala shawarma wrap tapi nak siap dalam 2 minit guna sebiji telur di dapur.",
    pantryTags: ["wrap", "telur"],
    ingredients: [
      "1 keping roti tortilla / wrap gandum",
      "1–2 biji telur ayam",
      "Sedikit serbuk lada hitam & secubit garam",
      "Sos cili & mayonis secukup rasa"
    ],
    steps: [
      "Panaskan sedikit minyak atau secebis mentega di kuali leper.",
      "Pecahkan telur, tabur sedikit garam dan serbuk lada hitam.",
      "Semasa telur masih basah cair, terus tekap kepingan tortilla di atas telur dan tekan perlahan-lahan.",
      "Biarkan 30–40 saat sehingga telur melekat kukuh pada roti, kemudian terbalikkan.",
      "Picitkan sos cili dan mayonis memanjang di tengah, terus gulung kemas semasa panas dan sedia digigit!"
    ],
    chefTip: "Tekap tortilla masa telur masih basah cair supaya roti melekat kemas menjadi satu lapisan empuk tanpa tertanggal."
  },
  {
    id: "roti-garlic-airfryer",
    name: "Roti Bawang Putih Garing (Garlic Toast)",
    category: "roti",
    categoryLabel: "🍞 Geng Roti Gardenia",
    time: "3 minit",
    gear: "Air Fryer / Pembakar Roti",
    bannerIcon: "🍞",
    image: "images/roti_garlic.png",
    bannerGradient: "linear-gradient(135deg, #d97706 0%, #78350f 100%)",
    desc: "Roti keping disapu mentega wangi, serbuk bawang putih dan herba parsley. Dibakar garing berderai keemasan dalam air fryer. Krup-krap beraroma, sedap dicicah sos atau sup!",
    vibe: "Garing krup-krap berderai, harum mentega bawang putih wangi satu rumah",
    cravingCall: "Tekak nak mengunyah benda rangup masin bermentega tanpa payah goreng minyak banyak.",
    pantryTags: ["roti", "mentega", "kudap"],
    ingredients: [
      "2–3 keping roti putih / wholemeal",
      "1 sudu besar mentega / marjerin Planta",
      "1/2 sudu kecil serbuk bawang putih (garlic powder)",
      "Sedikit herba parsley / oregano kering (pilihan)"
    ],
    steps: [
      "Gaul mentega bersama serbuk bawang putih dan sedikit herba dalam mangkuk kecil.",
      "Sapu rata di atas permukaan roti keping.",
      "Potong roti bentuk jejari (ala fries) atau bentuk segitiga.",
      "Masukkan ke dalam air fryer pada suhu 180°C selama 3–4 minit sehingga kuning keemasan garing.",
      "Keluarkan dan nikmati kunyahan panas berderai krup krap!"
    ],
    chefTip: "Potong roti memanjang macam kentang jejari sebelum bakar; rasa mengunyah dia sebiji macam makan fries rangup tapi versi bakar tanpa minyak!"
  },
  {
    id: "roti-telur-lemas",
    name: "Roti Telur Lemas (French Toast Ala Kampung)",
    category: "roti",
    categoryLabel: "🍞 Geng Roti Gardenia",
    time: "4 minit",
    gear: "1 Kuali Leper",
    bannerIcon: "🍞",
    image: "images/roti_telur.png",
    bannerGradient: "linear-gradient(135deg, #eab308 0%, #ca8a04 100%)",
    desc: "Roti keping dicelup dalam bancuhan telur kocok berempah lada sulah, digoreng garing atas kuali bermentega. Lembut empuk dan kenyang wangi!",
    vibe: "Empuk gebu berwap, masin lemak telur dan lada sulah",
    cravingCall: "Nak makan berat sikit tapi malas masak lauk, roti dan telur penyelamat malam.",
    pantryTags: ["roti", "telur", "mentega"],
    ingredients: [
      "2 keping roti putih",
      "1 biji telur ayam",
      "Sedikit mentega / Planta untuk kuali",
      "Secubit garam & serbuk lada sulah",
      "Sekeping keju (pilihan)"
    ],
    steps: [
      "Pukul telur dalam pinggan leper bersama secubit garam dan lada sulah.",
      "Celup roti keping ke dalam bancuhan telur sampai meresap penuh dua-dua belah.",
      "Cairkan mentega atas kuali leper. Goreng roti telur 1-2 minit setiap sisi sampai garing keemasan.",
      "Angkat, lipat bersama sekeping keju di tengah (pilihan) dan sedia dimakan panas-panas!"
    ],
    chefTip: "Guna api sederhana kecil masa menggoreng supaya telur masak elok meresap ke dalam roti, bukan hangus di luar tapi basah di dalam."
  },
  {
    id: "roti-banjir-kacang-krim",
    name: "Roti Bakar Banjir Baked Beans & Krim Cendawan",
    category: "roti",
    categoryLabel: "🍞 Geng Roti Gardenia",
    time: "4 minit",
    gear: "Toaster & Microwave",
    bannerIcon: "🍞",
    image: "images/roti_banjir.png",
    bannerGradient: "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
    desc: "Kepingan roti dibakar garing hingga krup-krap, dimakan bersama gabungan 'fusion' luar biasa: limpahan kuah baked beans yang manis masin dan sup krim cendawan pekat. Mewah dan mengenyangkan!",
    vibe: "Krup krap, manis tomato masin kacang, dan lemak berkrim cendawan",
    cravingCall: "Nak gabungkan lauk tin yang ada kat dapur jadi satu hidangan mewah ala-ala kafe gaya Inggeris (English Breakfast).",
    pantryTags: ["roti", "sardin", "cendawan"],
    ingredients: [
      "2-3 keping roti putih / gandum",
      "Setengah tin Baked Beans",
      "Setengah tin Mushroom Soup (atau 1 paket serbuk sup cendawan dibancuh pekat)",
      "Secubit lada hitam & secebis mentega (pilihan)"
    ],
    steps: [
      "Bakar roti keping dalam pembakar roti (toaster) atau di atas kuali tanpa minyak sehingga sangat garing.",
      "Panaskan Baked Beans dalam mangkuk kecil menggunakan microwave (1 minit) bersama secebis mentega dan lada hitam.",
      "Panaskan juga Mushroom Soup dalam mangkuk berasingan sehingga pekat berasap.",
      "Cara makan paling nikmat: Koyak roti garing, celup ke dalam sup cendawan pekat, kemudian sudukan baked beans di atasnya. Ngap!"
    ],
    chefTip: "Pastikan roti dibakar ekstra garing supaya ia tak cepat lembik bila dicelup ke dalam sup krim pekat."
  },
  {
    id: "roti-sosej-gulung",
    name: "Roti Sosej Gulung Cheese Berapi",
    category: "roti",
    categoryLabel: "🍞 Geng Roti Gardenia",
    time: "6 minit",
    gear: "1 Kuali Goreng / Air Fryer",
    bannerIcon: "🌭",
    image: "images/roti_sosej.png",
    bannerGradient: "linear-gradient(135deg, #ea580c 0%, #9a3412 100%)",
    desc: "Roti dileperkan, digulung kemas dengan sosej padat dan keju. Digoreng garing krup krap, keju cair meleleh bila digigit.",
    vibe: "Garing di luar, keju meleleh pedas di dalam",
    cravingCall: "Teringin nak makan kudap-kudap sosej cheese ala cafe tapi versi jimat buat sendiri dekat rumah.",
    pantryTags: ["roti", "kudap"],
    ingredients: [
      "2 keping roti putih (buang tepi kalau suka)",
      "2 batang sosej (rebus sekejap atau potong dua)",
      "2 keping keju (Cheddar)",
      "Sebiji telur (kocok untuk celup / lekatkan gulungan)",
      "Minyak untuk menggoreng"
    ],
    steps: [
      "Gelek roti putih bagi leper dan nipis guna penggelek atau botol bersih.",
      "Letak sekeping keju, satu sosej, sedikit sos cili/mayo dan gulung kemas-kemas.",
      "Sapu sikit telur dekat hujung roti supaya gulungan tak terbuka. Celup semua gulungan dalam baki telur.",
      "Goreng dalam kuali panas sampai garing atau masuk Air Fryer 180°C selama 5-7 minit.",
      "Gigit perlahan-lahan masa panas, cheese meleleh!"
    ],
    chefTip: "Penting gelek roti sampai nipis dan mampat supaya roti tak serap minyak banyak masa digoreng."
  },
  {
    id: "piza-roti-segera",
    name: "Piza Roti Segera (Air Fryer)",
    category: "roti",
    categoryLabel: "🍞 Geng Roti Gardenia",
    time: "5 minit",
    gear: "Air Fryer / Pembakar Roti",
    bannerIcon: "🍕",
    image: "images/roti_piza.png",
    bannerGradient: "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)",
    desc: "Craving piza tengah malam? Buat je guna roti keping! Lapiskan sos, sosej, bawang dan cheese, bakar sekejap terus rangup dan cheese tarik.",
    vibe: "Cheese tarik memanjang, kerak roti garing",
    cravingCall: "Tekak meronta nak makan piza tapi kedai dah tutup, buat je piza ekspres guna apa ada kat dapur.",
    pantryTags: ["roti", "kudap"],
    ingredients: [
      "2 keping roti putih",
      "2 sudu besar sos tomato / sos cili",
      "Sosej, jejari ketam, atau lebihan ayam semalam (potong halus)",
      "Keju Mozzarella / Cheddar (parut / keping)",
      "Sedikit bawang Holland & taburan oregano"
    ],
    steps: [
      "Sapu rata sos tomato dan sos cili atas roti keping.",
      "Tabur segala jenis lauk topping yang ada (sosej, bawang holland, jejari ketam).",
      "Timpa atas sekali dengan cheese banyak-banyak. Tabur oregano kalau ada.",
      "Bakar dalam Air Fryer suhu 180°C selama 4-5 minit atau sampai cheese cair perang dan roti garing.",
      "Potong segi tiga macam piza betul, makan panas-panas!"
    ],
    chefTip: "Jangan letak sos terlalu tebal atau sayur yang berair sangat, nanti piza roti jadi lembik dan lambat garing."
  },
  {
    id: "roti-bakar-kaya",
    name: "Roti Bakar Kaya Butter (Kopitiam)",
    category: "roti",
    categoryLabel: "🍞 Geng Roti Gardenia",
    time: "3 minit",
    gear: "Kuali Leper / Pembakar Roti",
    bannerIcon: "🧈",
    image: "images/roti_kaya.png",
    bannerGradient: "linear-gradient(135deg, #d97706 0%, #92400e 100%)",
    desc: "Klasik sepanjang zaman. Roti dibakar garing, disapu kaya manis tebal, dan diapit sekeping butter sejuk. Lapis nipis krup krap!",
    vibe: "Krup krap, sejuk butter cair dalam mulut dengan manis kaya",
    cravingCall: "Nak mengunyah sambil hirup kopi atau lepak santai, fefeeling dekat kopitiam lama.",
    pantryTags: ["roti", "mentega"],
    ingredients: [
      "2 keping roti putih / roti benggali",
      "2 sudu besar seri kaya",
      "Sekeping butter sejuk (mentega tulen, bukan marjerin untuk rasa terbaik)"
    ],
    steps: [
      "Bakar roti keping tanpa minyak atas kuali leper atau guna toaster sampai perang garing.",
      "Bila roti dah diangkat tapi masih panas berwap, sapu kaya tebal dekat satu bahagian.",
      "Ambil butter yang sejuk terus dari peti ais, potong kepingan tebal sedikit, susun atas kaya.",
      "Tutup dengan satu lagi kepingan roti garing, potong kecil dan ngap!",
      "Sedapnya luar biasa kalau makan bersama telur separuh masak."
    ],
    chefTip: "Rahsia sedap: Roti mesti betul-betul panas garing, butter mesti sejuk beku supaya bila gigit, dapat rasa sejuk-panas dalam mulut serentak."
  },
  {
    id: "telur-separuh-masak-kopitiam",
    name: "Telur Separuh Masak Kicap & Lada Sulah",
    category: "bubur",
    categoryLabel: "🥚 Sektor Telur & Sutera",
    time: "6 minit (Rendam Air Panas)",
    gear: "1 Mangkuk & Air Mendidih Sahaja",
    bannerIcon: "🥚",
    image: "images/telur_separuh_masak.png",
    bannerGradient: "linear-gradient(135deg, #eab308 0%, #ca8a04 100%)",
    desc: "Dua biji telur separuh masak bergoyang gebu disiram kicap manis pekat dan taburan lada sulah putih. Suam berkrim meluncur di tekak, zero minyak, paling menenangkan perut malam.",
    vibe: "Suam, licin berkrim, lemak masin wangi lada sulah, zero basuh periuk",
    cravingCall: "Lapar tengah malam tapi nak makanan berkhasiat yang hangat, suam dan licin meluncur di tekak tanpa kuali kotor.",
    pantryTags: ["telur"],
    ingredients: [
      "2 biji telur ayam gred A / B (suhu bilik)",
      "Air mendidih secukupnya untuk rendaman",
      "1 sudu teh kicap manis / kicap masin cap kipas udang",
      "Secubit lada sulah putih"
    ],
    steps: [
      "Didihkan air dalam cerek atau periuk kecil.",
      "Letakkan 2 biji telur ke dalam cawan/mangkuk tahan panas, tuang air mendidih sampai tenggelam sepenuhnya.",
      "Tutup mangkuk dengan piring rapat-rapat, biarkan selama tepat 6–7 minit (jangan usik, tak payah buka api).",
      "Keluarkan telur, ketuk dan belah dua ke dalam mangkuk kecil.",
      "Renjis kicap manis dan tabur lada sulah. Kacau sedikit dan hirup licin suap demi suap!"
    ],
    chefTip: "Trik kopitiam: Pastikan telur berada pada suhu bilik (bukan terus dari peti sejuk) supaya masa rendaman 6 minit menghasilkan putih telur berkrim dan kuning berair goyang sempurna!"
  },
  {
    id: "keledek-madu-microwave",
    name: "Ubi Keledek Madu Gebu Berwap (Microwave)",
    category: "lenyek",
    categoryLabel: "🥔 Geng Lenyek & Empuk",
    time: "4 minit",
    gear: "Microwave & Tisu Lembap",
    bannerIcon: "🍠",
    image: "images/keledek_madu.jpg",
    bannerGradient: "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    desc: "Ubi keledek madu gebu empuk berasap panas: isi manis karamel semulajadi seperti kek span, diselit secebis mentega cair dan secubit garam. Zero kuali, kenyang empuk berkhasiat.",
    vibe: "Empuk gebu macam kek, manis asli madu, berwap wangi panas",
    cravingCall: "Nak makanan manis berlemak panas yang empuk gebu macam kek tapi 100% dari ubi segar semulajadi.",
    pantryTags: ["kentang", "mentega"],
    ingredients: [
      "1 biji ubi keledek madu / oren / ungu",
      "1 helai tisu dapur (kitchen towel)",
      "1 sudu kecil mentega / marjerin Planta",
      "Secubit kecil garam halus"
    ],
    steps: [
      "Basuh bersih kulit ubi keledek, lap sedikit.",
      "Cucuk seluruh permukaan ubi dengan garfu 6–8 kali.",
      "Basahkan sehelai tisu dapur dengan air suam, balut longgar mengelilingi ubi keledek.",
      "Letak atas pinggan microwave, panaskan kuasa tinggi selama 4–5 minit (picit lembut bila dah masak).",
      "Belah tengah ubi yang panas berasap, letakkan secebis mentega dan secubit garam. Nikmati suapan manis gebunya!"
    ],
    chefTip: "Balut tisu lembap bertindak seperti ruang stim wap mikro — mengelakkan kulit ubi daripada mengering dan menjadikan isi dalamnya selembut kastard."
  },
  {
    id: "telur-hancur-mentega",
    name: "Telur Hancur Mentega Meleleh (Creamy Scrambled)",
    category: "bubur",
    categoryLabel: "🥚 Sektor Telur & Sutera",
    time: "1 minit",
    gear: "1 Kuali Leper Kecil",
    bannerIcon: "🍳",
    image: "images/telur_hancur.jpg",
    bannerGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    desc: "Dua biji telur dikacau perlahan dengan mentega wangi di atas api kecil selama 40 saat. Tekstur selembut sutera dan berkrim basah, ditabur lada hitam dan secubit garam.",
    vibe: "Lembut gebu berkrim macam kastard sutera, aroma mentega wangi meleleh",
    cravingCall: "Nak makanan berkhasiat yang hangat, empuk dan terus siap dalam 1 minit bila lapar tengah malam.",
    pantryTags: ["telur", "mentega"],
    ingredients: [
      "2 biji telur ayam",
      "1 sudu besar mentega / marjerin Planta wangi",
      "Secubit garam halus",
      "Sedikit serbuk lada hitam kasar"
    ],
    steps: [
      "Pecahkan telur ke dalam mangkuk kecil, kocok ringan dengan garfu bersama secubit garam.",
      "Cairkan mentega atas kuali leper kecil dengan api paling kecil (low heat).",
      "Tuang telur, tolak perlahan-lahan dari tepi ke tengah kuali selama 40–50 saat sehingga berlipat lembut.",
      "Tutup api semasa telur masih basah berkrim (ia akan terus masak dengan sisa haba kuali).",
      "Tabur lada hitam dan suap terus panas-panas dari pinggan!"
    ],
    chefTip: "Jangan biar telur kering keras di kuali; angkat masa masih basah berkrim (runny) supaya teksturnya kekal selembut sutera hotel!"
  },
  {
    id: "telur-dadar-bawang-karamel",
    name: "Telur Dadar Bawang Merah Karamel Garing",
    category: "lempeng",
    categoryLabel: "🥞 Geng Lempeng & Telur",
    time: "2 minit",
    gear: "1 Kuali Leper Sahaja",
    bannerIcon: "🧅",
    image: "images/telur_dadar.jpg",
    bannerGradient: "linear-gradient(135deg, #b45309 0%, #78350f 100%)",
    desc: "Hirisan bawang merah banyak-banyak digoreng garing sehingga manis berkaramel, disatukan dengan telur dadar berkerak keemasan. Wangi satu rumah bila lapar malam!",
    vibe: "Bawang manis berkaramel, tepi telur garing berkerak wangi",
    cravingCall: "Rindu rasa lauk telur kampung yang garing wangi beraroma bawang goreng bila lapar malam.",
    pantryTags: ["telur", "bawang"],
    ingredients: [
      "2 biji telur ayam",
      "1 biji bawang merah besar / holland (hiris nipis banyak-banyak)",
      "1 biji cili padi (hiris, jika suka pedas)",
      "1/2 sudu teh garam & sedikit lada sulah",
      "1 sudu besar minyak masak"
    ],
    steps: [
      "Panaskan minyak dalam kuali leper. Tumis hirisan bawang merah 1 minit sampai layu keperangan wangi.",
      "Pukul telur bersama garam dan lada sulah dalam mangkuk.",
      "Tuang telur terus ke atas timbunan bawang panas di kuali.",
      "Biarkan bahagian bawah garing berkerak keemasan selama 1 minit, terbalikkan sekali selama 30 saat.",
      "Angkat dan makan panas-panas — manis bawang karamel dia memang luar biasa!"
    ],
    chefTip: "Goreng bawang dulu sekejap sebelum tuang telur supaya gula semulajadi bawang keluar berkaramel manis dan garing."
  },
  {
    id: "lempeng-pisang-kampung",
    name: "Lempeng Pisang Kampung Gebu (Tanpa Minyak)",
    category: "lempeng",
    categoryLabel: "🥞 Geng Lempeng & Cucur",
    time: "3 minit",
    gear: "1 Kuali Leper Sahaja",
    bannerIcon: "🍌",
    image: "images/lempeng_pisang.jpg",
    bannerGradient: "linear-gradient(135deg, #ca8a04 0%, #a16207 100%)",
    desc: "Pisang masak ranum dilenyek bersama tepung gandum dan secubit garam, dilayur atas kuali leper tanpa minyak. Sangat empuk gebu, manis semulajadi tanpa gula tambahan.",
    vibe: "Empuk gebu beraroma pisang kampung, manis asli tanpa setitis minyak goreng",
    cravingCall: "Tekak nak kudapan manis berwap panas yang mengenyangkan tapi tak berminyak macam cekodok.",
    pantryTags: ["pisang", "tepung"],
    ingredients: [
      "2–3 biji pisang masak ranum",
      "3–4 sudu besar tepung gandum",
      "Secubit kecil garam (penaik rasa lemak pisang)",
      "Sedikit mentega/Planta untuk sapu kuali (pilihan)"
    ],
    steps: [
      "Lenyek pisang masak dengan garfu dalam mangkuk sehingga lumat berair.",
      "Masukkan tepung gandum dan secubit garam. Gaul rata sehingga adunan pekat melekat.",
      "Panaskan kuali leper non-stick (boleh sapu secalit mentega). Sudukan adunan dan ratakan leper bulat.",
      "Masak dengan api sederhana-kecil 1.5 minit sehingga berlubang kecil, terbalikkan sebelah lagi selama 1 minit.",
      "Angkat dan terus makan panas-panas — gebu empuk dan harum semerbak!"
    ],
    chefTip: "Guna pisang yang kulitnya ada bintik hitam (overripe); pisang terlebih masak menghasilkan lempeng yang paling manis dan empuk gebu!"
  },
  {
    id: "roti-canai-murtabak-mini",
    name: "Roti Canai Murtabak Mini Ekspres",
    category: "wrap",
    categoryLabel: "🌯 Geng Wrap & Shawarma",
    time: "3 minit",
    gear: "1 Kuali Leper Sahaja",
    bannerIcon: "🫓",
    image: "images/murtabak_mini.png",
    bannerGradient: "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
    desc: "Roti canai segera dilayur di kuali, diisi telur pukul dan hirisan bawang di tengah, dilipat empat segi kemas. Luar garing berlapis krup-krap, dalam berintikan telur empuk berwap!",
    vibe: "Kulit garing krup-krap, inti telur bawang empuk berasap panas",
    cravingCall: "Rindu nak makan murtabak mamak atau pasar malam panas-panas tanpa payah keluar rumah.",
    pantryTags: ["wrap", "telur", "bawang"],
    ingredients: [
      "1 keping roti canai segera frozen",
      "1 biji telur ayam",
      "1/2 biji bawang merah (cincang halus)",
      "Sedikit garam & serbuk kari / lada hitam",
      "Sos cili untuk dicicah"
    ],
    steps: [
      "Pukul telur bersama bawang cincang, secubit garam dan sedikit serbuk kari dalam mangkuk kecil.",
      "Letak sekeping roti canai frozen atas kuali leper panas api sederhana (tanpa minyak).",
      "Bila roti mula lembut dan separa masak (1 minit), tuang bancuhan telur ke bahagian tengah roti.",
      "Lipat 4 sisi roti ke arah tengah menutup telur menjadi bentuk empat segi (seperti murtabak mini).",
      "Balik-balikkan perlahan sehingga kedua-dua belah garing keemasan dan telur di dalam masak empuk. Angkat dan potong dua!"
    ],
    chefTip: "Guna api sederhana kecil supaya bahagian dalam telur sempat masak empuk gebu sementara kulit roti canai luar kekal garing tak hangus."
  },
  {
    id: "roti-sardin-pedas",
    name: "Roti Sardin Pedas Berlauk (Ala Kantin Sekolah)",
    category: "roti",
    categoryLabel: "🍞 Geng Roti Gardenia",
    time: "7 minit",
    gear: "1 Kuali Kecil & Sudu",
    bannerIcon: "🐟",
    image: "images/roti_sardin.png",
    bannerGradient: "linear-gradient(135deg, #dc2626 0%, #9a3412 100%)",
    desc: "Sardin tin ditumis bawang besar, cili dan perahan limau sampai pekat merah berlemak, diapit roti Gardenia lembut. Rasa nostalgia kantin sekolah!",
    vibe: "Pedas masam manis, roti lembut serap kuah sardin",
    cravingCall: "Teringin rasa roti sardin zaman sekolah yang pedas berlemak dan mengenyangkan.",
    pantryTags: ["roti", "sardin", "bawang"],
    ingredients: [
      "4 keping roti Gardenia",
      "1 tin kecil sardin (155g)",
      "1/2 biji bawang besar (dadu halus)",
      "1 sudu besar cili sos / cili kisar (ikut tahap pedas)",
      "Perahan 1 biji limau kasturi / nipis",
      "Secubit gula & garam, hirisan timun (pilihan)"
    ],
    steps: [
      "Keluarkan sardin dari tin, buang tulang tengah dan lenyek kasar. Simpan kuah tomatonya.",
      "Panaskan sedikit minyak, tumis bawang besar sampai layu dan wangi.",
      "Masukkan sardin, kuah tin dan cili. Kacau 2–3 minit sampai pekat dan tak berair.",
      "Perah limau, perasakan gula dan garam. Tutup api dan biar suam sekejap.",
      "Sapu tebal inti sardin atas roti, letak timun kalau ada, tutup dan potong segi tiga."
    ],
    chefTip: "Masak inti sampai betul-betul pekat dan kering sikit — kalau berair, roti Gardenia cepat lembik. Nak lagi rangup? Bakar sekejap roti tu atas kuali leper."
  },
  {
    id: "roti-telur-mayo",
    name: "Sandwich Telur Mayo Gebu (Tamago Sando)",
    category: "roti",
    categoryLabel: "🍞 Geng Roti Gardenia",
    time: "10 minit",
    gear: "1 Periuk Kecil & Garfu",
    bannerIcon: "🥪",
    image: "images/roti_telur_mayo.png",
    bannerGradient: "linear-gradient(135deg, #facc15 0%, #ca8a04 100%)",
    desc: "Telur rebus dilenyek bersama mayonis, secubit gula dan lada sulah, diapit roti Gardenia yang dibuang kulit. Lembut, berkrim, ala kedai serbaneka Jepun.",
    vibe: "Gebu berkrim, lembut macam awan",
    cravingCall: "Nak makan benda lembut berkrim, sejuk-sejuk sedap, tak perlu kuali berminyak.",
    pantryTags: ["roti", "telur"],
    ingredients: [
      "4 keping roti Gardenia (buang kulit jika suka)",
      "2 biji telur",
      "2 sudu besar mayonis",
      "Secubit gula, garam & lada sulah",
      "Sedikit mentega untuk sapu roti"
    ],
    steps: [
      "Rebus telur 9 minit, rendam air sejuk dan kupas.",
      "Lenyek telur dengan garfu, gaul bersama mayonis, gula, garam dan lada sulah.",
      "Sapu nipis mentega atas roti supaya tak lembik.",
      "Ratakan inti telur tebal-tebal, tutup dan potong dua. Siap!"
    ],
    chefTip: "Asingkan kuning telur dan lenyek dengan mayo dulu sampai licin, baru masuk putih telur dicincang — tekstur jadi lebih berkrim macam sando Jepun."
  },
  {
    id: "roti-john-mini",
    name: "Roti John Mini Roti Keping",
    category: "roti",
    categoryLabel: "🍞 Geng Roti Gardenia",
    time: "8 minit",
    gear: "1 Kuali Leper (Non-Stick)",
    bannerIcon: "🌭",
    image: "images/roti_john_mini.png",
    bannerGradient: "linear-gradient(135deg, #f97316 0%, #9a3412 100%)",
    desc: "Rasa Roti John pasar malam guna roti Gardenia biasa: telur bawang (dan sosej/ayam cincang) ditekap atas kuali, siram mayo dan sos cili.",
    vibe: "Garing berlemak, telur gebu, sos berselirat",
    cravingCall: "Rindu Roti John pasar malam tapi malas keluar rumah.",
    pantryTags: ["roti", "telur", "bawang"],
    ingredients: [
      "3 keping roti Gardenia",
      "2 biji telur",
      "1/2 biji bawang besar (cincang)",
      "1 batang sosej / sedikit ayam cincang (pilihan)",
      "Mentega, mayonis & sos cili"
    ],
    steps: [
      "Pukul telur dengan bawang, sosej hiris dan secubit garam.",
      "Cairkan sedikit mentega atas kuali leper api sederhana.",
      "Tuang sedikit adunan telur, terus tekap sekeping roti atasnya. Tunggu 1 minit sampai telur melekat.",
      "Terbalikkan, bakar sisi roti satu lagi sampai garing.",
      "Angkat, picit mayo dan sos cili zigzag, potong dan makan panas!"
    ],
    chefTip: "Celup sekejap muka roti dalam adunan telur sebelum tekap — telur melekat sekata dan tak tumpah keliling kuali."
  },
  {
    id: "roti-cheese-leleh",
    name: "Roti Cheese Leleh Bermentega (Grilled Cheese)",
    category: "roti",
    categoryLabel: "🍞 Geng Roti Gardenia",
    time: "5 minit",
    gear: "1 Kuali Leper & Penutup",
    bannerIcon: "🧀",
    image: "images/roti_cheese_leleh.png",
    bannerGradient: "linear-gradient(135deg, #fbbf24 0%, #b45309 100%)",
    desc: "Roti Gardenia disapu mentega di luar, diisi keju keping/mozzarella, dibakar perlahan sampai keemasan rangup dan keju meleleh tarik panjang.",
    vibe: "Luar rangup bermentega, dalam keju cair menarik",
    cravingCall: "Tekak nak benda masin berlemak dan cheesy yang siap dalam 5 minit.",
    pantryTags: ["roti", "mentega"],
    ingredients: [
      "2 keping roti Gardenia",
      "2 keping keju cheddar / segenggam mozzarella",
      "1 sudu besar mentega lembut"
    ],
    steps: [
      "Sapu mentega pada sebelah luar kedua-dua keping roti.",
      "Letak sekeping roti (bahagian mentega ke bawah) atas kuali api kecil, susun keju dan tutup dengan roti kedua.",
      "Tutup kuali 2 minit supaya keju cepat cair.",
      "Terbalikkan, bakar lagi 1–2 minit sampai keemasan. Potong dua dan tarik!"
    ],
    chefTip: "Api kecil dan tutup kuali adalah kuncinya — kalau api besar, roti hangus dulu sebelum keju sempat cair."
  },
  {
    id: "roti-planta-gula",
    name: "Roti Planta Gula Rangup (Nostalgia Childhood Toast)",
    category: "roti",
    categoryLabel: "🍞 Geng Roti Gardenia",
    time: "3 minit",
    gear: "1 Kuali Leper / Pembakar Roti",
    bannerIcon: "🍞",
    image: "images/roti_planta_gula.png",
    bannerGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    desc: "Roti Gardenia dibakar kuali leper sehingga garing keemasan, disapu Planta/mentega wangi tebal-tebal dan ditabur gula pasir rangup meletup-letup. Simple, klasik, nostalgia!",
    vibe: "Lemak mentega wangi, manis rangup meletup gula pasir",
    cravingCall: "Tekak nak kudapan manis nostalgia zaman kanak-kanak yang siap sekelip mata.",
    pantryTags: ["roti", "mentega"],
    ingredients: [
      "2 keping roti Gardenia",
      "1 sudu besar marjerin Planta / mentega wangi",
      "1 sudu besar gula pasir"
    ],
    steps: [
      "Bakar roti keping atas kuali leper tanpa minyak sampai kedua-dua belah garing perang.",
      "Selagi roti panas berwap, sapu Planta/mentega tebal-tebal hingga cair meresap.",
      "Tabur gula pasir secara merata di atas permukaan mentega.",
      "Potong dua dan makan terus sewaktu rangup panas!"
    ],
    chefTip: "Sapu Planta masa roti tengah betul-betul panas supaya mentega cair meresap ke dalam roti tapi gula tetap berbutir rangup."
  },
  {
    id: "roti-tuna-mayo",
    name: "Sandwich Tuna Mayo Cili Padi",
    category: "roti",
    categoryLabel: "🍞 Geng Roti Gardenia",
    time: "6 minit",
    gear: "1 Mangkuk & Garfu",
    bannerIcon: "🐟",
    image: "images/roti_tuna_mayo.png",
    bannerGradient: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)",
    desc: "Tuna tin dilenyek bersama mayonis berkrim, bawang cincang dan ketukan cili padi pedas, diapit roti Gardenia lembut. Padat protein, pedas masam manis!",
    vibe: "Gebu berkrim, pedas menyengat cili padi",
    cravingCall: "Nak makan sandwich pedas berlemak padat isi tanpa perlu menyalakan api dapur.",
    pantryTags: ["roti", "tuna", "bawang"],
    ingredients: [
      "4 keping roti Gardenia",
      "1 tin kecil tuna tin (toskan minyak/air)",
      "2 sudu besar mayonis",
      "1/2 biji bawang besar (cincang halus)",
      "2 biji cili padi (cincang halus, jika suka pedas)",
      "Perahan limau nipis & secubit lada hitam"
    ],
    steps: [
      "Keluarkan tuna tin, toskan air/minyaknya dan masukkan ke dalam mangkuk.",
      "Lenyek tuna dengan garfu, campurkan mayonis, bawang, cili padi, lada hitam dan perahan limau.",
      "Kacau sebati hingga jadi pes tuna berkrim.",
      "Sapu padat atas roti Gardenia, tutup dan potong segi tiga."
    ],
    chefTip: "Toskan minyak tuna betul-betul kering supaya adunan mayo pekat dan tak membuatkan roti Gardenia lembik berair."
  },
  {
    id: "nasi-bujang-telur-kicap",
    name: "Nasi Bujang Telur Mata Kicap Cili Padi",
    category: "maggi",
    categoryLabel: "🍜 Geng Maggi & Nasi Impit",
    time: "4 minit",
    gear: "1 Kuali Goreng",
    bannerIcon: "🍳",
    image: "images/nasi_bujang.jpg",
    bannerGradient: "linear-gradient(135deg, #b45309 0%, #451a03 100%)",
    desc: "Nasi panas-panas ditimpa telur mata tepi garing keemasan dengan kuning cair meletup, disiram kicap manis tebal dan ketukan cili padi perah limau. Menu legend penyelamat lapar 3 pagi!",
    vibe: "Kuning telur meleleh, kicap manis pedas masam terangkat",
    cravingCall: "Lapar tahap gaban tapi malas masak rumit — nak nasi telur kicap terpaling nikmat.",
    pantryTags: ["nasi", "telur"],
    ingredients: [
      "1 mangkuk nasi putih panas",
      "1 biji telur segar",
      "2 sudu besar kicap manis tebal (Kicap Kipas Udang)",
      "3 biji cili padi (ketuk / hiris)",
      "1/2 biji limau kasturi",
      "Minyak untuk menggoreng"
    ],
    steps: [
      "Panaskan minyak agak banyak dalam kuali sampai berasap sikit.",
      "Pecahkan telur, goreng api besar sampai tepi garing garing kecoklatan tapi kuning telur masih goyang.",
      "Angkat telur dan letakkan terus di atas nasi putih panas.",
      "Siram kicap manis tebal, tabur hirisan cili padi dan perah limau kasturi di atas telur. Gaul suap terus!"
    ],
    chefTip: "Guna minyak betul-betul panas masa goreng telur supaya tepi telur jadi garing 'crispy lace' sementara kuning kat tengah kekal meleleh."
  },
  {
    id: "nasi-goreng-butter-egg",
    name: "Nasi Goreng Mentega Telur Goyang (5 Minit)",
    category: "maggi",
    categoryLabel: "🍜 Geng Maggi & Nasi Impit",
    time: "5 minit",
    gear: "1 Kuali Goreng",
    bannerIcon: "🧈",
    image: "images/nasi_goreng_butter.jpg",
    bannerGradient: "linear-gradient(135deg, #eab308 0%, #854d0e 100%)",
    desc: "Nasi sejuk ditumis kuali dengan mentega wangi, bawang putih cincang dan lada hitam tumbuk, dihidang bersama telur goyang di atas. Harum berlemak zero perasa rumit!",
    vibe: "Aroma mentega wangi berasap, lembut gurih berlada",
    cravingCall: "Ada nasi sejuk baki semalam, nak tumis wangi-wangi dengan mentega sekejap.",
    pantryTags: ["nasi", "telur", "mentega", "bawang"],
    ingredients: [
      "1 mangkuk nasi sejuk (leraikan)",
      "1 sudu besar mentega tulen / Planta",
      "2 ulas bawang putih (cincang)",
      "1 biji telur",
      "1/2 sudu teh serbuk lada hitam",
      "Secubit garam & daun bawang"
    ],
    steps: [
      "Cairkan mentega dalam kuali, tumis bawang putih hingga kekuningan dan berbau wangi.",
      "Masukkan nasi sejuk, garam dan lada hitam. Kacau kilat api besar 2 minit hingga nasi sebati beraroma mentega.",
      "Tolakkan nasi ke tepi kuali, pecahkan telur di ruang kosong. Biar telur separa masak, baru kuis gaul dengan nasi.",
      "Angkat dan tabur sedikit lada hitam ekstra."
    ],
    chefTip: "Guna nasi sejuk dari peti ais supaya butiran nasi berderai cantik dan serap mentega tanpa jadi lekit."
  },
  {
    id: "maggi-goreng-basah",
    name: "Maggi Goreng Basah Telur Gedik",
    category: "maggi",
    categoryLabel: "🍜 Geng Maggi & Nasi Impit",
    time: "6 minit",
    gear: "1 Kuali Kecil",
    bannerIcon: "🍜",
    image: "images/maggi_goreng_basah.jpg",
    bannerGradient: "linear-gradient(135deg, #ef4444 0%, #991b1b 100%)",
    desc: "Mi Maggi Kari dicelup ringkas, digoreng basah dengan kicap manis, sos cili dan perencah kari, ditarik telur hancur separa basah. Pekat mekit terangkat!",
    vibe: "Kuah pekat mekit melekit, pedas berlemak mi kenyal",
    cravingCall: "Bosan Maggi kuah biasa, nak Maggi goreng style mamak yang basah-basah pekat.",
    pantryTags: ["maggi", "telur"],
    ingredients: [
      "1 peket Maggi Kari",
      "1 biji telur",
      "1 sudu besar kicap manis",
      "1 sudu besar sos cili",
      "1/2 peket perencah Maggi Kari",
      "2 sudu besar air suam"
    ],
    steps: [
      "Rebus mi Maggi 1 minit setengah (jangan terlalu lembik), toskan.",
      "Panaskan sedikit minyak, tumis perencah kari, kicap manis dan sos cili sekejap.",
      "Masukkan mi Maggi dan 2 sudu besar air suam, gaul pantas.",
      "Pecahkan telur kat tengah mi, biar 30 saat kemudian gaul kasar supaya telur jadi bertali basah.",
      "Angkat terus semasa berasap lembap basah!"
    ],
    chefTip: "Jangan guna seluruh peket perencah sebab kicap dah ada garam — guna 1/2 peket je supaya tak terlalu masin."
  },
  {
    id: "roti-canai-cheese",
    name: "Roti Canai Cheese Tarik (Roti Canai Frozen)",
    category: "roti",
    categoryLabel: "🍞 Geng Roti Gardenia",
    time: "6 minit",
    gear: "1 Kuali Leper (Non-Stick)",
    bannerIcon: "🧀",
    image: "images/roti_canai_cheese.png",
    bannerGradient: "linear-gradient(135deg, #f59e0b 0%, #b45309 100%)",
    desc: "Roti canai frozen dilayur atas kuali non-stick, ditabur keju Mozzarella/Cheddar tebal di tengah dan dilipat empat. Luar garing berlapis, dalam keju tarik tebal!",
    vibe: "Kulit garing berlapis, keju tarik kenyal gurih",
    cravingCall: "Craving roti canai cheese mamak tengah malam tapi tak nak keluar rumah.",
    pantryTags: ["roti", "mentega"],
    ingredients: [
      "1 keping roti canai frozen",
      "1/2 cawan keju Mozzarella / 2 keping Cheddar",
      "Sedikit mentega untuk sapu"
    ],
    steps: [
      "Letak roti canai frozen atas kuali leper api sederhana (tanpa defrost).",
      "Bila roti mula lembut dan garing sikit (1-2 minit), terbalikkan.",
      "Tabur keju melimpah kat tengah roti, lipat 4 penjuru menjadi segi empat.",
      "Tekan-tekan sedikit dengan sudip dan balikkan sehingga kedua-dua belah garing perang dan keju di dalam cair.",
      "Potong 4 dan tarik keju memanjang!"
    ],
    chefTip: "Guna api kecil lepas lipat supaya roti tak hangus di luar tapi keju kat dalam sempat cair sepenuhnya."
  },
  {
    id: "roti-telur-cheese-leleh",
    name: "Roti Telur Cheese Leleh (French Toast Cheese)",
    category: "roti",
    categoryLabel: "🍞 Geng Roti Gardenia",
    time: "5 minit",
    gear: "1 Kuali Leper",
    bannerIcon: "🥪",
    image: "images/french_toast_cheese.png",
    bannerGradient: "linear-gradient(135deg, #facc15 0%, #ca8a04 100%)",
    desc: "Roti dicelup telur, diapit cheese dan hirisan sosej, digoreng dengan butter sampai keemasan dan cheese cair meleleh. Gabungan padu!",
    vibe: "Garing berbutter, telur lembut, cheese meleleh",
    cravingCall: "Nak gabungan French toast telur dan grilled cheese dalam satu gigitan.",
    pantryTags: ["roti", "telur", "mentega"],
    ingredients: [
      "2 keping roti Gardenia",
      "1 biji telur",
      "1 keping keju cheddar",
      "Sosej atau daging burger (hiris nipis)",
      "Sedikit mentega & secubit garam"
    ],
    steps: [
      "Pukul telur bersama secubit garam dalam pinggan leper.",
      "Celupkan kedua-dua keping roti ke dalam adunan telur hingga rata.",
      "Susun cheese dan sosej/daging di tengah, apit kedua roti.",
      "Goreng atas kuali leper dengan sedikit mentega dengan api sederhana.",
      "Balikkan sehingga kedua-dua belah keemasan dan cheese cair."
    ],
    chefTip: "Goreng sosej atau daging burger sekejap sebelum letak di tengah roti supaya ia masak sempurna dan sedap dikunyah."
  },
  {
    id: "roti-pisang-nutella-roll",
    name: "Roti Goreng Pisang / Nutella Roll",
    category: "roti",
    categoryLabel: "🍞 Geng Roti Gardenia",
    time: "7 minit",
    gear: "1 Kuali Leper",
    bannerIcon: "🍌",
    image: "images/roti_pisang_nutella.jpg",
    bannerGradient: "linear-gradient(135deg, #a16207 0%, #422006 100%)",
    desc: "Roti dileperkan nipis, disapu Nutella dan pisang, digulung kemas, dicelup telur dan digoreng butter. Crunchy di luar, cair meletup di dalam!",
    vibe: "Cair coklat Nutella, manis pisang montok",
    cravingCall: "Teringin dessert fancy ala kafe tapi guna bahan dapur biasa je.",
    pantryTags: ["roti", "pisang", "telur", "mentega"],
    ingredients: [
      "3 keping roti Gardenia (buang kulit tepi)",
      "1 biji pisang (hiris memanjang/nipis)",
      "Nutella / mentega kacang",
      "1 biji telur (dipukul sikit)",
      "Sedikit mentega untuk menggoreng"
    ],
    steps: [
      "Gelek kepingan roti sampai nipis dan leper (guna gelas jika takda penggelek).",
      "Sapu Nutella dan letak hirisan pisang kat hujung roti.",
      "Gulung roti dengan kemas. Tekan sedikit hujungnya supaya tak terbuka.",
      "Celup gulungan ke dalam telur, kemudian goreng atas kuali bermentega.",
      "Golek-golekkan sampai semua sisi garing dan keemasan. Sedia dimakan panas!"
    ],
    chefTip: "Buang kulit roti supaya mudah digelek dan digulung padat, inti pun tak tumpah sewaktu digoreng."
  },
  {
    id: "roti-goreng-kari",
    name: "Roti Goreng Cicah Kari (Roti Keping Mamak)",
    category: "roti",
    categoryLabel: "🍞 Geng Roti Gardenia",
    time: "8 minit",
    gear: "1 Kuali Leper + Periuk Kecil",
    bannerIcon: "🍛",
    image: "images/roti_goreng_kari.png",
    bannerGradient: "linear-gradient(135deg, #ea580c 0%, #7c2d12 100%)",
    desc: "Roti dipotong segi empat, dicelup telur dan digoreng garing, lepas tu dicicah kuah kari pekat panas. Rasa macam roti canai mamak versi Gardenia!",
    vibe: "Pedas berempah, roti lembut serap kuah kari",
    cravingCall: "Teringin roti canai kuah kari tapi malas keluar ke kedai mamak.",
    pantryTags: ["roti", "telur"],
    ingredients: [
      "3 keping roti Gardenia (potong 4)",
      "1 biji telur dipukul + secubit garam",
      "1 peket perencah Maggi Kari / kuah kari lebihan semalam",
      "Sedikit minyak / mentega"
    ],
    steps: [
      "Panaskan kuah kari (atau rebus 1/2 cawan air + perencah Maggi Kari sampai pekat).",
      "Celup potongan roti dalam telur.",
      "Goreng atas kuali leper sampai kedua-dua belah keemasan.",
      "Hidang panas bersama mangkuk kuah kari untuk dicicah."
    ],
    chefTip: "Tambah sesudu susu cair atau santan dalam kuah Maggi Kari supaya lebih lemak macam kuah dhal mamak."
  },
  {
    id: "roti-bom-ayam-cincang",
    name: "Roti Bom Inti Ayam Cincang",
    category: "roti",
    categoryLabel: "🍞 Geng Roti Gardenia",
    time: "12 minit",
    gear: "Kuali + Air Fryer (pilihan)",
    bannerIcon: "💣",
    image: "images/roti_bom_ayam.png",
    bannerGradient: "linear-gradient(135deg, #b45309 0%, #451a03 100%)",
    desc: "Roti digelek nipis, diisi ayam/daging cincang masak kicap, dilipat jadi poket bertekap garpu dan digoreng garing. Macam karipap roti!",
    vibe: "Rangup luar, inti berlauk panas meletup",
    cravingCall: "Nak snek berinti yang mengenyangkan, bukan sekadar roti kosong.",
    pantryTags: ["roti", "telur", "ayam"],
    ingredients: [
      "4 keping roti Gardenia (buang kulit)",
      "100g ayam / daging cincang",
      "1 ulas bawang putih & 1/2 biji bawang besar (cincang)",
      "1 sudu kicap manis + sedikit lada hitam",
      "1 biji telur (untuk salut)"
    ],
    steps: [
      "Tumis bawang sampai wangi, masukkan ayam cincang, kicap dan lada. Masak sampai kering.",
      "Gelek roti sampai nipis. Letak sesudu inti di tengah.",
      "Lipat dua, tekan tepi dengan garpu supaya rapat.",
      "Celup telur, goreng atau air fryer 180°C selama 6 minit sampai keemasan."
    ],
    chefTip: "Pastikan inti betul-betul kering supaya roti tak lembik dan tepi tak terbuka masa goreng."
  },
  {
    id: "roti-sambal-bilis",
    name: "Roti Bakar Sambal Bilis (Nasi Lemak Versi Roti)",
    category: "roti",
    categoryLabel: "🍞 Geng Roti Gardenia",
    time: "5 minit",
    gear: "Toaster / Kuali Leper",
    bannerIcon: "🌶️",
    image: "images/roti_sambal_bilis.png",
    bannerGradient: "linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)",
    desc: "Roti bakar garing disapu sambal tumis bilis, dihidang dengan telur mata dan hirisan timun. Semua rasa nasi lemak dalam sekeping roti.",
    vibe: "Pedas manis sambal, rangup bilis, nostalgia sarapan",
    cravingCall: "Teringin nasi lemak tapi nasi tak ada, roti je ada.",
    pantryTags: ["roti", "telur"],
    ingredients: [
      "2 keping roti Gardenia",
      "2 sudu sambal bilis (botol / lebihan)",
      "1 biji telur",
      "Beberapa hiris timun",
      "Sedikit mentega"
    ],
    steps: [
      "Bakar roti dengan sedikit mentega sampai garing.",
      "Goreng telur mata separuh masak.",
      "Sapu sambal bilis tebal atas roti.",
      "Letak telur dan timun di atas. Makan terus!"
    ],
    chefTip: "Panaskan sambal sekejap dalam microwave supaya wangi dan senang disapu rata."
  },
  {
    id: "club-sandwich-3-tingkat",
    name: "Club Sandwich 3 Tingkat",
    category: "roti",
    categoryLabel: "🍞 Geng Roti Gardenia",
    time: "10 minit",
    gear: "Toaster + Kuali Leper",
    bannerIcon: "🥪",
    image: "images/club_sandwich.png",
    bannerGradient: "linear-gradient(135deg, #65a30d 0%, #365314 100%)",
    desc: "Tiga lapis roti bakar disusun dengan telur goreng, daging burger/ayam, timun, tomato dan mayo. Dipotong segi tiga ala hotel.",
    vibe: "Tinggi, padat, kenyang ala room service hotel",
    cravingCall: "Lapar betul-betul dan nak sandwich yang 'serious'.",
    pantryTags: ["roti", "telur", "ayam"],
    ingredients: [
      "3 keping roti Gardenia (bakar)",
      "1 biji telur goreng",
      "1 keping daging burger / ayam goreng",
      "Hirisan timun, tomato & daun salad",
      "Mayonis & sos cili"
    ],
    steps: [
      "Bakar 3 keping roti sampai garing.",
      "Goreng telur dan daging burger.",
      "Lapis 1: roti + mayo + daging burger + salad. Lapis 2: roti + sos cili + telur + timun + tomato.",
      "Tutup dengan roti terakhir, cucuk lidi, potong pepenjuru jadi segi tiga."
    ],
    chefTip: "Cucuk lidi sebelum potong supaya susunan tak runtuh. Lap tomato dengan tisu supaya roti tak lembik."
  },
  {
    id: "egg-in-a-hole",
    name: "Roti Telur Lubang (Egg in a Hole)",
    category: "roti",
    categoryLabel: "🍞 Geng Roti Gardenia",
    time: "5 minit",
    gear: "1 Kuali Leper + Gelas",
    bannerIcon: "🍳",
    image: "images/egg_in_hole.jpg",
    bannerGradient: "linear-gradient(135deg, #facc15 0%, #a16207 100%)",
    desc: "Roti ditebuk bulat di tengah guna mulut gelas, telur dipecah dalam lubang dan digoreng mentega. Kuning telur cair meleleh bila dikoyak!",
    vibe: "Comel, mentega wangi, kuning telur leleh",
    cravingCall: "Nak benda cepat, comel dan puas hati dengan 2 bahan je.",
    pantryTags: ["roti", "telur", "mentega"],
    ingredients: [
      "2 keping roti Gardenia",
      "2 biji telur",
      "1 sudu mentega",
      "Garam, lada hitam & kicap (pilihan)"
    ],
    steps: [
      "Tekan mulut gelas di tengah roti untuk buat lubang bulat.",
      "Cairkan mentega, letak roti dan bulatan kecil atas kuali.",
      "Pecahkan telur ke dalam lubang, tabur garam & lada.",
      "Masak 2 minit, terbalikkan perlahan, masak 30 saat lagi untuk kuning cair."
    ],
    chefTip: "Guna api kecil-sederhana supaya putih telur masak sebelum roti hangus. Bulatan roti tu goreng sekali buat cicah kuning telur!"
  },
  {
    id: "roti-bakar-kari-daging",
    name: "Roti Bakar Inti Lebihan Kari Daging",
    category: "roti",
    categoryLabel: "🍞 Geng Roti Gardenia",
    time: "7 minit",
    gear: "Sandwich Maker / Kuali Leper",
    bannerIcon: "🥘",
    image: "images/roti_kari_daging.jpg",
    bannerGradient: "linear-gradient(135deg, #9a3412 0%, #431407 100%)",
    desc: "Lebihan kari daging/ayam semalam dicarik halus, disumbat dalam roti dan dipanggang garing. Zero membazir, rasa macam jaffle mamak!",
    vibe: "Berempah pekat, garing tepi, panas berasap",
    cravingCall: "Ada lauk kari semalam dalam peti, sayang nak buang.",
    pantryTags: ["roti", "mentega"],
    ingredients: [
      "2 keping roti Gardenia",
      "3 sudu lebihan kari daging / ayam (carik isi, kuah sikit)",
      "1 keping cheese (pilihan)",
      "Sedikit mentega"
    ],
    steps: [
      "Panaskan kari sampai kuah pekat, carik isi daging halus.",
      "Sapu mentega di bahagian luar kedua-dua roti.",
      "Letak inti kari (dan cheese) di tengah, tutup.",
      "Panggang dalam sandwich maker atau tekan atas kuali sampai garing kedua belah."
    ],
    chefTip: "Jangan letak kuah banyak sangat. Inti mesti pekat supaya roti kekal rangup."
  },
  {
    id: "puding-roti-jimat",
    name: "Puding Roti Kukus / Bakar (Roti Nak Expired)",
    category: "roti",
    categoryLabel: "🍞 Geng Roti Gardenia",
    time: "20 minit",
    gear: "Mangkuk Tahan Panas + Pengukus / Air Fryer",
    bannerIcon: "🍮",
    image: "images/puding_roti.jpg",
    bannerGradient: "linear-gradient(135deg, #d97706 0%, #78350f 100%)",
    desc: "Roti yang dah nak expired dikoyak, direndam bancuhan susu, telur dan gula, lepas tu dikukus atau dibakar. Lembut gebu macam kastard!",
    vibe: "Lembut kastard, manis lemak susu, jimat bajet",
    cravingCall: "Roti dah nak expired, sayang nak buang. Jadikan dessert!",
    pantryTags: ["roti", "telur", "susu", "mentega"],
    ingredients: [
      "4 keping roti Gardenia (koyak kecil)",
      "1 cawan susu segar / susu cair",
      "2 biji telur",
      "3 sudu gula",
      "1 sudu mentega cair + sedikit esen vanila / kismis (pilihan)"
    ],
    steps: [
      "Pukul telur, susu, gula, mentega dan vanila sampai sebati.",
      "Masukkan roti koyak, rendam 5 minit sampai serap.",
      "Tuang dalam mangkuk tahan panas yang disapu mentega.",
      "Kukus 15–20 minit ATAU air fryer 160°C selama 15 minit sampai set dan atas keperangan."
    ],
    chefTip: "Tutup mangkuk dengan aluminium foil masa kukus supaya air wap tak menitis ke atas puding."
  },
  {
    id: "roti-peanut-butter-pisang",
    name: "Roti Bakar Peanut Butter Pisang",
    category: "roti",
    categoryLabel: "🍞 Geng Roti Gardenia",
    time: "3 minit",
    gear: "Toaster / Kuali Leper",
    bannerIcon: "🥜",
    image: "images/roti_peanut_pisang.jpg",
    bannerGradient: "linear-gradient(135deg, #ca8a04 0%, #713f12 100%)",
    desc: "Roti bakar panas disapu mentega kacang tebal, ditabur hirisan pisang dan sedikit madu. Simple, mengenyangkan dan tahan lama.",
    vibe: "Lemak kacang, manis pisang, kenyang lama",
    cravingCall: "Nak benda manis tapi mengenyangkan dalam masa 3 minit.",
    pantryTags: ["roti", "pisang"],
    ingredients: [
      "2 keping roti Gardenia",
      "2 sudu mentega kacang",
      "1 biji pisang (hiris bulat)",
      "Sedikit madu / taburan kayu manis (pilihan)"
    ],
    steps: [
      "Bakar roti sampai garing.",
      "Sapu mentega kacang masa roti masih panas supaya cair sikit.",
      "Susun hirisan pisang di atas.",
      "Siram madu atau tabur kayu manis. Siap!"
    ],
    chefTip: "Guna pisang yang dah ada bintik coklat. Lebih manis, tak payah tambah madu pun."
  },
  {
    id: "roti-sosej-mayo-bakeri",
    name: "Roti Gulung Sosej Mayo (Ala Bakeri)",
    category: "roti",
    categoryLabel: "🍞 Geng Roti Gardenia",
    time: "8 minit",
    gear: "Air Fryer / Oven Toaster",
    bannerIcon: "🌭",
    image: "images/roti_sosej_mayo.jpg",
    bannerGradient: "linear-gradient(135deg, #e11d48 0%, #881337 100%)",
    desc: "Roti digelek nipis, digulung dengan sosej, disapu mayo dan sos tomato di atas, ditabur daun parsli lalu dibakar. Sebiji macam roti sosej kedai bakeri!",
    vibe: "Lembut gebu, mayo bakar wangi, nostalgia bakeri",
    cravingCall: "Rindu roti sosej mayo yang selalu beli kat kedai roti.",
    pantryTags: ["roti", "sosej", "telur"],
    ingredients: [
      "4 keping roti Gardenia (buang kulit)",
      "4 batang sosej ayam",
      "Mayonis & sos tomato",
      "1 biji telur (sapu atas)",
      "Daun parsli kering (pilihan)"
    ],
    steps: [
      "Gelek roti nipis, letak sosej di hujung dan gulung ketat.",
      "Sapu telur di atas gulungan.",
      "Picit mayo dan sos tomato zig-zag atas roti, tabur parsli.",
      "Air fryer 170°C selama 6–7 minit sampai mayo keperangan."
    ],
    chefTip: "Letak gulungan dengan sambungan menghadap bawah supaya tak terbuka masa dibakar."
  },
  {
    id: "roti-stick-kayu-manis",
    name: "Roti Stick Gula Kayu Manis (Churros Roti)",
    category: "roti",
    categoryLabel: "🍞 Geng Roti Gardenia",
    time: "6 minit",
    gear: "1 Kuali Leper / Air Fryer",
    bannerIcon: "🥖",
    image: "images/roti_stick_kayu_manis.jpg",
    bannerGradient: "linear-gradient(135deg, #c2410c 0%, #431407 100%)",
    desc: "Roti dipotong jejari panjang, digoreng mentega sampai rangup, lepas tu digolek dalam gula + serbuk kayu manis. Rasa macam churros!",
    vibe: "Rangup manis, wangi kayu manis, snek tak berhenti",
    cravingCall: "Malam-malam nak mengunyah benda manis rangup sambil tengok movie.",
    pantryTags: ["roti", "mentega"],
    ingredients: [
      "3 keping roti Gardenia (potong jejari 3 batang sekeping)",
      "2 sudu mentega",
      "3 sudu gula pasir",
      "1/2 sudu kecil serbuk kayu manis",
      "Coklat cair / susu pekat untuk cicah (pilihan)"
    ],
    steps: [
      "Campur gula dan kayu manis dalam pinggan.",
      "Cairkan mentega atas kuali, goreng jejari roti sampai semua sisi garing.",
      "Masa masih panas, golek terus dalam campuran gula kayu manis.",
      "Hidang dengan coklat cair atau susu pekat untuk cicah."
    ],
    chefTip: "Roti yang dah 2–3 hari lebih sesuai sebab kurang lembap, jadi lebih rangup."
  },
  {
    id: "roti-aiskrim-malaysia",
    name: "Roti Aiskrim Malaysia (Nostalgia Tepi Jalan)",
    category: "roti",
    categoryLabel: "🍞 Geng Roti Gardenia",
    time: "2 minit",
    gear: "Tiada! (Pinggan je)",
    bannerIcon: "🍦",
    image: "images/roti_aiskrim.jpg",
    bannerGradient: "linear-gradient(135deg, #ec4899 0%, #831843 100%)",
    desc: "Sekeping roti lembut dibalut sebongkah aiskrim (potong dari kotak), ditabur meses atau disiram Milo. Macam beli dari motor aiskrim zaman sekolah!",
    vibe: "Sejuk lembut manis, nostalgia budak-budak",
    cravingCall: "Panas terik, nak benda sejuk manis yang buat teringat zaman kecik.",
    pantryTags: ["roti"],
    ingredients: [
      "1–2 keping roti Gardenia (lembut, jangan bakar)",
      "Aiskrim kotak (perisa jagung / durian / vanila / coklat)",
      "Meses coklat / serbuk Milo / susu pekat (pilihan)"
    ],
    steps: [
      "Potong aiskrim kotak jadi bongkah tebal 2cm.",
      "Letak bongkah aiskrim di tengah roti.",
      "Tabur meses atau Milo, siram susu pekat kalau suka.",
      "Lipat roti dan makan cepat sebelum cair!"
    ],
    chefTip: "Perisa jagung atau durian paling ori rasa macam pakcik aiskrim. Simpan roti dalam peti 5 minit dulu supaya aiskrim lambat cair."
  },
  {
    id: "pisang-rebus-kelapa",
    name: "Pisang Rebus Cicah Kelapa Parut",
    category: "kudap",
    categoryLabel: "🍌 Geng Pisang & Ubi",
    time: "10 minit",
    gear: "Periuk Rebus",
    bannerIcon: "🍌",
    image: "images/pisang_rebus.jpg",
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
    image: "images/lempeng_kelapa.jpg",
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
    image: "images/keledek_rebus.jpg",
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
    image: "images/pulut_kelapa.jpg",
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
  },
  {
    id: "sardin-tin-limau",
    name: "Sambal Sardin Tin Perah Limau",
    category: "lauk",
    categoryLabel: "🐟 Geng Lauk & Tin",
    time: "5 minit",
    gear: "1 Kuali / Microwave",
    bannerIcon: "🐟",
    image: "images/sardin_limau.jpg",
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
    image: "images/cucur_bawang.jpg",
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
    id: "makaroni-sardin",
    name: "Makaroni Goreng Sardin Super Ringkas",
    category: "pasta",
    categoryLabel: "🍝 Geng Pasta & Barat",
    time: "12 minit",
    gear: "Periuk Rebus & Kuali",
    bannerIcon: "🍝",
    image: "images/makaroni_sardin.jpg",
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
  },
  {
    id: "maggi-remas-goncang",
    name: "Maggi Remas Goncang (Ala Mamee)",
    category: "kudap",
    categoryLabel: "🍜 Geng Mi Segera",
    time: "1 minit",
    gear: "Tangan Anda Sahaja",
    bannerIcon: "💥",
    image: "images/maggi_remas.jpg",
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
    image: "images/bubur_kicap_bilis.jpg",
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
    image: "images/sosej_scramble.jpg",
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
    "id": "kacang-pool-daging-kisar",
    "name": "Kacang Pool Daging Kisar Telur Goyang (Cicah Roti Bakar)",
    "category": "lauk",
    "categoryLabel": "🍞 Geng Roti & Daging Kisar",
    "time": "8 minit",
    "gear": "1 Kuali & Pembakar Roti",
    "bannerIcon": "🧆",
    "image": "images/kacang_pool.jpg",
    "bannerGradient": "linear-gradient(135deg, #b45309 0%, #78350f 100%)",
    "desc": "Daging kisar Ramly ditumis rempah wangi bersama sayur biji & kacang panggang pekat. Dihidang panas dengan telur mata goyang, hirisan cili hijau, bawang merah, perahan limau kasturi dan roti bakar mentega tebal.",
    "vibe": "Rempah berlemak pekat, pedas masam segar limau, cicahan roti bakar paling syahdu!",
    "cravingCall": "Teringin sarapan ala Johor/Arab yang mewah berprotein tapi siap dalam 8 minit guna bahan dapur.",
    "pantryTags": [
      "daging",
      "roti",
      "telur"
    ],
    "ingredients": [
      "150g Daging kisar Ramly (ditoskan minyaknya)",
      "1/2 tin kacang panggang (baked beans / kacang parang)",
      "1 sudu besar rempah kari daging & sedikit jintan",
      "Segenggam sayur biji campur (lobak merah, jagung, peas)",
      "1 biji telur mata goyang",
      "1 biji limau kasturi (dibelah dua)",
      "Hirisan bawang merah & cili hijau",
      "2 keping roti tebal disapu mentega & dibakar garing"
    ],
    "steps": [
      "Tumis daging kisar dalam kuali tanpa minyak hingga keluar lemak semula jadi. Senduk buang minyak lebihan.",
      "Masukkan rempah kari, bawang merah dan sayur biji. Tumis hingga naik bau wangi semerbak.",
      "Masukkan kacang panggang yang dilenyek kasar dan sedikit air. Reneh hingga kuah pekat dan berperisa dengan secubit garam.",
      "Tuang kuah daging pekat ke dalam mangkuk. Letak telur mata goyang, tabur hirisan cili hijau dan perah limau kasturi.",
      "Cicah roti bakar mentega panas-panas ke dalam kuah pekat!"
    ],
    "chefTip": "Perahan limau kasturi dan cili hijau mentah adalah rahsia penting yang memotong rasa muak lemak dan buat kuah rasa beraroma segar!"
  },
  {
    "id": "roti-puri-kembung-daging-kisar",
    "name": "Roti Puri Kembung Gebu Cicah Daging Kisar Berempah",
    "category": "roti",
    "categoryLabel": "🥞 Geng Puri & Roti Kembung",
    "time": "10 minit",
    "gear": "Kuali Menggoreng Dalam",
    "bannerIcon": "🫓",
    "image": "images/roti_puri.jpg",
    "bannerGradient": "linear-gradient(135deg, #d97706 0%, #92400e 100%)",
    "desc": "Roti puri doh gandum mudah yang digoreng kembung macam belon emas, luar rangup nipis dalam berongga gebu suam. Dicicah lauk tumisan daging kisar Ramly berempah sayur biji.",
    "vibe": "Kembung gebu berwap bila dicarik, luar rangup krup-krap cicah kuah berempah padu!",
    "cravingCall": "Craving roti panas gebu kembung macam kedai mamak tapi nak buat sendiri ekspres di rumah.",
    "pantryTags": [
      "tepung",
      "daging"
    ],
    "ingredients": [
      "1 cawan tepung gandum",
      "1 sudu kecil minyak masak & secubit garam",
      "Air suam secukupnya untuk uli doh lembut",
      "Lauk daging kisar Ramly tumis sayur biji (atau kuah kari)",
      "Minyak masak untuk menggoreng"
    ],
    "steps": [
      "Gaul tepung gandum, garam dan sedikit minyak. Masukkan air suam sedikit demi sedikit dan uli hingga doh licin tak melekat (2-3 minit).",
      "Bulat-bulatkan doh kecil dan canai nipis bulat menggunakan pencanai atau botol kaca.",
      "Panaskan minyak banyak dengan api sederhana panas. Masukkan sekeping doh ke dalam minyak panas.",
      "Tekan perlahan permukaan doh dengan senduk berlubang — doh akan terus menggelembung kembung bulat macam belon!",
      "Terbalikkan sekejap (5 saat), angkat dan toskan minyak. Hidang panas berasap bersama tumisan daging kisar."
    ],
    "chefTip": "Rahsia roti puri kembung bulat cantik: minyak mesti cukup panas dan tekan sikit atas doh sebaik sahaja ia terapung dalam kuali."
  },
  {
    "id": "sloppy-joe-daging-kisar",
    "name": "Sloppy Joe Daging Kisar Sayur Biji (Sandwic Melimpah)",
    "category": "roti",
    "categoryLabel": "🍞 Geng Roti & Daging Kisar",
    "time": "7 minit",
    "gear": "1 Kuali & Pinggan",
    "bannerIcon": "🍔",
    "image": "images/sloppy_joe.jpg",
    "bannerGradient": "linear-gradient(135deg, #ea580c 0%, #9a3412 100%)",
    "desc": "Daging kisar Ramly dimasak bersalut sos tomato berkrim, sos tiram, lada hitam dan sayur campur manis. Disenduk melimpah ruah di celah roti burger atau roti bakar garing.",
    "vibe": "Berjus melimpah ruah, masam manis gurih berempah, makan comot tapi puas!",
    "cravingCall": "Teringin burger daging basah berjus yang cepat siap tanpa perlu bakar patty.",
    "pantryTags": [
      "daging",
      "roti"
    ],
    "ingredients": [
      "150g Daging kisar Ramly",
      "1/2 cawan sayur biji (jagung, carrot, peas)",
      "1/2 biji bawang holland (didadu)",
      "2 sudu besar sos tomato / sos cili",
      "1 sudu besar sos tiram & sedikit serbuk lada hitam",
      "2 keping roti burger atau roti Gardenia disapu mentega"
    ],
    "steps": [
      "Masak daging kisar dalam kuali hingga perang. Senduk buang sedikit minyak lebihan.",
      "Masukkan bawang holland dadu dan sayur biji campur. Kacau hingga bawang layu dan wangi.",
      "Tuangkan sos tomato, sos tiram, secubit gula dan serbuk lada hitam. Masak hingga kuah pekat bersalut cantik.",
      "Bakar roti atas kuali berasingan hingga perang garing bermentega.",
      "Senduk daging kisar melimpah-ruah ke atas roti. Tangkup dan terus nikmati panas-panas!"
    ],
    "chefTip": "Sos tomato dan lada hitam adalah kunci rasa Sloppy Joe autentik — ia potong rasa muak daging dan buat setiap gigitan berjus!"
  },
  {
    "id": "cottage-pie-bujang",
    "name": "Cottage Pie Daging Kisar Bujang (Mashed Potato Cheese)",
    "category": "lenyek",
    "categoryLabel": "🥔 Geng Lenyek & Empuk",
    "time": "10 minit",
    "gear": "Kuali Leper & Microwave / Air Fryer",
    "bannerIcon": "🥧",
    "image": "images/cottage_pie.jpg",
    "bannerGradient": "linear-gradient(135deg, #ca8a04 0%, #854d0e 100%)",
    "desc": "Lauk daging kisar Ramly ditumis bersama sayur biji dan lada hitam pekat di bahagian bawah, dilapisi kentang lenyek gebu mentega dan keju leleh di atas. Dibakar hingga permukaan perang keemasan.",
    "vibe": "Lapisan kentang berkrim lemak manis bercampur daging berempah panas berjus.",
    "cravingCall": "Nak makan hidangan Barat yang 'comfort food' habis, mengenyangkan dan mewah macam kafe.",
    "pantryTags": [
      "daging",
      "kentang",
      "mentega"
    ],
    "ingredients": [
      "150g Daging kisar Ramly",
      "1/2 cawan sayur campur (peas, lobak, jagung)",
      "2 biji kentang (direbus empuk & dilenyek bersama mentega + susu)",
      "1 keping keju cheddar atau mozzarella",
      "1 sudu kecil serbuk lada hitam & sos tiram"
    ],
    "steps": [
      "Tumis daging kisar, toskan minyak lebihan, kemudian masukkan sayur campur, sos tiram dan lada hitam hingga masak pekat.",
      "Senduk inti daging ke dalam mangkuk tahan panas sebagai lapisan bawah.",
      "Ratakan kentang lenyek bermentega di atas lapisan daging.",
      "Carikkan keju di atas permukaan kentang dan corakkan garpu.",
      "Bakar dalam microwave / air fryer selama 3-4 minit pada suhu 180°C sehingga keju cair perang keemasan!"
    ],
    "chefTip": "Gariskan permukaan mashed potato dengan garpu sebelum bakar supaya timbul jalur-jalur garing berkeju yang rangup!"
  },
  {
    "id": "cheesy-mushroom-omelette",
    "name": "Cheesy Mushroom Folded Omelette (Omelet Cendawan Keju)",
    "category": "lauk",
    "categoryLabel": "🍳 Geng Telur & Sosej",
    "time": "5 minit",
    "gear": "1 Kuali Non-Stick & Sudip",
    "bannerIcon": "🧀",
    "image": "images/mushroom_omelette.jpg",
    "bannerGradient": "linear-gradient(135deg, #f59e0b 0%, #b45309 100%)",
    "desc": "Telur dipukul bersama susu segar dan mentega, dimasak atas api kecil sehingga gebu lembut, diisi hirisan cendawan butang dan kepingan cheese cheddar meleleh, dilipat bentuk bulan sabit kemas.",
    "vibe": "Luar licin gebu, bila dipotong keju mengalir keluar bersama aroma mentega cendawan.",
    "cravingCall": "Sarapan pagi gaya hotel 5-bintang yang ringkas, tinggi protein dan siap sepantas kilat.",
    "pantryTags": [
      "telur",
      "mentega",
      "cendawan"
    ],
    "ingredients": [
      "2 biji telur ayam",
      "2 sudu besar susu segar (rahsia gebu)",
      "1/2 cawan cendawan butang (hiris nipis)",
      "1 keping keju cheddar / mozzarella",
      "1 sudu besar mentega",
      "Secubit garam & serbuk lada hitam"
    ],
    "steps": [
      "Tumis cendawan butang dengan sedikit mentega sehingga layu dan wangi. Angkat ke tepi.",
      "Pukul telur bersama susu segar, garam dan lada hitam hingga berbuih halus.",
      "Cairkan baki mentega dalam kuali api perlahan. Tuang telur dan biarkan bahagian bawah mengeras lembut sambil tolak bahagian tepi ke tengah.",
      "Susun cendawan tumis dan kepingan keju di atas separuh bahagian telur.",
      "Lipat telur menjadi dua (bentuk bulan sabit). Biarkan 30 saat sehingga keju cair dan angkat segera!"
    ],
    "chefTip": "Gunakan api kecil! Omelette Barat yang sempurna tidak boleh garing atau hangus, warnanya mesti kuning keemasan licin dan gebu berkrim."
  },
  {
    "id": "fluffy-pancakes-mentega-madu",
    "name": "Classic Fluffy Pancakes (Pancake Gebu Madu & Mentega)",
    "category": "lempeng",
    "categoryLabel": "🥞 Geng Lempeng & Pancake",
    "time": "6 minit",
    "gear": "Kuali Leper Non-Stick",
    "bannerIcon": "🥞",
    "image": "images/fluffy_pancakes.jpg",
    "bannerGradient": "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    "desc": "Hotcake gebu tebal bertingkat disapu seketul mentega sejuk yang mencair perlahan-lahan, disiram limpahan madu asli atau sirap maple manis wangi.",
    "vibe": "Gebu lembut cair di lidah, aroma vanila mentega manis menusuk kalbu.",
    "cravingCall": "Tekak nak sarapan manis ala kafe Barat yang buat pagi rasa santai dan gembira.",
    "pantryTags": [
      "tepung",
      "mentega",
      "telur"
    ],
    "ingredients": [
      "1 cawan tepung gandum",
      "1 sudu kecil serbuk penaik (baking powder)",
      "1 sudu besar gula",
      "3/4 cawan susu segar & 1 biji telur",
      "1 sudu besar mentega cair",
      "Madu / sirap maple & kiub mentega untuk hiasan"
    ],
    "steps": [
      "Kacau telur, susu dan mentega cair dalam mangkuk.",
      "Masukkan tepung gandum, serbuk penaik dan gula. Kacau sekejap sahaja hingga sebati (jangan terlebih kacau supaya pancake kekal gebu).",
      "Panaskan kuali non-stick dengan api kecil. Tuang 1 senduk kecil adunan.",
      "Tunggu hingga timbul buih-buih kecil di permukaan (kira-kira 1-2 minit), kemudian terbalikkan perlahan.",
      "Masak lagi 1 minit, susun bertingkat atas pinggan, letak seketul mentega di puncak dan siram madu suam!"
    ],
    "chefTip": "Jangan tekan pancake dengan sudip semasa memasak, biar ia naik mengembang sendiri secara semula jadi!"
  },
  {
    "id": "one-pan-english-breakfast",
    "name": "Mini English Breakfast 1 Kuali (One-Pan Big Breakfast)",
    "category": "lauk",
    "categoryLabel": "🍳 Geng Telur & Sosej",
    "time": "8 minit",
    "gear": "1 Kuali Leper Sahaja",
    "bannerIcon": "🍳",
    "image": "images/english_breakfast.jpg",
    "bannerGradient": "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)",
    "desc": "Sarapan lengkap ala kafe Barat dalam satu kuali: telur mata goyang kuning cair, sosej panggang mentega, tomato panggang manis, kacang panggang suam dan roti bakar garing.",
    "vibe": "Mewah, lengkap semua rasa, dan paling penting: jimat masa basuh periuk!",
    "cravingCall": "Lapar teruk nak sarapan ala Big Breakfast yang mengenyangkan sampai tengah hari.",
    "pantryTags": [
      "telur",
      "roti",
      "mentega"
    ],
    "ingredients": [
      "1-2 biji telur ayam",
      "2 batang sosej (dikelar-kelar)",
      "1/2 tin kecil baked beans (kacang panggang)",
      "1/2 biji tomato merah (dibelah dua)",
      "1 keping roti Gardenia",
      "1 sudu besar mentega"
    ],
    "steps": [
      "Cairkan mentega dalam kuali besar. Susun sosej dan tomato belah menghadap bawah.",
      "Tolakkan ke tepi, letak kepingan roti di ruang kosong untuk dipanggang garing dengan mentega.",
      "Angkat roti bila dah keemasan. Pecahkan telur terus ke dalam kuali untuk buat telur mata goyang.",
      "Tuangkan baked beans di sudut kuali yang berbaki untuk dipanaskan selama 1 minit.",
      "Angkat semua terus ke atas satu pinggan besar. Tabur lada hitam dan makan!"
    ],
    "chefTip": "Kelar-kelar permukaan sosej supaya ia cepat masak sekata dan bahagian luarnya garing rangup keemasan."
  }
,
  {
    "id": "korean-corn-cheese",
    "name": "Korean Corn Cheese Meleleh (Jagung Keju Tarik K-BBQ)",
    "category": "kudap",
    "categoryLabel": "🌽 Sektor Jagung Manis",
    "time": "4 minit",
    "gear": "Kuali Leper / Microwave",
    "bannerIcon": "🧀",
    "image": "images/korean_corn_cheese.jpg",
    "bannerGradient": "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    "desc": "Biji jagung manis tin digaul sedikit mayonis, mentega dan gula, ditaburi lapisan keju Mozzarella tebal dan dipanaskan sehingga keju mencair perang keemasan serta menarik panjang.",
    "vibe": "Manis lemak jagung bersatu dengan masin gurih keju tarik yang mengalir panas!",
    "cravingCall": "Craving kudapan ala kafe K-BBQ Korea yang super cheesy dan puas disuap sudu demi sudu.",
    "pantryTags": [
      "jagung",
      "mentega"
    ],
    "ingredients": [
      "1 cawan jagung manis tin (toskan airnya)",
      "1 sudu besar mayonis",
      "1 sudu kecil mentega / marjerin",
      "1 sudu kecil gula pasir",
      "Segenggam keju Mozzarella parut (atau 2 keping keju Cheddar)",
      "Sedikit daun parsli kering / serbuk cili (hiasan)"
    ],
    "steps": [
      "Campurkan jagung manis bersama mayonis, mentega dan gula dalam mangkuk kecil hingga sebati.",
      "Tuangkan campuran jagung ke atas kuali leper atau pinggan tahan microwave.",
      "Taburkan keju Mozzarella tebal-tebal di atas seluruh permukaan jagung.",
      "Tutup kuali dengan penutup dan masak atas api kecil selama 3-4 minit (atau microwave 90 saat) sehingga keju cair meleleh berbuih.",
      "Tabur parsli kering dan terus suap panas-panas sambil tarik kejunya!"
    ],
    "chefTip": "Campuran mayonis dan gula tu rahsia peniaga Korea — ia buat rasa jagung berkrim berkilat dan potong rasa masin keju dengan sempurna!"
  },
  {
    "id": "sup-jagung-telur-sutera",
    "name": "Sup Jagung Telur Sutera (Chinese Style Egg Drop Soup)",
    "category": "bubur",
    "categoryLabel": "🥣 Geng Bubur & Sup",
    "time": "5 minit",
    "gear": "Periuk Kecil & Garpu",
    "bannerIcon": "🥣",
    "image": "images/sup_jagung_telur.jpg",
    "bannerGradient": "linear-gradient(135deg, #eab308 0%, #a16207 100%)",
    "desc": "Sup manis jagung berkuah likat jernih dan beraroma, dihiasi tali-tali telur sutera halus gebu yang meluncur di tekak. Menenangkan perut dan melegakan badan.",
    "vibe": "Suam-suam licin, manis semula jadi jagung dengan kelembutan telur halus tanpa setitik minyak.",
    "cravingCall": "Perut lapar tengah malam tapi taknak benda berminyak berat, nak sup panas yang sedap hirup sampai licin mangkuk.",
    "pantryTags": [
      "jagung",
      "telur"
    ],
    "ingredients": [
      "1 tin jagung manis (kisar separuh atau guna terus)",
      "1-2 biji telur ayam (dipukul sebati)",
      "2 cawan air / stok ayam",
      "1/2 kiub pati ayam",
      "1 sudu besar tepung jagung (dibancuh sedikit air)",
      "Sedikit minyak bijan & lada sulah putih"
    ],
    "steps": [
      "Didihkan air bersama kiub pati ayam dan jagung manis dalam periuk kecil.",
      "Tuangkan bancuhan tepung jagung sambil kacau rata sehingga kuah sup menjadi pekat likat dan berkilat.",
      "Kecilkan api. Tuangkan telur pukul secara perlahan-lahan macam benang halus sambil tangan lagi satu mengacau sup secara membulat laju dengan garpu.",
      "Telur akan masak serta-merta menjadi tali-tali sutera yang cantik gebu terapung.",
      "Tutup api, renjis beberapa titik minyak bijan dan lada sulah. Hidang panas berasap!"
    ],
    "chefTip": "Jangan tuang telur masa kuah tengah mendidih buak-buak besar — kecilkan api dulu dan kacau laju supaya telur tak berketul kasar macam telur rebus."
  },
  {
    "id": "nasi-jagung-butter-wangi",
    "name": "Nasi Jagung Butter Wangi Rice Cooker",
    "category": "nasi",
    "categoryLabel": "🍚 Geng Nasi & Karbo",
    "time": "15 minit",
    "gear": "Periuk Nasi (Rice Cooker)",
    "bannerIcon": "🍚",
    "image": "images/nasi_jagung_butter.jpg",
    "bannerGradient": "linear-gradient(135deg, #f59e0b 0%, #b45309 100%)",
    "desc": "Beras dimasak bersama sebutir-butir jagung manis, sebuku mentega wangi dan secubit stok ayam di dalam rice cooker. Nasi kuning berkilat harum, manis berlemak, ratah begitu sahaja pun dah terangkat!",
    "vibe": "Aroma wangi mentega menembusi segenap ruang dapur, nasi gebu bersalut jus jagung manis.",
    "cravingCall": "Bosan nasi putih kosong, nak nasi berperisa yang wangi mewah tapi cuma campak semua dalam rice cooker.",
    "pantryTags": [
      "jagung",
      "mentega",
      "nasi"
    ],
    "ingredients": [
      "2 cawan beras (dibersihkan macam biasa)",
      "1 tin jagung manis (toskan air)",
      "1-2 sudu besar mentega / Planta wangi",
      "1/2 kiub pati ayam (dihancurkan)",
      "Air secukupnya mengikut sukatan beras biasa",
      "Secubit garam halus"
    ],
    "steps": [
      "Masukkan beras yang dah dibasuh dan air mengikut sukatan memasak nasi biasa ke dalam periuk rice cooker.",
      "Masukkan jagung manis, hancuran kiub pati ayam, secubit garam dan letak mentega di atas beras.",
      "Kacau sedikit bagi sebati, tutup periuk dan tekan butang Cook.",
      "Bila butang bertukar ke Warm, buka penutup dan gembur-gemburkan nasi perlahan-lahan dengan senduk supaya mentega dan jagung rata.",
      "Senduk ke dalam pinggan, makan panas-panas bersama telur mata atau lauk kegemaran!"
    ],
    "chefTip": "Mentega yang mencair bersama kanji beras semasa mendidih mengelakkan butiran nasi daripada melekat dan memberi kilauan emas yang sangat menyelerakan!"
  },
  {
    "id": "puding-jagung-kastard",
    "name": "Puding Jagung Pejal Semula Jadi (Tanpa Gula Tambahan)",
    "category": "kudap",
    "categoryLabel": "\ud83c\udf3d Sektor Jagung Manis",
    "time": "18 minit",
    "gear": "Mangkuk Tahan Panas + Pengukus / Air Fryer",
    "bannerIcon": "\ud83c\udf6e",
    "image": "images/puding_jagung.jpg",
    "bannerGradient": "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",
    "desc": "Jagung manis dikisar bersama susu dan telur tanpa setitik gula halus \u2014 kemanisannya datang terus dari jus jagung asli. Dikukus sampai SET PADU jadi puding pejal yang boleh diiris kiub, berintipan biji jagung sebiji-sebiji.",
    "vibe": "Pejal gebu boleh potong kiub, pecah manis jus jagung asli setiap kali tergigit",
    "cravingCall": "Nak dessert manis lemak yang selesa di hati sebab betul-betul semula jadi, tanpa gula proses.",
    "pantryTags": ["jagung", "telur", "susu"],
    "ingredients": [
      "1 tin jagung manis (kisar separuh, biarkan separuh lagi utuh jadi biji)",
      "2 biji telur",
      "1 cawan susu cair (low fat lagi ringan)",
      "1/2 sudu teh esen vanila (naikkan rasa manis tanpa gula)",
      "Secubit kecil garam",
      "Pilihan: 1 biji pisang ranum dilenyek kalau nak lagi manis"
    ],
    "steps": [
      "Kisar separuh jagung bersama susu sampai hancur lembut, kemudian gaul balik dengan baki jagung biji.",
      "Dalam mangkuk lain, pukul telur, vanila dan garam. Tuang bancuhan jagung, kacau rata \u2014 tiada gula ditambah.",
      "Tuang adunan ke dalam mangkuk tahan panas (jangan penuh sangat, bagi ruang untuk mengembang).",
      "Kukus 14-18 minit (atau air fryer 160\u00b0C lebih kurang 12 minit) sampai SET PADU \u2014 cucuk garfu tengah, terus keluar bersih tanpa bancuhan melekat.",
      "Biar sejuk betul baru keluar dari acuan, kemudian iris jadi kiub. Lagi sejuk, lagi pejal!"
    ],
    "chefTip": "Nak pejal betul-betul boleh potong: tambah 1 sudu besar tepung jagung dan pastikan kukus cukup masa sampai garfu keluar bersih. Guna jagung manis bermutu \u2014 sebab tiada gula, jagunglah yang memberi keseluruhan rasa manis."
  },
  {
    "id": "wedges-kentang-berempah",
    "name": "Wedges Kentang Berempah Air Fryer (Potato Wedges)",
    "category": "kudap",
    "categoryLabel": "\ud83c\udf5f Geng Kudap & Goreng",
    "time": "12 minit",
    "gear": "Air Fryer / Kuali Goreng",
    "bannerIcon": "\ud83e\udd54",
    "image": "images/potato_wedges.jpg",
    "bannerGradient": "linear-gradient(135deg, #f59e0b 0%, #7c2d12 100%)",
    "desc": "Kentang dipotong baji tebal dengan kulit masih melekat, dilumur mentega cair, serbuk kunyit, paprika & bawang putih, kemudian digoreng air fryer sampai garing keemasan di luar, lembut gebu di dalam. Cicah mayo & sos cili.",
    "vibe": "Garing pedas berempah di hujung, lembut panas berkrim di tengah, kulit kentang wangi",
    "cravingCall": "Nak snek kentang yang lebih tebal & berempah dari fries biasa, garing di luar tapi tak berminyak terlampau.",
    "pantryTags": ["kentang", "mentega"],
    "ingredients": [
      "2 biji kentang sederhana (dibasuh, potong baji/wedge, kulit biarkan)",
      "1 sudu besar mentega / marjerin cair",
      "1/2 sudu teh serbuk kunyit & paprika",
      "1/2 sudu teh bawang putih halus / garlic powder",
      "Secubit garam laut & lada hitam",
      "Mayo & sos cili untuk cicah"
    ],
    "steps": [
      "Rendam wedge kentang dalam air sejuk 5 minit, kemudian tos & lap kering betul-betul (ini rahsia garing!).",
      "Gaul wedge dengan mentega cair, kunyit, paprika, bawang putih, garam & lada sampai salut rata.",
      "Susun satu lapis dalam bakul air fryer (jangan bertindih). Air fryer 200\u00b0C 10-12 minit, goncang bakul separuh masa.",
      "Alternatif: goreng dalam minyak panas sederhana sampai keemasan, kemudian toskan minyak.",
      "Angkat masa masih garing panas, hidang bersama mayo & sos cili!"
    ],
    "chefTip": "Kulit kentang jangan buang — ia bagi tekstur rangup & extra serat. Rendam air sejuk untuk keluarkan kanji lebihan supaya wedge lebih garing di luar dan lembut di dalam."
  },
  {
    "id": "kentang-keprek-garing",
    "name": "Kentang Keprek Garing Berempah (Smashed Potato)",
    "category": "kudap",
    "categoryLabel": "\ud83c\udf5f Geng Kudap & Goreng",
    "time": "15 minit",
    "gear": "Periuk Rebus + Air Fryer / Oven",
    "bannerIcon": "\ud83e\udd54",
    "image": "images/smashed_potato.jpg",
    "bannerGradient": "linear-gradient(135deg, #f59e0b 0%, #92400e 100%)",
    "desc": "Kentang kecil direbus empuk, kemudian ditekan (keprek) sampai pecah rata, dilumur mentega cair & rempah, lalu dipanggang air fryer sampai tepi garing keemasan rangup tapi tengah masih lembut gebu.",
    "vibe": "Tepi rangup berminyak wangi, tengah lembut berkrim, lapisan-lapisan kepingan kentang keemasan",
    "cravingCall": "Nak kentang garing yang lebih berlayer & fun dari fries biasa, tapi taknak repot kupas atau potong halus.",
    "pantryTags": ["kentang", "mentega"],
    "ingredients": [
      "5-6 biji kentang kecil/sederahan (dibasuh, boleh keep kulit)",
      "1 sudu besar mentega / marjerin cair",
      "1/2 sudu teh serbuk kunyit & paprika",
      "Secubit garam laut, lada hitam & bawang putih halus",
      "Sedikit minyak zaitun / minyak masak untuk sapu"
    ],
    "steps": [
      "Rebus kentang utuh dalam air bergaram sehingga empuk (garfu terus tembus), lebih kurang 8-10 minit. Toskan.",
      "Letak kentang atas papan, tekan perlahan dengan bawah cawan/gelas sampai leper & sedikit pecah (jangan hancur).",
      "Sapukan mentega cair dan tabur rempah + garam + lada kat atas setiap keping kentang keprek.",
      "Susun dalam air fryer/oven, 200\u00b0C selama 8-10 minit sampai tepi garing keemasan.",
      "Hidang panas dengan cip serbuk pedas / cecah mayo bawang putih!"
    ],
    "chefTip": "Selepas rebus, biar kentang beruap kering sejurus supaya permukaan lebih cepat garing. Tekan jangan terlalu kuat — nak kekal ada lantai tengah yang tebal lembut."
  },
  {
    "id": "kentang-hash-sarapan",
    "name": "Kentang Hash Sarapan 1 Kuali (Potato Hash Telur)",
    "category": "kudap",
    "categoryLabel": "\ud83c\udf73 Geng Telur & Sosej",
    "time": "12 minit",
    "gear": "1 Kuali Leper",
    "bannerIcon": "\ud83e\udd54",
    "image": "images/potato_hash_telur.jpg",
    "bannerGradient": "linear-gradient(135deg, #fbbf24 0%, #b45309 100%)",
    "desc": "Kentang dipotong dadu kecil, digoreng kering dalam kuali bersama hirisan bawang sampai garing keemasan, lepas tu dipecahkan telur terus atasnya. Sarapan padu murah yang kenyang sampai tengah hari.",
    "vibe": "Dadu kentang garing di tepi, manis bawang terkaramel, kuning telur cair meleleh",
    "cravingCall": "Pagi lapar nak sarapan berat gurih yang tak perlu roti atau sereal, guna apa yang ada dalam peti sejuk.",
    "pantryTags": ["kentang", "telur", "bawang"],
    "ingredients": [
      "2 biji kentang (dikupas, dipotong dadu kecil 1cm)",
      "1/2 biji bawang besar (dihiris)",
      "2 biji telur",
      "1 sudu besar mentega / minyak masak",
      "Secubit garam, lada hitam & serbuk paprika"
    ],
    "steps": [
      "Panaskan mentega/minyak dalam kuali. Masuk kentang dadu, ratakan, jangan kacau selalu biar sisi garing keemasan.",
      "Bila kentang dah separuh masak & wangi, masuk hirisan bawang, garam, lada & paprika. Gaul rata.",
      "Bentuk longgokan kentang rata, buat 2 lubang kecil, pecahkan telur ke dalam lubang.",
      "Tutup kuali, masak api perlahan 2-3 minit sampai putih telur set tapi kuning masih cair.",
      "Tabur sedikit lagi garam & lada, terus hidang dalam kuali!"
    ],
    "chefTip": "Potong kentang sama kecil supaya masak serentak & cepat garing. Nak lagi padu, campur baki sosej atau ayam cincang sekali time menggoreng."
  },
  {
    "id": "kroket-kentang-air-fryer",
    "name": "Kroket Kentang Oat Air Fryer (Guna Mashed Lebihan)",
    "category": "lenyek",
    "categoryLabel": "\ud83e\udd54 Geng Lenyek & Empuk",
    "time": "15 minit",
    "gear": "Air Fryer / Oven",
    "bannerIcon": "\ud83e\udd54",
    "image": "images/kroket_kentang.jpg",
    "bannerGradient": "linear-gradient(135deg, #fcd34d 0%, #b45309 100%)",
    "desc": "Sisa mashed potato kelmarin dibentuk jadi batang kroket, diguli oat kisar dan celup telur, kemudian dibakar air fryer dengan semburan minyak nipis. Luar rangup keemasan, dalam lembut berlemak kentang \u2014 tanpa goreng rendam minyak.",
    "vibe": "Kulit oat garing keemasan, inti kentang lemak lembut cair di lidah",
    "cravingCall": "Ada mashed potato lebihan semalam sayang nak buang, nak ubah jadi snek garing tapi taknak repot goreng minyak banyak.",
    "pantryTags": ["kentang", "telur"],
    "ingredients": [
      "1-2 cawan mashed potato lebihan (sejuk peti sejuk supaya mudah dibentuk)",
      "1/2 cawan oat penuh (dikisar kasar jadi serbuk)",
      "1 biji telur (dipukul)",
      "Secubit garam, lada hitam & serbuk bawang putih",
      "Semburan/minyak zaitun sedikit sahaja untuk sapuan"
    ],
    "steps": [
      "Ambil segenggam mashed potato, bentuk jadi batang/uli padat. Kalau nak, masukkan intipan keju atau sosej kat tengah.",
      "Guna oat kisar kasar sebagai salut kering (ganti serbuk roti & tepung) \u2014 celup telur dulu, kemudian guli oat sampai rata.",
      "Simpan dalam peti sejuk 10 minit supaya kroket set & tak hancur masa dibakar.",
      "Susun dalam bakul air fryer, sapu/sembur nipis minyak. Bakar 190\u00b0C selama 8-10 minit, balikkan separuh masa.",
      "Angkat bila luar garing keemasan, cicah mayo sos cili atau sos keju!"
    ],
    "chefTip": "Mashed potato yang dah sejuk peti lebih keras & mudah dibentuk. Salut oat kisar bagi rangup hampir sama dengan serbuk roti tapi lebih serat & tanpa minyak goreng."
  },
  {
    "id": "puding-pisang-oat-kukus",
    "name": "Puding Pisang Oat Kukus Tanpa Gula Tambahan",
    "category": "kudap",
    "categoryLabel": "\ud83c\udf4c Geng Pisang & Ubi",
    "time": "12 minit",
    "gear": "Mangkuk Tahan Panas + Pengukus / Microwave",
    "bannerIcon": "\ud83c\udf6e",
    "image": "images/puding_pisang_oat.jpg",
    "bannerGradient": "linear-gradient(135deg, #84cc16 0%, #3f6212 100%)",
    "desc": "Pisang ranum dilenyek, digaul bersama oat penuh, telur dan sedikit susu, kemudian dikukus sehingga jadi puding gebu manis semula jadi. Zero gula halus, zero tepung kasar \u2014 dessert sihat yang tetap mengenyangkan.",
    "vibe": "Manis pisang semula jadi, tekstur oat kenyal mengenyang, bau wangi bila dibuka penutup pengukus",
    "cravingCall": "Nak dessert lembut manis tapi hati kecik tahu ia tinggi gula. Cari versi sihat yang tetap sedap dan tak buat rasa bersalah.",
    "pantryTags": ["pisang", "telur", "nasi"],
    "ingredients": [
      "2 biji pisang ranum (dilenyek lumat \u2014 makin hitam kulit, makin manis)",
      "1 cawan oat penuh (rolled oats, dikisar kasar kalau suka halus)",
      "2 biji telur",
      "1/2 cawan susu cair / susu oat",
      "1/2 sudu teh baking powder",
      "Madu & segenggam kacang (pilihan, untuk hidang)"
    ],
    "steps": [
      "Lenyek pisang sampai lumat berair, kemudian gaul bersama telur dan susu sampai sebati.",
      "Masukkan oat dan baking powder, kacau rata. Biar 5 minit supaya oat menyerap dan mengembang.",
      "Tuang ke dalam mangkuk/acuan tahan panas (sapu tipis mentega supaya tak melekat).",
      "Kukus 8-10 minit (atau microwave 3-4 minit) sampai atasnya set dan dibenamkan garfu terus keluar bersih.",
      "Hidang suam dengan sedikit madu dan taburan kacang kalau nak lagi padu."
    ],
    "chefTip": "Guna pisang betul-betul ranum (kulit dah berbintik hitam) \u2014 itu 'gula' semula jadi, tak perlu tambah madu pun lagi sedap!"
  },
  {
    "id": "puding-keledek-kukus",
    "name": "Puding Keledek Kukus Pejal (Boleh Iris Kiub)",
    "category": "kudap",
    "categoryLabel": "\ud83c\udf4c Geng Pisang & Ubi",
    "time": "20 minit",
    "gear": "Pengukus + Mangkuk/Acuan",
    "bannerIcon": "\ud83c\udf60",
    "image": "images/puding_keledek.jpg",
    "bannerGradient": "linear-gradient(135deg, #f97316 0%, #7c2d12 100%)",
    "desc": "Keledek oranye dilek halus jadi bahan utama (bukan susu), digaul bersama telur dan oat kisar kemudian dikukus sampai SET PADU. Jadi blok pejal yang boleh diiris kiub dan dipegang \u2014 manis bumi semula jadi ubi, tanpa setitik gula.",
    "vibe": "Padat berisi, manis tanah keledek asli, wangi kukusan dan gebu bila digigit",
    "cravingCall": "Nak puding yang betul-betul ada isi dan mengenyangkan \u2014 bukan cuma susu beku \u2014 tapi tetap pejal boleh potong kiub.",
    "pantryTags": ["ubi", "telur", "tepung"],
    "ingredients": [
      "2 cawan keledek/ubi rebus (dilenyek halus sampai sejuk)",
      "2 biji telur",
      "1/2 cawan oat kisar atau tepung jagung",
      "2-3 sudu besar susu cair/santan (sekadar lembapkan, bukan bahan utama)",
      "1/2 sudu teh esen vanila & secubit garam",
      "Pilihan: daun pandan waktu kukus + taburan kelapa parut tipis"
    ],
    "steps": [
      "Rebus atau kukus keledek sampai betul-betul empuk, kemudian lenyek halus sampai jadi puri pekat. Biar sejuk sekejap.",
      "Gaul puri keledek bersama telur, oat kisar (atau tepung jagung), vanila dan garam sampai jadi adunan kental yang boleh dibentuk.",
      "Kalau terlalu kering/retak, tambah susu atau santan sudu demi sudu \u2014 adunan mesti KENTAL, bukan cair.",
      "Tekan padatkan ke dalam acuan (sapu nipis minyak supaya mudah keluar), tutup dengan foil/plastik.",
      "Kukus 15-20 minit sampai set padu \u2014 cucuk garfu di tengah, terus keluar bersih tanpa bancuhan melekat.",
      "Biar betul-betul sejuk baru iris jadi kiub. Sejuk peti lagi mengeras dia!",
      "Hidang kosong, atau tabur kelapa parut tipis & cicah sedikit kicap kalau suka style kampung manis-lemak."
    ],
    "chefTip": "Keledek oranye memang jadi lebih manis bila dimasak \u2014 sebab itu langsung tak perlu gula. Oat kisar bukan sahaja pengikat, tapi tambah serat supaya puding ini kenyang lama dan tak bangkitkan gula darah macam puding susu."
  },
  {
    "id": "kruton-roti-herba-air-fryer",
    "name": "Kruton Roti Herba Air Fryer (Tabur Atas Sup & Salad)",
    "category": "roti",
    "categoryLabel": "🍞 Geng Roti Gardenia",
    "time": "10 minit",
    "gear": "Air Fryer / Oven",
    "bannerIcon": "🧄",
    "image": "images/kruton_roti.jpg",
    "bannerGradient": "linear-gradient(135deg, #fbbf24 0%, #92400e 100%)",
    "desc": "Roti keping dipotong kiub, digaul mentega cair + bawang putih + herba kemudian dibakar air fryer sampai rangup garing seluruhnya. Tiada minyak rendam, tiada gula, dan roti nak expired pun habis berguna.",
    "vibe": "Rangup kunyah, wangi bawang putih herba, pinggir keemasan merata",
    "cravingCall": "Nak benda rangup untuk kunyah santai, tapi tak nak goreng minyak macam keropok. Boleh juga tabur atas sup bagi ada tekstur.",
    "pantryTags": ["roti", "mentega", "bawang"],
    "ingredients": [
      "4-5 keping roti Gardenia (yang sudah sedikit basi lagi sesuai)",
      "1 sudu besar mentega (dileburkan)",
      "2 ulas bawang putih (dicincang halus)",
      "1 sudu kecil oregano / serbuk bawang / daun sup kering",
      "Secubit garam & lada hitam",
      "Pilihan: 1 sudu besar serbuk keju atau nutritional yeast + paprika"
    ],
    "steps": [
      "Panaskan air fryer 180°C (atau oven 170°C) lebih kurang 3 minit.",
      "Potong roti jadi kiub 1.5-2 cm. Kiub kecil lagi rangup, kiub besar lagi berinti lembut.",
      "Gaul kiub roti dengan mentega cair, bawang putih dan herba sampai semua permukaan berkilat nipis.",
      "Susun satu lapis dalam bakul air fryer (jangan bertindih, kalau penuh bakar dua pusingan).",
      "Bakar 6-8 minit, goyang bakul 2 kali tengah jalan supaya masak merata.",
      "Keluarkan dan biarkan sejuk 5 minit — ia akan jadi lebih rangup bila betul-betul sejuk. Simpan dalam jar kedap."
    ],
    "chefTip": "Kunci rangup tahan lama: jangan bakar sampai bertindih dan jangan terus masuk jar masa panas — wap buat dia lembik semula. Paling best tabur atas sup jagung, sup ayam bening atau salad, atau jejak terus jadi snek digital."
  },
  {
    "id": "bruschetta-tomato-kampung",
    "name": "Bruschetta Kampung Tomato Bawang Bakar",
    "category": "roti",
    "categoryLabel": "🍞 Geng Roti Gardenia",
    "time": "8 minit",
    "gear": "Air Fryer / Kuali Leper",
    "bannerIcon": "🍅",
    "image": "images/bruschetta_tomato.jpg",
    "bannerGradient": "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)",
    "desc": "Roti dibakar garing (bukan digoreng), digosok bawang putih dan dimahkotai inti tomato isi berperah limau. Jus tomato menyerap ke dalam roti sementara pinggirnya tetap rangup.",
    "vibe": "Segar berair masam manis, roti rangup di luar, isi tomato sejuk di atas",
    "cravingCall": "Nak roti yang ada rasa fresh dan ringan — bukan lagi roti keju leleh atau roti gula.",
    "pantryTags": ["roti", "bawang", "sayur"],
    "ingredients": [
      "3 keping roti Gardenia",
      "3-4 biji tomato isi (dibuang biji, didad halus)",
      "1/4 bawang besar / 2 bawang merah (dihiris nipis)",
      "1 ulas bawang putih (biarkan integal untuk menggosok)",
      "1 sudu kecil jus limau nipis",
      "Secubit garam & lada hitam, daun ketumbar / daun sup",
      "Pilihan: 1 sudu kecil minyak zaitun atau mentega cair"
    ],
    "steps": [
      "Dad tomato, buang biji dan airnya dulu supaya inti tidak lembik dan roti kekal rangup.",
      "Gaul tomato + bawang + jus limau + garam, perap 3-5 minit biar rasa menyatu.",
      "Bakar roti air fryer 180°C selama 4-5 minit sampai garing keemasan (atau bakar atas kuali leper).",
      "Gosok bawang putih mentah kat permukaan roti masa masih panas dan berpori.",
      "Senduk inti tomato atas roti, tabur herba dan titiskan minyak zaitun kalau ada.",
      "Hidang serta-merta sebelum roti menyerap air tomato."
    ],
    "chefTip": "Toskan air tomato ialah kunci utama — kalau malas, perap tomato dengan garam 5 minit kemudian buang air yang keluar. Tomato kurang manis di hujung musim? Setitik madu kecil membantu tanpa merosakkan konsep sihat."
  },
  {
    "id": "tumis-kangkung-bawang-putih",
    "name": "Kangkung / Bayam Tumis Bawang Putih Ekspres",
    "category": "lauk",
    "categoryLabel": "🥬 Geng Sayur & Lauk Sihat",
    "time": "6 minit",
    "gear": "Kuali Leper / Wok",
    "bannerIcon": "🥬",
    "image": "images/tumis_kangkung.jpg",
    "bannerGradient": "linear-gradient(135deg, #22c55e 0%, #166534 100%)",
    "desc": "Sayur hijau ditumis api besar dengan bawang putih dan hanya satu sudu minyak. Batang kekal rangup berair, daun layu lembut — wangi mamak dalam 6 minit tanpa santan tanpa goreng.",
    "vibe": "Panas wangi bawang, batang crunch, daun lembut hijau berkilat",
    "cravingCall": "Nak makan sayur betul-betul, bukan sekadar hiasan timun. Perut rasa lapang lepas makan menu berat berminyak.",
    "pantryTags": ["sayur", "bawang", "cendawan"],
    "ingredients": [
      "1 ikat kangkung / bayam (akar dibuang, siangi)",
      "3 ulas bawang putih (dihiris nipis)",
      "1 sudu besar minyak masak",
      "1 sudu kecil kicap cair atau sos tiram",
      "Secubit garam & lada sulah",
      "Pilihan: enoki / cendawan belah, 3-4 ekor bilis, sekubit belacan, cili padi"
    ],
    "steps": [
      "Basuh sayur dan toskan betul-betul — sayur berair membuatkan dia merebus, bukan menumis.",
      "Panaskan kuali dengan minyak atas api besar. Goreng bawang putih 20-30 saat sampai wangi (jangan sampai hangit hitam).",
      "Masukkan batang kangkung dulu, tumis 30 saat, kemudian baru masuk daun.",
      "Tambah kicap cair, garam dan lada. Gaul cepat 1-2 minit sahaja sampai daun baru layu.",
      "Kalau pakai enoki, masuk paling akhir sebab dia cepat luruh dan mengeluarkan air.",
      "Angkat terus ke pinggan. Sisa haba kuali akan terus Masak sayur walaupun dah diangkat."
    ],
    "chefTip": "Api kena betul-betul besar dan jangan tutup kuali — kangkung kekal hijau cantik, tidak lembik dan berlendir. Nak versi nol-minyak: rendam air panas 60 saat, toskan, kemudian gaul bawang putih mentega sekubit."
  },
  {
    "id": "sup-ayam-sayur-bening",
    "name": "Sup Ayam Sayur Bening (Kuah Jernih Rendah Lemak)",
    "category": "bubur",
    "categoryLabel": "🥣 Geng Bubur & Sup",
    "time": "25 minit",
    "gear": "Periuk Kecil",
    "bannerIcon": "🍲",
    "image": "images/sup_ayam_bening.jpg",
    "bannerGradient": "linear-gradient(135deg, #fde68a 0%, #d97706 100%)",
    "desc": "Ayam direneh api kecil bersama halia dan bawang putih sampai kuahnya jernih tapi gurih asli, kemudian diisi wortel, kubis dan enoki. Tiada krim, tiada minyak banyak — hanya air, protein dan sayur.",
    "vibe": "Kuach panas jernih, isi ayam disuir lembut, sayur manis semula jadi",
    "cravingCall": "Nak makan malam yang ringan dan berair — badan rasa lapang, tidak berat macam kari atau goreng.",
    "pantryTags": ["ayam", "sayur", "bawang", "cendawan"],
    "ingredients": [
      "250 g dada / 2 paha ayam (buang kulit untuk lebih ringan)",
      "3 ulas bawang putih (dititik) & 2 cm halia (dihiris)",
      "1 bawang besar (dibelah empat) & 1-2 wortel (dipotong)",
      "1/4 kubis atau sekawan sawi, 1 cawan cendawan enoki",
      "1.5 liter air",
      "Garam, lada & 1 sudu kecil sos ikan",
      "Taburan: daun sup, sedikit bawang goreng"
    ],
    "steps": [
      "Rebus air dengan ayam atas api kecil. Bila mula berbuih, kecilkan api dan buang buih/kotoran yang terapung.",
      "Masukkan halia dan bawang putih titik, reneh 10-12 minit sampai isi ayam lembut.",
      "Tambah wortel dan bawang besar, reneh 8 minit sampai sayur baru lembut di luar.",
      "Masukkan kubis dan enoki, masak 4-5 minit sahaja supaya masih ada crunch.",
      "Perasakan dengan garam, lada dan sos ikan. Jangan biar sampai mendidih bergelora.",
      "Angkat ayam, suir isi dan masukkan semula ke dalam kuah. Tabur daun sup + bawang goreng."
    ],
    "chefTip": "Jangan biarkan api besar mendidih bergelora — kuah akan jadi keruh dan hilang kejernihan. Lebihan isi ayam yang disuir boleh disimpan untuk tabur atas bubur, maggi kari atau salad esok."
  },
  {
    "id": "dada-ayam-air-fryer-herba",
    "name": "Dada Ayam Air Fryer Herba (Juicy Dalam, Tiada Goreng)",
    "category": "lauk",
    "categoryLabel": "🥬 Geng Sayur & Lauk Sihat",
    "time": "18 minit",
    "gear": "Air Fryer / Oven",
    "bannerIcon": "🍗",
    "image": "images/dada_ayam_herba.jpg",
    "bannerGradient": "linear-gradient(135deg, #fbbf24 0%, #dc2626 100%)",
    "desc": "Dada ayam diperap dengan yoghurt tanpa gula, bawang putih dan herba — asid yoghurt melembutkan serat isi tanpa perlu minyak banyak. Dibakar air fryer sampai luar keemasan, dalam masih berjus.",
    "vibe": "Luar berkerak herba wangi, dalam lembut juicy bila dihiris",
    "cravingCall": "Nak protein sungguh-sungguh supaya kenyang lama, tapi tak nak ayam goreng berlauk minyak.",
    "pantryTags": ["ayam", "bawang", "susu"],
    "ingredients": [
      "250 g dada ayam (atau 4 paha kecil tanpa tulang)",
      "2 sudu besar yoghurt plain tanpa gula (atau susu cair)",
      "3 ulas bawang putih (dicincang halus)",
      "1 sudu kecil serbuk kari / paprika + 1/2 sudu kecil oregano",
      "1 sudu kecil jus limau nipis",
      "Garam & lada hitam",
      "1 sudu kecil minyak masak (untuk disapu nipis)"
    ],
    "steps": [
      "Belah dua atau potong isi 1.5-2 cm supaya tebalnya seragam — ini rahsia masak rata.",
      "Gaul semua bahan perap, perap sekurang-kurangnya 15 minit (semalaman lagi best).",
      "Keluarkan dari peti sejuk 10 minit sebelum dimasak; sapu nipis minyak pada permukaan.",
      "Panaskan air fryer 190°C. Susun satu lapis, bakar 8 minit.",
      "Balik ayam, bakar 6-8 minit lagi sampai luar keemasan dan jus yang keluar berwarna jernih.",
      "Rehat 3 minit sebelum dihiris supaya jus tersebar semula dalam isi."
    ],
    "chefTip": "Jangan potong ayam sejurus keluar dari air fryer — jus akan tumpah dan isi jadi kering. Nak lagi juicy, rendam dulu isi ayam dalam air garam (brine) 20 minit, kemudian lap kering sebelum diperap herba."
  },
  {
    "id": "ikan-kembung-kukus-halia",
    "name": "Ikan Kembung Kukus Halia & Kicap Cili",
    "category": "lauk",
    "categoryLabel": "🥬 Geng Sayur & Lauk Sihat",
    "time": "20 minit",
    "gear": "Pengukus / Pinggan Tahan Panas",
    "bannerIcon": "🐟",
    "image": "images/ikan_kembung_kukus.jpg",
    "bannerGradient": "linear-gradient(135deg, #7dd3fc 0%, #0369a1 100%)",
    "desc": "Ikan kembung dikukus bersama halia sampai isi terpisah lembut dan mata ikan memutih, kemudian disiram kicap cair, cili padi dan minyak bijan panas. Sifar minyak goreng, omega-3 penuh.",
    "vibe": "Wangi halia menyengat, isi ikan manis lembut, kuah kicap masin pedas",
    "cravingCall": "Nak makan ikan asli dan bukan ikan tin — rasa bersih, ringan dan perut senang.",
    "pantryTags": ["ikan", "bawang", "cendawan"],
    "ingredients": [
      "2 ekor ikan kembung (siang & dibersih, atau 2 keping filak apa saja)",
      "4 cm halia (dihiris jadi juliene tipis)",
      "2 ulas bawang putih (dicincang) & 1-2 cili padi",
      "2 sudu besar kicap cair",
      "1 sudu kecil sos ikan & 1 sudu kecil minyak bijan (pilihan)",
      "1 genggam cendawan enoki & daun sup",
      "1 limau nipis"
    ],
    "steps": [
      "Letak ikan atas pinggan tahan panas, tabur separuh halia atas dan dalam perut ikan.",
      "Kukus 12-15 minit atas api sederhana besar (microwave: tutup plastik, 5-6 minit).",
      "Buang air kukusan pertama yang keluar — itu yang membawa bau hanyir.",
      "Susun baki halia, bawang putih, cili dan enoki atas ikan. Curah kicap + sos ikan + minyak bijan.",
      "Kukus/panaskan 2-3 minit lagi sampai wangi halia naik ke permukaan kuah.",
      "Perah limau nipis dan tabur daun sup sebelum hidang."
    ],
    "chefTip": "Tanda ikan baru masak: mata jadi putih keruh dan isi di bahagian tebal mudah terpisah dari tulang. Overcook satu minit pun isi kembung jadi kering. Kalau ada kuah asalnya, jangan buang — itu stok ikan paling gurih untuk bubur."
  },
  {
    "id": "salad-timun-yogurt-limau",
    "name": "Salad Timun Yoghurt Limau Segar",
    "category": "salad",
    "categoryLabel": "🥗 Geng Salad Fresh",
    "time": "5 minit",
    "gear": "Tiada! (Mangkuk je)",
    "bannerIcon": "🥒",
    "image": "images/salad_timun_yogurt.jpg",
    "bannerGradient": "linear-gradient(135deg, #6ee7b7 0%, #047857 100%)",
    "desc": "Timun, tomato dan bawang dihiris nipis, digaul dengan dressing yoghurt plain dan perahan limau — masam sejuk menyegarkan tanpa mayo berlemak tepu. Sifar dapur, sifar haba.",
    "vibe": "Sejuk rangup berair, masam manis ringan, nafas terasa bersih",
    "cravingCall": "Nak sesuatu fresh dan renyah dalam pinggan untuk melunakkan menu berat, tanpa rasa bersalah.",
    "pantryTags": ["sayur", "salad", "bawang", "susu"],
    "ingredients": [
      "1 timun besar (dihiris bulat nipis atau dikiub)",
      "2 biji tomato (dipotong)",
      "1/4 bawang besar (dihiris sehalus mungkin)",
      "3 sudu besar yoghurt plain tanpa gula",
      "1 sudu kecil jus limau nipis, secubit garam & lada",
      "Daun ketumbar / daun pudina",
      "Pilihan: serbuk cili atau paprika untuk taburan"
    ],
    "steps": [
      "Tabur sedikit garam pada hirisan timun, perap 5 minit kemudian toskan airnya.",
      "Kacau yoghurt + jus limau + garam + lada sampai jadi dressing licin.",
      "Gaul timun, tomato dan bawang dengan dressing, tekan lembut supaya rasa masuk.",
      "Sejukkan 5 minit dalam peti (atau hidang terus kalau tak tahan).",
      "Tabur daun ketumbar / pudina dan sedikit serbuk cili sebelum hidang."
    ],
    "chefTip": "Toskan air timun selepas digaram = kunci salad tidak berair dan dressing tidak cair. Tiada yoghurt? Guna 1 sudu kecil minyak zaitun + limau nipis + setitik madu, sama sedap dan lebih ringan."
  },
  {
    "id": "salad-buah-yogurt-madu",
    "name": "Salad Buah Yoghurt Madu Sejuk",
    "category": "salad",
    "categoryLabel": "🥗 Geng Salad Fresh",
    "time": "5 minit",
    "gear": "Tiada! (Mangkuk je)",
    "bannerIcon": "🍓",
    "image": "images/salad_buah_yogurt.jpg",
    "bannerGradient": "linear-gradient(135deg, #f9a8d4 0%, #be185d 100%)",
    "desc": "Campuran buah musim dipotong kiub sebiji gigit, digaul lembut dengan yoghurt dan secubit madu, diakhir dengan perahan limau dan daun pudina. Dessert sejuk yang benar-benar isi buah, bukan puding cair.",
    "vibe": "Berair manis asam sejuk di mulut, setiap sudu ada rangup buah",
    "cravingCall": "Nak penutup makan yang sejuk dan manis ringan lepas menu berat, tanpa terasa bersalah macam puding gula.",
    "pantryTags": ["buah", "susu", "pisang"],
    "ingredients": [
      "3 cawan buah campuran (tembikai, betik, oren, epal, anggur, pisang)",
      "3 sudu besar yoghurt plain",
      "1 sudu kecil madu (atau setitik je kalau buah sudah manis)",
      "1 sudu kecil jus limau nipis",
      "Daun pudina / daun ketumbar",
      "Taburan: segenggam kacang panggang cincang atau kelapa sangai"
    ],
    "steps": [
      "Potong semua buah saiz sama lebih kurang 2 cm — lagi cantik dan setiap sudu ada campuran.",
      "Sejukkan buah dalam peti 15 minit (buah sejuk rasa lebih manis semula jadi).",
      "Kacau yoghurt + madu + jus limau sampai jadi dressing nipis.",
      "Gaul buah dengan dressing perlahan-lahan supaya buah tidak hancur dan anggur tidak pecah.",
      "Tabur pudina dan kacang panggang, hidang sejuk serta-merta."
    ],
    "chefTip": "Jangan gaul dressing awal-awal — buah akan keluarkan air dan yoghurt jadi cair. Campur masa nak makan sahaja. Kalau buah masam, tambah madu sedikit; kalau buah manis sangat, perah limau lebih untuk seimbang."
  },
  {
    "id": "pasta-tomato-tuna-bawang",
    "name": "Makaroni Tomato Tuna Bawang Putih (Pasta Bujang)",
    "category": "pasta",
    "categoryLabel": "🍝 Geng Pasta & Barat",
    "time": "15 minit",
    "gear": "Periuk Rebus & Kuali",
    "bannerIcon": "🍝",
    "image": "images/pasta_tomato_tuna.jpg",
    "bannerGradient": "linear-gradient(135deg, #f87171 0%, #991b1b 100%)",
    "desc": "Sos tomato pekat dimasak dengan bawang putih dan herba, kemudian tuna tin dan cendawan dimasukkan, diikat dengan air pasta berkanji supaya melekat berkilat. Rasa restoran, bahan dapur bujang, tanpa krim keju berat.",
    "vibe": "Merah pekat melekat pada pasta, tuna gurih, herba wangi naik hidung",
    "cravingCall": "Nak pasta yang sungguh-sungguh rasa tomato dan protein, bukan sekadar mi segera perasa.",
    "pantryTags": ["pasta", "tuna", "bawang", "cendawan"],
    "ingredients": [
      "1 cawan makaroni / spaghetti (pecah dua kalau perlu)",
      "1 tin tuna (ditoskan minyaknya)",
      "3 sudu besar sos tomato / pure (tanpa gula) atau 3 biji tomato isi",
      "2 ulas bawang putih & 1/2 bawang besar (dicincang)",
      "1 cawan cendawan dibelah / segenggam bayam",
      "1 sudu kecil minyak masak atau minyak zaitun",
      "1 sudu kecil oregano / cili flake, garam & lada"
    ],
    "steps": [
      "Rebus pasta sampai al dente. TOSKAN tapi simpan 1/2 cawan air rebusan pasta.",
      "Panaskan minyak, tumis bawang besar 2 minit kemudian bawang putih 30 saat sampai wangi.",
      "Masukkan sos/tomato + herba, masak api kecil 5 minit sampai pekat dan warnanya merah gelap.",
      "Tambah tuna, cendawan dan sedikit air pasta. Gaul 2 minit sampai sos berkilat melekat.",
      "Masukkan pasta, gaul rata atas api kecil. Perasakan garam & lada.",
      "Kalau terlalu kering, tambah air pasta sedikit demi sedikit sampai licin."
    ],
    "chefTip": "Air pasta yang berkanji itu bahan rahsia — ia mengikat sos supaya melekat dan berkilat tanpa perlu krim. Bayam masuk paling akhir supaya masih hijau dan ada serat tambahan."
  },
  {
    "id": "dhal-kacang-lentis-reneh",
    "name": "Dhal Kacang Lentis Reneh Berempah (Tempering Daun Kari)",
    "category": "lauk",
    "categoryLabel": "🥬 Geng Sayur & Lauk Sihat",
    "time": "30 minit",
    "gear": "Periuk Kecil",
    "bannerIcon": "🫘",
    "image": "images/dhal_lentis.jpg",
    "bannerGradient": "linear-gradient(135deg, #fcd34d 0%, #b45309 100%)",
    "desc": "Kacang lentis direneh dengan kunyit, halia dan bawang sampai lembut dan pekat, kemudian disiram tempering bawang putih, cili kering dan daun kari bergoreng. Protein tumbuhan paling murah yang mengenyangkan macam makan daging.",
    "vibe": "Pekat lembut keemasan, wangi daun kari & kunyit, masin gurih menenangkan",
    "cravingCall": "Nak lauk berisi yang bukan daging dan bukan goreng, tapi tetap buat kenyang lama dan puas hati.",
    "pantryTags": ["kacang", "bawang", "nasi", "roti"],
    "ingredients": [
      "1 cawan kacang lentis merah/kuning (dibasuh & ditoskan)",
      "4 cawan air",
      "1 bawang besar & 3 ulas bawang putih (dicincang)",
      "1/2 inci halia (dititik) & 1/2 sudu kecil serbuk kunyit",
      "1 sudu kecil serbuk kari / garam masala",
      "1 tomato (dipotong) & 1 sudu besar minyak untuk tempering",
      "10 helai daun kari + 2 cili kering (pilihan), limau nipis"
    ],
    "steps": [
      "Reneh lentis dengan air, kunyit, halia dan separuh bawang atas api kecil 20-25 minit sampai kacang lembut.",
      "Tekan separuh dhal dengan belakang sudu supaya jadi pekat, tapi biarkan ada biji utuh.",
      "Kuali lain: panaskan minyak, goreng bawang putih hiris + cili kering + daun kari 1-2 minit sampai wangi dan bintik keemasan (tempering).",
      "Curahkan tempering panas ke dalam dhal, masukkan tomato, reneh 5 minit lagi.",
      "Perasakan garam, matikan api dan perah sedikit limau nipis.",
      "Hidang atas nasi putih, dengan roti bakar, atau bersama kangkung tumis untuk lengkap serat.",
      "Kalau suka lebih pekat dan berlemak-lemak, tambah 2 sudu besar santan di akhir."
    ],
    "chefTip": "Dhal lagi sedap esok — rasa rempah akan menyerap dan teksturnya makin pekat. Simpan tanpa tempering, kemudian buat tempering baru masa nak makan supaya wanginya masih hidup."
  }
];
const HEALTH_METRICS = {
  "korean-corn-cheese": {"level":"medium","label":"🟡 Sederhana","desc":"Kudapan bertenaga penuh kalsium keju & serat jagung, nikmati secara santai."},
  "puding-jagung-kastard": {"level":"bagus","label":"🟢 Bagus & Sihat","desc":"Jagung + telur + susu, dikukus tanpa minyak dan TANPA gula tambahan. Manis dari jus jagung asli."},
  "wedges-kentang-berempah": {"level":"medium","label":"🟡 Sederhana (Medium)","desc":"Kentang asli kaya kalium & serat; air fryer kurangkan minyak berbanding fries rendam goreng."},
  "kentang-keprek-garing": {"level":"medium","label":"🟡 Sederhana (Medium)","desc":"Kentang asli + mentega, dipanggang air fryer bukan goreng rendam minyak. Lebih ringan dari fries."},
  "kentang-hash-sarapan": {"level":"medium","label":"🟡 Sederhana (Medium)","desc":"Karbo kentang + protein telur & bawang. Minyak sederhana, sarapan kenyang seimbang."},
  "kroket-kentang-air-fryer": {"level":"bagus","label":"🟢 Bagus & Sihat","desc":"Dibakar air fryer dengan minyak nipis, salut oat tinggi serat. Jimat mashed lebihan tanpa goreng rendam."},
  "puding-pisang-oat-kukus": {"level":"bagus","label":"🟢 Bagus & Sihat","desc":"Pisang manis semula jadi + oat serat tinggi & protein telur. Dikukus tanpa minyak, tanpa gula halus."},
  "puding-keledek-kukus": {"level":"bagus","label":"🟢 Bagus & Sihat","desc":"Karbo kompleks ubi + serat & beta-karoten, protein telur. Dikukus tanpa minyak & tanpa gula. Isi padat, bukan susu semata."},
  "sup-jagung-telur-sutera": {"level":"bagus","label":"🟢 Bagus & Sihat","desc":"Rendah kalori, zero minyak goreng, protein telur mudah hadam dan melegakan sistem penghadaman."},
  "nasi-jagung-butter-wangi": {"level":"medium","label":"🟡 Sederhana","desc":"Karbohidrat bertenaga dengan serat bijirin jagung, wangi mentega tanpa sebarang bahan pengawet tiruan."},

  "kacang-pool-daging-kisar": {"level":"bagus","label":"🟢 Bagus & Sihat","desc":"Tinggi zat besi, protein daging kisar asli & serat sayur biji serta kacang panggang."},
  "roti-puri-kembung-daging-kisar": {"level":"medium","label":"🟡 Sederhana","desc":"Doh gandum digoreng segar, kenyang bertenaga bersama lauk daging kisar berempah."},
  "sloppy-joe-daging-kisar": {"level":"medium","label":"🟡 Sederhana","desc":"Tinggi protein daging lembu tulen dan serat sayur campur, sos tomato bervitamin C."},
  "cottage-pie-bujang": {"level":"bagus","label":"🟢 Bagus & Sihat","desc":"Karbohidrat sihat kentang lenyek, kalsium keju & protein lengkap daging kisar."},
  "cheesy-mushroom-omelette": {"level":"bagus","label":"🟢 Bagus & Sihat","desc":"Super protein telur & antioksidan cendawan butang, zero minyak terpakai."},
  "fluffy-pancakes-mentega-madu": {"level":"medium","label":"🟡 Sederhana","desc":"Sarapan manis santai buatan sendiri tanpa pengawet, madu asli membekalkan tenaga segera."},
  "one-pan-english-breakfast": {"level":"medium","label":"🟡 Sederhana","desc":"Hidangan lengkap seimbang protein telur, serat kekacang dan roti karbohidrat."},

  "telur-hancur-mentega": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "100% protein tulen & mentega sihat, zero bahan proses, sangat mudah dihadam sebelum tidur." },
  "telur-dadar-bawang-karamel": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "Bawang merah antioksidan & protein telur segar, cepat kenyang dan menyihatkan badan." },
  "lempeng-pisang-kampung": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "Buah pisang asli kaya serat prebiotik, dimasak tanpa minyak goreng. Lembut dan berkhasiat." },
  "chawanmushi-telur": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "100% tanpa minyak! Telur kukus protein tulen, licin & paling mesra perut malam." },
  "sup-telur-enoki-panas": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "Sup bening jernih: cendawan enoki segar & telur. Zero minyak, mudah dihadam sebelum tidur." },
  "telur-separuh-masak-kopitiam": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "100% protein tulen tanpa minyak! Paling mesra perut, senang hadam dan tidur nyenyak." },
  "keledek-madu-microwave": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "Ubi asli tinggi serat & antioksidan. Manis semula jadi madu tanpa sebarang gula proses." },
  "bubur-oat-savoury": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "Oat bijirin penuh tinggi serat + telur goyang. Kenyang lena tanpa bebankan pencernaan." },
  "salad-telur-creamy": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "Telur rebus kaya protein tulen tanpa goreng minyak. Ringan & menyegarkan badan." },
  "coleslaw-krim-segar": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "Kobis segar tinggi enzim pencernaan & serat. Sejuk, rangup dan menyegarkan perut." },
  "nasi-impit-instant": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "Beras rebus tulen tanpa sebarang minyak atau perasa tiruan. Ringan dan selesa perut." },
  "jacket-potato-microwave": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "Ubi kentang bulat asli kaya kalium & serat, dimasak microwave tanpa minyak." },
  "roti-canai-murtabak-mini": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Protein telur segar & roti canai garing layur pan. Mengenyangkan dan memuaskan selera." },
  "tortilla-telur-gulung": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Wrap gandum nipis & protein telur tulen. Mengenyangkan tanpa beban minyak/nasi berat." },
  "roti-garlic-airfryer": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Roti dibakar garing tanpa minyak goreng. Memuaskan rasa mengunyah rangup waktu malam." },
  "jagung-cawan-pasar-malam": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Jagung manis asli kaya serat, ada lemak manis susu & Planta. Sesuai dimakan sederhana." },
  "lempeng-telur-bawang": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Masakan rumah ringkas (telur + tepung + bawang). Minyak minimum, kenyang elok." },
  "cucur-jagung-manis": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Bancuhan tepung & jagung manis segar. Goreng nipis, sedap dan selesa perut." },
  "mashed-potato-ekspres": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Kentang lenyek empuk berkarbohidrat kompleks + mentega wangi. Sangat lembut di perut." },
  "cekodok-bilis-rangup": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Ikan bilis asli kaya kalsium & bawang merah. Kudapan kampung seimbang." },
  "cekodok-pisang-emas": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Pisang ranum kaya tenaga semula jadi tanpa perasa tiruan. Lemak manis semula jadi." },
  "enoki-goreng-crispy": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Cendawan enoki segar kaya antioksidan, bersalut tepung goreng garing." },
  "wrap-popcorn-shawarma": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Salad segar berbalut tortilla gandum dan ayam goreng. Seimbang & kenyang." },
  "mushroom-soup-telur": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Sup cendawan berkhasiat memanaskan badan malam hari, lemak berkrim sederhana." },
  "pau-gebu-panas": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Dimasak secara kukus atau microwave tanpa minyak langsung. Empuk dan mengenyangkan." },
  "french-fries-panas": { level: "cheat", label: "🔴 Kurang Sihat (Cheat)", desc: "Kentang proses beku & tinggi garam, goreng minyak. Elok makan jarang-jarang." },
  "nuget-crispy": { level: "cheat", label: "🔴 Kurang Sihat (Cheat)", desc: "Daging proses beku bertepung. Sesuai bila malas, tapi jangan jadikan menu harian." },
  "maggi-kari-telur": { level: "cheat", label: "🔴 Kurang Sihat (Cheat)", desc: "Mi segera tinggi sodium & perasa. Sangat layan bila teringin, tapi jarakkan makan." },
  "keropok-lekor": { level: "cheat", label: "🔴 Kurang Sihat (Cheat)", desc: "Protein ikan sedap tetapi digoreng rendam minyak penuh (deep fried). Makan sesekali." },
  "karipap-frozen-berapi": { level: "cheat", label: "🔴 Kurang Sihat (Cheat)", desc: "Pastri beku berlapis lelemak shortening & digoreng minyak. Kudapan cheat rangup." },
  "popia-frozen-rangup": { level: "cheat", label: "🔴 Kurang Sihat (Cheat)", desc: "Kulit popia beku goreng minyak garing. Kudapan rangup sedap untuk santai sesekali." },
  "cucur-badak-frozen": { level: "cheat", label: "🔴 Kurang Sihat (Cheat)", desc: "Kuih tradisional goreng minyak berinti kelapa pedas. Sedap dimakan waktu teringin." },
  "roti-sardin-pedas": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "Sardin kaya omega-3 & kalsium tulang ikan, minyak minimum. Kenyang berkhasiat." },
  "roti-telur-mayo": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Telur rebus protein tulen tanpa goreng, tapi mayonis tinggi lemak. Sapu sederhana." },
  "roti-john-mini": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Telur & roti mengenyangkan, tapi mentega, sosej dan sos menambah lemak & garam." },
  "roti-cheese-leleh": { level: "cheat", label: "🔴 Kurang Sihat (Cheat)", desc: "Keju & mentega tinggi lemak tepu. Sedap gila, tapi simpan untuk malam istimewa." },
  "roti-telur-lemas": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Roti bersalut telur dibakar sedikit mentega. Mengenyangkan dan selesa perut." },
  "roti-bakar-kaya": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Roti bakar tanpa minyak, tapi kaya & butter tinggi gula dan lemak. Makan sederhana." },
  "roti-sosej-gulung": { level: "cheat", label: "🔴 Kurang Sihat (Cheat)", desc: "Sosej daging proses & keju tinggi garam. Kudapan cheat sesekali." },
  "piza-roti-segera": { level: "cheat", label: "🔴 Kurang Sihat (Cheat)", desc: "Sos, sosej & keju tinggi garam dan lemak. Puas hati, tapi jangan selalu." },
  "roti-planta-gula": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Roti bakar bermentega & gula pasir. Memuaskan selera manis santai malam." },
  "roti-tuna-mayo": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "Tuna tinggi protein & omega-3, disapu mayo sederhana. Mengenyangkan & sihat." },
  "nasi-bujang-telur-kicap": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Protein telur & karbohidrat nasi putih. Menu simple seimbang penepis lapar." },
  "nasi-goreng-butter-egg": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Mentega wangi & telur goyang protein tinggi. Kenyang memuaskan." },
  "maggi-goreng-basah": { level: "cheat", label: "🔴 Kurang Sihat (Cheat)", desc: "Mi segera & sos tinggi sodium. Nikmat waktu craving, tapi jarakkan makan." },
  "roti-canai-cheese": { level: "cheat", label: "🔴 Kurang Sihat (Cheat)", desc: "Keju & roti canai tinggi kalori & lelemak. Sedap layan waktu teringin." },
  "roti-telur-cheese-leleh": { level: "cheat", label: "🔴 Kurang Sihat (Cheat)", desc: "Mentega, keju, dan sosej diproses agak tinggi kalori dan sodium. Makan bersederhana." },
  "roti-pisang-nutella-roll": { level: "cheat", label: "🔴 Kurang Sihat (Cheat)", desc: "Manis berganda Nutella dan pisang, digoreng butter. Memang sedap, tapi tinggi kalori!" },
  "roti-goreng-kari": { level: "cheat", label: "🔴 Kurang Sihat (Cheat)", desc: "Kuah kari segera tinggi sodium & roti goreng. Sedap, tapi jarakkan makan." },
  "roti-bom-ayam-cincang": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Protein ayam cincang mengenyangkan. Guna air fryer untuk kurangkan minyak." },
  "roti-sambal-bilis": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Bilis kaya kalsium & telur protein, tapi sambal berminyak. Makan sederhana." },
  "club-sandwich-3-tingkat": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Protein & sayur segar lengkap, tapi 3 keping roti & mayo agak berat." },
  "egg-in-a-hole": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "Hanya roti & telur dengan sedikit mentega. Protein tulen, ringkas & seimbang." },
  "roti-bakar-kari-daging": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Guna semula lauk sedia ada, protein daging tinggi. Kuah kari berlemak, ambil sikit." },
  "puding-roti-jimat": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Susu & telur berkhasiat, dikukus tanpa minyak. Gula boleh dikurangkan." },
  "roti-peanut-butter-pisang": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "Lemak sihat kacang, kalium & serat pisang. Tenaga tahan lama tanpa goreng." },
  "roti-sosej-mayo-bakeri": { level: "cheat", label: "🔴 Kurang Sihat (Cheat)", desc: "Sosej proses & mayo tinggi lemak dan garam. Layan sesekali je." },
  "roti-stick-kayu-manis": { level: "cheat", label: "🔴 Kurang Sihat (Cheat)", desc: "Goreng mentega & salut gula. Snek manis untuk cheat day." },
  "roti-aiskrim-malaysia": { level: "cheat", label: "🔴 Kurang Sihat (Cheat)", desc: "Aiskrim tinggi gula & lemak. Nostalgia manis untuk sesekali." },
  "jagung-nyiur-kampung": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "Jagung rebus asli tinggi serat, kelapa parut bagi lemak semula jadi. Tanpa minyak & tanpa gula." },
  "ubi-kayu-cicah-kelapa": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "Ubi kayu karbo kompleks mengenyangkan lama, direbus kosong tanpa minyak. Serat tinggi, indeks glisemik rendah." },
  "pisang-rebus-kelapa": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "Pisang rebus kaya kalium & serat, kemanisan semula jadi + kelapa parut. Sifar minyak dimasak." },
  "keledek-rebus-simple": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "Keledek oranye beta-karoten & serat tinggi, direbus tanpa minyak dan tanpa gula tambahan." },
  "sardin-tin-limau": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "Sardin omega-3 & kalsium dari tulang ikan. Perah limau naikkan penyerapan zat besi. Toskan minyak tin." },
  "roti-banjir-kacang-krim": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Kacang pangang bagi serat & protein, tapi krim cendawan + roti putih naikkan lemak dan garam." },
  "lempeng-kelapa-peknga": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Lempeng kampung dengan santan & kelapa. Digoreng nipis jadi lebih ringan daripada goreng rendam." },
  "pulut-gaul-kelapa": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Pulut cepat bagi tenaga tapi rendah serat. Kelapa tambah lemak baik — sesuai sederhana waktu sarapan." },
  "cucur-bawang-bilis": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Bawang merah antioksidan & bilis kalsium, tapi digoreng minyak. Hadkan 3-4 ketul waktu santai." },
  "makaroni-sardin": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Protein & omega-3 dari sardin, tapi pasta putih karbo halus. Portion sederhana lagi seimbang." },
  "maggi-remas-goncang": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Tanpa minyak & air rebusan ditoskan (lagi ringan dari Maggi kuah), tapi serbuk perasa tetap tinggi sodium." },
  "bubur-kicap-bilis": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Nasi lembutkan mudah dicerna + bilis kalsium. Kicap tambah sodium — cukup secubit dua." },
  "sosej-scramble-butter": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Telur protein tinggi, tapi sosej proses & mentega bawa lemak tepu. Lagi seimbang kalau ada tomato/timun." },
  "kruton-roti-herba-air-fryer": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Roti dibakar dengan sapuan mentega nipis — tanpa goreng rendam & tanpa gula. Tapi ia topping, bukan lauk; portion kecil lagi sihat." },
  "bruschetta-tomato-kampung": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "Roti dibakar bukan digoreng + tomato likopena, bawang & vitamin C. Lemak minimum, serat dari sayur." },
  "tumis-kangkung-bawang-putih": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "Sayur hijau kaya serat, folat & kalium. Hanya 1 sudu minyak, tanpa santan. Zero karbo halus." },
  "sup-ayam-sayur-bening": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "Protein ayam + serat sayur dalam kuah air jernih, bukan krim. Rendah kalori, mengenyangkan dan menghidrat." },
  "dada-ayam-air-fryer-herba": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "Protein tanpa lemak tinggi, dibakar dengan minyak disapu nipis. Yoghurt melembutkan isi tanpa perlu goreng." },
  "ikan-kembung-kukus-halia": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "Ikan kembung omega-3 setara salmon, dikukus tanpa minyak goreng. Halia membantu pencernaan & buang hanyir." },
  "salad-timun-yogurt-limau": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "Kalium & serat dari timun-tomato, protein dan kalsium yoghurt. Tanpa mayo berlemak tepu, tanpa dimasak." },
  "salad-buah-yogurt-madu": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "Vitamin C, kalium & serat dari buah asli + probiotik yoghurt. Madu secubit kecil sahaja." },
  "pasta-tomato-tuna-bawang": { level: "medium", label: "🟡 Sederhana (Medium)", desc: "Tuna omega-3 + likopena tomato + cendawan, tanpa krim keju. Pasta putih karbo halus — tambah sayur lagi seimbang." },
  "dhal-kacang-lentis-reneh": { level: "bagus", label: "🟢 Bagus & Sihat", desc: "Protein & serat tumbuhan, indeks glisemik rendah, zat besi dan folat. Hanya 1 sudu minyak untuk tempering." }
};
RECIPES.forEach(recipe => {
  recipe.health = HEALTH_METRICS[recipe.id] || {
    level: "medium",
    label: "🟡 Sederhana (Medium)",
    desc: "Kudapan santai seimbang untuk malam hari."
  };
});
class SoundFX {
  constructor() {
    this.ctx = null;
  }
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }
  playWhoosh() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(140, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(700, this.ctx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.3);
    } catch (e) {}
  }
  playTick() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(540, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (e) {}
  }
  playLock() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      [440, 554.37, 659.25, 880].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.18, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.08 + 0.2);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.2);
      });
    } catch (e) {}
  }
}
const sfx = new SoundFX();
const state = {
  activeCategory: "all",
  activeHealth: "all",
  searchQuery: "",
  selectedPantry: new Set()
};
const dom = {
  menuGrid: document.getElementById("menuGrid"),
  searchBar: document.getElementById("searchBar"),
  resultsCount: document.getElementById("resultsCount"),
  categoryTabs: document.querySelectorAll(".category-tab"),
  healthTabs: document.querySelectorAll(".health-tab"),
  pantryChips: document.querySelectorAll(".pantry-chip"),
  resetPantryBtn: document.getElementById("resetPantryBtn"),
  recipeModal: document.getElementById("recipeModal"),
  closeModalBtn: document.getElementById("closeModalBtn"),
  modalCravingBadge: document.getElementById("modalCravingBadge"),
  modalTitle: document.getElementById("modalTitle"),
  modalVibeBox: document.getElementById("modalVibeBox"),
  modalTimePill: document.getElementById("modalTimePill"),
  modalGearPill: document.getElementById("modalGearPill"),
  modalIngredients: document.getElementById("modalIngredients"),
  modalSteps: document.getElementById("modalSteps"),
  modalChefTip: document.getElementById("modalChefTip"),
  modalActionsBar: document.getElementById("modalActionsBar"),
  liveClock: document.getElementById("liveClock")
};
function updateLiveClock() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('ms-MY', { hour: '2-digit', minute: '2-digit' });
  if (dom.liveClock) {
    dom.liveClock.textContent = `${timeStr} • Waktu Makan Malam`;
  }
}
function shareToWhatsApp(recipe) {
  const url = window.location.href.split('?')[0];
  const text = `Tengok resipi "${recipe.name}" ni kat Resepi Malam! Memang ngam untuk makan malam. 😋\n${url}`;
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
}

function shareToTwitter(recipe) {
  const url = window.location.href.split('?')[0];
  const text = `Tengok resipi "${recipe.name}" ni kat Resepi Malam! Memang ngam untuk makan malam. 😋`;
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
}

function shareToFacebook(recipe) {
  const url = window.location.href.split('?')[0];
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
}

function shareRecipe(recipe) {
  const url = window.location.href.split('?')[0]; 
  const textToShare = `Tengok resipi "${recipe.name}" ni kat Resepi Malam! Memang ngam untuk makan malam. 😋`;
  
  if (navigator.share) {
    navigator.share({
      title: 'Resepi Malam - ' + recipe.name,
      text: textToShare,
      url: url
    }).catch(err => console.log('Ralat share:', err));
  } else {
    navigator.clipboard.writeText(`${textToShare} \nLayarinya di: ${url}`).then(() => {
      alert('Teks resipi telah disalin ke papan keratan (clipboard)!');
    });
  }
}

function openRecipeModal(recipe) {
  sfx.init();
  const modalImg = document.getElementById("modalRecipeImage");
  if (modalImg) {
    if (recipe.image) {
      modalImg.src = recipe.image;
      modalImg.alt = recipe.name;
      modalImg.style.display = "block";
    } else {
      modalImg.style.display = "none";
    }
  }


  dom.modalTitle.textContent = `${recipe.bannerIcon} ${recipe.name}`;
  dom.modalCravingBadge.textContent = `🔥 Sektor Selera: ${recipe.categoryLabel}`;
  dom.modalVibeBox.textContent = `💡 Kenapa tekak kau nak benda ni sekarang: "${recipe.cravingCall}"`;
  dom.modalTimePill.textContent = `⏱️ Siap Dalam: ${recipe.time}`;
  dom.modalGearPill.textContent = `🍳 ${recipe.gear}`;
  const modalHealthPill = document.getElementById("modalHealthPill");
  const modalHealthDescBox = document.getElementById("modalHealthDescBox");
  if (modalHealthPill && recipe.health) {
    modalHealthPill.textContent = recipe.health.label;
    modalHealthPill.className = `stat-pill health-pill health-${recipe.health.level}`;
  }
  if (modalHealthDescBox && recipe.health) {
    modalHealthDescBox.innerHTML = `<strong>Tahap Kesihatan:</strong> ${recipe.health.desc}`;
    modalHealthDescBox.className = `modal-health-desc-box health-box-${recipe.health.level}`;
  }
  dom.modalIngredients.innerHTML = recipe.ingredients.map(ing => `
    <li class="ingredient-item">
      <span class="ingredient-bullet">✦</span>
      <span>${ing}</span>
    </li>
  `).join('');
  dom.modalSteps.innerHTML = recipe.steps.map((step, idx) => `
    <div class="step-row">
      <div class="step-number">${idx + 1}</div>
      <div class="step-text">${step}</div>
    </div>
  `).join('');
  dom.modalChefTip.textContent = recipe.chefTip;
  
  const ytLink = recipe.ytLink || ('https://www.youtube.com/results?search_query=' + encodeURIComponent(recipe.name + ' resepi'));
  
  dom.modalActionsBar.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 1rem; width: 100%;">
      <button class="btn-malam-cta" onclick="closeRecipeModal()" style="width: 100%; padding: 0.8rem; font-size: 1.1rem; border-radius: 12px; box-shadow: 0 4px 15px rgba(217, 119, 6, 0.4);">
        Dah Nampak, Nak Masak Sekarang! 😋
      </button>
      
      <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; flex-wrap: wrap; gap: 1rem;">
        <a href="${ytLink}" target="_blank" style="display: flex; align-items: center; gap: 0.5rem; color: #ef4444; background: rgba(239, 68, 68, 0.1); padding: 0.5rem 1rem; border-radius: 9999px; text-decoration: none; font-weight: 600; font-size: 0.9rem; transition: 0.2s;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
          Tonton Video
        </a>

        <div style="display: flex; gap: 0.5rem; align-items: center;">
          <span style="font-size: 0.85rem; color: var(--text-dim); margin-right: 0.2rem;">Kongsi:</span>
          <button id="shareModalBtn" aria-label="Copy Link" style="background: rgba(255,255,255,0.1); color: var(--text-main); border: 1px solid rgba(255,255,255,0.2); border-radius: 50%; width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'" title="Salin Pautan">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          </button>
          <button id="shareWABtn" aria-label="WhatsApp" style="background: #25D366; color: white; border: none; border-radius: 50%; width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.2s; box-shadow: 0 4px 10px rgba(37,211,102,0.3);" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'" title="WhatsApp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.89-4.443 9.893-9.892.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.738-.974zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          </button>
          <button id="shareXBtn" aria-label="X (Twitter)" style="background: #000000; color: white; border: 1px solid rgba(255,255,255,0.2); border-radius: 50%; width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.2s; box-shadow: 0 4px 10px rgba(0,0,0,0.3);" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'" title="X (Twitter)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </button>
          <button id="shareFBBtn" aria-label="Facebook" style="background: #1877F2; color: white; border: none; border-radius: 50%; width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.2s; box-shadow: 0 4px 10px rgba(24,119,242,0.3);" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'" title="Facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
          </button>
        </div>
      </div>
    </div>
  `;

  const shareModalBtn = document.getElementById("shareModalBtn");
  if (shareModalBtn) shareModalBtn.onclick = () => { if(sfx.playTick) sfx.playTick(); shareRecipe(recipe); };
  const shareWABtn = document.getElementById("shareWABtn");
  if (shareWABtn) shareWABtn.onclick = () => { if(sfx.playTick) sfx.playTick(); shareToWhatsApp(recipe); };
  const shareXBtn = document.getElementById("shareXBtn");
  if (shareXBtn) shareXBtn.onclick = () => { if(sfx.playTick) sfx.playTick(); shareToTwitter(recipe); };
  const shareFBBtn = document.getElementById("shareFBBtn");
  if (shareFBBtn) shareFBBtn.onclick = () => { if(sfx.playTick) sfx.playTick(); shareToFacebook(recipe); };

  dom.recipeModal.classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeRecipeModal() {
  dom.recipeModal.classList.remove("active");
  document.body.style.overflow = "";
}
function getFilteredRecipes() {
  return RECIPES.filter(recipe => {
    if (state.activeCategory !== "all" && recipe.category !== state.activeCategory) {
      return false;
    }
    if (state.activeHealth !== "all" && recipe.health && recipe.health.level !== state.activeHealth) {
      return false;
    }
    if (state.searchQuery.trim() !== "") {
      const q = state.searchQuery.toLowerCase();
      const matchName = recipe.name.toLowerCase().includes(q);
      const matchDesc = recipe.desc.toLowerCase().includes(q);
      const matchIng = recipe.ingredients.some(ing => ing.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchIng) return false;
    }
    if (state.selectedPantry.size > 0) {
      const hasAnyPantryMatch = [...state.selectedPantry].some(item => 
        recipe.pantryTags.includes(item)
      );
      if (!hasAnyPantryMatch) return false;
    }
    return true;
  });
}
function renderMenuGrid() {
  const filtered = getFilteredRecipes();
  dom.menuGrid.innerHTML = "";
  if (filtered.length === 0) {
    dom.menuGrid.innerHTML = `
      <div class="empty-state">
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">🍳</div>
        <h3 style="font-family: var(--font-heading); font-size: 1.3rem; margin-bottom: 0.5rem;">Tiada Menu Ditemui</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.25rem;">Cuba tukar pilihan bahan dapur, tahap kesihatan, atau sektor lain.</p>
        <button class="btn-malam-cta" onclick="resetAllFilters()" style="padding: 0.6rem 1.5rem; font-size: 0.9rem;">Reset Saringan</button>
      </div>
    `;
    dom.resultsCount.textContent = "0 menu";
    return;
  }
  dom.resultsCount.innerHTML = `Menunjukkan <span class="highlight-match">${filtered.length} menu</span> padu untuk malam ni`;
  filtered.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "food-card glass";
    card.id = `card-${recipe.id}`;
    card.innerHTML = `
      <div class="food-card-banner" style="background: ${recipe.bannerGradient}">
        ${recipe.image ? `<img src="${recipe.image}" alt="${recipe.name}" class="food-card-img" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">` : ''}
        <div class="banner-icon" ${recipe.image ? 'style="display:none;"' : ''}>${recipe.bannerIcon}</div>
        <div class="card-badges">
          <span class="time-badge">⏱️ ${recipe.time}</span>
          <span class="card-badge-health health-${recipe.health.level}">${recipe.health.label}</span>
        </div>
      </div>
      <div class="food-card-body">
        <h3 class="food-card-title">${recipe.name}</h3>
        <p class="food-card-desc">${recipe.desc}</p>
        <div class="food-card-ingredients">
          ${recipe.pantryTags.map(tag => {
            const isMatched = state.selectedPantry.has(tag);
            return `<span class="ingredient-tag ${isMatched ? 'matched' : ''}">
              ${isMatched ? '✓ ' : ''}${capitalize(tag)}
            </span>`;
          }).join('')}
        </div>
        <div class="food-card-footer">
          <span style="font-size: 0.78rem; color: var(--text-dim);">
            🍳 ${recipe.gear}
          </span>
          <span class="view-recipe-link">
            Buka Resipi ➔
          </span>
        </div>
      </div>
    `;
    card.addEventListener("click", () => {
      sfx.playTick();
      openRecipeModal(recipe);
    });
    dom.menuGrid.appendChild(card);
  });
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function resetAllFilters() {
  state.activeCategory = "all";
  state.activeHealth = "all";
  state.searchQuery = "";
  state.selectedPantry.clear();
  dom.searchBar.value = "";
  dom.categoryTabs.forEach(t => t.classList.toggle("active", t.dataset.category === "all"));
  dom.healthTabs.forEach(t => t.classList.toggle("active", t.dataset.health === "all"));
  dom.pantryChips.forEach(c => c.classList.remove("selected"));
  renderMenuGrid();
}
window.resetAllFilters = resetAllFilters;
function setupEventListeners() {
  dom.closeModalBtn.addEventListener("click", closeRecipeModal);
  dom.recipeModal.addEventListener("click", (e) => {
    if (e.target === dom.recipeModal) closeRecipeModal();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && dom.recipeModal.classList.contains("active")) {
      closeRecipeModal();
    }
  });
  dom.categoryTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      sfx.playTick();
      dom.categoryTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      state.activeCategory = tab.dataset.category;
      renderMenuGrid();
    });
  });
  dom.healthTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      sfx.playTick();
      dom.healthTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      state.activeHealth = tab.dataset.health;
      renderMenuGrid();
    });
  });
  dom.pantryChips.forEach(chip => {
    chip.addEventListener("click", () => {
      sfx.playTick();
      const item = chip.dataset.item;
      if (state.selectedPantry.has(item)) {
        state.selectedPantry.delete(item);
        chip.classList.remove("selected");
      } else {
        state.selectedPantry.add(item);
        chip.classList.add("selected");
      }
      renderMenuGrid();
    });
  });
  dom.resetPantryBtn.addEventListener("click", () => {
    sfx.playTick();
    state.selectedPantry.clear();
    dom.pantryChips.forEach(c => c.classList.remove("selected"));
    renderMenuGrid();
  });
  dom.searchBar.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    renderMenuGrid();
  });
}
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  renderMenuGrid();
  updateLiveClock();
  setInterval(updateLiveClock, 30000);
});

