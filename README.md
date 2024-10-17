# playwright-demo

## Pre-Requisites
Node.js  (https://nodejs.org/en/download/prebuilt-installer/current)
Npm
Visual Studio Code (https://code.visualstudio.com/download)


## Installation Steps
- Install Node JS 
- Create new project folder
- Install Visual Studio Code 
- Open project folder in vs code editor 
- Install playwright - npm init playwright@latest
- Install browsers - npx playwright install


## Commands/Options to Run Tests
- Run tests in command line in headless mode 
 ```npx playwright  test   ./tests/fileName.spec.ts```
- Run tests in command line in headed mode 
  ```npx playwright  test   ./tests/fileName.spec.ts  --headed```
- Run tests  in default chrome broswer
  ```npx playwright  test``` (run all tests in tests folder)
- Run tests in different broswers
 ``` npx playwright test --project webkit --project firefox```
- Run tests in parallel mode
 ```npx playwright test ./tests/fileName.spec.ts  --workers 5```
- Run tests in debug mode
 ```npx playwright  test   ./tests/fileName.spec.ts  --debug```
- Show reports
 ```npx playwright show-report ```