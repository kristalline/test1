import fs from 'node:fs';
import yaml from 'js-yaml';

//const validateExt = (file) => file.endsWith('.json') || file.endsWith('.yaml');
const validateExt = (file) => {
    const ext = file.endsWith('.json') ? 'json' : file.endsWith('.yml') ? 'yml' : 'err';
    return ext;
};

//TODO
/*const extension = {
    json(path) {
        return fs.readFileSync(path,
        { encoding: 'utf8', flag: 'r' }); },
    yml(path) {
        yaml.load(fs.readFileSync(path, 'utf8'));
    },
    err: ''
}
    */

console.log(validateExt('/misc/yaml1.yml'));

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

const test = (arr) => {
    const result = {};
    console.log('arr', arr, typeof arr);
    [...arr].map( (el) => {
    const key = Object.keys(el);
    result[key] = el[key];
    });    
    return result;
}

//console.log(data('../misc/yaml1.yml'));



export default data;