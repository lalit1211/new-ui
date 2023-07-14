import React from "react";
import useAuth from "../../../context/Auth.context";
import "./main.css";
import { useState, useEffect } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import {
    TextInput,
    // Container,
    Text,
    Button,
} from "@mantine/core";
import axios from "axios";
// import { Margin } from "@mui/icons-material";




export default function Employee() {


    const [toggle, setToggle] = useState(false)
    const [toggle1, setToggle1] = useState(false)
    const { user, logout, addDetails } = useAuth();
    const [userData, setUserData] = useState()
    console.log("user++", userData)

    // .................................................
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

    const newDetails = () => {
        addDetails(post, department, qualification, fathersName, mothersName,
            dob, category, religion, nationality, aadharNo, address)
    }
    // .................................................

    let emp_id = user._id
    // console.log("--------",emp_id)

    const view =async()=>{
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

    useEffect(() => {

        view()
        // console.log(userData)
    }, []);





    return (
        <>
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
                                // setuserData(null)

                            }}
                    />
                </div>

                <Text size='xl' weight={700}
                    style={{
                        textAlign:"center",
                        marginTop: "50px",
                        marginBottom:"50px"
                    }}
                >
                    Hello Sir :) welcome to your profile..
                </Text>
{/* this is the button container for view details and apply for leave */}
                {

                }
<div className="btn-container">
                    <Button className="bt"
                        onClick={
                            () => {
                                view()
                                setToggle1(!toggle1)
                            }
                        }
                    >
                        View
                    </Button>

                    {/* <Button className="bt"
                    >
                        Apply Leave
                    </Button> */}

                    <Button className="bt"
                        onClick={() => {
                            setToggle(!toggle)
                            console.log("toggle", toggle)
                        }}
                    >
                        Add Details
                    </Button>
</div>
                


{/* show all employee details.............................. */}
                {toggle1 == true ? <div className="emp-detail">
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



                {/* adding user detail section.......................... */}
                <div className="ad_details">
                    {toggle == true ? <div>
                        <Text
                            className="Text"
                            size='xl' weight={700}>
                            Update Employee details.
                        </Text>
                        <TextInput
                            className="input"
                            placeholder='Post'
                            required
                            onChange={(e) => {
                                setPost(e.target.value);
                            }}
                        />
                        <TextInput
                            className="input"
                            placeholder='Department Name'
                            required
                            onChange={(e) => {
                                setDepartment(e.target.value);
                            }}
                        />
                        <TextInput
                            className="input"
                            placeholder='Qualifications'
                            required
                            onChange={(e) => {
                                setQualifcation(e.target.value);
                            }}
                        />
                        <TextInput
                            className="input"
                            placeholder='Fathers Name'
                            required
                            onChange={(e) => {
                                setFathersName(e.target.value);
                            }}
                        />
                        <TextInput
                            className="input"
                            placeholder='Mothers Name'
                            required
                            onChange={(e) => {
                                setMothersName(e.target.value);
                            }}
                        />
                        <TextInput
                            className="input"
                            placeholder='Date of Birth'
                            required
                            onChange={(e) => {
                                setDob(e.target.value);
                            }}
                        />
                        <TextInput
                            className="input"
                            placeholder='Category'
                            required
                            onChange={(e) => {
                                setCatgory(e.target.value);
                            }}
                        />
                        <TextInput
                            className="input"
                            placeholder='Religion'
                            required
                            onChange={(e) => {
                                setReligion(e.target.value);
                            }}
                        />
                        <TextInput
                            className="input"
                            placeholder='Nationality'
                            required
                            onChange={(e) => {
                                setNationality(e.target.value);
                            }}
                        />
                        <TextInput
                            className="input"
                            placeholder='Aadhar No.'
                            required
                            onChange={(e) => {
                                setAadharNo(e.target.value);
                            }}
                        />
                        <TextInput
                            className="input"
                            placeholder='Your Address'
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

                    </div> : null}
                </div>



            </div>
        </>
    );
}
