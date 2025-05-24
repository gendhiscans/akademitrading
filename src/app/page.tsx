import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  const featuredCourses = [
    {
      id: 1,
      title: 'Forex Trading Fundamentals',
      description: 'Learn the basics of forex trading and start your journey in the financial markets.',
      image: '/images/forex-trading.jpg',
      price: '$199',
    },
    {
      id: 2,
      title: 'Advanced Stock Trading',
      description: 'Master advanced stock trading strategies and technical analysis.',
      image: '/images/stock-trading.jpg',
      price: '$299',
    },
    {
      id: 3,
      title: 'Cryptocurrency Trading',
      description: 'Understand cryptocurrency markets and trading strategies.',
      image: '/images/crypto-trading.jpg',
      price: '$249',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative pt-16 pb-20 lg:pt-24 lg:pb-28">
            <div className="text-center lg:text-left">
              <h1 className="heading-1">
                <span className="block">Master Trading with</span>
                <span className="block text-blue-600">Professional Guidance</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Join our comprehensive trading courses and learn from experienced traders. Get access to real-time market analysis, trading strategies, and a supportive community.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/courses" className="btn-primary">
                  Get Started
                </Link>
                <Link href="/about" className="btn-secondary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="heading-2">
              Featured Courses
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose from our selection of professional trading courses
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredCourses.map((course) => (
                <div key={course.id} className="card">
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
                    <p className="mt-3 text-gray-600">{course.description}</p>
                    <div className="mt-6 flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                      <Link href={`/courses/${course.id}`} className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                        Learn More
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
