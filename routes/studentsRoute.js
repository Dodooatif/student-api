const express = require("express")
const{ createStudent, getAllStudents, getSingleStudent, updateStudent, deleteStudent } = require("../controllers/studentsController")
//const protect = require("../middlewares/authMiddleware")
const router = express.Router()

router.route("/").post(createStudent).get(getAllStudents)
router.route("/:_id").get(getSingleStudent).put(updateStudent).delete(deleteStudent)

module.exports = router;
