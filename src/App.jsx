

import './App.css'
import Blocks from './components/Blocks/Blocks'
import Booksmarks from './components/Booksmarks/Booksmarks'
import Knoweges from './components/Knoweges/Knoweges'

function App() {
 
  return (
    <>
      <Knoweges></Knoweges>
     
      <div className='md:flex'>
      <Blocks></Blocks>

      <Booksmarks></Booksmarks>

      </div>
      
    </>
  )
}

export default App
