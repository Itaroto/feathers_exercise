const {populate} = require('feathers-hooks-common');
const relation = require('../../hooks/task-find-hook');

const schema = {
  include: {
    service: 'students',
    nameAs: 'students',
    parentField: 'studentId',
    childField: 'id',
  },

};

module.exports = {

  before: {
    all: [relation()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
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
