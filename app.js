/**
 * PLANET COMFORTIA - 3D CELESTIAL GLOBE ENGINE
 * Menggabungkan tekstur fotorealistik Planet Comfortia, foto hidangan realistik,
 * dan koleksi lengkap menu kegemaran anda (Fries, Nuget, Maggi, Nasi Impit, Lekor, Enoki, Shawarma Wrap, Salad, Lempeng, Bubur, dll).
 */

// ==========================================
// 1. DATA RESIPI PLANET COMFORTIA (LENGKAP)
// ==========================================
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
    image: "images/korean_corn_cheese.jpg",
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
    image: "images/karipap_pusing.jpg",
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
    image: "images/enoki_goreng.jpg",
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
    image: "images/cekodok_bilis.jpg",
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
    image: "images/chawanmushi.jpg",
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
    image: "images/chicken_wrap.jpg",
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
    category: "kudap",
    categoryLabel: "🍟 Geng Kudap & Goreng",
    time: "3 minit",
    gear: "Air Fryer / Pembakar Roti",
    bannerIcon: "🍞",
    image: "images/french_fries.jpg",
    bannerGradient: "linear-gradient(135deg, #d97706 0%, #78350f 100%)",
    desc: "Roti keping disapu mentega wangi, serbuk bawang putih dan herba parsley. Dibakar garing berderai keemasan dalam air fryer. Krup-krap beraroma, sedap dicicah sos atau sup!",
    vibe: "Garing krup-krap berderai, harum mentega bawang putih wangi satu rumah",
    cravingCall: "Tekak nak mengunyah benda rangup masin bermentega tanpa payah goreng minyak banyak.",
    pantryTags: ["mentega", "kudap"],
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
    id: "telur-separuh-masak-kopitiam",
    name: "Telur Separuh Masak Kicap & Lada Sulah",
    category: "bubur",
    categoryLabel: "🥚 Sektor Telur Sutera",
    time: "6 minit (Rendam Air Panas)",
    gear: "1 Mangkuk & Air Mendidih Sahaja",
    bannerIcon: "🥚",
    image: "images/chawanmushi.jpg",
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
    image: "images/jacket_potato.jpg",
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
    categoryLabel: "🥚 Sektor Telur Sutera",
    time: "1 minit",
    gear: "1 Kuali Leper Kecil",
    bannerIcon: "🍳",
    image: "images/salad_telur.jpg",
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
    image: "images/lempeng_telur.jpg",
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
    image: "images/cekodok_pisang.jpg",
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
    image: "images/chicken_wrap.jpg",
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
  }
];

// ==========================================
// 1.1 TAHAP KESIHATAN & GUILT-METER (BAGUS / MEDIUM / CHEAT)
// ==========================================
const HEALTH_METRICS = {
  // 🟢 BAGUS & SIHAT (Real Food / Rendah Minyak / Mesra Perut Malam)
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

  // 🟡 SEDERHANA (MEDIUM) (Homemade / Seimbang / Karbo Ringkas)
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

  // 🔴 KURANG SIHAT (CHEAT MEAL / MAKANAN PROSES / JARANG-JARANG)
  "french-fries-panas": { level: "cheat", label: "🔴 Kurang Sihat (Cheat)", desc: "Kentang proses beku & tinggi garam, goreng minyak. Elok makan jarang-jarang." },
  "nuget-crispy": { level: "cheat", label: "🔴 Kurang Sihat (Cheat)", desc: "Daging proses beku bertepung. Sesuai bila malas, tapi jangan jadikan menu harian." },
  "maggi-kari-telur": { level: "cheat", label: "🔴 Kurang Sihat (Cheat)", desc: "Mi segera tinggi sodium & perasa. Sangat layan bila teringin, tapi jarakkan makan." },
  "keropok-lekor": { level: "cheat", label: "🔴 Kurang Sihat (Cheat)", desc: "Protein ikan sedap tetapi digoreng rendam minyak penuh (deep fried). Makan sesekali." },
  "karipap-frozen-berapi": { level: "cheat", label: "🔴 Kurang Sihat (Cheat)", desc: "Pastri beku berlapis lelemak shortening & digoreng minyak. Kudapan cheat rangup." },
  "popia-frozen-rangup": { level: "cheat", label: "🔴 Kurang Sihat (Cheat)", desc: "Kulit popia beku goreng minyak garing. Kudapan rangup sedap untuk santai sesekali." },
  "cucur-badak-frozen": { level: "cheat", label: "🔴 Kurang Sihat (Cheat)", desc: "Kuih tradisional goreng minyak berinti kelapa pedas. Sedap dimakan waktu teringin." }
};

