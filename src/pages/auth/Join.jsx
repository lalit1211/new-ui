import React from "react";
import axios from "axios";
// import useAuth from '../../context/Auth.context';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextInput, Container, Text, Button } from '@mantine/core';


export default function Join(){
    // const { join } = useAuth();

    const navigate = useNavigate();

    const [name, setName] = useState('')
    const[email, setEmail ] = useState('')
    const[password, setPassword ] = useState('')
    const[confirmPassword, setConfirmPassword ] = useState('')
    const[role, setRole ] = useState("")

    // const handleClick = ()=>{
    //     join({
    //         name,
    //         email,
    //         password,
    //         confirmPassword,
    //         role
    //     })
    // }

    const handleClick = () => {
        axios.post("auth/sign_up", {
            name,
            email,
            password,
            confirmPassword,
            role
        })
    }

    
    return(
        <Container className='f f-c ai-c jc-c container'>
            <Text size='xl' weight={700}>
                Join Us!
            </Text>
            <TextInput
                placeholder='Name'
                required
                onChange={(e) => {
                    setName(e.target.value);
                }}
                className='m-t-10'
                style={{
                    width: '100%',
                }}
            />
            <TextInput
                placeholder='Email Address'
                type='email'
                required
                className='m-t-10'
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                style={{
                    width: '100%',
                }}
            />
            <TextInput
                placeholder='Choose role from [admin or employee]'
                type='text'
                required
                className='m-t-10'
                onChange={(e) => {
                    setRole(e.target.value);
                }}
                style={{
                    width: '100%',
                }}
            />
            <TextInput
                placeholder='Password'
                type='password'
                required
                className='m-t-10'
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                style={{
                    width: '100%',
                }}
            />
            <TextInput
                placeholder='Password Confirm'
                type='password'
                required
                className='m-t-10'
                onChange={(e) => {
                    setConfirmPassword(e.target.value);
                }}
                style={{
                    width: '100%',
                }}
            />
            
            <Button
                variant='gradient'
                className='m-t-10'
                gradient={{ from: 'indigo', to: 'cyan' }}
                onClick={handleClick}
            >
                Sign Up
            </Button>
            <Text
                style={{
                    marginTop: '1rem',
                    textAlign: 'center',
                    border: '1px #FEFBF6 solid',
                    paddingBlock: '0.5rem',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    width: '100%'
                }}
                onClick={() => {
                    navigate('/');
                }}
            >
                SIGN-IN
            </Text>
        </Container>
    )
}