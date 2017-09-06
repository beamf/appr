const utils = require('./utils');
const config = require('./config');

module.exports = function preDeploy() {
  const pkg = utils.readPackageJSON();
  const name = utils.getExpPublishName(pkg.name, config.githubSourceBranch);
  const modified = Object.assign({}, pkg, {
    name,
    slug: name,
    privacy: 'unlisted'
  });

  utils.writePackageJSON(modified);
};
