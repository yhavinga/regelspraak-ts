.PHONY: all build test clean parser install

all: build

build:
	npm run build

test:
	npm test

clean:
	rm -rf dist .tsbuildinfo

install:
	npm install

# Regenerate ANTLR parser from grammar
parser:
	cd grammar && antlr4 -Dlanguage=TypeScript -visitor -no-listener \
		-o ../src/_generated/antlr \
		RegelSpraakLexer.g4 RegelSpraak.g4
	node scripts/extract-multiword.js
