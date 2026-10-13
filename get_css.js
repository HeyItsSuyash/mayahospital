const fs = require('fs');
const content = fs.readFileSync('C:/Users/Suyash/.gemini/antigravity-ide/brain/39fed0ff-21e7-4580-ac25-79db24f40cc3/.system_generated/steps/7/content.md', 'utf8');

const regex = /<link[^>]+rel=['"]stylesheet['"][^>]*>/gi;
const matches = content.match(regex);
console.log('CSS Links:');
if (matches) {
  matches.forEach(m => console.log(m));
}
