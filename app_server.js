


// mysql2 module, for mysql 8.xx,
// if using mysql 5.xx, use mysql module
// const mysql = require('mysql');
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



// Load modules
const app_server = require("express")();
// const http = require("http");
const hostname = "localhost"; // can also use "127.0.0.1", which is the ip for localhost
const port = 3000;

// Basic GET-route
app_server.get("/", (req, res) => {
  try {
    console.log("Base GET-route hit.");
    res.status(200).json({ message: "GET tested!" });
  } catch (err) {
    console.error(err.message);
  }
});

// Basic PUT-route
app_server.put("/", (req, res) => {
  try {
    console.log("Base PUT-route hit");
    res.status(200).json({ message: "PUT tested!" });
  } catch (e) {
    console.error(e.message);
  }
});

// Set default route, i.e. 404-page-not-found
app_server.use((req, res) => {
  res.status(404).json({ error: "Invalid route!" });
});

// Listen for request on port 3000, and as a callback function have the port listened on logged
app_server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});