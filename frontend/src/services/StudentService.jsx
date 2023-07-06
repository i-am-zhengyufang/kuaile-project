import axios from 'axios'

const STUDENT_BASE_REST_API_URL = "http://localhost:8080/api/v1/smpstudents";

class StudentService{



    getAllStudents(){
        return axios.get(STUDENT_BASE_REST_API_URL)
    }

    createStudent(student){
        return axios.post(STUDENT_BASE_REST_API_URL,student)
    }

    getStudentById(customerId){
        return axios.get(STUDENT_BASE_REST_API_URL + "/" + customerId)
    }

    updateStudent(customerId,customer){
        return axios.put(STUDENT_BASE_REST_API_URL + "/" + customerId,customer)

    }
    getStudentByStudentId(employeesId){
        return axios.get(STUDENT_BASE_REST_API_URL + "/getByEmployee/" + employeesId)
    }

    deleteStudent(customerId){
        return axios.delete(STUDENT_BASE_REST_API_URL + "/" + customerId);
    }

}

export default new StudentService();