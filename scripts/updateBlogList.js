/* eslint-disable */
const fs = require('fs');
const path = require('path');

const blogFolder = path.join(
  __dirname,
  '../src/pages/blog'
);
const manifestArray = [];
fs.readdirSync(blogFolder).forEach((file) => {
  // Look in each blog-post's directory
  if (fs.statSync(path.join(blogFolder, file)).isDirectory()) {
    const blogManifest = JSON.parse(fs
      .readFileSync(path.join(blogFolder, file, 'manifest.json')).toString());
    // Add the directory path as the url here.
    // This is a convenience method, since we're already parsing the file path here,
    // and the file == the blog posts url
    blogManifest.url = `/blog/${file}`;
    // add the json from each maifest to the array
    manifestArray.push(blogManifest);
  }
});

// sort the manifests, with the newest posts first
manifestArray.sort((a, b) => {
  return new Date(b.datePublished) - new Date(a.datePublished)
});

// Write the file NOTE: this will overwrite any existing file
const blogListFile = `export const blogList = ${JSON.stringify(manifestArray)}`;
fs.writeFileSync(path.join(blogFolder, 'blogList.ts'), blogListFile);
