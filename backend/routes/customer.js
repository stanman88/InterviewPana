const express = require("express");
const connection = require("../mysql");

router = express.Router();
// define the first get API
router.get("/", (request, response) => {
  connection.query("select * from Guests", (error, result) => {
    if (error) {
      console.log(error);
      response.send("Some error occurred");
    } else {
      response.send(result);
    }
  });
});

// definer get customer by id API
router.get("/id", (request, response) => {
  // Validate the request parameters
  if (request.body.ID == null) {
    response.send("[ERROR] ID is blank");
  } else if (!Number.isInteger(request.body.ID)) {
    response.send("[ERROR] Value is not an integer");
  } else {
    connection.query(
      `select * from Guests where ID = ${request.body.ID}`,
      (error, result) => {
        if (error) {
          console.log(error);
          response.send("No Such ID");
        } else {
          response.send(result);
        }
      }
    );
  }
});

router.get("/name", (request, response) => {
  connection.query(
    `select * from Guests where LastName = '${request.body.LastName}'`,
    (error, result) => {
      if (error) {
        console.log(error);
        response.send("No Such Last Name");
      } else {
        response.send(result);
      }
    }
  );
});

router.get("/gender", (request, response) => {
  connection.query(
    `select * from Guests where gender = '${request.body.gender}'`,
    (error, result) => {
      if (error) {
        console.log(error);
        response.send("No Such gender");
      } else {
        response.send(result);
      }
    }
  );
});

router.get("/country", (request, response) => {
  connection.query(
    `select * from Guests where Country = '${request.body.Country}'`,
    (error, result) => {
      if (error) {
        console.log(error);
        response.send("No Such Country");
      } else {
        response.send(result);
      }
    }
  );
});



module.exports = router;
