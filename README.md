# Angular 9 + RxJS: 'Restaurangular' - website for a restaurant  

*March 2020*

> 🔨 Restaurant website. From Udemy '[Angular, Angular Material et RxJS par la pratique](https://www.udemy.com/course/angular-6-angular-material-et-rxjs-6-par-la-pratique/)'. It covers the basics concepts of Angular and RxJS: materials, reactive forms, observables...

See the **demo** on [Github page](https://raigyo.github.io/angular-restaurangular/).

![Angular logo](readme-img/angular-logo.png)

## 1. About

Restaurant website with menus, booking and scheduling of special evenings with a searchbar.

*Note:* the tutorial was for Angular 6 but this versions uses **Angular 9.0.5**.

## 2. How to use

### Local

- Clone the [local-version branch](https://github.com/Raigyo/angular-restaurangular/tree/local-version)
- Tu run: `ng serve -o`
- Open the app using [http://localhost:4200/](http://localhost:4200/)

### Online

See the **demo** on [Github page](https://raigyo.github.io/angular-restaurangular/).

## 3. Concepts covered

- Routes (RouterModule, Routes, Route)
- Modules / Components / Providers (app.module.ts: import {decorators} / NgModule)
- Material Data Table + Data source (using interfaces as models)
- Templates: Forms (Reactive forms, templates driven forms '#', structural directives '*': shape or reshape the DOM's structure), lifecycle hooks (OnInit), interpolation {{...}} / two way binding [()], ...
- Reactive Extensions Library for JavaScript (RxJS) and Observables, Operators, flux/push/callbacks, tap, map, switchMap, ...
- Communication between components and custom events (input: from parent to children / output: from children to parents), dynamic content

## 4. Angular CLI

### CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.5.

https://angular.io/cli

~~~~
npm install -g @angular/cli
ng new my-first-project
cd my-first-project
~~~~

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### -Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Ex: `ng g c Home` 

Run `ng generate services service-name` to generate a new service. 

Ex: `ng g s services/quick-lunch` 

#### -Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### -Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### -Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Material

Angular Material module helps us to create high-quality UI applications with Angular framework by following Material Design specifications.

`ng add @angular/material`

Ex add component: `ng generate @angular/material:materialNav --name=main-nav`

## 5. Deploy on Github pages

~~~~~
git checkout -b gh-pages
git push origin gh-pages
npm install -g angular-cli-ghpages
ng build --prod --base-href https://[username].github.io/[repo]/
ngh --dir=dist/[project-name]
~~~~~

It is only necessary to set the the--base-href flag once, next time you build the project you can simply run:

`ng build --prod`

In order to compile images correctly use path as following:

`'./assets/images/image.png'`

## 6. Ressources

- [Angular Material](https://material.angular.io/)
- [List of External Library Angular Schematics](https://www.ngdevelop.tech/external-library-angular-schematics-list/)
- [Learn RxJS](https://www.learnrxjs.io/)
- [How to deploy an Angular 7 app to Github Pages)](https://medium.com/code-sketch/how-to-deploy-an-angular-7-app-to-github-pages-9427b609645f)