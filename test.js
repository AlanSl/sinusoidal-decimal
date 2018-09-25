'use strict'

const { test } = require('tap')
const sinusoidalDecimal = require('./index.js')

const expected = [
  '0.1464',
  '0.5000',
  '0.8536'
]

test('Typical inputs', (t) => {
  t.equals(sinusoidalDecimal(10, 10, 50), 0)
  t.equals(sinusoidalDecimal(20, 10, 50).toFixed(4), expected[0])
  t.equals(sinusoidalDecimal(30, 10, 50).toFixed(4), expected[1])
  t.equals(sinusoidalDecimal(40, 10, 50).toFixed(4), expected[2])
  t.equals(sinusoidalDecimal(50, 10, 50), 1)
  t.end()
})

test('Out of bounds', (t) => {
  t.equals(sinusoidalDecimal(1, 10, 100), 0)
  t.equals(sinusoidalDecimal(-1, 1, 2), 0)

  t.equals(sinusoidalDecimal(100, 1, 10), 1)
  t.equals(sinusoidalDecimal(1, -10, -1), 1)
  t.end()
})

test('Edge cases', (t) => {
  t.equals(sinusoidalDecimal(20, 50, 10).toFixed(4), expected[0])
  t.equals(sinusoidalDecimal(1, 100, 10), 0)
  t.equals(sinusoidalDecimal(20, 50, 50), 0)
  t.equals(sinusoidalDecimal(50, 50, 50), 1)
  t.equals(sinusoidalDecimal(90, 50, 50), 1)
  t.end()
})

test('Validation', (t) => {
  t.throws(() => {
    sinusoidalDecimal(NaN, 10, 10)
  }, new Error('NaN passed as sinusoidalDecimal argument [0]'))

  t.throws(() => {
    sinusoidalDecimal(10, 10)
  }, new Error('Invalid type undefined passed as sinusoidalDecimal argument [2]'))
  t.end()
})
