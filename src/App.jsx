// import './App.css'
import '../src/index.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main className='flex flex-col  w-max-[800px] m-0 from-neutral-950 gap-8 bg-gray-400 h-screen'>
      <h1 className='flex place-content-center text-center my-5 font-bold uppercase text-[30px] underline'>App de gatitos</h1>

      <button onClick={handleClick} className='border rounded-md w-[180px] ml-[43.5%] h-[40px] bg-green-500 active:bg-green-800 border-none'>Get new fact</button>

      {fact && <p className='flex place-content-center'>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} className='flex text-center'/>}
    </main>
  )
}