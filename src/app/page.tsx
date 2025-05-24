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
      <section className="relative bg-gradient-to-r from-white to-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
              <h1 className="heading-1 mb-8">
                <span className="block mb-2">Master Trading with</span>
                <span className="block text-blue-600">Professional Guidance</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10">
                Join our comprehensive trading courses and learn from experienced traders. Get access to real-time market analysis, trading strategies, and a supportive community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/courses" className="btn-primary text-center">
                  Get Started
                </Link>
                <Link href="/about" className="btn-secondary text-center">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">
              Featured Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our selection of professional trading courses
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course) => (
              <div key={course.id} className="card group">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:opacity-90 transition-opacity"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                    <Link 
                      href={`/courses/${course.id}`} 
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
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
      </section>
    </div>
  );
}
