"use strict";
require("dotenv").config();

const express = require("express");
const app = express();
const { createTable } = require("./db/init-db");
const customersController = require("./controllers/CustomersController");
const PORT = 3000;

app.use(express.json());

app.post("/customer", customersController.createCustomer);
app.get("/customer/name", customersController.getCustomerByName);
app.get("/customer/:id", customersController.getCustomerById);
app.put("/customer/update/:id", customersController.updateCustomer);
app.delete("/customer/delete/:id", customersController.deleteCustomer);
app.get("/users", customersController.getAllUsers);
app.post("/user/:id", customersController.addCourseToUser);

createTable()
  .then(() => {
    app.listen(PORT, () => {
      console.log(` Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
