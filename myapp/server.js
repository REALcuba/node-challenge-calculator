const express = require("express");
const app = express();

app.get("/add", (req, res) => {
  const value1 = Number(req.query.value1);
  const value2 = Number(req.query.value2);

  let add = value1 + value2;
  res.send(`${add}`);
});

app.get("/substract", (req, res) => {
  const value1 = Number(req.query.value1);
  const value2 = Number(req.query.value2);

  let substract = value1 - value2;
  res.send(`${substract}`);
});

app.get("/multiply", (res, req) => {
  const value1 = Number(req.query.value1);
  const value2 = Number(req.query.value2);

  let div = value1 * value2;
  res.send(`${div}`);
});

app.get("/divide", (req, res) => {
  const value1 = Number(req.query.value1);
  const value2 = Number(req.query.value2);

  let multiply = value1 / value2;
  res.send(`${multiply}`);
});

// app.get("multiply/:value1=10/:value2=2", (req, res) => {
//   let div = Number(req.query.value1 * Number(req.query.value2));
//   res.send(`${div}`);
// });

// app.get("/add/:value1=10/:value2=2", (req, res) => {
//   let add = Number(req.query.value1 + Number(req.query.value2));
//   res.send(`${add}`);
// });
// app.get("/substract/:value1=10/:value2=2", (req, res) => {
//   let sub = Number(req.query.value1 - Number(req.query.value2));
//   res.send(`${sub}`);
// });
// app.get("/divide/:value1=10/:value2=2", (req, res) => {
//   let div = Number(req.query.value1 / Number(req.query.value2));
//   res.send(`${div}`);
// });

app.listen(3000, () => console.log("Server is up and running"));
