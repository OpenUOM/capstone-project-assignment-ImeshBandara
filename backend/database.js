const dbConnection = require("./sqlite");
const testBase = require("../backend/test/testBase");
dbConnection
    .getDbConnection()
    .then((db) => {
        init(db);
    })
    .catch((err) => {
        console.log(err);
        throw err;
    });

let _db;

function init(db) {
    _db = db;
}

const knex_db = require("./db-config");

const dbinitialize = async () => {
    testBase.resetDatabase(knex_db);
}

//ReadTeacherFuntionCreated.
const readTeachers = async () => {
    const sql = `SELECT * FROM teacher`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
//readTeacherInfo Function Created.
const readTeacherInfo = async (id) => {
    const sql = `SELECT * FROM teacher WHERE id = ?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

//AddTeacher Function Created.
const addTeacher = async (id, name, age) => {
    const sql = `INSERT INTO teacher(id,name,age) VALUES(?, ?, ?)`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id, name, age])
            .then((data) => {
                resolve(data)
            })
            .catch((error) => {
                reject(error);
            });
    });
}

//Update teacher Function Created.
const updateTeacher = async (name, age, id) => {
    const sql = `UPDATE teacher SET name=?, age=? WHERE id=?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [name, age, id])
            .then((data) => {
                resolve(data)
            })
            .catch((error) => {
                reject(error);
            });
    });
}
//DeleteTeacher Function Created.
const deleteTeacher = async (id) => {
    const sql = `DELETE FROM teacher WHERE id = ?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then((data) => {
                resolve(data)
            })
            .catch((error) => {
                reject(error);
            });
    });
}
//read Student Function  Created
const readStudents = async () => {
    const sql = `SELECT * FROM student`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
//ReadstudentInfo Function Created.
const readStudentInfo = async (id) => {
    const sql = `SELECT * FROM student WHERE id=?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
//Add student Function Created.
const addStudent = async (id, name, age, Hometown) => {
    const sql = `INSERT INTO student(id,name,age,Hometown) VALUES (?,?,?,?)`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id, name, age,Hometown])
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
//Update Student Function Created.
const updateStudent = async (id, name, age, Hometown) => {
    const sql = `UPDATE student SET name=?, age=?, Hometown=? WHERE id=?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id, name, age, Hometown])
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
//Database Function Created.
const deleteStudent = async (id) => {
    const sql = `DELETE FROM student WHERE id = ?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

module.exports = {
    readTeachers,
    readStudents,
    addStudent,
    addTeacher,
    deleteTeacher,
    deleteStudent,
    readStudentInfo,
    readTeacherInfo,
    updateStudent,
    updateTeacher,
    dbinitialize
};
