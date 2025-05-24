import Image from "next/image";
import Link from 'next/link';
import Navbar from '@/components/Navbar';

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
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Master Trading with</span>
                  <span className="block text-blue-600">Professional Guidance</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Join our comprehensive trading courses and learn from experienced traders. Get access to real-time market analysis, trading strategies, and a supportive community.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link href="/courses" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                      Get Started
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link href="/about" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Featured Courses Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Featured Courses
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Choose from our selection of professional trading courses
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredCourses.map((course) => (
                <div key={course.id} className="bg-white overflow-hidden shadow-lg rounded-lg">
                  <div className="relative h-48">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="px-6 py-4">
                    <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                    <p className="mt-2 text-gray-500">{course.description}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-blue-600 font-bold">{course.price}</span>
                      <Link href={`/courses/${course.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
