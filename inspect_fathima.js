const fs = require('fs');
const content = fs.readFileSync('C:/Users/Suyash/.gemini/antigravity-ide/brain/39fed0ff-21e7-4580-ac25-79db24f40cc3/.system_generated/steps/7/content.md', 'utf8');

const regex = /<section[\s\S]*?<\/section>/gi;
let match;
let count = 0;
while ((match = regex.exec(content)) !== null) {
  const classMatch = match[0].match(/class=["']([^"']*)["']/);
  const headingMatch = match[0].match(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/i);
  console.log(`\n--- Section ${count} ---`);
  console.log('Class:', classMatch ? classMatch[1] : 'none');
  console.log('Heading:', headingMatch ? headingMatch[1].replace(/\s+/g, ' ').trim() : 'none');
  console.log('Preview:', match[0].substring(0, 200).replace(/\n/g, ' '));
  count++;
}
