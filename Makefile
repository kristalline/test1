
install:
	npm install

start:
	npx node src/bin/gendiff.js ./misc/file1.json ./misc/file2.json

start-h:
	node src/bin/gendiff.js -h

start-v:
	npx node src/bin/gendiff.js -V



publishLocal:
	npm publish --dry-run

publish:
	npm publish

lint:
	npx eslint .

.PHONY: test