// Automatik pasang data kesihatan pada setiap menu
RECIPES.forEach(recipe => {
  recipe.health = HEALTH_METRICS[recipe.id] || {
    level: "medium",
    label: "🟡 Sederhana (Medium)",
    desc: "Kudapan santai seimbang untuk malam hari."
  };
});

// ==========================================
// 2. AUDIO SYNTHESIS
// ==========================================
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

// ==========================================
// 3. PROCEDURAL TEXTURES
// ==========================================
function generateRingTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");

  const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
  grad.addColorStop(0, "rgba(245, 158, 11, 0)");
  grad.addColorStop(0.15, "rgba(251, 191, 36, 0.4)");
  grad.addColorStop(0.3, "rgba(245, 158, 11, 0.8)");
  grad.addColorStop(0.45, "rgba(217, 119, 6, 0.2)");
  grad.addColorStop(0.6, "rgba(251, 191, 36, 0.85)");
  grad.addColorStop(0.75, "rgba(249, 115, 22, 0.5)");
  grad.addColorStop(0.9, "rgba(245, 158, 11, 0.25)");
  grad.addColorStop(1, "rgba(245, 158, 11, 0)");

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  return new THREE.CanvasTexture(canvas);
}

function generateCloudTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 55; i++) {
    const cx = Math.random() * canvas.width;
    const cy = Math.random() * (canvas.height * 0.7) + (canvas.height * 0.15);
    const rad = Math.random() * 80 + 35;
    
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
    grad.addColorStop(0, "rgba(254, 243, 199, 0.35)");
    grad.addColorStop(0.5, "rgba(255, 255, 255, 0.18)");
    grad.addColorStop(1, "transparent");

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cx, cy, rad, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  return texture;
}

// ==========================================
// 4. PLANET COMFORTIA 3D GLOBE ENGINE
// ==========================================
class PlanetComfortiaGlobe {
  constructor(canvasId, recipes, onSelect) {
    this.canvas = document.getElementById(canvasId);
    this.recipes = recipes;
    this.onSelect = onSelect;
    this.markers = [];
    this.isSpinning = false;
    this.radius = 4.8;
    this.currentFocusedRecipe = recipes[0];
    
    this.isDragging = false;
    this.previousMousePosition = { x: 0, y: 0 };
    this.dragVelocity = { x: 0, y: 0 };
    
    this.init();
  }

  init() {
    if (!window.THREE) return;

    const container = this.canvas.parentElement;
    const width = container.clientWidth;
    const height = container.clientHeight;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.z = 13.5;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    this.scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfef08a, 1.6);
    sunLight.position.set(8, 10, 8);
    this.scene.add(sunLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.9);
    rimLight.position.set(-8, -6, -6);
    this.scene.add(rimLight);

    this.planetGroup = new THREE.Group();
    this.scene.add(this.planetGroup);

    this.createPlanetSphere();
    this.createCloudLayer();
    this.createPlanetaryRings();
    this.createAtmosphereHalo();
    this.createStarCosmos();
    this.createMenuBeacons();
    this.create3DPointerArrow();

    this.setupInteractions();
    this.animate();

