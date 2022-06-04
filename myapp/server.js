const express = require("express");
const app = express();

// app.get("/add", (req, res) => {
//   const value1 = Number(req.query.value1);
//   const value2 = Number(req.query.value2);

//   let add = value1 + value2;
//   res.send(`${add}`);
// });

// app.get("/substract", (req, res) => {
//   const value1 = Number(req.query.value1);
//   const value2 = Number(req.query.value2);

//   let substract = value1 - value2;
//   res.send(`${substract}`);
// });

// app.get("/multiply", (res, req) => {
//   const value1 = Number(req.query.value1);
//   const value2 = Number(req.query.value2);

//   let multiply = value1 * value2;
//   res.send(`${multiply}`);
// });

// app.get("/divide", (req, res) => {
//   const value1 = Number(req.query.value1);
//   const value2 = Number(req.query.value2);

//   let div = value1 / value2;
//   res.send(`${div}`);
// });

// app.get("/multiply/:value1/:value2", (req, res) => {
//   const value1 = Number(req.params.value1);
//   const value2 = Number(req.params.value2);
//   const multiply = value1 * value2;
//   res.send(`${multiply}`);
// });
// app.get("/div/:value1/:value2", (req, res) => {
//   const value1 = Number(req.params.value1);
//   const value2 = Number(req.params.value2);
//   const div = value1 / value2;
//   res.send(`${div}`);
// });
// app.get("/add/:value1/:value2", (req, res) => {
//   const value1 = Number(req.params.value1);
//   const value2 = Number(req.params.value2);
//   const add = value1 * value2;
//   res.send(`${add}`);
// });
// app.get("/substract/:value1/:value2", (req, res) => {
//   const value1 = Number(req.params.value1);
//   const value2 = Number(req.params.value2);
//   const substract = value1 * value2;
//   res.send(`${substract}`);
// });

//get by params operation
app.get("/:operation/:value1/:value2", (req, res) => {
  const value1 = Number(req.params.value1);
  const value2 = Number(req.params.value2);
  const operation = req.params.operation;
  if (operation === "add") {
    const add = value1 + value2;
    res.send(`${add}`);
  }
  if (operation === "substract") {
    const substract = value1 - value2;
    res.send(`${substract}`);
  }
  if (operation === "div") {
    const div = value1 / value2;
    res.send(`${div}`);
  }
  if (operation === "multiply") {
    const multiply = value1 * value2;
    res.send(`${multiply}`);
  }
});

app.listen(3000, () => console.log("Server is up and running"));
