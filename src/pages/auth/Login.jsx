import React from "react";
import useAuth from "../../context/Auth.context"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextInput, Container, Text, Button } from '@mantine/core';
// import axios from "axios";


export default function Login(){
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn } = useAuth();

    const handleLogin = () => {
        signIn(email, password);
    };
    
    // const handleLogin = async () => {
    //     console.log(email, password)

    //     let data=await axios.post("auth/sign_in", {
    //         email,
    //         password,
    //     })

    //     localStorage.setItem("token", data.data.token)

    //     console.log(data.data.token)
        
    // }

    return (
        <Container
            style={{
                height: '30vh',
                width: '50vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'stretch',
            }}
        >
            <Text size='xl' weight={700}>
                LOGIN
            </Text>
            <TextInput
                placeholder='Email Address'
                required
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <TextInput
                placeholder='Password'
                type='password'
                required
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <Button
                variant='gradient'
                gradient={{ from: 'indigo', to: 'cyan' }}
                onClick={handleLogin}
            >
                Login
            </Button>
            <Text
                style={{
                    marginTop: '1rem',
                    textAlign: 'center',
                    border: '1px #FEFBF6 solid',
                    paddingBlock: '0.5rem',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                }}
                onClick={() => {
                    navigate('/join');
                }}
            >
                JOIN
            </Text>
        </Container>
    );
}