module.exports = app => {
  const employee = require("../controllers/employee.controller.js");

  var router = require("express").Router();


  router.post("/create", employee.create);

  router.get("/", employee.find);

  router.get("/read/:id", employee.findById);

  router.put("/update/:id", employee.findByIdAndUpdate);


  router.delete("/delete/:id", employee.findOneAndRemove);

  app.use("/api/employee", router);
};