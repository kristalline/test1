
install:
	npm install

start:
	npx node src/bin/gendiff.js

start-h:
	node src/bin/gendiff.js -h

start-v:
	npx node src/bin/gendiff.js -v



publishLocal:
	npm publish --dry-run

publish:
	npm publish

lint:
	npx eslint .

.PHONY: test
