import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Homes from "./Homes"
import { useParams } from 'react-router-dom'

function HomeDetail() {

    const [singleHome, setSingleHome] = useState([])
    const [loading, setLoading] = useState(false)
    const { HomeId } = useParams()

    useEffect(() => {
        setLoading(true)
        const fetchHome = async (homeid) => {
            const res = await axios.get(`http://localhost:8000/api/homes/${homeid}`)
            console.log(res.data)
            setSingleHome(res.data)
        }
        fetchHome();
    }, [])


    return (
        <>
            {singleHome.map((element) => {
                < Homes

                />
            }
            )
            }


        </>

    )
}

export default HomeDetail