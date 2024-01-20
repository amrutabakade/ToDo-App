import 'bootstrap/dist/css/bootstrap.min.css'
function Tasks ({prop1 , prop2, prop3})
{
return (<>
    <div className="container" id='distance'>
   <div className="row">
     <div className="col-sm-4">{prop1}</div>
     <div className="col-sm-4">{prop2}</div>
     <div className="col-sm-2" ><button type="button" className="btn btn-danger" onClick={() =>{prop3(prop1)}}>Delete</button></div>
   </div>
   {/* <div className="row">
     <div className="col-sm-4">cooking</div>
     <div className="col-sm-4">24/11/2023</div>
     <div className="col-sm-2"><button type="button" className="btn btn-success">Done</button></div>
     <div className="col-sm-2"><button type="button" className="btn btn-danger">Delete</button></div>
   </div> */}
   </div>
</>);
}

export default Tasks;