import React from "react";
import CustomNavbar from './CustomNavbar';

function Base({children}){
    // return(
    //     <div>
    //     <CustomNavbar></CustomNavbar>
    //     <div>{children}</div>
    //     <h1>Footer</h1>
    //     </div>
    // )
    return (
        <div className="base-layout">
            <CustomNavbar />
            
            <main className="main-content">
                {children}
            </main>

            <footer className="footer">
                <p>&copy; 2025 E-Commerece Website | All rights reserved</p>
            </footer>
        </div>
    );
}

export default Base;