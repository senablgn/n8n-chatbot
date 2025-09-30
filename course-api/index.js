const express = require("express");
const app = express();
const PORT = 3002;
const { createCourse, getAllCourses } = require("./api/controllers/CourseController");
const { createTable } = require("./db/init-db");
app.use(express.json());
app.post("/courses", createCourse);
app.get("/courses", getAllCourses);
createTable()
  .then(() => {
    app.listen(PORT, () => {
      console.log(` Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Hata:", error);
  });   



