import Navbar from '@/components/Navbar';
import StudentList from '@/components/StudentList';

export default function ShowStudents(){
    return(
          <div className="min-h-screen bg-gray-800">
      {/* Navigation Bar */}
      <Navbar />
      {/* Student Form */}
      <StudentList />
    </div>
    )
}