    window.addEventListener("resize", () => this.onWindowResize());
  }

  createPlanetSphere() {
    const loader = new THREE.TextureLoader();
    // Memuatkan foto realistik Planet Comfortia yang telah digenerate!
    const planetTex = loader.load('images/planet_comfortia.jpg');
    planetTex.wrapS = THREE.RepeatWrapping;

    const sphereGeo = new THREE.SphereGeometry(this.radius, 64, 64);
    const sphereMat = new THREE.MeshPhongMaterial({
      map: planetTex,
      shininess: 45,
      specular: 0xf59e0b,
      bumpScale: 0.05
    });

    this.planetMesh = new THREE.Mesh(sphereGeo, sphereMat);
    this.planetGroup.add(this.planetMesh);
  }

  createCloudLayer() {
    const cloudTex = generateCloudTexture();
    const cloudGeo = new THREE.SphereGeometry(this.radius * 1.018, 48, 48);
    const cloudMat = new THREE.MeshPhongMaterial({
      map: cloudTex,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    this.cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
    this.planetGroup.add(this.cloudMesh);
  }

  createPlanetaryRings() {
    const ringTex = generateRingTexture();
    const ringGeo = new THREE.RingGeometry(this.radius * 1.35, this.radius * 2.05, 64);

    const pos = ringGeo.attributes.position;
    const uvs = ringGeo.attributes.uv;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const d = Math.sqrt(x * x + y * y);
      const u = (d - this.radius * 1.35) / (this.radius * 0.7);
      uvs.setXY(i, u, 0.5);
    }

    const ringMat = new THREE.MeshBasicMaterial({
      map: ringTex,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.65
    });

    this.ringMesh = new THREE.Mesh(ringGeo, ringMat);
    this.ringMesh.rotation.x = Math.PI / 2.5;
    this.ringMesh.rotation.y = 0.2;
    this.planetGroup.add(this.ringMesh);
  }

  createAtmosphereHalo() {
    const atmoGeo = new THREE.SphereGeometry(this.radius * 1.18, 36, 36);
    const atmoMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.68 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
          gl_FragColor = vec4(0.96, 0.65, 0.1, 1.0) * intensity * 0.85;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true
    });

    const atmosphere = new THREE.Mesh(atmoGeo, atmoMat);
    this.scene.add(atmosphere);
  }

  createStarCosmos() {
    const starCount = 500;
    const starGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 100;
      positions[i + 1] = (Math.random() - 0.5) * 100;
      positions[i + 2] = (Math.random() - 0.5) * 100 - 15;

      if (Math.random() > 0.6) {
        colors[i] = 0.98; colors[i + 1] = 0.75; colors[i + 2] = 0.15;
      } else if (Math.random() > 0.4) {
        colors[i] = 0.22; colors[i + 1] = 0.74; colors[i + 2] = 0.97;
      } else {
        colors[i] = 1.0; colors[i + 1] = 1.0; colors[i + 2] = 1.0;
      }
    }

    starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    starGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.32,
      vertexColors: true,
      transparent: true,
      opacity: 0.75
    });

    this.scene.add(new THREE.Points(starGeo, starMat));
  }

  createBeaconSprite(icon, title, imagePath = null) {
    const canvas = document.createElement("canvas");
    canvas.width = 280;
    canvas.height = 130;
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;

    const renderCanvas = (imgObj = null) => {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(7, 10, 20, 0.90)";
      ctx.strokeStyle = "#f59e0b";
      ctx.lineWidth = 4;
      
      const r = 26;
      const w = 264, h = 114, x = 8, y = 8;
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      if (imgObj && imgObj.complete && imgObj.naturalWidth !== 0) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(58, 65, 30, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(imgObj, 28, 35, 60, 60);
        ctx.restore();

        ctx.strokeStyle = "#f59e0b";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(58, 65, 30, 0, Math.PI * 2);
        ctx.stroke();
      } else {
        ctx.font = "46px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(icon, 58, 65);
      }

      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 23px Outfit, sans-serif";
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      let displayTitle = title;
      if (displayTitle.length > 12) displayTitle = displayTitle.substring(0, 11) + "…";
      ctx.fillText(displayTitle, 102, 65);

      texture.needsUpdate = true;
    };

    renderCanvas(null);

    if (imagePath) {
      const img = new Image();
      img.onload = () => {
        renderCanvas(img);
      };
      img.src = imagePath;
    }

    const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.scale.set(2.5, 1.25, 1);
    return sprite;
  }

  createMenuBeacons() {
    const total = this.recipes.length;
    const phi = Math.PI * (3 - Math.sqrt(5));

    this.recipes.forEach((recipe, i) => {
      const y = 1 - (i / (total - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      const pos = new THREE.Vector3(x, y, z).multiplyScalar(this.radius);

      const beamGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.1, 8);
      const beamMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24, transparent: true, opacity: 0.65 });
      const beamMesh = new THREE.Mesh(beamGeo, beamMat);
      
      const midPos = pos.clone().multiplyScalar(1.11);
      beamMesh.position.copy(midPos);
      beamMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), pos.clone().normalize());

      const pinGeo = new THREE.SphereGeometry(0.2, 16, 16);
      const pinMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
      const pinMesh = new THREE.Mesh(pinGeo, pinMat);
      pinMesh.position.copy(pos);

      const spritePos = pos.clone().multiplyScalar(1.28);
      const sprite = this.createBeaconSprite(recipe.bannerIcon, recipe.name, recipe.image);
      sprite.position.copy(spritePos);

      const beaconGroup = new THREE.Group();
      beaconGroup.add(pinMesh);
      beaconGroup.add(beamMesh);
      beaconGroup.add(sprite);

      beaconGroup.userData = {
        recipe: recipe,
        origPos: pos.clone(),
        index: i
      };

      this.planetGroup.add(beaconGroup);
      this.markers.push(beaconGroup);
    });
  }

  create3DPointerArrow() {
    this.pointer3DGroup = new THREE.Group();

    // Inverted 3D Arrow Cone pointing straight down at the beacon on the planet
    const coneGeo = new THREE.ConeGeometry(0.28, 0.82, 16);
    coneGeo.rotateX(Math.PI);
    
    const coneMat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b
    });
    const coneMesh = new THREE.Mesh(coneGeo, coneMat);
    coneMesh.position.y = 0.41;
    this.pointer3DGroup.add(coneMesh);

    // Glowing target ring hovering around the pointer
    const ringGeo = new THREE.TorusGeometry(0.4, 0.035, 12, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xfde68a,
      transparent: true,
      opacity: 0.9
    });
    this.pointer3DRing = new THREE.Mesh(ringGeo, ringMat);
    this.pointer3DRing.rotation.x = Math.PI / 2;
    this.pointer3DGroup.add(this.pointer3DRing);

    this.planetGroup.add(this.pointer3DGroup);
    if (this.recipes.length > 0) {
      this.update3DPointerPosition(this.recipes[0]);
    }
  }

  update3DPointerPosition(recipe) {
    if (!this.pointer3DGroup || !recipe) return;
    const marker = this.markers.find(m => m.userData.recipe.id === recipe.id);
    if (!marker) return;

    const normPos = marker.userData.origPos.clone().normalize();
    const arrowPos = normPos.clone().multiplyScalar(this.radius * 1.35);
    this.pointer3DGroup.position.copy(arrowPos);
    this.pointer3DGroup.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normPos);
  }

  setupInteractions() {
    const dom = this.canvas;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    const onStart = (clientX, clientY) => {
      if (this.isSpinning) return;
      this.isDragging = true;
      this.previousMousePosition = { x: clientX, y: clientY };
      this.dragVelocity = { x: 0, y: 0 };
    };

    const onMove = (clientX, clientY) => {
      if (!this.isDragging || this.isSpinning) return;

      const deltaX = clientX - this.previousMousePosition.x;
      const deltaY = clientY - this.previousMousePosition.y;

      this.dragVelocity = {
        x: deltaX * 0.005,
        y: deltaY * 0.005
      };

      this.planetGroup.rotation.y += this.dragVelocity.x;
      this.planetGroup.rotation.x += this.dragVelocity.y;

      this.previousMousePosition = { x: clientX, y: clientY };
      this.checkHover();
    };

    const onEnd = () => {
      this.isDragging = false;
    };

    dom.addEventListener("mousedown", (e) => onStart(e.clientX, e.clientY));
    window.addEventListener("mousemove", (e) => onMove(e.clientX, e.clientY));
    window.addEventListener("mouseup", onEnd);

    dom.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) onStart(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    window.addEventListener("touchmove", (e) => {
      if (e.touches.length === 1) onMove(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    window.addEventListener("touchend", onEnd);

    dom.addEventListener("click", (e) => {
      if (this.isSpinning) return;
      const rect = dom.getBoundingClientRect();
      this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);
      const intersects = this.raycaster.intersectObjects(this.planetGroup.children, true);

      if (intersects.length > 0) {
        let hitMarker = null;
        intersects.forEach(hit => {
          let cur = hit.object;
          while (cur && cur !== this.planetGroup) {
            if (cur.userData && cur.userData.recipe) {
              hitMarker = cur;
              break;
            }
            cur = cur.parent;
          }
        });

        if (hitMarker && hitMarker.userData.recipe) {
          sfx.playLock();
          this.focusOnRecipe(hitMarker.userData.recipe, true);
        }
      }
    });
  }

  checkHover() {
    let bestDist = Infinity;
    let bestRecipe = null;
    const forward = new THREE.Vector3(0, 0, 1);

    this.markers.forEach(m => {
      const currentPos = m.userData.origPos.clone().applyMatrix4(this.planetGroup.matrixWorld);
      const angle = forward.angleTo(currentPos.clone().normalize());

      if (angle < bestDist) {
        bestDist = angle;
        bestRecipe = m.userData.recipe;
      }
    });

    if (bestRecipe) {
      if (bestRecipe !== this.currentFocusedRecipe) {
        this.currentFocusedRecipe = bestRecipe;
        updateFocusedCard(bestRecipe);
      }
      this.update3DPointerPosition(bestRecipe);
    }
  }

  spinToRandomRecipe(forceRecipe = null) {
    if (this.isSpinning) return;
    this.isSpinning = true;
    sfx.playWhoosh();

    const target = forceRecipe || this.recipes[Math.floor(Math.random() * this.recipes.length)];
    this.currentFocusedRecipe = target;

    const marker = this.markers.find(m => m.userData.recipe.id === target.id);
    const pos = marker.userData.origPos.clone().normalize();

    const targetTheta = Math.atan2(-pos.x, pos.z);
    const targetPhi = Math.asin(pos.y);

    const extraSpins = 4 * Math.PI * 2;
    const startRotY = this.planetGroup.rotation.y;
    const startRotX = this.planetGroup.rotation.x;

    const finalRotY = startRotY + extraSpins + (targetTheta - (startRotY % (Math.PI * 2)));
    const finalRotX = -targetPhi;

    const reticle = document.getElementById("globeReticle");
    const arrowText = document.getElementById("targetArrowText");
    if (reticle) {
      reticle.classList.remove("locking");
      reticle.classList.add("spinning");
    }
    if (arrowText) {
      arrowText.textContent = "🛰️ MENGESAN KOORDINAT...";
    }

    const startTime = performance.now();
    const duration = 2400;
    let lastTick = 0;

    const animateSpin = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);

      this.planetGroup.rotation.y = startRotY + (finalRotY - startRotY) * ease;
      this.planetGroup.rotation.x = startRotX + (finalRotX - startRotX) * ease;

      if (now - lastTick > 120 && progress < 0.85) {
        sfx.playTick();
        lastTick = now;
        this.checkHover();
      }

      if (progress < 1) {
        requestAnimationFrame(animateSpin);
      } else {
        this.isSpinning = false;
        if (reticle) {
          reticle.classList.remove("spinning");
          reticle.classList.add("locking");
          setTimeout(() => reticle.classList.remove("locking"), 700);
        }
        sfx.playLock();
        updateFocusedCard(target);
        this.update3DPointerPosition(target);

        if (this.onSelect) this.onSelect(target);
      }
    };

    requestAnimationFrame(animateSpin);
  }

  focusOnRecipe(recipe, openModal = false) {
    const marker = this.markers.find(m => m.userData.recipe.id === recipe.id);
    if (!marker) return;

    const pos = marker.userData.origPos.clone().normalize();
    const targetTheta = Math.atan2(-pos.x, pos.z);
    const targetPhi = Math.asin(pos.y);

    const startRotY = this.planetGroup.rotation.y;
    const startRotX = this.planetGroup.rotation.x;

    const finalRotY = startRotY + (targetTheta - (startRotY % (Math.PI * 2)));
    const finalRotX = -targetPhi;

    const startTime = performance.now();
    const duration = 800;

    const animateFocus = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      this.planetGroup.rotation.y = startRotY + (finalRotY - startRotY) * ease;
      this.planetGroup.rotation.x = startRotX + (finalRotX - startRotX) * ease;

      if (progress < 1) {
        requestAnimationFrame(animateFocus);
      } else {
        this.currentFocusedRecipe = recipe;
        updateFocusedCard(recipe);
        this.update3DPointerPosition(recipe);
        if (openModal) {
          openRecipeModal(recipe);
        }
      }
    };

    requestAnimationFrame(animateFocus);
  }

  onWindowResize() {
    const container = this.canvas.parentElement;
    const width = container.clientWidth;
    const height = container.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    if (this.cloudMesh) {
      this.cloudMesh.rotation.y += 0.0018;
    }

    if (this.pointer3DRing) {
      this.pointer3DRing.rotation.z += 0.04;
    }

    if (!this.isDragging && !this.isSpinning) {
      this.planetGroup.rotation.y += 0.0011;
      this.dragVelocity.x *= 0.94;
      this.dragVelocity.y *= 0.94;
      this.planetGroup.rotation.y += this.dragVelocity.x;
      this.planetGroup.rotation.x += this.dragVelocity.y;
    }

    this.renderer.render(this.scene, this.camera);
  }
}

