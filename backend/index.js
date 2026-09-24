const Student = require('../database/models/Student');
const connectDB = require('../database/db');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json());

connectDB();

const port = 5000;

// Test backend
app.get('/', (req, res) => {
  res.send('backend is running');
});

// Get all students
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    console.error('Error fetching students:', error.message);
    res.status(500).json({
      error: 'Internal Server Error'
    });
  }
});

// Create student
app.post('/students', async (req, res) => {
  try {
    const student = await Student.create({
      name: 'Akash',
      email: 'akash@example.com',
      phone: '9876543210',
      course: 'CSE',
      skills: ['C++', 'JavaScript']
    });

    res.json(student);
  } catch (error) {
    console.error('Error creating student:', error.message);
    res.status(500).json({
      error: error.message
    });
  }
});

// Login
app.post('/login', async (req, res) => {
  try {
    console.log("LOGIN REQUEST RECEIVED");
    const { email, password } = req.body;

    const student = await Student.findOne({
      email: email
    });

    if (!student) {
      return res.status(401).json({
        message: 'Email not registered'
      });
    }

    if (password !== '12345') {
      return res.status(401).json({
        message: 'Invalid password'
      });
    }

    res.json({
      message: 'Login successful',
      student: student
    });

  } catch (error) {
    console.error('LOGIN ERROR:', error);
    res.status(500).json({
      message: error.message
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});