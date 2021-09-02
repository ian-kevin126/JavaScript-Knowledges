'use strict'

// NPM Modules
import chai from 'chai'

// Algorithm
import { bucketSort } from '../../es'

const expect = chai.expect

// Test
describe('Bucket Sort Algorithm: bucketSort(input)', () => {
  it('Should return an array which has been sorted from low to high values when given an array of numbers', () => {
    expect(bucketSort([10, 9, 8, 6, 3, 15, 168, 186, 298, 2, 4, 4, 26], 5).toString()).to.eql([2, 3, 4, 4, 6, 8, 9, 10, 15, 26, 168, 186, 298].toString())
    expect(bucketSort([10, 9, 8, 6, 3, 15, 168, 186, 298, 2, 4, 4, 26]).toString()).to.eql([2, 3, 4, 4, 6, 8, 9, 10, 15, 26, 168, 186, 298].toString())
  })
  it('Should return an empty array when there is no input array', () => {
    expect(bucketSort().toString()).to.eql([].toString())
  })
})
