import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import { useState } from "react";

function App (){
  const [tasks, setTasks] = useState([{
    id:1,
    title: "Estudar Programação",
    day: "15 de julho as 10:00hrs",
    isCompleted: true
  },
  {
    id:2,
    title: "Estudar Geologia",
    day: "20 de julho as 08:00hrs",
    isCompleted: false

}]);
  return ( 
  
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6"> {/* cobre toda altura e largura */}
      <div className="w-[500px]">
        <h1 class="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>

        <Tasks tasks = {tasks}></Tasks>
      </div>
    </div>
  )


}
export default App;