

// Load mysql2 module, for mysql 8.xx,
// if using mysql 5.xx, use mysql module
const mysql = require('mysql2');


// Create mysql db connection
const mysql_dbconnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "marketplace"
});

// Connect to mysql db
mysql_dbconnection.connect(function(err) {
    if (err) { throw err };
    console.log("Connected to MySQL DB!");
});

var query_str =
    "SELECT * " +
    "FROM user ";
var query = mysql_dbconnection.query(query_str, function(err, rows, fields) {
    if (err) { throw err; }
    else { console.log (rows);}

} );    

// Load HTTP module
const http = require("http");
const hostname = "localhost"; // can also use "127.0.0.1", which is the ip for localhost
const port = 3000;

//Create HTTP server and listen on port 3000 for incoming requests
const server = http.createServer((req, res) => {

  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Testing: Server is listening to request!\n');
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});