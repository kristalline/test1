import fs from 'node:fs';
import yaml from 'js-yaml';

const validateExt = (file) => {
    const ext = file.endsWith('.json') ? 'json' : file.endsWith('.yml') ? 'yml' : 'err';
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
        [...data].map((el) => {
            const key = Object.keys(el);
            result[key] = el[key];
        })
        return result;
    }

    throw Error ('wrong file extension');        
};

export default data;


//TODO: json validarion ?