const addRelationShip = require('../../hooks/add-relation');
const userFind = require('../../hooks/user-find-hook');
const {populate, debug} = require('feathers-hooks-common');
// const {populate, debug} = require('feathers-hooks-common');

const schema = {
  include: {
    service: 'tasks',
    nameAs: 'tasks',
    parentField: 'id',
    childField: 'studentId',
  },
};

const addRelation = require('../../hooks/add-relation');

module.exports = {

  before: {
    all: [addRelation()],
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
