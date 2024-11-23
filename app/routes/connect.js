let mysql = require("mysql");
let conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "siit_library",

  /*
  host: "localhost",
  user: "root",
  password: "",
  database: "db_library",
  */
});

conn.connect((err) => {
  if (err) throw err;
  console.log("connected to database");
});

module.exports = conn;
