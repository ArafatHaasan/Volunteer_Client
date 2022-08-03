import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import UseAuth from '../context/UseAuth'
const PrivateRoute = ({ children }) => {
  const { user } = UseAuth()
  const Location = useLocation()

  return (
    <>
      {user?.email ? (
        children
      ) : (
        <Navigate to={'/'} state={{ from: Location }}></Navigate>
      )}
    </>
  )
}

export default PrivateRoute
