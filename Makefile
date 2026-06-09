.PHONY: all build test clean parser install antlr

ANTLR4_VERSION = 4.13.1
ANTLR4_URL = https://www.antlr.org/download/antlr-$(ANTLR4_VERSION)-complete.jar
LIB_DIR = $(shell pwd)/lib

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
ANTLR4_JAR = $(LIB_DIR)/antlr-$(ANTLR4_VERSION)-complete.jar
ANTLR4 = java -jar $(ANTLR4_JAR)

antlr: $(ANTLR4_JAR)

$(ANTLR4_JAR):
	mkdir -p $(LIB_DIR)
	curl -fsSL $(ANTLR4_URL) -o $@.tmp
	mv $@.tmp $@

# Regenerate ANTLR parser from grammar
# Must generate lexer first (creates .tokens file), then parser (uses .tokens)
parser: $(ANTLR4_JAR)
	cd grammar && $(ANTLR4) -Dlanguage=TypeScript -visitor -no-listener \
		-o ../src/_generated/antlr \
		RegelSpraakLexer.g4
	cd grammar && $(ANTLR4) -Dlanguage=TypeScript -visitor -no-listener \
		-o ../src/_generated/antlr \
		RegelSpraak.g4
	node scripts/extract-multiword.js
