# Makefile

.DEFAULT_GOAL := all

npm-install:
	npm install

composer-install:
	composer install

npm-build:
	npm run build

serve:
	php -S localhost:8000

all: npm-install composer-install npm-build serve
