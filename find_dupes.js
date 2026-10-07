const fs = require('fs');

const code = fs.readFileSync('app.js', 'utf8');

// Extract all image lines and their recipe names
const nameRegex = /name:\s*"([^"]+)"/g;
const imgRegex = /image:\s*"([^"]*)"/g;

let names = [];
let images = [];
let match;

while ((match = nameRegex.exec(code)) !== null) {
  names.push(match[1]);
}

// Reset imgRegex because we are parsing from start
while ((match = imgRegex.exec(code)) !== null) {
  images.push(match[1]);
}

const map = {};
for(let i=0; i<Math.min(names.length, images.length); i++) {
  const img = images[i];
  if(img && img.trim() !== "") {
    if(!map[img]) map[img] = [];
    map[img].push(names[i]);
  }
}

for(const img in map) {
  if(map[img].length > 1) {
    console.log(`\nDuplicate Image: ${img}`);
    map[img].forEach(name => console.log(`  - ${name}`));
  }
}
