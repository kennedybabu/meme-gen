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


  function getRandomMeme(event) {
    let randomNum = Math.floor(Math.random() * memesArray.length)
    let randomMeme = memesArray[randomNum]
    let url = randomMeme.url
    const {name, value} = event.target
    setMeme(prevMeme=> {
      return {
        ...prevMeme ,
        randomImage: url
      }
    })
  }

  console.log(meme)

  return (
    <div className='w-full meme-container px-[37px] text-white'>
        <div className='w-full flex items-center justify-between mt-[36px]'>
            <input type="text" placeholder='Top Text' name="topText" />
            <input type="text" placeholder='Bottom Text' name="bottomText"/>
        </div>
        <button className='linear w-full rounded-[5px] h-[40px] mt-[15px]' onClick={getRandomMeme}>Get a new meme image</button>
        <div className='my-4 pb-8'>
            <img src={meme.randomImage} alt="meme image" />
        </div>
    </div>
  )
}

export default Meme