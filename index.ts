export * from 'vscode-icons-js';
import { icons  } from './icons';

export function getSVGStringFromFileType(name: string) {
  return icons.find((icon) => icon.name === name);
}

export { icons as iconsAsStrings } from './icons';
