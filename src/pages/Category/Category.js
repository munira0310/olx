import "./Category.css"
import React from 'react'
import { useParams } from "react-router-dom"
import Container from "../../containers/Container/Container";
import datas from "./../../data"
import data from "../../data/detskiy-mir";
const Category = () => {
    const {category} = useParams(); 
   const data = datas [category];
    return (

        <Container>
           <div className="container py-5">
            <h1 className="mb-5">Category: {category}</h1>
            <div className="row">
                {data.map (v =>
                    <div className="col-md-3 mb-3">
                        <div className="shadow rounded p-2 product h-100">
                            <img src={v.img} className="w-100 mb-3"  alt="" />
                            <p className="fw-bold">{v.title}</p>
                            <span>{v.price}</span><br /><span>{v.location}</span>
                        </div>
                    </div>
                    )}
            </div>
        </div> 
        </Container>
        
    )
}

export default Category
