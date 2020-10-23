install:
	npm install

build:
	rm -rf build
	npm run build

start:
	npm start

test:
	npm test

test-coverage:
	npm test -- --coverage

lint:
	npx eslint . --ext js,jsx