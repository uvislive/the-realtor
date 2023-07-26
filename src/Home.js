import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Homes from "./Homes";
import "./Home.css";
import ReactPaginate from "react-paginate"


function Home() {
    const [article, setArticle] = useState([]);
    const [searchterm, setSearchterm] = useState("")
    const [pageNumber, setPageNumber] = useState(0)
    const homePerpage = 6;
    const pagesVisited = pageNumber * homePerpage;





    useEffect(() => {
        const FetchData = async () => {
            const response = await axios.get("http://localhost:8000/api/homes/");
            console.log(response);
            console.log(response.data);
            setArticle(response.data);
        };
        FetchData();
    }, []);




    const displayHome = article.slice(pagesVisited, pagesVisited + homePerpage).map((element) => {
        return (
            <Homes
                key={element.id}
                homename={element.HomeName}
                price={element.HomePrice}
                imgurl={element.HomeImage}
                homeid={element.HomeId}
            />

        )
    })


    const pageCount = Math.ceil(article.length / homePerpage)

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }


    return (
        <>
            <h1 className="text-center text-3xl font-bold pt-6 mt-5 ">
                Properties For Sell
            </h1>

            {/* <div className="container">
                {article.map((element) => {
                    return (
                        <Homes
                            key={element.id}
                            homename={element.HomeName}
                            price={element.HomePrice}
                            imgurl={element.HomeImage}
                        />
                    );
                })}
            </div>  */}


            <div className="container">

                {displayHome}

            </div>
            <div className="container2">

                <div className="setButtons">
                    <ReactPaginate
                        previousLabel={"previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previosbttns"}
                        nextLinkClassName={"nextbttns"}
                        disabledClassName={"disablebttn"}
                        activeClassName={"paginationactive"}
                    />
                </div>


            </div>





        </>
    );
}

export default Home;
