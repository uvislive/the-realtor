// import axios from 'axios'
// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import "./categories.css"
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import AddCommentIcon from '@material-ui/icons/AddComment';
// import ShareIcon from '@material-ui/icons/Share';

// import { ToastContainer, Toast, toast } from "react-toastify"


// function Category() {

//     const [article, setArticle] = useState([])
//     // const [catItem, setCatItem] = useState("")

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await axios.get("http://localhost:8000/api/homes/")
//             console.log(response.data)
//             setArticle(response.data)
//         }
//         fetchData();

//     }, [])


//     const filterResult = (catItem) => {
//         const result = article.filter((currentData) => {
//             return currentData.HomeCat === catItem;
//         })
//         setArticle(result)
//         console.log(result)
//         toast("Items Displayed")
//     }




//     return (

//         <div className="category h-auto pt-10  pb-[20rem] bg-slate-300">
//             <h1 className='text-center font-bold text-3xl text-black mt-5'>Categories :</h1>

//             <div className=" flex flex-col p-6 mb-12 justify-center items-center">

//                 <button onClick={() => { filterResult("apartment") }} className='text-center text-xl  text-white  bg-gray-600 hover:bg-gray-500 px-6 py-3 border rounded-xl w-[20rem]'> Apartment </button>
//                 <button onClick={() => { filterResult("villa") }} className='text-center text-xl text-white hover:bg-gray-500 bg-gray-600 px-6 py-3 border rounded-xl w-[20rem]'> villa   </button>
//                 <button className='text-center text-xl hover:bg-gray-500 text-white bg-gray-600 px-6 py-3 border rounded-xl w-[20rem]'> Homes</button>
//                 <button className='text-center text-xl hover:bg-gray-500 text-white bg-gray-600 px-6 py-3 border rounded-xl w-[20rem]'> Category</button>
//                 <button className='text-center text-xl hover:bg-gray-500 text-white bg-gray-600 px-6 py-3 border rounded-xl w-[20rem]'> Category</button>
//                 <button className='text-center text-xl hover:bg-gray-500 text-white bg-gray-600  px-6 py-3 border rounded-xl w-[20rem]'> Category</button>


//                 <ToastContainer></ToastContainer>
//             </div>

//             <div className="controller">

//                 {

//                     article.map((element, key) => {
//                         return (
//                             <div key={key} className="card max-w-sm rounded overflow-hidden shadow-lg m-12">
//                                 <img className="w-full" src={element.HomeImage} alt="image not found" />
//                                 <div className="px-6 py-4">
//                                     <div className="font-bold text-xl mb-2">{element.HomeName}</div>
//                                     <p className="text-gray-700 text-base">
//                                         Price : {element.HomePrice}
//                                     </p>
//                                 </div>


//                                 <div className="px-6 pt-4 pb-2">
//                                     <span className=" mui inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><FavoriteBorderIcon /> </span>
//                                     <span className="mui inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><AddCommentIcon /> </span>
//                                     <span className="mui inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> <ShareIcon /></span>

//                                 </div>

//                             </div>






//                         )
//                     })


//                 }


//             </div>




//         </div>

//     )
// }

// export default Category







// NEXT LEARN TRICK FOR THE MAKING CATEGORY SECTION S



import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react'
import { Toast, ToastContainer } from "react-toastify"
import './categories.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddCommentIcon from '@material-ui/icons/AddComment';
import ShareIcon from '@material-ui/icons/Share';


function Category({ count }) {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const response = await axios.get("http://localhost:8000/api/homes/")
            console.log(response.data)
            setData(response.data)
            setFilter(response.data)
            setLoading(false)
        }
        fetchData()
    }, [])


    const filterProducts = (catItem) => {
        const newData = data.filter((x) => {
            return x.HomeCat === catItem;
        })
        setFilter(newData)
    }

    const Loading = () => {
        return (
            <>
                Loading....
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="buttons">
                    <h1 className=' m-3  text-center mt-5 text-3xl font-bold'>Categories</h1>
                    <button className="bg-red-700 text-center m-3 rounded-xl h-10 hover:bg-red-600 border border-white text-2xl text-white " onClick={() => setFilter(data)} > ALL</button>
                    <button className="bg-red-700 text-center m-3 rounded-xl h-10 hover:bg-red-600 border border-white text-2xl text-white" onClick={() => filterProducts("apartment")}> Apartment</button>
                    <button className="bg-red-700 text-center h-10 rounded-xl m-3 hover:bg-red-600  border-white text-2xl bordre-white border text-white" onClick={() => filterProducts("villa")} >Villa </button>
                    <button className="bg-red-700 text-center m-3 rounded-xl hover:bg-red-600 text-2xl text-white h-10 border-white border" onClick={() => filterProducts("Desi Home")} > Homes </button>
                    <br />
                </div>
                <hr />
                <br />


                {
                    filter.map((element) => {
                        return (
                            <>
                                <div className="controller">                                    <div className="card max-w-sm rounded overflow-hidden shadow-lg m-12">
                                    <img className="w-full" src={element.HomeImage} alt="image not found" />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">{element.HomeName}</div>
                                        <p className="text-gray-700 text-base">
                                            Price : {element.HomePrice}
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className=" mui inline-block  bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><FavoriteBorderIcon />{count}+ </span>
                                        <span className="mui inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><AddCommentIcon /> </span>
                                        <span className="mui inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> <ShareIcon /></span>

                                    </div>

                                </div>






                                </div>

                            </>
                        )
                    })
                }


            </>
        )
    }


    return (
        <>
            <div className="container">
                {loading ? <Loading /> : <ShowProduct />}

            </div>



        </>

    )
}

export default Category