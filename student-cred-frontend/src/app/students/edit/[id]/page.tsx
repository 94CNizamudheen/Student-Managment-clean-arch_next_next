import StudentList from '@/components/StudentList';
import Navbar from '@/components/Navbar';

// Student List page
export default function Students() {
  return (
    <div className="min-h-screen bg-gray-800">
      <Navbar />
      <StudentList />
    </div>
  );
}