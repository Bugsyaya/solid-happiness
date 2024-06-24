import { calculSize } from '../utils/calculSize'
import './cost.css'

export const Cost = ({informations, moreInfo}) => {
  const {width, height} = calculSize(informations['Valeur (€)'])

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