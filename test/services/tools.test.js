const assert = require('assert');
const app = require('../../src/app');

describe('\'tools\' service', () => {
  it('registered the service', () => {
    const service = app.service('tools');

    assert.ok(service, 'Registered the service');
  });
});
