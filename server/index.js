require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Student = require("./models/Student");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("DB Error:", err));

// GET all
app.get("/api/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// GET one
app.get("/api/students/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (student) res.json(student);
  else res.status(404).json({ error: "Not found" });
});

// CREATE
app.post("/api/students", async (req, res) => {
  const newStudent = new Student(req.body);
  await newStudent.save();
  res.status(201).json(newStudent);
});

// UPDATE
app.put("/api/students/:id", async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.json({ success: true });
});

// DELETE
app.delete("/api/students/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on http://localhost:${process.env.PORT}`)
);
