const express = require('express')
const mysql = require('mysql')
const app = express();
const dotenv = require('dotenv');


// Create a MySQL connection
const con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "samplejs"
});

const port = process.env.PORT || 8000;

function requestNew() {
  
  
  let data;
  con.query("SELECT * FROM words", function (err, results) {
      if (err) throw err;
      console.log("Result: " + results);
      data = results;
      console.log("Data is " + data)
        
      })

  return data;
    

  
  
  
  
}




const fetchDummy = () => {
  return "Dummy data";
}






con.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
   
});


// Set response for landing page
app.get('/', (req, res) => {
  res.end('<h1>Hello World!</h1>')
  
});

// Fetch query results from database
app.get('/data', (req, res) => {

  let data;
  con.query("SELECT * FROM words", function (err, results) {
      if (err) throw err;
      console.log("Result: " + results);
      data = results;
      console.log("Data is " + data)
        
      })
  
  setTimeout( () => {
    res.send(data);

  }, 2000)

  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

