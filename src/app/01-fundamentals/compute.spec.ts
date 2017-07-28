import {compute} from './compute'
describe('compute',() => {
})
  it('it should return 0 if input is negative', () => {
    const  result = compute(-0);
    expect(result).toBe(0)
  })


  it('it should increment the input if it is positive', () => {
  const  result = compute(-1);
  expect(result).toBe(2)

})
