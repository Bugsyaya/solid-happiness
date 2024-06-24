export const calculSize = (cost) => {
  if(!cost) return {}
  
  const nbPixel = cost/1000
  const sqrt = Math.round(Math.sqrt(nbPixel))

  if (nbPixel/sqrt > 500) return {width: nbPixel/500, height: 500}
  else return {width: nbPixel/sqrt, height: nbPixel/sqrt}
}
