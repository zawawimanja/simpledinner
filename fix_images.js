const fs = require('fs');

const updates = {
  'pau-gebu-panas': 'pau_gebu.jpg',
  'popia-frozen-rangup': 'popia_goreng.jpg',
  'cucur-badak-frozen': 'cucur_badak.jpg',
  'sup-telur-enoki-panas': 'sup_telur_enoki.jpg',
  'tortilla-telur-gulung': 'tortilla_telur_gulung.jpg',
  'keledek-madu-microwave': 'keledek_madu.jpg',
  'telur-hancur-mentega': 'telur_hancur.jpg',
  'telur-dadar-bawang-karamel': 'telur_dadar.jpg',
  'lempeng-pisang-kampung': 'lempeng_pisang.jpg',
  'nasi-bujang-telur-kicap': 'nasi_bujang.jpg',
  'nasi-goreng-butter-egg': 'nasi_goreng_butter.jpg',
  'maggi-goreng-basah': 'maggi_goreng_basah.jpg',
  'roti-pisang-nutella-roll': 'roti_pisang_nutella.jpg'
};

let code = fs.readFileSync('app.js', 'utf8');
let totalReplaced = 0;

for (let id in updates) {
  let idx = code.indexOf(`id: "${id}"`);
  if (idx === -1) {
    console.log("NOT FOUND: " + id);
    continue;
  }
  let sub = code.substring(idx, idx + 400);
  let newSub = sub.replace(/image:\s*"images\/[^"]+"/, `image: "images/${updates[id]}"`);
  if (sub !== newSub) {
    code = code.substring(0, idx) + newSub + code.substring(idx + 400);
    console.log("Replaced for " + id);
    totalReplaced++;
  }
}

fs.writeFileSync('app.js', code);
console.log("Total replaced: " + totalReplaced);
