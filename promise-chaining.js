require("../task-manager/src/db/mongoose");
const User = require("../task-manager/src/models/user");

//5ff669abc20e7f3ab08f7210

// User.findByIdAndUpdate("5ff7cc73ce4e6331f89f06c9", { age: 1 })
//   .then((user) => {
//     console.log(user);

//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5ff7cc73ce4e6331f89f06c9", 2)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
