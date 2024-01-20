import { useState } from "react";

function AddItems({onNewItems}) 
{
    const [name,setname] = useState("");
    const [Date ,setdueDate] = useState("");
    
    const nameChange = (event) =>{
        setname(event.target.value);
    }

    const dateChange = (event) =>{
        setdueDate(event.target.value);
    }

    const handleChange = () =>{
        onNewItems(name,Date);
    }
    return(<>
    <div>
        <div className="row">
        <div className="col-4">
        <input type="text" placeholder="Enter Task" onChange={nameChange}></input>
        </div>
        <div className="col-4">
        <input type="date" onChange={dateChange}></input>
        </div>
        <div className="col-1">
        <button className="btn btn-success" onClick={handleChange}>Add</button>
        </div>
        </div>
    </div>
    </>);
}
export default AddItems;