// ==========================================
// 5. UI STATE & CONTROLLERS
// ==========================================
const state = {
  activeCategory: "all",
  searchQuery: "",
  selectedPantry: new Set(),
  globeInstance: null
};

const dom = {
  menuGrid: document.getElementById("menuGrid"),
  searchBar: document.getElementById("searchBar"),
  resultsCount: document.getElementById("resultsCount"),
  categoryTabs: document.querySelectorAll(".category-tab"),
  pantryChips: document.querySelectorAll(".pantry-chip"),
  resetPantryBtn: document.getElementById("resetPantryBtn"),
  
  spinGlobeBtn: document.getElementById("spinGlobeBtn"),
  focusDishIcon: document.getElementById("focusDishIcon"),
  focusBadge: document.getElementById("focusBadge"),
  focusDishName: document.getElementById("focusDishName"),
  focusDishVibe: document.getElementById("focusDishVibe"),
  openFocusedRecipeBtn: document.getElementById("openFocusedRecipeBtn"),
  
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
  
  liveClock: document.getElementById("liveClock")
};

function updateLiveClock() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('ms-MY', { hour: '2-digit', minute: '2-digit' });
  if (dom.liveClock) {
    dom.liveClock.textContent = `${timeStr} • Orbit Aktif`;
  }
}

