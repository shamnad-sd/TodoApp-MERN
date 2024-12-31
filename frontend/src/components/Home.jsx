import React, { useState,useEffect } from 'react'
import Create from './Create'
import axios from 'axios'

const Home = () => {

  const [todos,setTodos] = useState([])

  
  useEffect(()=>{
    axios.get('http://localhost:3001/get')
    .then(result => setTodos(result.data))
    .catch(error => console.log(error))
  },[])
  
  return (
    <div className='Header'>
      <p>TodoList</p>
      <Create/>
      {
        todos.length === 0 ? 
        <div><h2>No Todo</h2></div>
        :
        todos.map((todo,index) =>(
          <div key={index}>
            {todo.task}
          </div>
        ))
      }
    </div>
  )
}

export default Home