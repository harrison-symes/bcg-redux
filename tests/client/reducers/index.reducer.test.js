import index from '../../../client/reducers/indexReducer'

test('Index Reducer initial state', () => {
  const expected = 0
  const action = {}

  const actual = index(undefined, action)

  expect(actual).toEqual(expected)
})

test('Increase index case', () => {
    const num = 2
    const expected = 3

    const action = {
      type: 'INCREASE_INDEX',
      num
    }
  
    const actual = index(0, action)
    console.log(actual)
  
    expect(actual).toEqual(expected)
  })
