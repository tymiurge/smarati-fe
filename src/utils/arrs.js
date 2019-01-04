const chunk = (arr, chunkSize) => {
  var results = []
  for (var i = 0; i <arr.length; i += chunkSize)
      results.push(arr.slice(i, i + chunkSize))
  return results
}

const arrs = {
  chunk
}

export default arrs
