import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import useAuth from "../../../context/Auth.context";
import "./main.css";
import { useState,useLayoutEffect, useEffect } from "react";
import {
    TextInput,
    // Container,
    Text,
    Button,
} from "@mantine/core";
import axios from "axios";



export default function Admin(){
    const { user, logout, updateEmployee }= useAuth()
    const [toggle, setToggle] = useState(false)
    const [toggle1, setToggle1] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [emp_id, setEmp_id] = useState()
    const [userData, setUserData] = useState()
    const [view1, setView1]= useState(false)
    const [view2, setView2]= useState(false)
    const [update, setUpdate] = useState(false)
    const [allEmployee, setAllEmployee]= useState([])

    // ...................................................
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [post, setPost] = useState()
    const [department, setDepartment] = useState()
    const [qualification, setQualifcation] = useState()
    const [fathersName, setFathersName] = useState()
    const [mothersName, setMothersName] = useState()
    const [dob, setDob] = useState()
    const [category, setCatgory] = useState()
    const [religion, setReligion] = useState()
    const [nationality, setNationality] = useState()
    const [aadharNo, setAadharNo] = useState()
    const [address, setAddress] = useState()


    const newDetails= ()=>{
        updateEmployee(emp_id,name,email,post,department,qualification,fathersName,
            mothersName,dob,category,nationality,religion,aadharNo,address)
    }
    // ....................................................


    const view = async () => {
        try {
            let { data } = await axios.post(`http://localhost:8000/api/v1/newEmployee/`, {
                emp_id
                // "emp_id": "64aa7421c998a56ed2a11de2"
            })

            setUserData(data.data)
            // console.log("this is =======>", data)

        } catch (e) {
            console.log(e);
        }
    }

    const AllEmp = async()=>{
        try{
            let empp = await axios.get("http://localhost:8000/api/v1/newEmployee/all_emp")
            setAllEmployee(empp.data.data)
        } catch(e){
            console.log(e)
        }
    }
    // console.log("-----------------", allEmployee)



    return <div>
        <div style={{
            justifyContent: "space-around"
        }}>
            <div
                className='main-nav'
                style={{
                    height: "40px",
                    backgroundColor: "#637676",
                }}
            >
                <h4 className='text'>{user?.name}</h4>
                <LogoutIcon
                    className='logout'
                    onClick={
                        () => {
                            logout()

                        }}
                />
            </div>

            <Text size='xl' weight={700}
                style={{
                    textAlign: "center",
                    marginTop: "50px",
                    marginBottom: "50px"
                }}
            >
                Hello Sir :) welcome to your Admin Pannel..
            </Text>
            {/* this is the button container for view details and apply for leave */}
            <div className="btn-container">
                <Button className="bt"
                    onClick={
                        () => {
                            // view()
                            setToggle(!toggle)
                            setView1(!view1)
                        }
                    }
                >
                    View Employee
                </Button>


                <Button className="bt"
                    onClick={() => {
                        setToggle1(!toggle1)
                        // console.log("toggle", toggle)
                    }}
                >
                    Delete Employee
                </Button>

                <Button className="bt"
                    onClick={() => {
                        AllEmp()
                        setToggle2(!toggle2)
                        // console.log("toggle", toggle)
                    }}
                >
                    View All Employee
                </Button>

                <Button className="bt"
                    onClick={() => {
                        setUpdate(!update)
                        // setToggle1(!toggle1)
                        // console.log("toggle", toggle)
                    }}
                >
                    Update Employee
                </Button>
            </div>





{/* view employee details................. */}
            {toggle == true ? <div className="emp-detailss">
                <div>View Employee Details
                    <TextInput
                        placeholder='Email Address'
                        required
                        onChange={(e) => {
                            setEmp_id(e.target.value);
                        }}
                    />
                    <Button className="bt"
                        onClick={
                            () => {
                                view()
                                // setEmp_id()
                                setView1(!view1)
                            }
                        }
                    >
                        View
                    </Button>
                    
                </div>
            </div>
                : null
            }

            {view1 == true ? <div className="emp-detail">
                <div>
                    <h5>Name:    {userData?.name}</h5>
                    <h5>Email: {userData?.email}</h5>
                    <h5>Employee Id: {userData?.emp_id}</h5>
                    <h5>Role: {userData?.role}</h5>
                    <h5>Post: {userData?.post}</h5>
                    <h5>Department: {userData?.department}</h5>
                    <h5>Qualifications: {userData?.qualification}</h5>
                    <h5>Father's Name: {userData?.fathersName}</h5>
                    <h5>Mother's Name: {userData?.mothersName}</h5>
                    <h5>DOB: {userData?.dob}</h5>
                    <h5>Category: {userData?.category}</h5>
                    <h5>Religion: {userData?.religion}</h5>
                    <h5>Nationality: {userData?.nationality}</h5>
                    <h5>Aadhar No: {userData?.aadharNo}</h5>
                    <h5>Address: {userData?.address}</h5>
                </div>
            </div>
                : null
            }





            {toggle1 == true ? <div className="emp-detailss">
                <div>Delete Employee
                    <TextInput
                        placeholder='Email Address'
                        required
                        onChange={(e) => {
                            setEmp_id(e.target.value);
                            setToggle2(!toggle2)
                        }}
                    />
                    <Button className="bt"
                        onClick={
                            () => {
                                view()
                                setToggle1(!toggle1)
                            }
                        }
                    >
                        Delete
                    </Button>
                    
                </div>
            </div>
                : null
            }




