// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const tools = sequelizeClient.define('tools', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  tools.associate = function(models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return tools;
};
