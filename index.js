'use strict'

function sinusoidalDecimal (initial, min, max) {
  if (initial > max) return 1
  if (initial < min) return 0

  const pi = Math.PI
  const range = max - min

  // Linear decimal % of distance between min and max (0 if === min, 1 if === max)
  const decimalPosition = ((initial - min) / range)

  // Gives position on a sine curve between -1 and 1
  const sinusoidalPosition = Math.sin((decimalPosition - 0.5) * pi)

  // Returns position on sine curve between 0 and 1
  return ((sinusoidalPosition + 1) / 2)
}

module.exports = sinusoidalDecimal
