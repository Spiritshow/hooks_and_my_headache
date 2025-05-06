import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./Counter/Counter";
import GeneratingArray from "./GeneratingArray/GeneratingArray";
import Inputer from "./Inputer/Inputer";
import TodoList from "./ToDoList/ToDoList";
import TestingMemo from "./TestingMemo/TestingMemo";
import Main from "./Main/Main";

export const ThemeContext = createContext(null);



const Router = () => {

    const GetTheme = () => {
        return localStorage.getItem("theme") || "light";
    }

    const [theme,setTheme] = useState(GetTheme);

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return(
        <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route path="/" element={<Counter/>}/>
                    <Route path="/task3" element={<GeneratingArray/>}/>
                    <Route path="/task4" element={<Inputer/>}/>
                    <Route path="/task5" element={<TodoList/>}/>
                    <Route path="/task6" element={<TestingMemo/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        </ThemeContext.Provider>
    )
}

export default Router;