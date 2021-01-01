const express = require('express')
const mysql = require('mysql')
const app = express();
const port = 8000;


// Create a MySQL connection
const con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "samplejs"
});


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



app.get('/', (req, res) => {
  res.send('Hello World!')
  
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

