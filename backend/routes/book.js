const express = require("express");
const connection = require("../mysql");

router = express.Router();

// define POST API to insert data into customer table
router.post("/", (request, response) => {
  connection.query(
    `insert into Guests (FirstName, LastName, EmailAddress, gender, Country) 
    values (${request.body.FirstName},'${request.body.LastName}','${request.body.EmailAddress}',${request.body.gender}, ${request.body.Country} )`,
    (error, result) => {
      if (error) {
        console.log(error);
        response.send("Error Posting");
      } else {
        response.send("Saved Successfully");
      }
    }
  );
});

module.exports = router;
