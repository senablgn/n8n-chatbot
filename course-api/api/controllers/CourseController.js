const courseService = require("../../business/CustomerService");
async function createCourse(req, res) {
    const course = req.body;
    const newCourse = await courseService.createCourse(course);
    res.status(201).json(newCourse);
}
async function getAllCourses(req, res) {
    const courses = await courseService.getAllCourses();
    res.status(200).json(courses);
}
module.exports = { createCourse, getAllCourses };