import fs from 'node:fs';
import yaml from 'js-yaml';

const validateExt = (file) => {
    const ext = file.endsWith('.json') ? 'json' : file.endsWith('.yml') || file.endsWith('.yaml') ? 'yml' : 'err';
    return ext;
};

const data = (pathToFile) => {
    const extension = validateExt(pathToFile);
    if (extension === 'json') {
        return JSON.parse(fs.readFileSync(pathToFile,{ encoding: 'utf8', flag: 'r' }));
    }
    if (extension === 'yml') {
        const data = yaml.load(fs.readFileSync(pathToFile, 'utf8'));
        const result = {};
        if (!Array.isArray(data)) return data;
        
        [...data].map((el) => {
            const key = Object.keys(el);
            result[key] = el[key];
        })
        return result;
    }

    throw Error ('wrong file extension');        
};

export default data;

//console.log(data('./misc/file1.json'));


//TODO: 1. json validation ?