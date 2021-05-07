import foo from '.'

test('has default message', () => {
  expect(foo()).toEqual('Hello')
})