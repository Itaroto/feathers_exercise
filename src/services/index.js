const students = require('./students/students.service.js');
const courses = require('./courses/courses.service.js');
const tasks = require('./tasks/tasks.service.js');
const tools = require('./tools/tools.service.js');
const todolists = require('./todolists/todolists.service.js');
const todoitems = require('./todoitems/todoitems.service.js');
module.exports = function() {
  const app = this; // eslint-disable-line no-unused-vars

  app.configure(students);

  // app.configure(courses);

  app.configure(tasks);

  app.configure(tools);
  app.configure(todolists);
  app.configure(todoitems);
};
