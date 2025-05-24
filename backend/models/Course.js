const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  level: {
    type: String,
    enum: ['Pemula', 'Menengah', 'Lanjutan'],
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  modules: [{
    title: String,
    description: String,
    videoUrl: String,
    duration: String,
    order: Number,
  }],
  enrolledStudents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  ratings: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    review: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }],
  averageRating: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update timestamps before saving
courseSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Calculate average rating before saving
courseSchema.pre('save', function(next) {
  if (this.ratings.length > 0) {
    const sum = this.ratings.reduce((acc, curr) => acc + curr.rating, 0);
    this.averageRating = sum / this.ratings.length;
  }
  next();
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course; 