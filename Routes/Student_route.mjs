import { Router } from "express";
import Student from "../DB/Shema.mjs";

const router = Router();

// GET all students
router.get("/api/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.send(students);
  } catch (err) {
    res.status(500).send({ msg: "Server Error" });
  }
});

// GET one student by custom id
router.get("/api/students/:id", async (req, res) => {
  try {
    const ID = parseInt(req.params.id);

    const student = await Student.find({ id: ID });

    if (student.length === 0) {
      return res.status(404).send({ msg: "Student Not Found" });
    }

    res.json(student);
  } catch (err) {
    res.status(400).send({ msg: "Invalid Request" });
  }
});

// POST - Create student
router.post("/api/students", async (req, res) => {
  try {
    const { id, name, email, password, department } = req.body;

    const student = new Student({
      id,
      name,
      email,
      password,
      department,
    });

    await student.save();
    res.status(201).send(student);
  } catch (err) {
    res.status(400).send({ msg: "Bad request", error: err.message });
  }
});

// PUT - Update full data
router.put("/api/students/:id", async (req, res) => {
  try {
    const ID = parseInt(req.params.id);

    const update = await Student.findOneAndUpdate(
      { id: ID },
      { $set: req.body },
      { new: true }
    );

    if (!update) {
      return res.status(404).send({ msg: "Student Not Found" });
    }

    res.send(update);
  } catch (err) {
    res.status(400).send({ msg: "Bad request", error: err.message });
  }
});

// DELETE - Remove student
router.delete("/api/students/:id", async (req, res) => {
  try {
    const ID = parseInt(req.params.id);

    if (isNaN(ID)) {
      return res.status(400).send({ msg: "Invalid ID format" });
    }

    const student = await Student.findOneAndDelete({ id: ID });

    if (!student) {
      return res.status(404).send({ msg: "Student Not Found" });
    }

    res.send({ msg: "Student Deleted Successfully" });
  } catch (err) {
    res.status(400).send({ msg: "Bad request" });
  }
});

export default router;
