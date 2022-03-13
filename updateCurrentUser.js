// const mongoose = require("mongoose");
// const m_model = require("./userModel");

// updateCurrentUser = async (currentUserID, data_to_update) => {
//   const filter = { id: currentUserID };
//   const update = { name: "Mosh", age: 25 };
//   let doc = await m_model.findOne(filter);

//   // Check if document is Exist and if not create new one .
//   if (doc != undefined) {
//     try {
//       doc = await m_model.findOneAndUpdate(filter, update);
//       let doc_after = await m_model.findOne(filter);
//       console.log("document after change -> " + doc_after);
//     } catch (error) {
//       console.log(error);
//     }
//   } else {
//     try {
//       let doc_new = await m_model.create({
//         id: currentUserID,
//         name: "Mosh",
//         age: 22,
//         gender: "Male",
//         email: "test@22.com",
//         phone: 050215641,
//       });
//       console.log("document create -> " + doc_new);
//     } catch (error) {
//       console.log(error);
//     }
//   }
// };

// start = async () => {
//   await updateCurrentUser(412);
//   mongoose.connection.close();
// };

// start();

// Please comment out all your code when you are finished.
