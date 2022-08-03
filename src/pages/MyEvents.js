import React from 'react'

import helpimg from '../pages/assets/images/extraVolunteer.png'

const MyEvents = ({ events, DeleteTheEvent }) => {
  const { date, title, _id } = events

  return (
    <div className="flex p-2 rounded shadow">
      <div className="w-64">
        {' '}
        <img style={{ width: '100%' }} src={helpimg} alt="" />{' '}
      </div>
      <div className="px-4 flex-1 flex flex-col justify-between ">
        {' '}
        <div>
          <h1 className="text-2xl">{title}</h1>
          <h2 className="font-bold">{date}</h2>
        </div>
        <button
          onClick={() => DeleteTheEvent(_id)}
          className="px-5 py-3 ml-auto w-[160px] rounded font-light bg-slate-200"
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default MyEvents
