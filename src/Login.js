import React, { useState } from 'react'
import "./login.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [nickname, setNickname] = useState("")
    const [email, setEmail] = useState("")

    const notify = () => {
        toast("Login successfully")
    }

    const Login = () => {
        const data = { firstname, lastname, nickname, email }
        console.log(data)

        fetch("http://localhost:8000/api/logins/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        }).then((response) => {
            console.log("response", response)
            toast.success("Login Succesfully")

        })
    }

    return (
        <>
            <div className="login bg-slate-300 min-h-[40rem]">
                <div className="box sm:max-w-[30%] bg-gray-400 w-[50%] border rounded-xl border-blue-400 pb-6 pt-4 ">
                    <h1 className=' text-3xl font-bold text-white text-center mb-6  '> Login Here </h1>
                    <input type="text" className=" m-2 border text-center border-black rounded-xl" id='firstname' value={firstname} onChange={(e) => { setFirstname(e.target.value) }} placeholder="First Name" required /> <br />
                    <input type="text" id='lastname' className=" m-2 border text-center border-black rounded-xl" value={lastname} onChange={(e) => { setLastname(e.target.value) }} placeholder="Last Name" required /> <br />
                    <input type="text" id='nickname' className="text-center m-2 border border-black rounded-xl" value={nickname} onChange={(e) => { setNickname(e.target.value) }} placeholder="Nick Name" required /> <br />
                    <input type="email" id='email' className=" text-center m-2 border border-black rounded-xl" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email Here" required /> <br />
                    <input type="submit" className='bg-red-800 hover:bg-red-600 h-8 w-24 border rounded-xl text-white text-xl text-center' value="Log In" onClick={Login} /><br />

                    {/* <button onClick={notify}>Notifications</button> */}
                    <ToastContainer></ToastContainer>
                </div>

            </div>
        </>
    )
}

export default Login