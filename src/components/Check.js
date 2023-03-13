import React from 'react'
import {BsCheck} from 'react-icons/bs'

const Check = ({isComlited}) => {
  return (
    <div className='border-2 rounded-md border-pink-400 w-7 h-7'>
        {isComlited &&
         <BsCheck size={24} className='text-grau-900'/>
        }
    </div>
  )
}

export default Check