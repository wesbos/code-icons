// read all icons/*.svg files and convert to SVG strings
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function stringify() {
  // read all files in icons directory
  const files = await fs.readdir(`${__dirname}/icons`);
  // filter out non-svg files
  const svgs = files.filter((file) => file.endsWith('.svg'));
  // read all svg files
  const svgStrings = await Promise.all(svgs.map(async (file) => {
    return {
      name: file,
      svg: await fs.readFile(`${__dirname}/icons/${
    file}`, 'utf8')
    }
  }));

  return svgStrings;
}

const iconsAsStrings = await stringify();

export { iconsAsStrings }
