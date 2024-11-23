const mysql = require("mysql2");

const pool = mysql.createPool({
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


module.exports = pool.promise();
