// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function(options = {}) { // eslint-disable-line no-unused-vars
  return function(hook) {
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    const students = hook.app.service('students').Model;

    hook.params.sequelize = {
      include: [{model: students}],
    };

    return Promise.resolve(hook);
  };
};
