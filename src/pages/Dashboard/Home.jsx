import React, { useEffect, useState } from 'react'
import Card from '../../compnents/Card'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {

    
const [users, setUsers] = useState([])





const getData = async () => {
     let result = await axios.get("https://dummyjson.com/users")
    console.log(result);
    
    
    setUsers(result.data.users);
}


useEffect(() => {
    console.log("use effect chalaaa -->");
    
     getData()
    
    }, [])
    



  return (
    <div>

      <div className='p-4 shadow-md mb-4'>
<h1>Dashboard</h1>
      </div>

      <div className='flex justify-evenly gap-5 flex-wrap'>
    {users.map((user) => (<Link to={user.id} key={user.id}><Card  data={user} /></Link>))}
</div>
    </div>
  )
}

export default Home