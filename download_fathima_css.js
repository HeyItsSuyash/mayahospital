const https = require('https');
const fs = require('fs');

const urls = [
  'https://www.fathimahospital.com/wp-content/themes/fathimahosptial/css/normalize.css',
  'https://www.fathimahospital.com/wp-content/themes/fathimahosptial/css/animate.css',
  'https://www.fathimahospital.com/wp-content/themes/fathimahosptial/css/hover-style.css',
  'https://www.fathimahospital.com/wp-content/themes/fathimahosptial/css/flex.css',
  'https://www.fathimahospital.com/wp-content/themes/fathimahosptial/css/slider.css',
  'https://www.fathimahospital.com/wp-content/themes/fathimahosptial/css/menu.css',
  'https://www.fathimahospital.com/wp-content/themes/fathimahosptial/css/carousel.css',
  'https://www.fathimahospital.com/wp-content/themes/fathimahosptial/css/fathima-hospital.css',
  'https://www.fathimahospital.com/wp-content/themes/fathimahosptial/css/fontawesome.css'
];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(`/* === SOURCE: ${url} === */\n` + data + '\n'));
    }).on('error', err => reject(err));
  });
}

async function run() {
  console.log('Downloading all CSS files...');
  let combined = '';
  for (const url of urls) {
    try {
      console.log('Fetching', url);
      const content = await fetchUrl(url);
      combined += content + '\n';
    } catch (e) {
      console.error('Failed to fetch', url, e.message);
    }
  }
  fs.writeFileSync('src/app/fathima_combined.css', combined);
  console.log('Successfully written src/app/fathima_combined.css. Total bytes:', combined.length);
}

run();
