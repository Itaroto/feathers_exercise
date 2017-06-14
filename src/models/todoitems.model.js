// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const todoitems = sequelizeClient.define('todoitems', {
    text: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  todoitems.associate = function(models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/

  };

  return todoitems;
};
