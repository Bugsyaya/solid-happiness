import { calculSize } from '../utils/calculSize'
import { formatValue } from '../utils/format'
import './cost.css'

export const Cost = ({informations, moreInfo}) => {
  const {width, height} = calculSize(informations['Valeur (€)'])

  return <div className={`${moreInfo ? 'z-0' : 'z-10 mt-9 ml-9'} `}>
    <div className='flex'>
      <p className='sticky left-2'>{formatValue(informations['Valeur (€)'])}</p>
    </div>
    <div style={{width: `${width}px`, height: `${height}px`}} className='sticky left-2'>
      <div className={`${moreInfo ? 'bg-[#4BB166] flex justify-between ruler' : 'bg-[#FF4A52]'} w-full h-full`}>
        {moreInfo && moreInfo?.map(info => <div className='self-center w-auto'>
          {info.map(i => <><p className="ml-4">{i['Intitulé']} {informations?.['Source (si nécessaire)'] && <sup><a className='text-xs underline text-white font-thin' href={`${informations['Source (si nécessaire)']}`}>{informations['id']}</a></sup>}</p></>)}
        </div>
        )}
      </div>
    </div>
    {!moreInfo && <><p className={`w-full h-full`}>{informations['Intitulé']} {informations?.['Source (si nécessaire)'] && <sup><a className='text-xs underline text-white font-thin' href={`${informations['Source (si nécessaire)']}`}>{informations['id']}</a></sup>}</p></>}
  </div>
}