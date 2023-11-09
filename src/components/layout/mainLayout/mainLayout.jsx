// MainLayout.js
import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import './mainLayout.css';
import FloatingShapes from "../floatingShapes/floatingShapes";

function MainLayout({ children }) {
    return (
        <div className="main-layout">
            <Navbar />
            <div className="content-container">
                {children}
                {/* <FloatingShapes /> */}
            </div>
            <Footer />

        </div>
    );
}

export default MainLayout;
