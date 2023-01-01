import { iconsAsStrings } from './stringify.js';
export * from 'vscode-icons-js';

export function getSVGStringFromFileType(name) {
  return iconsAsStrings.find((icon) => icon.name === name).svg;
}

export { iconsAsStrings };
