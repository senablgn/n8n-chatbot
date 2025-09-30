const courseRepository = require("../repository/CourseRepository");
const Course = require("../entities/Course");
async function createCourse(course) {
    return await courseRepository.createCourse(course);
}
async function getAllCourses() {
    return await courseRepository.getAllCourses();
}
module.exports = {
    createCourse,
    getAllCourses,
};