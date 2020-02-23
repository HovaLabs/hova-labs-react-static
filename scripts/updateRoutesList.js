/* eslint-disable */
const fs = require('fs');
const path = require('path');

const pagesFolder = path.join(__dirname, '../src/pages');

let routesFile = '';

function findAllRoutes(route) {
  fs.readdirSync(route).forEach((file) => {
    const routePath = path.join(route, file);
    // looking recrsively for directories that start with lower-case characters
    if (routePath[0].toLowerCase() === routePath[0] && fs.statSync(routePath).isDirectory()) {
      routesFile += `${routePath.replace(pagesFolder, '')}\n`;
      findAllRoutes(routePath);
    }
  });
}

findAllRoutes(pagesFolder);

console.log(routesFile);
