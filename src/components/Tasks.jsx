import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks (props){
    const navegate = useNavigate();
    
    function onSeeDetailsClick (tasks){
        const query = new URLSearchParams();
        query.set("title",tasks.title);
        query.set("description", tasks.description);

        navegate(`/task?${query.toString()} `)
    }

    return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow" >
        {props.tasks.map((tasks) => 
        <li key={tasks.id} className="flex gap-2">

            <button onClick={() => props.onTasksClick(tasks.id)} 
            className={`bg-slate-400 text-left w-full text-white p-2 round-md shadow
             ${tasks.isCompleted && "line-through"} ` }
             >{tasks.title}</button>

            <button onClick={() => onSeeDetailsClick(tasks)} className="bg-slate-400 p-2 text-white">
                <ChevronRightIcon></ChevronRightIcon>
                </button>

            <button onClick={() => props.onDeleteTasksClick(tasks.id)}
             className="bg-slate-400 p-2 text-white">
                <TrashIcon></TrashIcon></button>
 
        </li>
     )}
    
    </ul>)

}
export default Tasks;