import React, { useState } from 'react'
import Create from './Create'

const Home = () => {

  const [todos,setTodos] = useState([])
  
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
            {todo}
          </div>
        ))
      }
    </div>
  )
}

export default Home