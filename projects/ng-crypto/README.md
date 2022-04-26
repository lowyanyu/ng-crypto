# NgCrypto

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Installation
```bash
$ npm install @cg/ng-crypto
```

## How to use
```ts
import { NgCryptoService } from '@cg/ng-crypto';
constructor(private cgcrypto: CgCryptoNgService) { }

const pwd = this.cgcrypto.sha1('123123');
```

## Code scaffolding

Run `ng generate component component-name --project ng-crypto` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ng-crypto`.
> Note: Don't forget to add `--project ng-crypto` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ng-crypto` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ng-crypto`, go to the dist folder `cd dist/ng-crypto` and run `npm publish`.

## Running unit tests

Run `ng test ng-crypto` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
