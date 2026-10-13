const fs = require('fs');
let css = fs.readFileSync('src/app/fathima_combined.css', 'utf8');

// Replace relative ../ fonts and images with absolute paths from Fathima Hospital
css = css.replace(/url\(\.\.\/fonts\//g, 'url(https://www.fathimahospital.com/wp-content/themes/fathimahosptial/fonts/');
css = css.replace(/url\(\'\.\.\/fonts\//g, "url('https://www.fathimahospital.com/wp-content/themes/fathimahosptial/fonts/");
css = css.replace(/url\(\"\.\.\/fonts\//g, 'url("https://www.fathimahospital.com/wp-content/themes/fathimahosptial/fonts/');

css = css.replace(/url\(\.\.\/images\//g, 'url(https://www.fathimahospital.com/wp-content/themes/fathimahosptial/images/');
css = css.replace(/url\(\'\.\.\/images\//g, "url('https://www.fathimahospital.com/wp-content/themes/fathimahosptial/images/");
css = css.replace(/url\(\"\.\.\/images\//g, 'url("https://www.fathimahospital.com/wp-content/themes/fathimahosptial/images/');

css = css.replace(/url\(images\//g, 'url(https://www.fathimahospital.com/wp-content/themes/fathimahosptial/images/');

fs.writeFileSync('src/app/fathima_combined.css', css);
console.log('Cleaned URLs in fathima_combined.css');
