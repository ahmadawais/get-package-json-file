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

export async function getPackageJson(customPath = './package.json') {
    // Get the caller's file path
    const callerFile = new Error().stack.split('\n')[2].match(/\((.*):\d+:\d+\)/)[1];

    // Convert file URL to path if necessary
    const callerPath = callerFile.startsWith('file:')
        ? fileURLToPath(callerFile)
        : callerFile;

    const callerDir = dirname(callerPath);

    const packagePath = join(callerDir, customPath);
    try {
        const packageJson = JSON.parse(await readFile(packagePath, 'utf8'));
        return packageJson;
    } catch (error) {
        console.error(`Error reading package.json from ${packagePath}:`, error);
        throw error;
    }
}
