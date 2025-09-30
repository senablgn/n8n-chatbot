const { pool } = require('../db/init-db')

async function createCustomer({
  firstName,
  lastName,
  email,
  phoneNumber,
  courses_of_interest,
  sessionId
}) {
  const query = `
    INSERT INTO users (
      first_name,
      last_name,
      email,
      phone_number,
      courses_of_interest,
      session_id
    )
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING id, created_at;
  `;

  const values = [
    firstName,
    lastName,
    email,
    phoneNumber,
    courses_of_interest, // TEXT[]
    sessionId
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
}





async function getCustomerById(id) {
  const query = 'SELECT * FROM users WHERE id = $1 ;';
  const values = [id];
  const result = await pool.query(query, values);
  return result.rows[0];
}


async function getCustomerByName(firstName) {
  const query = 'SELECT * FROM users WHERE first_name = $1 ;';
  const values = [firstName];  ////////

  const result = await pool.query(query, values);
  return result.rows;
}



async function updateCustomer(id, field, value) {
  let query = `UPDATE users SET ${field} = $1 WHERE id = $2 RETURNING *;`;


  let values = [value, id];
  const result = await pool.query(query, values);
  return result.rows[0];


}


async function deleteCustomer(id) {
  let query = 'delete from users where id=$1 RETURNING *;';
  let value = [id];
  const result = await pool.query(query, value);
  return result.rows[0];
}


async function getAllUsers() {
  const query = 'SELECT * FROM users;';
  const result = await pool.query(query);
  return result.rows;
}


async function addCourseToUser(userId, courseName) {
  const query = `
    UPDATE users
    SET courses_of_interest = array_append(courses_of_interest, $1)
    WHERE id = $2;
  `;
  await pool.query(query, [courseName, userId]);
}



module.exports = { createCustomer, getCustomerById, updateCustomer, deleteCustomer, getAllUsers, getCustomerByName, addCourseToUser }
