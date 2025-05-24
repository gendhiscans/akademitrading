const express = require('express');
const Course = require('../models/Course');
const auth = require('../middleware/auth');
const router = express.Router();

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find()
      .populate('instructor', 'name')
      .select('-modules');
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching courses' });
  }
});

// Get single course by ID
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate('instructor', 'name')
      .populate('ratings.user', 'name');
    
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching course' });
  }
});

// Create new course (admin only)
router.post('/', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const course = new Course({
      ...req.body,
      instructor: req.user.id,
    });

    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: 'Error creating course' });
  }
});

// Update course (admin only)
router.put('/:id', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const course = await Course.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json(course);
  } catch (error) {
    res.status(500).json({ message: 'Error updating course' });
  }
});

// Delete course (admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const course = await Course.findByIdAndDelete(req.params.id);
    
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting course' });
  }
});

// Enroll in course
router.post('/:id/enroll', auth, async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Check if user is already enrolled
    if (course.enrolledStudents.includes(req.user.id)) {
      return res.status(400).json({ message: 'Already enrolled in this course' });
    }

    course.enrolledStudents.push(req.user.id);
    await course.save();

    res.json({ message: 'Successfully enrolled in course' });
  } catch (error) {
    res.status(500).json({ message: 'Error enrolling in course' });
  }
});

// Add rating and review
router.post('/:id/rate', auth, async (req, res) => {
  try {
    const { rating, review } = req.body;
    const course = await Course.findById(req.params.id);
    
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Check if user has already rated
    const existingRating = course.ratings.find(
      r => r.user.toString() === req.user.id
    );

    if (existingRating) {
      existingRating.rating = rating;
      existingRating.review = review;
    } else {
      course.ratings.push({
        user: req.user.id,
        rating,
        review,
      });
    }

    await course.save();
    res.json({ message: 'Rating added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding rating' });
  }
});

module.exports = router; 