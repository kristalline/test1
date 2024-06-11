import fs from 'node:fs';

const data = (pathToFile) => fs.readFileSync(pathToFile,
    { encoding: 'utf8', flag: 'r' });

export default data;