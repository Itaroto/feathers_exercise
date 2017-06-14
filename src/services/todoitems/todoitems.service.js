// Initializes the `todoitems` service on path `/todoitems`
const createService = require('feathers-sequelize');
const createModel = require('../../models/todoitems.model');
const hooks = require('./todoitems.hooks');
const filters = require('./todoitems.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'todoitems',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/todoitems', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('todoitems');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
