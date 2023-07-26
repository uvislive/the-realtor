import React from 'react'
import "./Banner.css"
import Home from "./Home"
import { Link } from "react-router-dom"

function Banner() {
    return (
        <>
            <div className="banner min-h-[40rem flex justify-evenly items-center flex-wrap-reverse bg-slate-300">
                <div className="left flex-col flex justify-center items-center sm:p-10 ">
                    <h1 className='text-3xl sm:"text-xl" text-black text-center font-bold font-serif'>Find Your Dream House Only <br />  on  TheRealtor.com</h1>
                    <p className='my-5 text-center text-black'>World Most Searched Website For Finding the Home !</p>
                    <button className='text-white text-xl  h-12 hover:bg-red-500 w-36 bg-red-600 border border-yellow-200 rounded-3xl'><Link to="/search"> Find Home</Link></button>
                </div>
                <div className="right">

                </div>
                <img src="homes2.jpg" alt="Image" />




            </div>

            <div className="post">
                <Home />

            </div>
        </>
    )
}

export default Banner