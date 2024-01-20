import Tasks from "./Tasks";
const Todoitems = ({TodoList, onDeleteClick}) =>
{
    return <>
    <center>
        {TodoList.map(e => <Tasks prop1= {e.name} prop2={e.dueDate} prop3={onDeleteClick}/>)}
    </center>
    </>
}
export default Todoitems;