import React from 'react'
import {MdOutlineEmail} from "react-icons/md"; 


const Contact = () => {
  const contacts=[
    {
      id:1,
      mail:"admin@udyogashala.com"
    },
    {
      id:2,
      mail:"suresh@udyogashala.com"
    }
  ]
  return (
    <div className="w-full h-fit min-h-screen p-2">
      <div className="w-full md:w-2/3 h-fit m-auto mt-10 ">
        <p className="text-3xl font-semibold text-center border-b-[2px] w-fit m-auto p-2 border-violet-500">
          Contact
        </p>
        <div className="mt-10 px-2 space-y-6">
          {contacts.map(({id, mail})=>(<div key={id} className="w-full md:w-96 h-14 px-4 py-4 m-auto space-x-2 text-gray-600 flex flex-row shadow-lg shadow-gray-300 cursor-pointer hover:scale-x-105 duration-300 rounded-xl hover:bg-gradient-to-r hover:from-violet-400 hover:to-red-400 hover:text-gray-100">
            <MdOutlineEmail size={25}/>
            <span className='text-lg'>{mail}</span>
          </div>
          ))}
        </div>
        <div className="w-full mt-20 py-4 px-4">
          <p className='text-2xl font-medium my-4'> Get in touch with us!</p>
          <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/82665255-220c-4a6b-bdd0-737a92cc671a"
            method="POST"
            className="flex flex-col w-full "
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2  border-2 rounded-md  focus:outline-none"
              autoComplete="off"
              required

            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2  border-2 rounded-md  focus:outline-none"
              autoComplete="off"
              required

            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2  border-2 rounded-md  focus:outline-none"
              autoComplete="off"
              required
            ></textarea>

            <button className="text-white w-fit px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-red-500 cursor-pointer duration-200 hover:scale-110 hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 ">
              Let's talk
            </button>
          </form>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Contact