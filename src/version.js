//const fs = require('fs');
import fs from 'fs';
const data = fs.readFileSync('./package.json',
    { encoding: 'utf8', flag: 'r' });

const version = JSON.parse(data).version;

export default version ;
