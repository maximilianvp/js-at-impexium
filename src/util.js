const UNION_MAX_ITERATIONS = 10

export const union = (...params) => {
  const input = params
  const result = []

  let i = 0
  while (input.length > 0 && i < UNION_MAX_ITERATIONS) {
    i++
    const current = input.shift()
    if (Object.prototype.toString.call(current) === '[object Array]') {
      for (let j=0; j<current.length; j++) {
        input.push(current[j])
      }
    } else if (result.indexOf(current) === -1) {
      result.push(current)
    }
  }

  return result
}
