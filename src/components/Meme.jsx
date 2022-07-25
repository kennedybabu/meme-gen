import React from 'react'

const Meme = () => {
  return (
    <div className='w-full meme-container'>
        <div>
            <input type="text" placeholder='Top Text'/>
            <input type="text" placeholder='Bottom Text' />
        </div>
        <button>Get a new meme image</button>
    </div>
  )
}

export default Meme