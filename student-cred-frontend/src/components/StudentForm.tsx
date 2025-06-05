'use client';

import { useState, useEffect } from "react";
import { useRouter,useParams } from "next/navigation";
import { Student } from "@/types/students";
import { createStudent,getStudentById,updateStudent } from "@/Services/api";

import React from 'react'

const StudentForm:React.FC = () => {
    const router= useRouter();
    const {id}= useParams<{id:string}>()
    const [student,setStudent]= useState<Student>({
        id:'',
        name:'',
        parantId:'',
        classId:'',
    })
    
    useEffect(()=>{
        if(id){
            const fetchStudent= async()=>{
                try {
                    const data= await getStudentById(id);
                    setStudent(data)
                } catch (error) {
                    console.error("Error fetching student",error)
                }
            }
            fetchStudent()
        }
    },[id])

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setStudent({...student,[e.target.name]:e.target.value});
    }

    const handleSubmit= async(e:React.FormEvent)=>{
        e.preventDefault();
        try {
            if(id){
                await updateStudent(id as string,student)
            }else{
                await createStudent(student)
            }
            router.push('/')
        } catch (error) {
            console.error("Error saving student",error)
        }
    }


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{id ? "Student Edit" : "Create Student"} </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label className="block text-sm font-medium" >ID</label>
            <input type="text" name="id" value={student.id} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" 
            disabled={!!id} required/>
        </div>
        <div>
            <label className="block text-sm font-medium" >Name</label>
            <input type="text" name="name" value={student.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded"
            required />
        </div>
        <div>
            <label className="block text-sm font-medium" >ParantId</label>
            <input type="text" name="parantId" value={student.parantId} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded"
            required />
        </div>
           <div>
            <label className="block text-sm font-medium" >Class Id</label>
            <input type="text" name="classId" value={student.classId} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded"
            required />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" >{id ? "Update" : "Save"}</button>
      </form>
    </div>
  )
}

export default StudentForm
