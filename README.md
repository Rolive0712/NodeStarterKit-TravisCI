>> GITHUB repo
* https://github.com/coryhouse/js-dev-env-demo
* https://github.com/coryhouse/js-dev-env-demo.git

* now clone Git repo "git clone https://github.com/coryhouse/js-dev-env-demo.git"
* after that run command to install packages
-- npm install
* after that, to run app, use "npm start"

>> GIT Commands
// stage all files u changed
* git add .

// commit locally
* git commit -m "initial commit" 

// push work to github
* git push

// list all modified files
* git status

>> EDITOR CONFIG Support
* to get editor config support, download plugin for VS code from "https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig"
* from the link copy command "ext install EditorConfig" for installation and paste in command palette and press enter
* editor config will now show up in VS code extensions.
* after install, any future files we create will work as per config settings defined.
* this is part of starter kit.

>> PACKAGE.JSON file
* latest packages and its versions available @ "bit.ly/jsdevpackagejson"
* long url: "https://gist.github.com/coryhouse/29bd1029b623beb4c7f79b748dcba844"
* starter kit will have the same as well.

>> NODE Security Platform
* install globally with command: "npm install -g nsp"
* after install run command : "nsp check"  --- this will then scan all the local node packages for known vulnerabilities

>> SHARING localhost CODE with clients on Public API
* There are many options to use like "localtunnel","ngrok","surge" & "now"
* For using "localtunnel", use commands below
* "npm install -g localtunnel"
* now to run localtunnel, run "lt --port 3000"
* we can also provide a subdomain with command : "lt --port 3000 --subdomain roshitswebsite"
* this will then provide you the public URL to expose to anyone. anyone with internet access then can see the local code running on your dev machine.

>> TRANSPILING -- javascript compilers
* widely used ones are "Babel","TypeScript" & "Elm"
* Babel transpiles latest version of javascript down to ES5 so the code works on environments that does not fully support latest versions of JS.
* typescript is superset of JS. just as ES6 expands JS power, typescript expands it further with interfaces and type annotations.
* with babel, we write standardized JS, we get the whole ecosystem. we don't get it with typescript as react JSX and ESlint broke using typescript. babel transpiles experimental features as well.

>> TO USE BABEL.
* its not npm dependent as it just uses ".babelrc" file config settings
* current file with "presets" for latest means we are saying we want to use all the latest standardized js features.
* after babel is installed and configured in .babelrc, we can use all latest ES6+ features.
* without babel, if we use import, we will get error "unexpected token import" on running npm start.
* to fix error, append babel like "babel-node ....". with "babel-node" our transpiling of ES6 starts working.
* ex: 
  * 1) we can use "import" at the top of js file to import libraries.
  * 2) we can use "const", "let", "default exports" etc.

>> MODULE FORMATS
* IIFE
* AMD                               - used by requireJS
* CJS (Common JS)                   - popularized by Node as we no longer have to use AMD & IIFE anymore.
* UMD (Universal module defintion)  - blends AMD with CJS
* ES6 (ES2015) modules              - with import statements. should be used going ahead as they are standardized and we won't have to transpile it going ahead.

>> BUNDLERS
* r.js within RequireJS             - no longer used
* Browserify                        - bundles .js only
* Webpack                           - bundles .js,.css, images, html, fonts etc. has hot reloading, tree shaking & bundle separation as well.
* Rollup
* JSPM

>> To Setup Webpack for bundling
* get latest from "bit.ly/2dSZwea" and put in "webpack.config.dev.js" file
* long url: "https://gist.github.com/coryhouse/d611e83e432f3ae65cc46ebb9b599930"
* webpack link: "https://webpack.js.org/concepts/"

>> SOURCEMAPS
* "bundle.js" will have tons of transpiled code which babel & webpack will produce. it will be hard to debug it so will have to configure sourcemaps mainly for debugging purpose.
* sourcemap maps the bundled code back to the original source.
* they are downloaded only if we use the browser developer tools. So no download cost to regular users.

