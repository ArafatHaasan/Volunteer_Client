import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UseAuth from '../../context/UseAuth'
import swal from 'sweetalert'
import MyEvents from '../MyEvents'

const Event = () => {
  const [events, setEvents] = useState([])
  const { user } = UseAuth()
  useEffect(() => {
    axios
      .get(
        `https://arcane-inlet-93515.herokuapp.com/regesterEvent/${user?.email}`,
      )
      .then((res) => {
        setEvents(res.data)
      })
  }, [user, events])

  const DeleteTheEvent = (id) => {
    swal({
      icon: 'warning',
      title: 'Are you sure?',
      text: 'You want do Delete',
      buttons: 'Yes',
    }).then((res) => {
      if (res) {
        axios
          .delete(
            `https://arcane-inlet-93515.herokuapp.com/regesterEvent/${id}`,
          )
          .then((res) => {
            if (res.data.acknowledged) {
              swal({
                icon: 'success',
                title: 'congrates',
                text: 'successfully deleted',
                buttons: 'okay',
              })
            }
          })
      }
    })
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 my-4 container mx-auto">
        {events.map((Events) => (
          <MyEvents
            key={Events._id}
            events={Events}
            DeleteTheEvent={DeleteTheEvent}
          ></MyEvents>
        ))}
      </div>
    </div>
  )
}

export default Event
