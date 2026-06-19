import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks (props){
    const navegate = useNavigate();
    
    function onSeeDetailsClick (tasks){
        const query = new URLSearchParams();
        query.set("title",tasks.title);
        query.set("description", tasks.description);

        navegate(`/task?${query.toString()}`)
    }

    return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow" >
        {props.tasks.map((tasks) => 
        <li key={tasks.id} className="flex gap-2">

            <button onClick={() => props.onTasksClick(tasks.id)} 
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md shadow
             ${tasks.isCompleted && "line-through"} ` }
             >{tasks.title}</button>

            <Button onClick={() => onSeeDetailsClick(tasks)} >
                <ChevronRightIcon></ChevronRightIcon>
            </Button>

            <Button onClick={() => props.onDeleteTasksClick(tasks.id)}>
                <TrashIcon></TrashIcon></Button>
 
        </li>
     )}
    
    </ul>)

}
export default Tasks;