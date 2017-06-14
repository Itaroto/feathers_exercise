const assert = require('assert');
const app = require('../../src/app');

describe('\'todolists\' service', () => {
  it('registered the service', () => {
    const service = app.service('todolists');

    assert.ok(service, 'Registered the service');
  });
});