function updateFocusedCard(recipe) {
  if (!recipe) return;
  if (recipe.image) {
    dom.focusDishIcon.innerHTML = `<img src="${recipe.image}" alt="${recipe.name}" class="focus-dish-thumb" onerror="this.onerror=null; this.parentElement.textContent='${recipe.bannerIcon}'">`;
  } else {
    dom.focusDishIcon.textContent = recipe.bannerIcon;
  }
  dom.focusBadge.textContent = `${recipe.categoryLabel} • ⏱️ ${recipe.time}`;
  dom.focusDishName.textContent = recipe.name;
  dom.focusDishVibe.textContent = `✨ ${recipe.cravingCall}`;

  const arrowText = document.getElementById("targetArrowText");
  if (arrowText) {
    arrowText.textContent = `📍 ${recipe.bannerIcon} ${recipe.name}`;
  }

  // Indikator Tahap Kesihatan (Bagus / Medium / Cheat)
  const healthPill = document.getElementById("focusHealthPill");
  const healthDesc = document.getElementById("focusHealthDesc");
  if (healthPill && recipe.health) {
    healthPill.textContent = recipe.health.label;
    healthPill.className = `health-pill health-${recipe.health.level}`;
  }
  if (healthDesc && recipe.health) {
    healthDesc.textContent = `💡 ${recipe.health.desc}`;
  }
}

