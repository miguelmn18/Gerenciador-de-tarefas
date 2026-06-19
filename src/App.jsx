import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import { useEffect, useState } from "react";
import {v4} from "uuid" ;

function App (){

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) ||

[]);

useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
function onTasksClick (tasksID){
  const newTasks = tasks.map(tasks => {
    if(tasks.id === tasksID){
      return {... tasks, isCompleted : !tasks.isCompleted}
    } else {
      return tasks;
    }
    
  });
  setTasks(newTasks);
}

function onDeleteTasksClick (tasksId){
  const newTasks = tasks.filter(tasks => tasks.id != tasksId);
  setTasks(newTasks );

}

function onAddTasksSubmit (title, description) {
  const newTasks = {
    id : v4(),
    title : title,
    description: description,
    isCompleted : false,

  };
  setTasks([...tasks, newTasks]);


}
  return ( 
  
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6"> {/* cobre toda altura e largura */}
      <div className="w-[500px] space-y-4">
        <h1 class="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>

        <AddTasks onAddTasksSubmit = {onAddTasksSubmit}></AddTasks>
        <Tasks tasks = {tasks}
        onTasksClick = {onTasksClick}
        onDeleteTasksClick = {onDeleteTasksClick}></Tasks>
        
      </div>
    </div>
  )


}
export default App;