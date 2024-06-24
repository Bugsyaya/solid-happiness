export const getPixelBefore = async () => {
  const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1TxpUY6OOPa86sYHCy8kLlrC_3LqWEXXfQ1LWpGzEx_8/values/Before!A1:F5?key=AIzaSyCblZ2TjasIP5xXMxM9RLBjaD5aPlN87tY&majorDimension=COLUMNS')
  
  if (!response.ok) {
    console.error(response.text())
    return
  }
  return response.json()
}

export const getPixelInside = async () => {
  const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1TxpUY6OOPa86sYHCy8kLlrC_3LqWEXXfQ1LWpGzEx_8/values/Inside!A1:F15?key=AIzaSyCblZ2TjasIP5xXMxM9RLBjaD5aPlN87tY&majorDimension=COLUMNS')
  
  if (!response.ok) {
    console.error(response.text())
    return
  }
  
  return response.json()
}

export const getPixelInfo = async () => {
  const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1TxpUY6OOPa86sYHCy8kLlrC_3LqWEXXfQ1LWpGzEx_8/values/Info!A1:F25?key=AIzaSyCblZ2TjasIP5xXMxM9RLBjaD5aPlN87tY&majorDimension=COLUMNS')
  
  if (!response.ok) {
    console.error(response.text())
    return
  }
  
  return response.json()
}
