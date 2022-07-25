import React from 'react'
import TrollFace from "../assets/troll-face.png"
const Nav = () => {
  return (
    <div className='w-full h-[65px] linear'>
        {/* wrapper */}
        <div className='w-full h-full flex justify-between items-center text-white px-[36px]'>
            <div className='flex items-center h-full'>
                <img src={TrollFace} alt="troll face" className='w-[31px] h-[26px] mr-2' />
                <p>Meme Generator</p>
            </div>
            <small>React Course - Project 3</small>
        </div>
    </div>
  )
}

export default Nav