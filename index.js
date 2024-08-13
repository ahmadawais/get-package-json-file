/**
 * Get Package.json file.
 *
 * Read a package json file
 *
 * @author Awais <https://twitter.com/MrAhmadAwais/>
 */

import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function getPackageJson(customPath = __dirname) {
    const packagePath = join(customPath, 'package.json');
    const packageJson = JSON.parse(await readFile(packagePath, 'utf8'));
    return packageJson;
}
