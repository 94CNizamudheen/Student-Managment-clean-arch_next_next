'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { Student } from "@/types/students";
import { getAllStudents, deleteStudent } from "@/Services/api";

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [update,setUpdate]=useState(false)

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await getAllStudents();
        setStudents(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching students', error);
        setError("Failed to load students. Please try again.");
        setLoading(false);
      }
    };
    fetchStudents();
  }, [update]);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await deleteStudent(id);
        setStudents(students.filter(student => student.studentId !== id));
        setUpdate(!update)
      } catch (error) {
        console.error("Error deleting student", error);
        setError("Failed to delete student. Please try again.");
      }
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-12 text-center">
        <div className="flex justify-center items-center">
          <svg
            className="animate-spin h-8 w-8 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span className="ml-4 text-lg text-gray-600">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-800 animate-fade-in-up">
          Student List
        </h1>
        <Link
          href="/students/add"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Add Student
        </Link>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg animate-fade-in-up">
          {error}
        </div>
      )}

      {students.length === 0 ? (
        <div className="text-center text-gray-600 text-lg">
          No students found. <Link href="/students/add" className="text-blue-600 hover:underline">Add a student</Link> to get started.
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-700">
                <th className="p-4 text-left font-semibold">ID</th>
                <th className="p-4 text-left font-semibold">Name</th>
                <th className="p-4 text-left font-semibold">Class ID</th>
                <th className="p-4 text-left font-semibold">Parent ID</th>
                <th className="p-4 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr
                  key={student.studentId}
                  className="border-t border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="p-4">{student.studentId}</td>
                  <td className="p-4">{student.name}</td>
                  <td className="p-4">{student.classId}</td>
                  <td className="p-4">{student.parantId}</td>
                  <td className="p-4 flex gap-3">
                    <Link
                      href={`/students/edit/${student.studentId}`}
                      className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(student._id)}
                      className="text-red-600 hover:text-red-800 font-medium transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentList;