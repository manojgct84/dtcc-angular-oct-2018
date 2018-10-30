# Get Started

```
npm install @angular/cli@^6.0.0 -g 

ng new product-app

ng serve

ng build

ng build --prod
```

# App Module components

```
ng g component components/header
ng g component components/footer
ng g component components/home
ng g component components/about
ng g component components/contact
```

# Application Architecture

src
    app-module
        components
            header
            footer

        shared-module [reusable in other modules]
            components
                address
                
        product-module
            components
                product-list
                product-edit
                product-view
        cart-module
            components
                cart-list
                cart-edit
                checkout
        inventory-module        
            inventory-list
            ...
        auth


# Shared Module

```
ng g module shared

ng g component shared/components/address

ng g interface shared/models/address

ng g pipe shared/pipes/power
ng g pipe shared/pipes/filter
ng g pipe shared/pipes/sort

ng g directive shared/directives/highlight

```

# ProductApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
