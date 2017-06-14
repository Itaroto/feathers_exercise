const assert = require('assert');
const app = require('../../src/app');

describe('\'todoitems\' service', () => {
  it('registered the service', () => {
    const service = app.service('todoitems');

    assert.ok(service, 'Registered the service');
  });
});
