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
    setMeme(prevMeme=> {
      return {
        ...prevMeme ,
        randomImage: url
      }
    })
  }


  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }


  console.log(meme)


  return (
    <div className='w-full meme-container px-[37px] text-white'>
        <div className='w-full flex items-center justify-between mt-[36px] text-black'>
            <input type="text" placeholder='Top Text' name="topText" onChange={handleChange} value={meme.topText}/>
            <input type="text" placeholder='Bottom Text' name="bottomText" onChange={handleChange} value={meme.bottomText}/>
        </div>
        <button className='linear w-full rounded-[5px] h-[40px] mt-[15px]' onClick={getRandomMeme}>Get a new meme image</button>
        <div className='my-4 pb-8'>
            <div className='w-full h-full relative text-center'>
                <img src={meme.randomImage} alt="meme image" className='w-full h-full'/>
                <p className='absolute top-[10px] right-1/2 translate-x-1/2 uppercase text-2xl font-bold'>{meme.topText}</p>
                <p className='absolute bottom-[5px] right-1/2 translate-x-1/2 uppercase text-2xl font-bold'>{meme.bottomText}</p>
            </div>
        </div>
    </div>
  )
}

export default Meme