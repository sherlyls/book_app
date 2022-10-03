import React, {useState} from 'react'
import'../App';

const Favorites = () => {
  const [emps,setEmps]=useState([
    {name:"Raja",experience:"10+ Years"},
    {name:"Mano",experience:"2 Years"},
    {name:"Tom",experience:"5+ Years"},
])

console.log(emps)

return ( 
<div className = "App" >
   {emps.map( (emp,index)=>
   (
      <div key={index}>
          <h3>{emp.name}</h3>
          <p>{emp.experience}</p>
      </div>
   )
   )}
  

 </div>
);
}

export default Favorites