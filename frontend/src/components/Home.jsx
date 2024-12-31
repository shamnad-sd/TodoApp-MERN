import React, { useState,useEffect } from 'react'
import Create from './Create'
import axios from 'axios'
import { BsCircleFill, BsFillTrashFill } from 'react-icons/bs'

const Home = () => {

  const [todos,setTodos] = useState([])

  
  useEffect(()=>{
    axios.get('http://localhost:3001/get')
    .then(result => setTodos(result.data))
    .catch(error => console.log(error))
  },[])

  const handleEdit = (id) => {
    axios.put('http://localhost:3001/update/'+id)
    .then(result => console.log(result))
    .catch(error => console.log(error))
  }
  
  return (
    <div className='Header'>
      <p>TodoList</p>
      <Create/>
      {
        todos.length === 0 ? 
        <div><h2>No Todo</h2></div>
        :
        todos.map((todo) =>(
          <div>
            <BsCircleFill onClick={() => handleEdit(todo._id)}/>
            {todo.task}
            <BsFillTrashFill/>
          </div>
        ))
      }
    </div>
  )
}

export default Home