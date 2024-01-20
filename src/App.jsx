import { useState } from 'react'
import AppName from './AppName'
import './App.css'
import Todoitems from './Components/Todoitems'
import AddItems from './AddItems'
import Welcome from './Components/Welcome'
function App() {
    const initialtodoList = [
        // {
        //     name : "butterChicken",
        //     dueDate : '4/10/24'
        // },
        // {
        //     name : "cook",
        //     dueDate : "4/12/22"
        // }
    ]
     const [todoList , setTodo] = useState(initialtodoList);
    const handleNewItem = (pname,pdate)=>{
        // console.log(`${name} ${date}`);
        const newItems = [...todoList , {name:pname, dueDate:pdate}];
        setTodo(newItems);
    }

    const handleDeleteItem = (pname) =>{
        const newItem = todoList.filter(item => item.name !== pname);
        setTodo(newItem);
        // console.log(`${pname}`);
    }
   return <center>
     <AppName/>
    <div className="items_align">
        <AddItems onNewItems = {handleNewItem}/>
        {todoList==0 && <Welcome></Welcome>}
        <Todoitems TodoList = {todoList} onDeleteClick = {handleDeleteItem}></Todoitems>   
    </div>
    </center>
}

export default App
