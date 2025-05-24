import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Mulai Perjalanan Trading Anda Bersama Kami
              </h1>
              <p className="text-lg mb-8">
                Pelajari trading dari para ahli dan mulai perjalanan Anda menuju kebebasan finansial.
              </p>
              <Link href="/courses" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                Mulai Belajar
              </Link>
            </div>
            <div className="hidden md:block relative h-[400px]">
              <Image
                src="https://placehold.co/1200x800/0284c7/FFFFFF/png?text=Trading+Hero"
                alt="Trading Academy"
                fill
                className="rounded-lg shadow-xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Mengapa Memilih Kami?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-48 mb-6">
                <Image
                  src="https://placehold.co/800x600/0284c7/FFFFFF/png?text=Professional+Mentors"
                  alt="Mentor Berpengalaman"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mentor Berpengalaman</h3>
              <p className="text-gray-600">Belajar dari trader profesional dengan pengalaman bertahun-tahun di pasar.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-48 mb-6">
                <Image
                  src="https://placehold.co/800x600/0284c7/FFFFFF/png?text=Structured+Curriculum"
                  alt="Materi Terstruktur"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Materi Terstruktur</h3>
              <p className="text-gray-600">Kurikulum yang dirancang sistematis dari dasar hingga mahir.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-48 mb-6">
                <Image
                  src="https://placehold.co/800x600/0284c7/FFFFFF/png?text=Flexible+Learning"
                  alt="Belajar Fleksibel"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Belajar Fleksibel</h3>
              <p className="text-gray-600">Akses materi kapan saja dan di mana saja sesuai kebutuhan Anda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Kursus Unggulan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Dasar Trading untuk Pemula',
                description: 'Pelajari konsep dasar dan fundamental trading.',
                image: 'https://placehold.co/800x400/0284c7/FFFFFF/png?text=Basic+Trading'
              },
              {
                title: 'Analisis Teknikal',
                description: 'Kuasai teknik analisis grafik dan indikator.',
                image: 'https://placehold.co/800x400/0284c7/FFFFFF/png?text=Technical+Analysis'
              },
              {
                title: 'Trading Psychology',
                description: 'Pahami dan kuasai psikologi trading.',
                image: 'https://placehold.co/800x400/0284c7/FFFFFF/png?text=Trading+Psychology'
              }
            ].map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <Link href={`/courses/${index + 1}`} className="text-blue-600 font-semibold hover:text-blue-800">
                    Pelajari Lebih Lanjut →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 