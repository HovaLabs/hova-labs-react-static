/* eslint-disable */
const fs = require('fs');
const path = require('path');
const camelCase = require('camel-case').camelCase;

const outputFilePath = path.join(__dirname, '../src/routes.ts');
const pagesFolder = path.join(__dirname, '../src/pages');

const routesArray = [];

function findAllRoutes(route) {
  fs.readdirSync(route).forEach((file) => {
    const routePath = path.join(route, file);
    // looking recrsively for directories that start with lower-case characters
    // "foo-bar/" => legit route, "Foo-bar/" => nope
    if (file[0].toLowerCase() === file[0] && fs.statSync(routePath).isDirectory()) {
      routeUrl = routePath.replace(pagesFolder, '');
      routesArray.push(routeUrl);
      findAllRoutes(routePath);
    }
  });
}

findAllRoutes(pagesFolder);
const routeObject = {
  HOMEPAGE: '/',
  HOVALIN_REDDIT: 'https://reddit.com/r/hovalin_community'
};

routesArray.forEach(r => {
  const routeString = r.slice(1).toUpperCase().replace(/(\/|-)/g, '_');
  if (routeObject[routeString]) {
    throw new Error('duplicate routes, oh noes!');
  }
  routeObject[routeString] = r;
});

const fileString = 'export const routes = '

fs.writeFileSync(outputFilePath, `${fileString}${JSON.stringify(routeObject)}`);