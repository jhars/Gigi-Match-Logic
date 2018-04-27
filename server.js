const pg = require("pg");
// const client = new Client();
const promise = require("promise");
const pgPromise = require("pg-promise");

const connectionString = process.env.DATABASE_URL || "postgres://localhost:5432/todo-gigi-node-psql";

const client = new pg.Client(connectionString);


client.connect();


const queryString = "INSERT INTO users(user_type) VALUES('parent')"
// ("parent", { hourly_pay_rate: 10.00, schedule: {}, super_power_preferences_ids: [0001, 0002, 0003], social: {}, location {}, pid: {fname: "jon", lname: "harlan", phone: "2484449837", email: "jharlan.dev@gmail.com" }},{} "

client.query(queryString, (err, res) => {
  console.log("hello world 01")
  console.log(err ? err.stack : res.rows) // Hello World!
  console.log("hello world 02")
  // client.end()
});


// user_type
// parent_data
// sitter_data

//################################################################################//

// function(req, res) {
//     connectionString.tx(t => { // automatic BEGIN

//     t.one("INSERT_1 VALUES(...) RETURNING id", paramValues).then(data => {
//                     var q = t.none("INSERT_2 VALUES(...)", data.id);
//                     if (req.body.value != null) {
//                         return q.then(()=> t.none("INSERT_3 VALUES(...)", data.id));
//                     }
//                     return q;
//                 });
//         })
//         .then(data => {
//             res.send("Everything"s fine!"); // automatic COMMIT was executed
//         })
//         .catch(error => {
//             res.send("Something is wrong!"); // automatic ROLLBACK was executed
//         });
// }









//TEST COMMIT
