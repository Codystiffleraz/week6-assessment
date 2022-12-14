const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {

    test('Check if shuffleArray shuffles', () => {
        let arr = [1, 2, 3, 4, 5]
        let result = shuffleArray(arr)
    expect(arr.length).toBe(result.length)
})
    test('return array with same items', () => {
        let arr = [1, 2, 3, 4, 5]
        let result = shuffleArray(arr)
        
        let myVar = true
        for(let i = 0; i < result.length; i++){
            if(arr.includes(result[i]) === false){
                myVar = false
                return 
            }
        }
        expect(myVar).toBe(true)
})
})

