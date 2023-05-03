import React from "react";


function Header({parentFunction, currMode}) {

    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={parentFunction}>
            {currMode ? "Dark" : "Light"} Mode
            </button>
        </header>
    );
    
}

export default Header;
