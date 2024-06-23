import { useEffect, useState } from "react"
import './cost.css'

export const Cost = ({informations, moreInfo}) => {
  const [height, setHeight] = useState()
  const [width, setWidth] = useState()

  useEffect(() => {
    const nbPixel = informations['Valeur (€)']/1000
    const sqrt = Math.round(Math.sqrt(nbPixel))

    if (nbPixel/sqrt > 500) {
      setHeight(500)
    } else setHeight(nbPixel/sqrt)

    setWidth(nbPixel/height)

  }, [informations, height])

  return <div className={`${moreInfo ? 'z-0' : 'z-10 mt-9 ml-9'}`}>
    <p>{informations['Valeur (€)']} €</p>
    <div style={{width: `${width}px`, height: `${height}px`}}>
      <div className={`${moreInfo ? 'bg-[#4BB166] flex justify-between ruler' : 'bg-[#FF4A52]'} w-full h-full`}>
        {moreInfo && moreInfo?.map(info => info.map(i => <p className="self-center">{i['Intitulé']}</p>))}
      </div>
    </div>
    {!moreInfo && <div className={`w-full h-full`}>{informations['Intitulé']}</div>}
  </div>
}