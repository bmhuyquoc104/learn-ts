import React from 'react'
import Login from "./Login"
import { ProfileProps } from './Profile'

type componentProp = {
  isLoggedIn : boolean,
  component: React.ComponentType<ProfileProps>
}

function Home({isLoggedIn,component:Component}:componentProp) {
  return (
    <div>
      {isLoggedIn ? 
      (<Component name = "Sir"/>) :
       <Login />
       }
    </div>
  )
}

export default Home