import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle !== '') {
      let newTask = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }

      setTasks(oldArray => [...oldArray, newTask])
    }
  }

  function handleMarkTaskAsDone(id: number) {
    let tasksArray = [...tasks];

    tasksArray = tasksArray.map((task, i) => {
      if (task.id === id) {
        return {
          id: task.id,
          title: task.title,
          done: true
        }
      } else {
        return task
      }
    })

    setTasks([...tasksArray])
  }

  function handleRemoveTask(id: number) {
    let tasksArray = [...tasks];

    let newArray = tasksArray.filter(
      task => task.id !== id
    )

    setTasks([...newArray])
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}