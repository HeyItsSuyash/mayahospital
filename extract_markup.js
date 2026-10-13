const fs = require('fs');

const html = fs.readFileSync('C:/Users/Suyash/.gemini/antigravity-ide/brain/39fed0ff-21e7-4580-ac25-79db24f40cc3/.system_generated/steps/7/content.md', 'utf8');

// Extract from <main> to </main>
const mainMatch = html.match(/<main[\s\S]*?<\/main>/i);
// Extract from <header> to </header>
const headerMatch = html.match(/<header[\s\S]*?<\/header>/i);
// Extract from <footer to </footer>
const footerMatch = html.match(/<footer[\s\S]*?<\/footer>/i);

console.log('Main found:', !!mainMatch);
console.log('Header found:', !!headerMatch);
console.log('Footer found:', !!footerMatch);

if (mainMatch) fs.writeFileSync('extracted_main.html', mainMatch[0]);
if (footerMatch) fs.writeFileSync('extracted_footer.html', footerMatch[0]);
console.log('Extracted files written.');
