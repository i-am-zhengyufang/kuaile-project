import axios from 'axios'

const COURSE_BASE_REST_API_URL = "http://localhost:8080/api/v1/course";

class CourseService{



    getAllCourse(){
        return axios.get(COURSE_BASE_REST_API_URL)
    }

    create(course){
        return axios.post(COURSE_BASE_REST_API_URL,course)
    }

    getCourseById(courseId){
        return axios.get(COURSE_BASE_REST_API_URL + "/" + courseId)
    }

    updateCourse(courseId,course){
        return axios.put(COURSE_BASE_REST_API_URL + "/" + courseId,course)

    }
    getStudentByCourseId(CourseId){
        return axios.get(COURSE_BASE_REST_API_URL + "/getByCourse/" + CourseId)
    }

    deleteCourse(courseId){
        return axios.delete(COURSE_BASE_REST_API_URL + "/" + courseId);
    }

}

export default new CourseService();