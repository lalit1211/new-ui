import React from "react";
import Employee from "../app/main/Employee"
import Admin from "../app/main/Admin"
import useAuth from "../../context/Auth.context";

export default function 

Home(){
    let {user,rol} = useAuth()
    // let dec = user.role

    // if(rol==="employee"){
    //     console.log("done")
    // }


    return<>
    {rol=="employee" ? <Employee /> : <Admin /> }
    </>
}