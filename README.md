# SETTING UP ENVIRONMENT FOR TYPESCRIPT DEVELOPMENT

## Do the following
1. npm init -y
2. add the following to package.json: "type":"module"
3. Install typescript as dev dependency with the command: `npm install typescript --save-dev`
4. Add the following to the the "scripts" property in package.json: "build": "tsc --watch", "dev":"nodemon ./dist/index.js --watch ./dist"
5. Create an "src" directory in the root of the folder.
6. Install the following by typing the following in the root directory's command line: "npm i -D @types/node"
7. Create a tsconfig.json file. you could type this command `npx tsc --init` Or create a tsconfig.json file and copy the following into the tsconfig.json file: 
```json
{
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "target": "ES2020",
    "sourceMap": true,
    "outDir": "dist"
  },
  "include": ["src/**/*"]
}
```
Or
```json
{
  "compilerOptions": {
    "module": "CommonJS",
    "moduleResolution": "Node10",
    "target": "ES2020",
    "sourceMap": true,
    "outDir": "dist"
  },
  "include": ["src/**/*"]
}
```
8. npm install -g nodemon
9. npm install -g ts-node
10. npm install --save-dev ts-node