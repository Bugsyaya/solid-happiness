import { useEffect, useState } from 'react'
import './App.css'
import { Cost } from './components/cost'
import { getPixelBefore, getPixelInfo, getPixelInside } from './tools/api'
import { mapperToPixel } from './tools/mapper'

function App() {
  const [before, setBefore] = useState()
  const [beforePixel, setBeforePixel] = useState()
  const [inside, setInside] = useState()
  const [insidePixel, setInsidePixel] = useState()
  const [info, setInfo] = useState()
  const [infoPixel, setInfoPixel] = useState()
  const [moreInfoPixel, setMoreInfoPixel] = useState()

  useEffect(() => {
    getPixelBefore().then(pixel => setBefore(pixel))
    getPixelInside().then(pixel => setInside(pixel))
    getPixelInfo().then(pixel => setInfo(pixel))
  }, [])

  useEffect(() => {
    setBeforePixel(mapperToPixel(before?.values))
    setInsidePixel(mapperToPixel(inside?.values))
    const allInfos = mapperToPixel(info?.values)
    setInfoPixel(allInfos)
    setMoreInfoPixel(allInfos)
  }, [before, inside, info])

  return (
    <div className='flex h-screen text-[#1D1D1B] text-lg font-light'>
      <div className='w-screen flex-1 text-center text-8xl font-extrabold flex justify-center mt-24'>
        <h1 className='bg-gradient-to-l from-[#9A36E0] to-[#E6255B] inline-block text-transparent bg-clip-text'>Pixel Wealth</h1>
      </div>
      <div className='flex gap-2 m-1'>
        <div className='flex gap-1 m-1'>
          {beforePixel?.map(pixel => <div className='flex flex-col gap-3'>
            {pixel?.map(p => (
              <div key={p.id}><Cost informations={p}/></div>
            ))}
          </div>
          )}
        </div>
        <div>
          <div className='absolute m-1'>
            {infoPixel && infoPixel[0]?.map(pixel => <div key={pixel.id}><Cost informations={pixel} moreInfo={moreInfoPixel}/></div>)}
          </div>
          <div className='absolute flex gap-1 m-1'>
            {insidePixel?.map(pixel => <div className='flex flex-col gap-6 justify-between w-screen'>
              {pixel?.map(p => (
                <div key={p.id}>
                  <Cost informations={p}/>
                </div>
              ))}
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
