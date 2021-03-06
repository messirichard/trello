const { Service } = require('feathers-mongodb');

exports.Admin = class Admin extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('admin');
    });
  }
};
