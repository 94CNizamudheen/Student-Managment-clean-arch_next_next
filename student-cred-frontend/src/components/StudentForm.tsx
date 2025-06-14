'use client';

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Student } from "@/types/students";
import { createStudent, getStudentById, updateStudent } from "@/Services/api";

const StudentForm: React.FC = () => {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const [student, setStudent] = useState<Student>({
    _id: '',
    studentId: '',
    name: '',
    parantId: '',
    classId: '',
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchStudent = async () => {
        try {
          const data = await getStudentById(id);
          setStudent(data);
        } catch (error) {
          console.error("Error fetching student", error);
          setError("Failed to load student data. Please try again.");
        }
      };
      fetchStudent();
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
    setError(null); // Clear error on input change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await updateStudent(id as string, student);
      } else {
        await createStudent(student);
      }
      router.push('/');
    } catch (error) {
      console.error("Error saving student", error);
      setError("Failed to save student. Please check your inputs and try again.");
    }
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-lg">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center animate-fade-in-up">
        {id ? "Edit Student" : "Create Student"}
      </h1>

      {error && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg animate-fade-in-up">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-8 rounded-xl shadow-lg"
      >
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Student ID</label>
          <input
            type="text"
            name="studentId"
            value={student.studentId}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
              id ? "bg-gray-100 cursor-not-allowed" : "bg-white"
            }`}
            disabled={!!id}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Parent ID</label>
          <input
            type="text"
            name="parantId"
            value={student.parantId}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Class ID</label>
          <input
            type="text"
            name="classId"
            value={student.classId}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            required
          />
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => router.push('/')}
            className="px-6 py-2 text-gray-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            {id ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;