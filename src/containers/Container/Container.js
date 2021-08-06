import "./Container.css"
import React from 'react'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
 
const Container = (props) => {
    return (
        <>
            <Header />
                <div className="content"> 
                    {props.children}
                </div> 
            <Footer />
        </>
    )
}
 
export default Container
