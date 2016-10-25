/* eslint-disable no-console */

let ghpages = require('gh-pages');
let path = require('path');

ghpages.publish(path.join(__dirname, '../', 'dist'), function(err) {
  console.log(err || 'Success!');
});
