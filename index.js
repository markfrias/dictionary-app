const express = require('express')
const mysql = require('mysql')
const app = express();
const port = 8000;

// Create a MySQL connection
const con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: ""
});

con.connect(function(err) {
   if (err) throw err;
console.log("Connected!");
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

