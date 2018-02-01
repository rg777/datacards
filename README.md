# Datacards

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.5.

## Demo

You can have a quick preview of this project hosted on firebase from this link [Data Cards](https://kanji-1306.firebaseapp.com/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Firebase Cloud functions
This project makes calls to firebase cloud functions to retrieve data for the cards. You can get a json data by making a GET request to the cloud function easily. For ex. https://us-central1-kanji-1306.cloudfunctions.net/wikidata fetches data for one card at a time.
The code is maintained in a separate repository [Datacards-functions](https://github.com/rg777/datacards_function).
The cloud functions call wikidata query to get data on runtime.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
