import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import "../../config/Theme/Theme.css";
import { ThemeContext } from "../router";

const Header = () => {
    const theme = useContext(ThemeContext);
    const navigate = useNavigate()
    const handleNavigate = (navig) => {
        navigate(navig);
    }

    const handleClickNavigateTask3 = () => {
        navigate("/task3");
    }

    const handleSwitchTheme = () => {
        if(theme.theme == "light") {theme.setTheme("dark")}
        else {theme.setTheme("light")}
    }

    return(
        <div className={"Theme-"+theme.theme}>
            <button onClick={() => handleNavigate("/")}>Task2</button>
            <button onClick={handleClickNavigateTask3}>Task3</button>
            <button onClick={() => handleNavigate("/task4")}>Task4</button>
            <button onClick={() => handleNavigate("/task5")}>Task5</button>
            <button onClick={() => handleNavigate("/task6")}>Task6</button>
            <button onClick={handleSwitchTheme}>{theme.theme}</button>
        </div>
    )
}

export default Header;