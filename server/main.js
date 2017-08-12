import '../imports/api/tasks.js';


Meteor.publish('tasks', function() {
  return Tasks.find();
});