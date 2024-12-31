import React, { useState } from 'react'
import Create from './Create'

const Home = () => {

  const [todos,setTodos] = useState([])
  
  return (
    <div>
      <h1>TodoList</h1>
      <Create/>
      {
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