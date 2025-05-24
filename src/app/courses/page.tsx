'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const courses = [
  {
    id: 1,
    title: 'Forex Trading Fundamentals',
    description: 'Learn the basics of forex trading and start your journey in the financial markets.',
    image: '/images/forex-trading.jpg',
    price: '$199',
    duration: '8 weeks',
    level: 'Beginner',
  },
  {
    id: 2,
    title: 'Advanced Stock Trading',
    description: 'Master advanced stock trading strategies and technical analysis.',
    image: '/images/stock-trading.jpg',
    price: '$299',
    duration: '12 weeks',
    level: 'Advanced',
  },
  {
    id: 3,
    title: 'Cryptocurrency Trading',
    description: 'Understand cryptocurrency markets and trading strategies.',
    image: '/images/crypto-trading.jpg',
    price: '$249',
    duration: '10 weeks',
    level: 'Intermediate',
  },
  {
    id: 4,
    title: 'Technical Analysis Mastery',
    description: 'Deep dive into technical analysis patterns and indicators.',
    image: '/images/technical-analysis.jpg',
    price: '$199',
    duration: '6 weeks',
    level: 'Intermediate',
  },
  {
    id: 5,
    title: 'Risk Management in Trading',
    description: 'Learn essential risk management strategies to protect your capital.',
    image: '/images/risk-management.jpg',
    price: '$149',
    duration: '4 weeks',
    level: 'All Levels',
  },
  {
    id: 6,
    title: 'Day Trading Strategies',
    description: 'Master day trading techniques and strategies for consistent profits.',
    image: '/images/day-trading.jpg',
    price: '$299',
    duration: '8 weeks',
    level: 'Advanced',
  },
];

export default function Courses() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Our Trading Courses
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Comprehensive courses designed to make you a successful trader
            </p>
          </div>

          {/* Filters */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              All Courses
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100">
              Beginner
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100">
              Intermediate
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100">
              Advanced
            </button>
          </div>

          {/* Course Grid */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                  <p className="mt-2 text-gray-500">{course.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-blue-600 font-bold text-2xl">{course.price}</span>
                      <span className="ml-2 text-gray-500">/ {course.duration}</span>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {course.level}
                    </span>
                  </div>
                  <div className="mt-6">
                    <Link
                      href={`/courses/${course.id}`}
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 