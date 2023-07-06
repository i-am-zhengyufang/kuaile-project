import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"

import AddCustomer from "./components/Customers/AddCustomer"
import CustomerList from "./components/Customers/CustomerList"
import UpdateCustomer from "./components/Customers/UpdateCustomer"

import AddDepartment from "./components/Departments/AddDepartment"
import UpdateDepartment from './components/Departments/UpdateDepartment'
import DepartmentList from "./components/Departments/DepartmentList"

import AddEmployee from "./components/Employees/AddEmployee"
import EmployeeList from "./components/Employees/EmployeeList"
import UpdateEmployee from "./components/Employees/UpdateEmployee"
import EmployeeDetails from "./components/Employees/EmployeeDetails"

import RatingList from "./components/Performance/Rating/RatingList"
import UpdateRating from "./components/Performance/Rating/UpdateRating"

import AddProduct from "./components/Products/AddProduct"
import ProductList from "./components/Products/ProductList"
import UpdateProduct from "./components/Products/UpdateProduct"

import AddRole from "./components/Roles/AddRole"
import RoleList from "./components/Roles/RoleList"
import UpdateRole from "./components/Roles/UpdateRole"
import RoleDetails from "./components/Roles/RoleDetails"


import Study from "./components/Students/Study"
import StudentList from "./components/Students/StudentList"
import AddStudent from "./components/Students/AddStudent"
import AddStud from "./components/Students/AddStud"

import Course from "./components/Courses/Course"
import CourseList from "./components/Courses/CourseList"
import AddCourse from "./components/Courses/AddCourse"


const BaseRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="employeelist" element={<EmployeeList />}></Route>
          <Route path="addemployee" element={<AddEmployee />}></Route>
          <Route path="employeedetail/:id" element={<EmployeeDetails />}></Route>
          <Route path="employeelist/updateemployee/:id" element={<UpdateEmployee />}></Route>

          <Route path="ratinglist" element={<RatingList />}></Route>
          <Route path="ratinglist/updateRatingList" element={<UpdateRating />}></Route>


          <Route path="productlist" element={<ProductList />}></Route>
          <Route path="addproduct" element={<AddProduct />}></Route>
          <Route path="productlist/updateproduct/:id" element={<UpdateProduct />}></Route>

          <Route path="departmentlist" element={<DepartmentList />}></Route>
          <Route path="adddepartment" element={<AddDepartment />}></Route>
          <Route path="departmentlist/updatedepartment/:id" element={<UpdateDepartment />}></Route>

          <Route path="customerlist" element={<CustomerList />}></Route>
          <Route path="addcustomer" element={<AddCustomer />}></Route>
          <Route path="customerlist/updatecustomer/:id" element={<UpdateCustomer />}></Route>

          <Route path="rolelist" element={<RoleList />}></Route>
          <Route path="addrole" element={<AddRole />}></Route>
          <Route path="rolelist/updaterole/:id" element={<UpdateRole />}></Route>

          <Route path="rolelist/roledetails/:id" element={<RoleDetails />}></Route>
          <Route path="showstudy" element={<Study />}></Route>
          {/* <Route path="addstdent" element={<AddStudent/>}></Route> */}
          <Route path="studentlist" element={<StudentList />}></Route>
          <Route path="addstudent" element={<AddStudent />}></Route>
          <Route path="addstud" element={<AddStud />}></Route>

          <Route path="course" element={<Course />}></Route>
          <Route path="courselist" element={<CourseList />}></Route>
          <Route path="addcourse" element={<AddCourse />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default BaseRouter