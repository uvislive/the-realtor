import React, { useEffect, useState } from 'react'
import "./Homes.css"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddCommentIcon from '@material-ui/icons/AddComment';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';

import axios from "axios"

function Homes({ homename, price, imgurl, homeid }) {

    const [count, setCount] = useState(0)
    const [article, setArticle] = useState([])
    const [singleHome, setSingleHome] = useState([])
    const [loading, setLoading] = useState(false)

    // const HandleNum = () => {
    //     setCount(count + 1)
    //     console.log({ count, homename })
    //     let resp = { count, homename }

    //     fetch("http://localhost:8000/api/like/", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify(resp)
    //     }).then((response) => {
    //         console.log(response)
    //     })
    // }

    useEffect(() => {
        setLoading(false)
        const fetchdata = async () => {
            const result = await axios.get("http://localhost:8000/api/like/")
            // console.log(result.data)
            setArticle(result.data)
        }
        fetchdata();
    }, [])



    const DeleteHome = (HomeId) => {
        setLoading(true)
        alert(HomeId)

        fetch(`http://localhost:8000/api/homes/${HomeId}`, {
            method: "DELETE"
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
            })
        });

    }


    // const ViewHome = async (HomeId) => {
    //     alert(HomeId)
    //     const res = await axios.get(`http://localhost:8000/api/homes/${HomeId}`)
    //     console.log(res.data)
    //     setSingleHome(res.data)

    //     setLoading(false)
    //     return (

    //         <>
    //             {
    //                 singleHome.map((elem) => {
    //                     return (
    //                         <>
    //                             <h3>{elem.HomeName}</h3>
    //                         </>
    //                     )
    //                 })
    //             }

    //         </>
    //     )
    // }



    return (
        <>



            <div className="homes m-6">

                <div className="card max-w-sm rounded overflow-hidden shadow-lg m-12">
                    <img className="w-full" src={imgurl} alt="image not found" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{homename}</div>
                        <p className="text-gray-700 text-base">
                            Price : {price}
                        </p>
                    </div>


                    <div className="px-3pt-4 pb-2">
                        <span className=" mui inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><FavoriteBorderIcon />{count}+ </span>
                        <span className="mui inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><AddCommentIcon /> </span>
                        <span sclassName="mui inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><Link to={`/homes/${homeid}`} > <ShareIcon /></Link></span>
                        <span onClick={() => DeleteHome(homeid)} className="mui inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> <DeleteIcon /></span>
                    </div>

                </div>







            </div>




        </>
    )
}

export default Homes
