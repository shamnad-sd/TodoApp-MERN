import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Create = () => {

  const [task, setTask] = useState()

  const handleAdd = () => {
    axios.post('http://localhost:3001/add', {task: task})
    .then(result =>
      location.reload()
    )
    .catch(error => console.log(error))
  }

  return (
    <div>
        <input type="text" name="" id="" onChange={(e)=>setTask(e.target.value)} />
        <button type='button' onClick={handleAdd} >Add</button>
    </div>
  )
}

export default Create