all:
	echo "Don't forget to increase version"
	tsc
ifneq ("$(wildcard ./bahn-autofill.zip)", "")
	rm bahn-autofill.zip
endif
	zip bahn-autofill.zip build/*.js manifest.json resources/icons/logo-48.png

clean:
ifneq ("$(wildcard ./build)", "")
	rm -r build
endif
ifneq ("$(wildcard ./bahn-autofill.zip)", "")
	rm bahn-autofill.zip
endif
ifneq ("$(wildcard ./bahn-autofill-source.zip)", "")
	rm bahn-autofill-source.zip
endif

source:
	tsc
ifneq ("$(wildcard ./bahn-autofill-source.zip)", "")
	rm bahn-autofill-source.zip
endif
	zip bahn-autofill-source.zip resources/**/** README.md .prettierrc bahn-autofill.ts LICENSE Makefile manifest.json tsconfig.json