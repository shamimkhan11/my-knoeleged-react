

import { useState } from 'react'
import './App.css'
import Blocks from './components/Blocks/Blocks'
import Booksmarks from './components/Booksmarks/Booksmarks'
import Knoweges from './components/Knoweges/Knoweges'
import Bookmarkkk from './components/Bookmarkkk/Bookmarkkk'

function App() {

  const [bookmarks, setBbookmarks] = useState([]);

  const [redingtime, setRedingtime] = useState(0)


  const hendelbookmarks = blok => {
    const newbookmarks = [...bookmarks, blok]
    setBbookmarks(newbookmarks)
  }

  const hendeltime = (id, time) => {
    setRedingtime(redingtime + time)

    //remove the block bookmark;
   //console.log('remove boolmark text', id)

   const reading = bookmarks.filter(Bookmarkkk => Bookmarkkk.id !== id)

   setBbookmarks(reading)
  }

  return (
    <>
      <Knoweges></Knoweges>

      <div className='md:flex max-w-7xl mx-auto'>
        <Blocks hendelbookmarks={hendelbookmarks} hendeltime={hendeltime}></Blocks>

        <Booksmarks bookmarks={bookmarks} redingtime={redingtime}></Booksmarks>

      </div>

    </>
  )
}

export default App
