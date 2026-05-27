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

# ANTLR4 command using local jar (avoids dependency on global antlr4 command)
ANTLR4_JAR = $(shell pwd)/lib/antlr-4.13.1-complete.jar
ANTLR4 = java -jar $(ANTLR4_JAR)

# Regenerate ANTLR parser from grammar
# Must generate lexer first (creates .tokens file), then parser (uses .tokens)
parser:
	cd grammar && $(ANTLR4) -Dlanguage=TypeScript -visitor -no-listener \
		-o ../src/_generated/antlr \
		RegelSpraakLexer.g4
	cd grammar && $(ANTLR4) -Dlanguage=TypeScript -visitor -no-listener \
		-o ../src/_generated/antlr \
		RegelSpraak.g4
	node scripts/extract-multiword.js
