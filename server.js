const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db/database.js")
const cors =require ('cors');
const app = express();
const port = 5001;



app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/registration", (req, res) => {
    var registerArray = [
      req.body.name,
      req.body.favorite_color,
      req.body.pet_type,
    ];
    db.Register(registerArray, (err, data) => {
      err? res.send("duplicated"):res.send({data});
    });
  });


  app.listen(port, () => console.log(`server is listening on port ${port}`));