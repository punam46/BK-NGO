const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

const addAlts = (dir) => {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      addAlts(filePath);
    } else if (filePath.endsWith('.jsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      let updated = content.replace(/<img([\s\S]*?)>/g, (match, p1) => {
        if (!p1.includes('alt=')) {
          if (p1.endsWith('/')) {
             return `<img alt="BK Education & Welfare Society" ${p1.slice(0, -1)} />`;
          }
          return `<img alt="BK Education & Welfare Society" ${p1}>`;
        }
        return match;
      });

      if (updated !== content) {
        fs.writeFileSync(filePath, updated);
        console.log('Added missing alt tags to:', file);
      }
    }
  });
};

addAlts(pagesDir);
