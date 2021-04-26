const Student = require("../models/studentSchema")

//adding new student
const createStudent = async (req,res) => {
    const newStudent = new Student({
        name: req.body.name,
        gender: req.body.gender,
        email: req.body.email,
        level: req.body.level
    });

    await newStudent.save()
    res.status(201).json(newStudent);
}
//get all students
const getAllStudents = async (req,res) => {
    const students = await Student.find()
    res.json(students)
}
//get a student
const getSingleStudent = async (req,res) => {
    const student = await Student.findById(req.params._id)
    res.json(student)
}
//update a customer
const updateStudent =async (req, res) =>{
    const foundStudent = await Customer.findById(req.params._id)
    if (foundStudent) {
        (foundStudent.name = req.body.name),
        (foundStudent.gender = req.body.gender),
        (foundStudent.email = req.body.email),
        (foundStudent.level = req.body.level)
        
        const updatedStudent = await foundStudent.save()
        res.json({updatedStudent})
    }
}

// delete a student
const deleteStudent = async (req,res) => {
    const foundStudent = await Student.findById(req.params._id)
    if (foundStudent) {
        foundStudent.remove()
        res.json((`msg: ${foundStudent.name} removed`))
    } else {
        res.status(404).json({error: "Student not found"})
    }
}

module.exports = {createStudent, getAllStudents, getSingleStudent, updateStudent, deleteStudent };