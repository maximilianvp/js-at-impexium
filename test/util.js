import { expect } from 'chai'

import { union } from '../src/util'

describe('util', () => {
  it('simple case', () => {
    const a = [1,2,3,4,5]
    const b = []
    const expected = [1,2,3,4,5]
    expect(union(a, b)).to.eql(expected)
  })

  it('unique', () => {
    const a = [1,2,3,4,5]
    const b = [6,1,7,2,3,4,5]
    const expected = [1,2,3,4,5,6,7]
    expect(union(a, b)).to.eql(expected)
  })

  it('flat unique', () => {
    const a = [1,2,3,4,5]
    const b = [6,7,[2,3,[5]]]
    const expected = [1,2,3,4,5,6,7]
    expect(union(a, b)).to.eql(expected)
  })

})
