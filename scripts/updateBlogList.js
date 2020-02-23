/* eslint-disable */
const fs = require('fs');
const path = require('path');
const camelCase = require('camel-case').camelCase;

const blogFolder = path.join(
  __dirname,
  '../src/pages/blog'
);

let blogListFile = '';

const manifestArray = [];
fs.readdirSync(blogFolder).forEach((file) => {
  // Look in each blog-post's directory
  if (fs.statSync(path.join(blogFolder, file)).isDirectory()) {
    // Ignore directories that start with uppercase letters
    if (file[0].toUpperCase() === file[0]) {
      return;
    }
    blogListFile += `import ${camelCase(file)}HeroImage from '../${file}/hero.jpg'\n`;

    const blogManifest = JSON.parse(fs
      .readFileSync(path.join(blogFolder, file, 'manifest.json')).toString());
    // Add the directory path as the url here.
    // This is a convenience method, since we're already parsing the file path here,
    // and the file == the blog posts url
    blogManifest.url = `/blog/${file}`;
    blogManifest.hero = camelCase(file);

    // This is a bit of a hack
    // NOTE: hero is the only json object value that is not wrapped in "quotes"
    // since we want to generate module imports for our hero.jpg files
    // we have to construct the entire json object as a string
    // and then pass the path to hero as a variable instead of a string
    // We still use the manifest.json values to sort the array
    blogManifest.string = `{
      hero: ${blogManifest.hero}HeroImage,
      datePublished: "${blogManifest.datePublished}",
      tags: ${JSON.stringify(blogManifest.tags)},
      title: "${blogManifest.title}",
      url: "${blogManifest.url}",
    }`
    // add the json from each maifest to the array
    manifestArray.push(blogManifest);
  }
});

// sort the manifests, with the newest posts first
manifestArray.sort((a, b) => {
  return new Date(b.datePublished) - new Date(a.datePublished)
});

// Write the file NOTE: this will overwrite any existing file
blogListFile += `export const blogList = [${manifestArray.map(m => m.string).join()}]`;
fs.writeFileSync(path.join(blogFolder, 'Blog', 'blogList.ts'), blogListFile);
