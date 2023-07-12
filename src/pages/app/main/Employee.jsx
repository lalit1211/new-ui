import React from "react";
import useAuth from "../../../context/Auth.context";
import "./main.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import {
    // TextInput,
    // Container,
    Text,
    Button,
} from "@mantine/core";
import axios from "axios";
// import { Margin } from "@mui/icons-material";




export default function Employee() {
    const navigate = useNavigate();

    const { user, logout } = useAuth();
    const [userData, setUserData] = useState(null)

    let emp_id = user._id

    const view =async()=>{
        try {
            let dat = await axios.get('newEmployee/',{
                emp_id
            })
            setUserData(dat.data.data)
 console.log("new data==>",userData)
        } catch (e) {
            console.log(e);
        }
    }

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
                    <h4 className='text'>{user.name}</h4>
                    <LogoutIcon
                        className='logout'
                        style={{
                            cursor: "pointer",
                            // hover:{ backgroundColor:'black'}
                        }}
                        onClick={logout}
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
<div className="btn-container">
                    <Button className="bt"
                    onClick={view}
                    >
                        View
                    </Button>

                    <Button className="bt"
                    >
                        Apply Leave
                    </Button>

                    <Button className="bt"
                    onClick={
                        navigate('/add_details')
                    }
                    >
                        Add Details
                    </Button>
</div>
                


{/* show all employee details.............................. */}
                <div className="emp-detail">
                    <div>
                        <p>
                            {user._id}
                        </p>
                    </div>
                </div>




            </div>
        </>
    );
}
