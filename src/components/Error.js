import React from 'react'
import  {useRouteError} from 'react-router-dom'

const Error = () => {
   

// const About = () => {
    const error = useRouteError()
    console.log(error)
  return (
    <div>
      <h1>Opps!</h1>   
         <h3>{error.status}:{error.statusText}</h3>
         <h4>{error.data}</h4>
    </div>

  )
}

export default Error