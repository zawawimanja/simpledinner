const fs = require('fs');

let code = fs.readFileSync('app.js', 'utf8');

const nameRegex = /name:\s*"([^"]+)"/g;
const imgRegex = /image:\s*"([^"]*)"/g;

let names = [];
let images = [];
let match;

while ((match = nameRegex.exec(code)) !== null) {
  names.push(match[1]);
}

while ((match = imgRegex.exec(code)) !== null) {
  images.push(match[1]);
}

const map = {}; // map of img_path -> first_name_seen

let replacedCount = 0;

for(let i=0; i<Math.min(names.length, images.length); i++) {
  const img = images[i];
  const name = names[i];
  if(img && img.trim() !== "") {
    if(!map[img]) {
      // First time seeing this image, keep it!
      map[img] = name;
    } else {
      // It's a duplicate! We must replace this specific occurrence in app.js
      // We will look for this specific recipe block and replace its image string
      const recipeRegex = new RegExp(`name:\\s*"${escapeRegExp(name)}"[\\s\\S]*?image:\\s*"${escapeRegExp(img)}"`);
      code = code.replace(recipeRegex, (matched) => {
        return matched.replace(`image: "${img}"`, `image: ""`);
      });
      console.log(`Removed duplicate image '${img}' for recipe '${name}'`);
      replacedCount++;
    }
  }
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^\${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

if(replacedCount > 0) {
  fs.writeFileSync('app.js', code);
  console.log(`Successfully removed ${replacedCount} duplicate images!`);
} else {
  console.log("No duplicates found to remove.");
}
