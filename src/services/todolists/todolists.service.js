// Initializes the `todolists` service on path `/todolists`
const createService = require('feathers-sequelize');
const createModel = require('../../models/todolists.model');
const hooks = require('./todolists.hooks');
const filters = require('./todolists.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'todolists',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/todolists', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('todolists');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
