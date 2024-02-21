import React from 'react'
import {useState, useEffect} from 'react'

export default function TaskList() {

    //declare state of task
    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/api/task')
            const json = await response.json();

            response.ok ? setTasks(json) : alert("An error occured during fecting process");
        }

        fetchData()
    })

  return (
    <div>
      <h1>Tasks</h1>
      <div>
        {tasks.map(task => (
          <p key={task.id}>{task.name}</p>
        ))}
      </div>
    </div>
  );
}
 