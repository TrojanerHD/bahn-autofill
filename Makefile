all:
	echo "Don't forget to increase version"
	tsc
ifneq ("$(wildcard ./bahn-autofill.zip)", "")
	rm bahn-autofill.zip
endif
	zip bahn-autofill.zip build/*.js manifest.json resources/icons/logo-48.png

clean:
	rm -r build
	rm bahn-autofill.zip