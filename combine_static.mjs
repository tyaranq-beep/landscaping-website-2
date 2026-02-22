import fs from 'fs';

const html = fs.readFileSync('systeme_static/html-code-block.html', 'utf-8');
const css = fs.readFileSync('systeme_static/css-code-block.css', 'utf-8');

const combinedHtml = `
<style>
${css}
</style>

${html}
`;

fs.writeFileSync('systeme_static/index-single.html', combinedHtml, 'utf-8');
console.log('Successfully generated systeme_static/index-single.html');
