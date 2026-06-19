import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import Title from "./components/Title";
import { useEffect, useState } from "react";
import {v4} from "uuid" ;

function App (){

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) ||

[]);

useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);


/* useEffect(() =>  {
//Chamar a API

async function fetchTask() {
  const response = await fetch ('https://jsonplaceholder.typicode.com/todos?_limit=10' , 
    {
    method: "GET",
  }
);

  //Pegar os dados que ela retorna 
  const data = await response.json();


  //Armazenar ou persistir esses dados no states
  setTasks(data);
  
}

fetchTask();
}, []) */

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
        <Title>Gerenciador de Tarefas</Title>

        <AddTasks onAddTasksSubmit = {onAddTasksSubmit}></AddTasks>
        <Tasks tasks = {tasks}
        onTasksClick = {onTasksClick}
        onDeleteTasksClick = {onDeleteTasksClick}></Tasks>
        
      </div>
    </div>
  )


}
export default App;