{/* view all employee....................... */}
            {toggle2 == true ?
            //  <div className="emp-detail">
                <div
                style={{
                        backgroundColor:"#121212"
                }}
                >
                    The all employee details are below...
                    {
                    allEmployee.map((el)=>{
                        return (
                            <div className="emp-detail">
                                <h5>Name:    {el?.name}</h5>
                                <h5>Email: {el?.email}</h5>
                                <h5>Employee Id: {el?.emp_id}</h5>
                                <h5>Role: {el?.role}</h5>
                                <h5>Post: {el?.post}</h5>
                                <h5>Department: {el?.department}</h5>
                                <h5>Qualifications: {el?.qualification}</h5>
                                <h5>Father's Name: {el?.fathersName}</h5>
                                <h5>Mother's Name: {el?.mothersName}</h5>
                                <h5>DOB: {el?.dob}</h5>
                                <h5>Category: {el?.category}</h5>
                                <h5>Religion: {el?.religion}</h5>
                                <h5>Nationality: {el?.nationality}</h5>
                                <h5>Aadhar No: {el?.aadharNo}</h5>
                                <h5>Address: {el?.address}</h5>
                            </div>
                        )
                    })
                    }


                    
                </div>
            // </div>
                : null
            }





            {
                update==true ? <div>
                    <div>Update Employee Details
                        <TextInput
                            placeholder='Email Address'
                            required
                            onChange={(e) => {
                                setEmp_id(e.target.value);
                            }}
                        />
                        <Button className="bt"
                            onClick={
                                () => {
                                    view()
                                    // setEmp_id()
                                    setView2(!view2)
                                }
                            }
                        >
                            View
                        </Button>

                    </div>



                    {view2 == true ? <div className="emp-detail">
                        <div>
                            <h5>Name:    {userData?.name}</h5>
                            <h5>Email: {userData?.email}</h5>
                            <h5>Employee Id: {userData?.emp_id}</h5>
                            <h5>Role: {userData?.role}</h5>
                            <h5>Post: {userData?.post}</h5>
                            <h5>Department: {userData?.department}</h5>
                            <h5>Qualifications: {userData?.qualification}</h5>
                            <h5>Father's Name: {userData?.fathersName}</h5>
                            <h5>Mother's Name: {userData?.mothersName}</h5>
                            <h5>DOB: {userData?.dob}</h5>
                            <h5>Category: {userData?.category}</h5>
                            <h5>Religion: {userData?.religion}</h5>
                            <h5>Nationality: {userData?.nationality}</h5>
                            <h5>Aadhar No: {userData?.aadharNo}</h5>
                            <h5>Address: {userData?.address}</h5>

                            <hr />

                            <Text
                                className="Text"
                                size='xl' weight={700}>
                                Add your details
                            </Text>
                            <TextInput
                                className="input"
                                placeholder='Update Name'
                                required
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                            <TextInput
                                className="input"
                                placeholder='Update Email'
                                required
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                            <TextInput
                                className="input"
                                placeholder='Update Post'
                                required
                                onChange={(e) => {
                                    setPost(e.target.value);
                                }}
                            />
                            <TextInput
                                className="input"
                                placeholder='Update Department Name'
                                required
                                onChange={(e) => {
                                    setDepartment(e.target.value);
                                }}
                            />
                            <TextInput
                                className="input"
                                placeholder='Update Qualifications'
                                required
                                onChange={(e) => {
                                    setQualifcation(e.target.value);
                                }}
                            />
                            <TextInput
                                className="input"
                                placeholder='Update Fathers Name'
                                required
                                onChange={(e) => {
                                    setFathersName(e.target.value);
                                }}
                            />
                            <TextInput
                                className="input"
                                placeholder='Update Mothers Name'
                                required
                                onChange={(e) => {
                                    setMothersName(e.target.value);
                                }}
                            />
                            <TextInput
                                className="input"
                                placeholder='Update Date of Birth'
                                required
                                onChange={(e) => {
                                    setDob(e.target.value);
                                }}
                            />
                            <TextInput
                                className="input"
                                placeholder='Update Category'
                                required
                                onChange={(e) => {
                                    setCatgory(e.target.value);
                                }}
                            />
                            <TextInput
                                className="input"
                                placeholder='Update Religion'
                                required
                                onChange={(e) => {
                                    setReligion(e.target.value);
                                }}
                            />
                            <TextInput
                                className="input"
                                placeholder='Update Nationality'
                                required
                                onChange={(e) => {
                                    setNationality(e.target.value);
                                }}
                            />
                            <TextInput
                                className="input"
                                placeholder='Update Aadhar No.'
                                required
                                onChange={(e) => {
                                    setAadharNo(e.target.value);
                                }}
                            />
                            <TextInput
                                className="input"
                                placeholder='Update Your Address'
                                required
                                onChange={(e) => {
                                    setAddress(e.target.value);
                                }}
                            />

                            <Button className="bt1"
                                onClick={newDetails}
                            >
                                Submit
                            </Button>
                        </div>

                    </div>
                        : null
                    }

                </div> : null
            }
        </div>
    </div>
}