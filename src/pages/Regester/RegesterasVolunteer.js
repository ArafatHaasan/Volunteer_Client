import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UseAuth from '../../context/UseAuth'
import logo from '../assets/logos/Group 1329.png'
import swal from 'sweetalert'
const RegesterasVolunteer = () => {
  const { user } = UseAuth()
  const { id } = useParams()
  console.log(id)
  const navigate = useNavigate()
  const [events, setEvents] = useState({})
  useEffect(() => {
    axios
      .get(`https://arcane-inlet-93515.herokuapp.com/Events/${id}`)
      .then((res) => {
        setEvents(res?.data)
      })
  }, [id])

  const [query, setQuery] = useState({
    name: user?.displayName,
    email: user?.email,
    date: new Date(),
    title: events?.title,
    img: events?.img,
  })
  console.log(events.title, events.img)

  console.log(query)
  const ValueSetter = (e) => {
    const value = e.target.value
    const name = e.target.name
    console.log(value, name)
    setQuery({ ...query, [name]: value })
  }

  const RegesterAsVolunteer = (e) => {
    e.preventDefault()

    const title = events.title
    const newQuery = {
      ...query,
      title,
    }
    axios
      .post('https://arcane-inlet-93515.herokuapp.com/regesterEvent', newQuery)
      .then((res) => {
        if (res.data) {
          if (res.data.acknowledged) {
            swal({
              title: 'Congrats!',
              text: 'You become a volunteer',
              icon: 'success',
              button: 'Okay',
            }).then((value) => {
              if (value) {
                navigate('/')
              }
            })
          }
        }
      })
  }

  return (
    <div className="container mx-auto flex justify-center items-center h-screen ">
      <div className="border w-11/12 sm:w-6/12 md:w-6/12 p-3 sm:p-5 lg:p-24  mx-auto">
        <div className="mx-auto text-center">
          <img
            className=""
            style={{ width: '50%', margin: 'auto' }}
            src={logo}
            alt="logo"
          />
          <h1 className="py-4 text-xl font-medium ">Regester as Volunteer</h1>
        </div>
        <form onSubmit={RegesterAsVolunteer} className="  ">
          <input
            name="name"
            value={query?.name}
            onChange={ValueSetter}
            className="border-b-2 w-full py-2 mb-2 outline-0 "
            type="text"
            placeholder="Name"
          />{' '}
          <br />
          <input
            name="email"
            value={query?.email}
            onChange={ValueSetter}
            className="border-b-2 w-full py-2 mb-2 outline-0"
            type="email"
            placeholder="Email"
          />{' '}
          <br />
          <input
            name="date"
            value={query?.date}
            onChange={ValueSetter}
            className="border-b-2 w-full py-2  mb-2 outline-0"
            type="date"
            required
          />{' '}
          <br />
          <input
            name="title"
            value={query?.title}
            onChange={ValueSetter}
            className="border-b-2 w-full py-2 mb-2 outline-0"
            type="text"
            placeholder="Service Type"
          />{' '}
          <br />
          <input
            className="border px-8 py-1 w-full  my-2 bg-blue-700 text-white cursor-pointer "
            type="submit"
            value="Regester a volunteer"
          />
        </form>
        {/* <p className="text-green-500">{message}</p> */}
      </div>
    </div>
  )
}

export default RegesterasVolunteer
