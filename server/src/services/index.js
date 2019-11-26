const admin = require('./admin/admin.service.js');
const users = require('./users/users.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(admin);
  app.configure(users);
};
