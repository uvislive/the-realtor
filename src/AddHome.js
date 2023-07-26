import React, { useState } from 'react'
import axios from "axios"
import { ToastContainer, Toast, toast } from "react-toastify"

function AddHome() {

    const [HomeName, setHomeName] = useState("")
    const [HomeCat, setHomeCat] = useState("")
    const [HomePrice, setHomePrice] = useState("")
    const [HomeImage, setHomeImage] = useState()



    const handleImage = (e) => {
        setHomeImage(e.target.files[0])
    }

    // const HandleSubmit = () => {
    //     // console.log(HomeName, HomeCat, HomePrice, HomeImage)
    //     const data = { HomeName, HomeCat, HomePrice, HomeImage }
    //     console.log(data)

    //     fetch("http://localhost:8000/api/homes/", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify(data)
    //     }).then((response) => {
    //         console.log("response", response)
    //     })
    // }

    const HandleSubmit = () => {
        const url = "http://localhost:8000/api/homes/"
        let formData = new FormData()
        formData.append("HomeName", HomeName)
        formData.append("HomeCat", HomeCat)
        formData.append("HomePrice", HomePrice)
        formData.append("HomeImage", HomeImage)
        axios.post(url, formData).then((response) => {
            console.log("response", response)
            toast.success("successsFully Added to Sell")
        })
    }


    return (
        <div className="addHome min-h-[40rem] w-[100%] bg-slate-300 flex justify-center items-center">
            <div className="form   border border-gray-300 bg-gray-400 w-[30%] rounded-xl ">
                <div className="container mt-24 p-5 flex flex-col justify-center items-center text-center">
                    <h1 className='text-center font-bold text-3xl relative bottom-16 text-white'>Add Home For Sell </h1>
                    <input type="text" id='HomeName' value={HomeName} onChange={(e) => setHomeName(e.target.value)} placeholder="Enter 
                The Home Name" /> <br />
                    <input type="text" id='HomeCat' value={HomeCat} onChange={(e) => setHomeCat(e.target.value)} placeholder="Home Category" /> <br />
                    <input type="text" id='HomePrice' value={HomePrice} onChange={(e) => setHomePrice(e.target.value)} placeholder="Home Price" /> <br />
                    <input type="file" id='HomeImage' onChange={handleImage} /> <br />
                    <button className='border text-xl border-yellow-300 p-3 rounded-xl bg-red-700 m-8 text-white hover:bg-red-600 ' onClick={HandleSubmit} >Add Home </button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>

    )
}

export default AddHome

