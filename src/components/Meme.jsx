import React, { useEffect, useState } from 'react'

const Meme = () => {
  const [memesArray, setMemesArray] = useState({})

  const [meme, setMeme] = useState({
    topText: "",
    bottomText:"",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
  })


  useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
          .then(res => res.json())
          .then(data => setMemesArray(data.data.memes))
  }, [])

  console.log(memesArray)

  return (
    <div className='w-full meme-container px-[37px] text-white'>
        <div className='w-full flex items-center justify-between mt-[36px]'>
            <input type="text" placeholder='Top Text'/>
            <input type="text" placeholder='Bottom Text' />
        </div>
        <button className='linear w-full rounded-[5px] h-[40px] mt-[15px]'>Get a new meme image</button>
        <div className='my-4 pb-8'>
            <img src={meme.randomImage} alt="meme image" />
        </div>
    </div>
  )
}

export default Meme