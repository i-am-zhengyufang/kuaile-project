import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = "http://localhost:8080/api/v1/customers";

class CourseService{



    getAllCustomers(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }

    createCustomer(customer){
        return axios.post(EMPLOYEE_BASE_REST_API_URL,customer)
    }

    getCustomerById(customerId){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + "/" + customerId)
    }

    updateCustomer(customerId,customer){
        return axios.put(EMPLOYEE_BASE_REST_API_URL + "/" + customerId,customer)

    }
    getCustomerByEmployeeId(employeesId){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + "/getByEmployee/" + employeesId)
    }

    deleteCustomer(customerId){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + "/" + customerId);
    }

}

export default new CourseService();