>> ESLINT
* supports ES6 and ES7 natively. to use experimental features, use "babel-eslint"
* use only the recommended rules.
* add file ".eslintrc.json" on the root folder. already part of kit. .json extension is required now.
* get it from "bit.ly/jsdeveslint"
* long url: "https://gist.github.com/coryhouse/61f866c7174220777899bcfff03dab7f"
* config uses plugins for enhanced linting
* starter kit uses ES7(ES2016) so we have mentioned "ecmaVersion": 7 in config file
* anything to override, mention in "rules". we have "no-console": 1
* 1-warning, 0-Off, 2-Error. setting to 2 will break the build on lint errors.
* warning won't break the build
* add file watching with eslint using "eslint-watch"
* so we have in package.json {"lint": "esw webpack.config.* src buildScripts --color",}
* esw is the executable for eslint watch.
* as per that, watch webpackconfig, entire source & build scripts
* for this ESLINT to work, disable the Linting plugin used in the editor.
* run command "npm run lint"
* We will get "Clean" message on the console, if Linting is successful and no issues found.
* file watching works with {"lint:watch": "npm run lint -- --watch",}

>> Testing & Continous Integration
* In Kit
  * configured with "testSetup.js" file
  * configured with command
    * {"test": "mocha --reporter progress buildScripts/testSetup.js \"src/**/*.test.js\"",}
    * test files should be suffixed with test.js
    * "test:watch": "npm run test -- --watch",  ---- watch files for changes and run tests.

* List of frameworks
  * Mocha
  * Jasmine - has assertion library built-in
  * Tape
  * QUnit
  * AVA
  * Jest - from facebook
* Helper Libraries to use
  * JSDOM   - simulate browser DOM. run DOM tests without a browser
  * Cheerio - Query JSDOM virual DOM using jQuery selectors
* Where to run tests
  * Browser - Karma, Testem
  * Headless browser - PhantomJS - will simulate real browser
  * In-memory DOM - JSDOM

>> WHY Continous Integration
* many times, dev's say it works on my machine but it fails on server.
* mainly since other dev's might have missed to
  * check in a dependency
  * forgot to update package.json
  * forgot to commit a file
  * Bad merge
  * did not run tests
* in such cases, it will work on local machine of dev, but will fail on server.
* Better CI and having CI server will catch such issues upfront and notify the developer if a build fails.
* CI server will
  * run automated build
  * will check every commit.
  * run tests before commit
  * check code coverage
  * automate deployment
* Choosing a CI server
  * Travis  - Linux based & integrates with github if we use the same for source control
  * Appveyor  - windows based
  * Jenkins   - if we have to host CI server on our own.
  * CircleCI
  * Semaphore
  * SnapCI

>> SETUP TRAVIS
* .travis.yml - file config in kit

>> BUILD AUTOMATION in kit as per "scripts" section in package.json file
>> RUN "npm start"
>> RUN "npm start -s" to remove unwanted noise on console

* this is configured to run multiple tasks in parallel
"npm-run-all --parallel security-check open:src lint:watch test:watch start-mockapi"
* whatever is mentioned after --parallel switch will be executed as well.

* prestart        --- will run before start script. just run "npm start" to see the green message on console with "chalk"
* security-check  --- for running security checks on local node packages. nsp is there in local modules so will run.
  -- to run it use command "npm run security-check"
* share           --- for sharing local code with outside world using localtunnel.
-- to run it use command "npm run share"

"scripts": {
    "prestart": "babel-node buildScripts/startMessage.js",
    "start": "npm-run-all --parallel security-check open:src lint:watch test:watch start-mockapi",
    "open:src": "babel-node buildScripts/srcServer.js",
    "lint": "esw webpack.config.* src buildScripts --color",
    "lint:watch": "npm run lint -- --watch",
    "security-check": "nsp check",
    "localtunnel": "lt --port 3000",
    "share": "npm-run-all --parallel open:src localtunnel",
    "test": "mocha --reporter progress buildScripts/testSetup.js \"src/**/*.test.js\"",
    "test:watch": "npm run test -- --watch",
    "generate-mock-data": "babel-node buildScripts/generateMockData",
    "prestart-mockapi": "npm run generate-mock-data",
    "start-mockapi": "json-server --watch src/api/db.json --port 3001",
    "clean-dist": "rimraf ./dist && mkdir dist",
    "prebuild": "npm-run-all clean-dist test lint",
    "build": "babel-node buildScripts/build.js",
    "postbuild": "babel-node buildScripts/distServer.js",
    "deploy": "surge ./dist"
  },



