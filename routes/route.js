const Student = require("../models/student");
const router = require("express").Router();

// post the data
router.post("/student", (req, res) => {
    let body = req.body;
    const student = new Student({
        firstName: body.firstName,
        lastName: body.lastName,
        age: body.age,
        class: body.class
    })
    student
        .save(student)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
})

// get all the data
router.get("/allData", (req, res) => {
    Student.find()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
})

// get data by id
router.get("/:id", (req, res) => {
    const id = req.params.id;
    Student.findById(id)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
})

// update data by id
router.put("/update/:id", (req, res) => {
    const id = req.params.id;
    Student.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            res.json({
                message: "data has updated successfully",
                data
            })
        })
        .catch(err => {
            res.send(err)
        })
})

// data delete by id
router.delete("/delete/:id", (req, res) => {
    const id  = req.params.id;
    Student.findByIdAndRemove(id)
    .then(data => {
        res.send("data has deleted successfully");
    })
    .catch(err => {
        res.send(err);
    })
})

// all data delete
router.delete("/deleteAllData", (req, res) => {
    Student.deleteMany()
    .then(data => {
        res.send("data has deleted successfully")
    })
    .catch(err => {
        res.send(err)
    })
})

module.exports = router;
