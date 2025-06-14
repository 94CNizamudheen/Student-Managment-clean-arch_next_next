import Navbar from "@/components/Navbar";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight animate-fade-in-up">
            Welcome to Student Management
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            Effortlessly manage student and teacher information with our streamlined school administration system.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in-up delay-200">
            <Link
              href="/students/list"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Students
            </Link>
            <Link
              href="/students/add"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Add Student
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Profiles</h3>
              <p className="text-gray-600">Easily create and manage detailed student profiles with all essential information.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Teacher Management</h3>
              <p className="text-gray-600">Organize teacher data and schedules for efficient school operations.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">User-Friendly Interface</h3>
              <p className="text-gray-600">Intuitive design for administrators to navigate and manage with ease.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-auto">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} School Management System. All rights reserved.</p>
          <div className="mt-4 flex justify-center gap-6">
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}