import React from 'react'
import {useState, useEffect} from 'react'

export default function TaskList() {

  const taskList= () =>{
    //declare state of task
    const [tasks, setTasks] = useState([]);

    useEffect(()=> {
      fetchData();
    }, [])
  
    //function to fetch data from backend.
    const fetchData = async () =>{
      try {
        const response = await fetch("/api/tasks")
        if(!response.ok){
          alert("An error occured wen fetching data")
        }
        const taskData = response.json()
        setTasks(taskData);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    }
  }
  return (
    <div>
      <h1>Tasks</h1>
      <div>
        {tasks.map(task => (
          <p key={task.id}>{task.title}</p>
        ))}
      </div>
    </div>
  );
}