// ==========================================
// 6. GOURMET RECIPE MODAL
// ==========================================
function openRecipeModal(recipe) {
  sfx.init();
  
  dom.modalTitle.textContent = `${recipe.bannerIcon} ${recipe.name}`;
  dom.modalCravingBadge.textContent = `🔥 Sektor Selera: ${recipe.categoryLabel}`;
  dom.modalVibeBox.textContent = `💡 Kenapa tekak kau nak benda ni sekarang: "${recipe.cravingCall}"`;
  
  dom.modalTimePill.textContent = `⏱️ Siap Dalam: ${recipe.time}`;
  dom.modalGearPill.textContent = `🍳 ${recipe.gear}`;

  // Indikator Kesihatan di Modal
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

  dom.recipeModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeRecipeModal() {
  dom.recipeModal.classList.remove("active");
  document.body.style.overflow = "";
}

// ==========================================
// 7. MENU EXPLORER & FILTERING
// ==========================================
function getFilteredRecipes() {
  return RECIPES.filter(recipe => {
    if (state.activeCategory !== "all" && recipe.category !== state.activeCategory) {
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
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.25rem;">Cuba tukar pilihan bahan dapur atau pilih sektor lain.</p>
        <button class="btn-spin-globe" onclick="resetAllFilters()" style="padding: 0.6rem 1.5rem; font-size: 0.9rem;">Reset Saringan</button>
      </div>
    `;
    dom.resultsCount.textContent = "0 menu";
    return;
  }

  dom.resultsCount.innerHTML = `Menunjukkan <span class="highlight-match">${filtered.length} menu</span> padu di Planet Comfortia`;

  filtered.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "food-card glass";
    card.id = `card-${recipe.id}`;

    card.innerHTML = `
      <div class="food-card-banner" style="background: ${recipe.bannerGradient}">
        ${recipe.image ? `<img src="${recipe.image}" alt="${recipe.name}" class="food-card-img" loading="lazy" onerror="this.style.display='none'">` : ''}
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
      if (state.globeInstance) {
        state.globeInstance.focusOnRecipe(recipe, false);
      }
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
  state.searchQuery = "";
  state.selectedPantry.clear();

  dom.searchBar.value = "";
  dom.categoryTabs.forEach(t => t.classList.toggle("active", t.dataset.category === "all"));
  dom.pantryChips.forEach(c => c.classList.remove("selected"));

  renderMenuGrid();
}
window.resetAllFilters = resetAllFilters;

// ==========================================
// 8. EVENT LISTENERS
// ==========================================
function setupEventListeners() {
  dom.spinGlobeBtn.addEventListener("click", () => {
    sfx.init();
    dom.spinGlobeBtn.disabled = true;
    dom.spinGlobeBtn.innerHTML = `<span>⏳</span> Mengorbit Planet Comfortia...`;

    state.globeInstance.spinToRandomRecipe();

    setTimeout(() => {
      dom.spinGlobeBtn.disabled = false;
      dom.spinGlobeBtn.innerHTML = `<span>🪐</span> Pusing Planet Comfortia!`;
    }, 2600);
  });

  dom.openFocusedRecipeBtn.addEventListener("click", () => {
    if (state.globeInstance && state.globeInstance.currentFocusedRecipe) {
      openRecipeModal(state.globeInstance.currentFocusedRecipe);
    }
  });

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

      const firstMatch = RECIPES.find(r => r.category === state.activeCategory);
      if (firstMatch && state.globeInstance) {
        state.globeInstance.focusOnRecipe(firstMatch, false);
      }
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

// ==========================================
// 9. INITIALIZE
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  renderMenuGrid();
  updateLiveClock();
  setInterval(updateLiveClock, 30000);

  state.globeInstance = new PlanetComfortiaGlobe("globeCanvas", RECIPES, (chosen) => {
    updateFocusedCard(chosen);
  });

  updateFocusedCard(RECIPES[0]);
});
