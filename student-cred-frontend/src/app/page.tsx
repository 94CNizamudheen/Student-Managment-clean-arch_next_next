import Navbar from "@/components/Navbar";
import Link from 'next/link';
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Student Management
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Manage student and teacher information easily.
            Streamline your school administration with our system.
          </p>
          <div className="space-x-4">
            <Link href='/students'  className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">Show students list</Link>
            <Link href='/students/add'  className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">Create a new Student</Link>
          </div>
        </div>
      </section>
         <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 School Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}