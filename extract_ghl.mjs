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

const finalHTML = `<!-- Custom CSS -->
<style>
${styleContent}
</style>

<!-- Custom HTML -->
<div id="root"></div>

<!-- Custom JS -->
${scriptTag}
${scriptContent}
</script>
`;

fs.writeFileSync('ghl/ghl-custom-html.html', finalHTML, 'utf-8');
console.log('Successfully generated ghl/ghl-custom-html.html');
