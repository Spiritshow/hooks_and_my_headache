import { useContext, useState } from 'react'
import './App.css'
import Counter from './components/Counter/Counter';
import GeneratingArray from './components/GeneratingArray/GeneratingArray';
import Inputer from './components/Inputer/Inputer';
import TodoList from './components/ToDoList/ToDoList';
import TestingMemo from './components/TestingMemo/TestingMemo';
import Router from './components/router';

function App() {

  return (
    <>
      <Router/>
      {/* <Inputer/> */}
      {/* <TodoList/> */}
      {/* <TestingMemo/> */}
    </>
  )
}

export default App
