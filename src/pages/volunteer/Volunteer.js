import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../share/Loading'
import Topic from './Topic'

const Volunteer = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsloading] = useState(false)
  const [ErrorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    axios
      .get('https://arcane-inlet-93515.herokuapp.com/Events')
      .then((res) => {
        console.log(res.data)
        if (res?.data) {
          setIsloading(true)
          setData(res.data)
          setErrorMsg('')
        }
      })
      .catch((err) => {
        console.log(err)
        setErrorMsg(err.message)
        setIsloading(true)
      })
  }, [])

  return (
    <>
      {!isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 container mx-auto -mt-32">
          {data.map((item) => (
            <Topic key={item._id} items={item}></Topic>
          ))}
        </div>
      )}
    </>
  )
}

export default Volunteer
