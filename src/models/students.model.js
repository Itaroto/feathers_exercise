// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const students = sequelizeClient.define('students', {
    firstname: {
      type: Sequelize.STRING,
    },
    lastname: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.TEXT,
    },
    phone: {
      type: Sequelize.STRING,
    },
  });

  students.associate = function(models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    students.hasMany(models.tasks);
    // students.hasMany(models.tools, {as: 'Instruments'});
  };

  return students;
};
