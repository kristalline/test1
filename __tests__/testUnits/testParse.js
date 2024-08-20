import parse from '../../src/parse.js';

const json1Path = './__tests__/__fixtures__/file1.json';
const ymlPath = './__tests__/__fixtures__/yaml1.yml';

const data = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};

export default test('test parse json', () => {
  expect(parse(json1Path)).toEqual(data);
});

test('test parse yml', () => {
  expect(parse(ymlPath)).toEqual(data);
});
