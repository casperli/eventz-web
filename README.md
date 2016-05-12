<<<<<<< HEAD
# generator-hatch

## Getting started

1. Install [Node.js](http://nodejs.org)

2. Clone or fork this repository

3. Install the required dependencies. In the source directory:
    ```
    npm install
    ```

4. Build and run it:
   ```
   npm start
   ```

## Generating new components

   Usage:
   ```
   gulp component --name [componentname]
   gulp component --name [componentname] --noservice
   gulp component --name [componentname] --parent [parentcomponent]
   ```

You can adapt the templates for the generator to your project needs. The same applies
to the component generator itself. The templates are located at `generator/`; the generator
logic is in `gulpfile.js`.

The component templates contain variables (`<%= name %>`, `<%= upCaseName %>`) which are replaced
during generation. The templates are then copied to the `app` directory.

## Further tasks

- Running unit and component tests:
  ```
  npm test
  ```

- Running protractor end-to-end tests:
  ```
  npm run e2e
  ```

- Building for distribution:
  ```
  npm run build
  ```

## Example Folder Structure

Part of a folder structure of an example project based on this generator:

```
app/
- root/
--  root.ts
--  root.html
--  root.*
--  navbar/
---   navbar.html
---   navbar.ts
---   navbar.*
- wall/
- settings/
--  notifications/
---   notifications.ts
---   notifications.html
---   notifications.*
--  privacy/
- calendar/
- shared/
--  shared.less
--  myservice.service.ts
--  richtexteditor/
---   richtext.ts
---   richtext.html
---   richtext.*
```

## Links

### Concept
- Based on: https://github.com/AngularClass/NG6-starter
- Close to: https://angular.io/docs/ts/latest/guide/upgrade.html

### Router
- https://docs.angularjs.org/guide/component-router

### Folder Structure
- http://www.johnpapa.net/angular-2-styles/
- https://github.com/mgechev/angular2-seed
- https://egghead.io/lessons/angular-2-organizing-angular-2-projects-by-feature
- http://stackoverflow.com/questions/35346342/which-type-of-folder-structure-should-be-used-with-angular-2
=======
# eventz-web
>>>>>>> 8ef4836589413a9c2f660f61317c84e237fddde5
