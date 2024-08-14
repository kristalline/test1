import summ from "../index.js";

//import testCompare from "./testUnits/testCompare.js";  //TODO ???

test('test summ', () => {
    expect(summ(4, 2)).toBe(6);
})

/*
const data1 = {
    "host": "hexlet.io",
    "timeout": 50,
    "proxy": "123.234.53.22",
    "follow": false,
    'keyData1': 'strDel'
}

const data2 = {
    "host": "hexlet.io",
    "timeout": 70,
    "proxy": "123.234.53.00",
    "follow": false,
    'keyData2': 'strAdded'
}

const result = [
    { key: 'host', value: 'hexlet.io', type: 'unchanged' },
    { key: 'timeout', value1: 50, value2: 70, type: 'changed' },
    {
        key: 'proxy',
        value1: '123.234.53.22',
        value2: '123.234.53.00',
        type: 'changed'
    },
    { key: 'follow', value: false, type: 'unchanged' },
    { key: 'keyData1', value: 'strDel', type: 'deleted' },
    { key: 'keyData2', value: 'strAdded', type: 'added' }
];

test('test compare', () => {
    expect(compare(data1, data2)).toEqual(result);
});

*/