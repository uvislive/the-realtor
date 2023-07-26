import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './searchbar.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddCommentIcon from '@material-ui/icons/AddComment';
import ShareIcon from '@material-ui/icons/Share';



function SearchBar() {
    const [article, setArticle] = useState([])
    const [searchItem, setSearchItem] = useState([])

    useEffect(() => {
        const fetchHomes = async () => {
            const res = await axios.get(`http://localhost:8000/api/homes/`)
            console.log(res)
            setArticle(res.data)
        }
        fetchHomes()
    }, [])

    const handleOnchange = (event) => {
        setSearchItem(event.target.value)
    }

    const Searching = () => {
        const result = article.filter((currentData) => {
            return currentData.HomeName === document.getElementById("search").innerHTML;
        })
        setArticle(result)
    }



    return (
        <>
            <div className="search">

                <div className="searchbar">
                    <input type="text" name='search' id='search' value={searchItem} onChange={handleOnchange} className='border border-blue-500 rounded-md text-center' placeholder='Search here' />
                    <button onClick={Searching} className='bg-red-700 m-3  text-white border-white-500  hover:bg-red-500 px-6 py-1 border rounded-3xl '> Search Here</button>
                </div>
            </div>
            <div className="controller">

                {

                    article.map((element, key) => {
                        return (
                            <div key={key} className="card max-w-sm rounded overflow-hidden shadow-lg m-12">
                                <img className="w-full" src={element.HomeImage} alt="image not found" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{element.HomeName}</div>
                                    <p className="text-gray-700 text-base">
                                        Price : {element.HomePrice}
                                    </p>
                                </div>


                                <div className="px-6 pt-4 pb-2">
                                    <span className=" mui inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><FavoriteBorderIcon /> </span>
                                    <span className="mui inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><AddCommentIcon /> </span>
                                    <span className="mui inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> <ShareIcon /></span>

                                </div>

                            </div>






                        )
                    })


                }


            </div>

        </>
    )
}

export default SearchBar