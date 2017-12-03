const fs = require('fs');

function getExpPublishName(packageName, githubPullRequestId) {
  return `${packageName}-pr-${githubPullRequestId}`;
}

function readPackageJSON() {
  return JSON.parse(fs.readFileSync('./package.json'));
}

function writePackageJSON(content) {
  fs.writeFileSync('./package.json', JSON.stringify(content, null, 2));
}

function readAppJSON() {
  return JSON.parse(fs.readFileSync('./app.json'));
}

function writeAppJSON(content) {
  fs.writeFileSync('./app.json', JSON.stringify(content, null, 2));
}

module.exports = {
  getExpPublishName,
  readPackageJSON,
  writePackageJSON,
  readAppJSON,
  writeAppJSON
};
