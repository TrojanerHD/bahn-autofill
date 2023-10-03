# DB Autofill

Ever got annoyed that you had to fill in your information whenever you navigate to https://bahn.de and want to find a connection? This extension solves the problem!

Currently, the traveller information (number of people, discounts, age), “fast connections” (Schnellste Verbindungen anzeigen) button and transportation methods (Verkehrsmittel) are persisted via local storage.

**Disclaimer**: This extension is not affiliated with, endorsed by, or supported by Deutsche Bahn. Use at your own risk.

## Requirements

- Firefox 48.0 or higher

## Installation

Head over to https://github.com/TrojanerHD/bahn-autofill/releases and click on the .xpi file of the newest release. There should be a popup asking whether you allow the addon to be installed. Click “Add”.

## Gallery

![A video of the extension in action](resources/Peek%202023-10-03%2023-21.webm)

## Development

### Prerequesites

- TypeScript
- Git
- Editor/IDE

### Compiling

Run `make` in the root directory of this project

## Limitations / Additional Notes

- This plugin will not update automatically. If it does not work for you, check the [releases](https://github.com/TrojanerHD/bahn-autofill/releases) page to check if there is a new version
- I do not guarantee to update this addon

However, feel free to open [issues](https://github.com/TrojanerHD/bahn-autofill/issues/new) if the extension does not work for you (make sure you have the newest version installed before reporting an issue) or if you have a suggestion

### Makefile
+ make all: Builds addon into file `bahn-autofill.zip`
+ make clean: Deletes build folder and `bahn-autofill.zip`