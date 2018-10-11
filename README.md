Baltex-Ico-Landing-page
===========

Frontend code for Baltex-ico-landing-page

USEFUL LINKS
------------

- Wireframe & mockup URL: `To get link from designers`
- Style guide: `To get link from designers`
- Static demo: `To get link from designers`
- Releases: [TBD]

GETTING STARTED WITH DEVELOPMENT
--------------------------------

1. Software installation:
    - Sublime Text 3
    - Currently stable Google Chrome
    - [NodeJS 8.11.1][] (for development, testing, previewing, compiling and optimizing processes)
2. Setting up Environment and running app
    - Install dependencies: In terminal, cd to __this__ folder: `yarn install`
    - Run `yarn start`
3. Build and serve bundled code: `yarn serve`


TECHNICAL SOLUTIONS
-------------------

- [React][] 16.4.1 and [Redux][] 4.0.0 for the Frontend Architecture
- [Webpack] for building and bundling.
- SASS (SCSS dialect) as CSS preprocessor
- Bootstrap as base CSS framework
- Form field validation: [TBD]
- Minimum browser's supports (as per overall TSD):
    
### DEVELOPMENT DEPENDENCIES

- [NodeJS 8.11.1][]
- See _dependencies_ in `package.json`

### VERSIONS

Below are list of main components

- React: __16.4.1__
- Redux: 4.0.0
- Reactstrap: 6.3.0"

FOLDER STRUCTURE
----------------

_Folder structure is Fractal_


CONVENTIONS & BEST PRACTICES
----------------------------

### Folder and file name:
- Use PascalCase for all folder with components
- Use lowercase for remaining folder names 

### JavaScript
- Alignment by Spaces not Tabs
- Variable Naming:
    + use camelCase for variables and function names.
    
- Functions:
    + Prefix function name with 'on' if it is an ordinary event handling function
    Refer to `.eslintrc` for detailed global rules [TBD]

### SCSS
- __Comments__: 
    + Every CSS component/file (at high level)
- __OOCSS__:
    + NO IDs in CSS
    + Except for utilitily classes, avoid using !important

### Development Environment Setup
- Install Nodejs [8.11.1]
- Install GIT
- Install React Developer Tools for Google Chrome.
- Go to Project root directory and run `yarn install`. This will install Project dependencies.
- Run `yarn start`. This will start development node server. 
- Go to `http://localhost:3000/` from Browser.
- Before every push, you have to run `npm run manage:translations`.

### Generating Bundle.
- Install Nodejs [8.11.1]
- Install GIT
- Open Git Bash (if you are using windows) and Go to Project Root.
- Run `npm run build`. This will create a build folder with compiled code.

BUILD & CI SERVER INSTALLATION [TBD]
------------------------------

[NodeJS 8.11.1]: http://nodejs.org/

