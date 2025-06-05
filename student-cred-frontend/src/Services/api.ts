import axios from "axios";
import { Student } from "@/types/students";

const API_URL= `http://localhost:3001/students`

export const createStudent= async(student:Student):Promise<Student>=>{
    const response= await axios.post(API_URL,student);
    return response.data
}

export const getAllStudents=async():Promise<Student[]>=>{
    const response= await axios.get(API_URL);
    console.log(response.data)
    return response.data;
}

export const getStudentById=async(id:string):Promise<Student>=>{
    const response= await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const deleteStudent=async(id:string):Promise<boolean>=>{
    const response= await axios.delete(`${API_URL}/${id}`);
    return response.data
}

export const updateStudent=async(id:string,data:Student):Promise<Student>=>{
    const response = await axios.put(`${API_URL}/${id}`,data);
    return response.data
}