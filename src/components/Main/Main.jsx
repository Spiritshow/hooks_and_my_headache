import React, { useCallback, useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./Main.css";
import "../../config/Theme/Theme.css";
import { ThemeContext } from "../router";

const Main = () => {
    const theme = useContext(ThemeContext);
    return(
        <>
            <Header/>
            <div className={"Theme-"+theme.theme + " " + "Outlet"}>
                <Outlet/>
            </div>
        </>
    )
}

export default Main;