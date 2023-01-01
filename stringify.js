// read all icons/*.svg files and convert to SVG strings
import fs from 'fs/promises';

async function stringify() {
  // read all files in icons directory
  const files = await fs.readdir(`${__dirname}/icons`);
  // filter out non-svg files
  const svgs = files.filter((file) => file.endsWith('.svg'));
  // read all svg files
  const svgStrings = await Promise.all(svgs.map(async (file) => {
    return {
      name: file.replace('.svg', ''),
      svg: await fs.readFile(`./icons/${
    file}`, 'utf8')
    }
  }));

  console.log(svgStrings);
}

const iconsAsStrings = await stringify();

export { iconsAsStrings }
