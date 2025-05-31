
'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { Student } from "@/types/students";
import { getAllStudents, deleteStudent } from "@/Services/api";


const StudentList: React.FC = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const data = await getAllStudents();
                setStudents(data);
                setloading(false);
            } catch (error) {
                console.error('Error for fetching students', error);
                setloading(false);
            }
        }
        fetchStudents()
    }, [])

    const handleDelete = async (id: string) => {
        try {
            await deleteStudent(id);
            setStudents(students.filter(students => students.id !== id))
        } catch (error) {
            console.error("Error for delete student", error)
        }
    }
    if (loading) {
        return <div className="text-center mt-10" >Loading...</div>
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Student list</h1>
            <Link href='../students/add' ></Link>
            <table className="w-full border-collapse border border-gray-300" >
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">ID</th>
                        <th className="border border-gray-300 p-2">Name</th>
                        <th className="border border-gray-300 p-2">Class ID</th>
                        <th className="border border-gray-300 p-2">Parant ID</th>
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td className="border border-gray-300 p-2">{student.id}</td>
                            <td className="border border-gray-300 p-2">{student.name}</td>
                            <td className="border border-gray-300 p-2">{student.classId}</td>
                            <td className="border border-gray-300 p-2">{student.parantId}</td>
                            <td className="border border-gray-300 p-2">
                                <Link href='../students/edit' className="text-blue-500 mr-2">Edit</Link>
                                <button onClick={()=>handleDelete(student.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default StudentList
