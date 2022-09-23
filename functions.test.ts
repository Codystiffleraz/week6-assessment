const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {

    test('Check if shuffleArray returns an array', () => {
    expect(shuffleArray.length).toBe(1)
})
    test('Check if shufflerArray is the same length as the arguement sent in', () => {
    expect(shuffleArray.length).toBe([1, 2, 3, 4, 5])
})


})

