const relation = require('../../hooks/second-relation');
const {populate, discard} = require('feathers-hooks-common');

const schema = {
  include: {
    service: 'todoitems',
    namesAs: 'todoitems',
    parentField: 'id',
    childField: 'todolistsId',
  },
};

// const todoItems = require('../../models/todoitems.model');
const todoItems = require('../todoitems/todoitems.service');
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [discard('_include'), populate({schema})],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
