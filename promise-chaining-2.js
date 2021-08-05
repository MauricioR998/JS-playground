require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("5ff753ca189dcd0bec84f99f")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("5ff663fef8897e3cc822c319")
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
