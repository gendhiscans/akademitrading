import Image from 'next/image'
import Link from 'next/link'

const courses = [
  {
    id: 1,
    title: 'Dasar Trading untuk Pemula',
    description: 'Pelajari konsep dasar trading, analisis teknikal, dan manajemen risiko.',
    level: 'Pemula',
    duration: '8 minggu',
    price: 'Rp 2.499.000',
    image: '/images/course-1.jpg',
  },
  {
    id: 2,
    title: 'Analisis Teknikal Lanjutan',
    description: 'Pelajari strategi trading lanjutan dan indikator teknikal kompleks.',
    level: 'Menengah',
    duration: '10 minggu',
    price: 'Rp 3.499.000',
    image: '/images/course-2.jpg',
  },
  {
    id: 3,
    title: 'Trading Psychology Masterclass',
    description: 'Kuasai aspek psikologi trading dan manajemen emosi.',
    level: 'Lanjutan',
    duration: '6 minggu',
    price: 'Rp 2.999.000',
    image: '/images/course-3.jpg',
  },
  {
    id: 4,
    title: 'Strategi Swing Trading',
    description: 'Pelajari teknik swing trading untuk hasil optimal.',
    level: 'Menengah',
    duration: '8 minggu',
    price: 'Rp 2.799.000',
    image: '/images/course-4.jpg',
  },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kursus Trading</h1>
          <p className="text-lg text-gray-600">
            Pilih kursus yang sesuai dengan level dan tujuan trading Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={course.image}
                  alt={course.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Level: {course.level}</span>
                  <span className="text-sm text-gray-500">Durasi: {course.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600">{course.price}</span>
                  <Link
                    href={`/courses/${course.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Daftar Sekarang
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 