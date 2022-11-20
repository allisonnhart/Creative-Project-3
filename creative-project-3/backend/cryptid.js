const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

let cryptid = [];
let description = [];
let id = 0;
let stats = 0;

app.get('/api/cryptid', (req, res) => {
  console.log("In get");
  res.send(cryptid);
});

app.post('/api/cryptid', (req, res) => {
  console.log("In post");
  id = id + 1;
  let cryptidCharacter = {
    cryptidName: req.body.cryptidName,
    describe: req.body.describe,
    id: id,
    stats: req.body.stats
  };
  cryptid.push(cryptidCharacter);
  res.send(cryptidCharacter);
});

app.delete('/api/cryptid/:id', (req, res) => {
  console.log("In delete");
  let id = parseInt(req.params.id);
  let removeIndex = cryptid.map(cryptidCharacter => {
      return cryptidCharacter.id;
    })
    .indexOf(id);
  if (removeIndex === -1) {
    res.status(404)
      .send("Sorry, that cryptid isn't in our registry yet");
    return;
  }
  cryptid.splice(removeIndex, 1);
  res.sendStatus(200);
});

app.listen(3000, () => console.log('Server listening on port 3000!'));