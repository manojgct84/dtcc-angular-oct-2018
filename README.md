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

ng g component components/not-found
```

# Product Module

```
ng g module product
ng g component product/components/product-home
ng g component product/components/product-list
ng g component product/components/product-edit
ng g component product/components/product-search
ng g service product/services/product
ng g class product/models/product
ng g class product/models/brand
```

# Auth

```
ng g module auth
ng g component auth/components/login
ng g service auth/services/auth
ng g guard auth/guards/auth
ng g service auth/services/interceptor
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

# Cart Module

```
ng g module cart

ng g component cart/components/cart
ng g component cart/components/cart-list
ng g component cart/components/cart-summary
ng g component cart/components/checkout

ng g class cart/models/cart-item
ng g service cart/services/cart


ng g service cart/services/checkout



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


# CORS

http://localhost:4200/products/list

http://localhost:7070/api/products

CORS  - Cross Origin Request Sharing
    if diff protocol http vs https https://example.com vs http://example.com
    if ports are different 7070 vs 8888
    if subdomain,   www.example.com         - example.com


    Local Storage
    Index DB
    Cookies
    AJAX

    api.exmaple.com/login {username, password}

    chennai.com
      POST


Same Origin