import fs from 'fs';

const html = fs.readFileSync('dist/index.html', 'utf-8');

const getTagContent = (tag) => {
    const startTag = `<${tag}`;
    const endTag = `</${tag}>`;
    const startIndex = html.indexOf(startTag);
    if (startIndex === -1) return '';
    const closeBracketIndex = html.indexOf('>', startIndex);
    const endIndex = html.indexOf(endTag, closeBracketIndex);
    if (endIndex === -1) return '';
    return html.substring(closeBracketIndex + 1, endIndex);
};

const getScriptTag = () => {
    const startTag = '<script';
    const startIndex = html.indexOf(startTag);
    if (startIndex === -1) return '<script type="module">';
    const closeBracketIndex = html.indexOf('>', startIndex);
    return html.substring(startIndex, closeBracketIndex + 1);
};

const styleContent = getTagContent('style');
const scriptContent = getTagContent('script');
const scriptTag = getScriptTag();

if (!fs.existsSync('systeme')) {
    fs.mkdirSync('systeme');
}

const htmlBlock = `<!-- HTML要素（またはHTMLコードブロック）に貼り付けてください -->
<div id="root"></div>

<!-- JavaScript も HTML要素の末尾にそのまま貼り付けます -->
${scriptTag}
${scriptContent}
</script>
`;

const cssBlock = `/* ページ設定の「カスタムCSS」または CSSコードブロックに貼り付けてください */
${styleContent}
`;

fs.writeFileSync('systeme/html-code.html', htmlBlock, 'utf-8');
fs.writeFileSync('systeme/custom-css.css', cssBlock, 'utf-8');
console.log('Successfully generated systeme files.');
