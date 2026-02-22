import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
    console.log('Starting Playwright...');
    const browser = await chromium.launch({ headless: true });
    // Use a large viewport so things are not hidden or squished
    const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

    // index.html built by vite (using vite-plugin-singlefile)
    const filePath = path.join(__dirname, 'dist', 'index.html');

    console.log(`Loading file: ${filePath}`);
    await page.goto(`file://${filePath}`, { waitUntil: 'networkidle' });

    console.log('Extracting statically rendered HTML...');
    // Grab the rendered HTML inside #root
    const rootHtml = await page.evaluate(() => {
        // Remove all inline styles added by framer-motion so elements are permanently visible
        const allElements = document.querySelectorAll('*');
        allElements.forEach(el => el.removeAttribute('style'));

        const root = document.getElementById('root');
        return root ? root.innerHTML : '';
    });

    console.log('Extracting styles...');
    // The CSS is in a <style> tag in dist/index.html
    const styleCss = await page.evaluate(() => {
        // Also remove any cursor-related standard styles if needed, but Tailwind is enough
        const styles = Array.from(document.querySelectorAll('style'));
        return styles.map(s => s.innerHTML).join('\\n');
    });

    if (!fs.existsSync('systeme_static')) {
        fs.mkdirSync('systeme_static');
    }

    const htmlBlock = `<!-- Static HTML for Systeme.io -->\\n<div id="root">\\n${rootHtml}\\n</div>`;

    // Combine standard styles and basic CSS animations
    const cssBlock = `/* CSS for Systeme.io */\\n${styleCss}
/* Basic scroll animations can be added here if needed, but static display is guaranteed. */
`;

    fs.writeFileSync('systeme_static/html-code-block.html', htmlBlock, 'utf-8');
    fs.writeFileSync('systeme_static/css-code-block.css', cssBlock, 'utf-8');

    console.log('Successfully generated static files for Systeme.io in "systeme_static" folder!');

    await browser.close();
})();
