export const mapperToPixel = (arrays) => {
  if(!arrays) return

  const [keys, ...response] = arrays[0].map((_, i) => {
    return arrays.map((ee) => ee[i]);
  })

  const resp = response.map((resp, ii) => ([{...Object.fromEntries(keys.map((key, i) => [key, resp[i]])), id: ii}]))

  const groups = Object.values(Object.groupBy(resp.flatMap(r => r), (g) => g['Group']))

  return groups
}
