
import StudentForm from '@/components/StudentForm';
import Navbar from '@/components/Navbar';

// Add Student page
export default function AddStudent() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <Navbar />
      {/* Student Form */}
      <StudentForm />
    </div>
  );
}