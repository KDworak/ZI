"use client";
import React, { useState } from 'react';
import axios from 'axios'; 
import { useUser } from '../userContext';
import { useRouter } from 'next/navigation';
import withoutAuth from '../withoutAuth';
//var signIn = false;

const login = () => {
    const { login } = useUser();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msgFail, setMsgFail] = useState('');
    const [msgSuccess, setMsgSuccess] = useState('');
    const router = useRouter(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/auth`, {login: username, password: password});
            const userData = response.data;
            //console.log(userData);
            login(username,userData.userid, userData.token);

            setUsername('');
            setPassword('');
            setMsgSuccess('Użytkownik istnieje, pomyślnie zalogowano!');setMsgFail('');
            //signIn = true;
            router.push('/');
        } catch (error) {
            console.error('Error:', error);
            setMsgSuccess('');setMsgFail('Użytkownik nie istnieje, sprawdź dane!');
        }
    };

    /*if(signIn === true){/*Funkcjonalność wylogowania się}*/

    return (
        <>
        <form onSubmit={handleSubmit} className='w-[90%] lg:w-[50%] mx-auto'>
            <p className='my-8 text-[24px] text-myCol text-red text-center lg:text-left'>Logowanie</p>
            <hr className='bg-myCol mb-8 h-0.5'/>
            <p className='text-[red]'>{msgFail}</p>
            <p className='text-[green]'>{msgSuccess}</p>
            <br/>
            <label htmlFor="login">Login:</label><br/>
                <div className=' flex justify-center lg:justify-normal'>
                    
                    <input type="text" id="login" value={username} onChange={(e) => setUsername(e.target.value)} className=" w-[100%] h-[48px] text-[24px] lg:w-[400px] border border-myCol rounded bg-formInputBgCol" required/>
                </div>
                <br/>
                <label htmlFor="password">Hasło:</label><br/>
                <div className='flex justify-center lg:justify-normal'>
                    
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-[100%] h-[48px] text-[24px] lg:w-[400px] border border-myCol rounded bg-formInputBgCol" required/>
                </div>
                <br/>
                <div className='flex justify-center lg:justify-normal'>
                <button type="submit" className='bg-myCol p-2 rounded-md text-myBg shadow-lg px-8'>Zaloguj</button>
                </div>
        </form>
        </>
    );
};

export default withoutAuth(login);