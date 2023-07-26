import React from "react";
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";


function Search() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchterm, setSearchterm] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const response = await axios.get("http://localhost:8000/api/homes")
            console.log(response)

            console.log(response.data)
            setData(response.data)
            setLoading(false)
        }
        fetchData()
    }, [])

    const Loading = () => {
        return (
            <>
                Loading....
            </>
        )
    }

    const ShowResult = () => {
        return (
            <>
                {
                    data && data
                        .filter((item) => item.HomeName.toLowerCase().includes(searchterm)).map((element) => {
                            return (
                                <>
                                    <h3>{element.HomeName}</h3>

                                </>
                            )
                        })


                }

            </>
        )
    }


    return (
        <>
            <div className="search">
                <input type="text" value={searchterm} id='searchterm' onChange={(e) => setSearchterm(e.target.value)} />
            </div>

            <div className="contianer">
                <div className="row">
                    {loading ? <Loading /> : <ShowResult />}
                </div>

            </div>

        </>

    )
}

export default Search