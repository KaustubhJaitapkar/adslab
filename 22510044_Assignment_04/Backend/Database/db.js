import mysql from 'mysql2'


const db = mysql.createPool({
    host : "localhost",
    database : "Exam",
    user: "root",
    password: "22510044"
})


export default db