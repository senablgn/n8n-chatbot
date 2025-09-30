const { pool } = require("../db/init-db");
 
async function createCourse(course) {
    const query = `INSERT INTO courses (course_name, contact_email, contact_phone_number, branch_city) VALUES ($1, $2, $3, $4) RETURNING *`;
    const values = [course.courseName, course.contactEmail, course.contactPhoneNumber, course.branchCity];
    const result = await pool.query(query, values);
    return result.rows[0];
}
async function getAllCourses() {
    const query = `SELECT * FROM courses`;
    const result = await pool.query(query);
    return result.rows;
}
module.exports = {
    getAllCourses,
    createCourse,
};