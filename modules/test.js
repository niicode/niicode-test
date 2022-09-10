// add function to global scope

function expect (actual) {
  return {
    toBe (expected) {
      if (actual !== expected) {
        throw new Error(`Expected ${actual} but got ${expected}`)
      } else {
        return true
      }
    },
    toEqual (expected) {
      if (actual !== expected) {
        throw new Error(`Expected ${actual} but got ${expected}`)
      } else {
        return true
      }
    },
    toBeGreaterThan (expected) {
      if (actual <= expected) {
        throw new Error(`Expected ${actual} to be greater than ${expected}`)
      } else {
        return true
      }
    },
    toBeLessThan (expected) {
      if (actual >= expected) {
        throw new Error(`Expected ${actual} to be less than ${expected}`)
      } else {
        return true
      }
    },
    toBeGreaterThanOrEqual (expected) {
      if (actual < expected) {
        throw new Error(
          `Expected ${actual} to be greater than or equal to ${expected}`
        )
      } else {
        return true
      }
    },
    toBeLessThanOrEqual (expected) {
      if (actual > expected) {
        throw new Error(
          `Expected ${actual} to be less than or equal to ${expected}`
        )
      } else {
        return true
      }
    },
    toBeTruthy () {
      if (!actual) {
        throw new Error(`Expected ${actual} to be truthy`)
      } else {
        return true
      }
    },
    toBeFalsy () {
      if (actual) {
        throw new Error(`Expected ${actual} to be falsy`)
      } else {
        return true
      }
    },
    toBeNaN () {
      if (!Number.isNaN(actual)) {
        throw new Error(`Expected ${actual} to be NaN`)
      } else {
        return true
      }
    },
    toBeNull () {
      if (actual !== null) {
        throw new Error(`Expected ${actual} to be null`)
      } else {
        return true
      }
    },
    toBeUndefined () {
      if (actual !== undefined) {
        throw new Error(`Expected ${actual} to be undefined`)
      } else {
        return true
      }
    },
    toBeDefined () {
      if (actual === undefined) {
        throw new Error(`Expected ${actual} to be defined`)
      } else {
        return true
      }
    },
    toContain (expected) {
      if (!actual.includes(expected)) {
        throw new Error(`Expected ${actual} to contain ${expected}`)
      } else {
        return true
      }
    },
    toBeInstanceOf (expected) {
      if (!(actual instanceof expected)) {
        throw new Error(`Expected ${actual} to be an instance of ${expected}`)
      } else {
        return true
      }
    },
    toThrow (expected) {
      try {
        actual()
      } catch (err) {
        if (err !== expected) {
          throw new Error(`Expected ${err} to be ${expected}`)
        } else {
          return true
        }
      }
    }
  }
}

function describe (description, callback) {
  console.log(description)
  callback()
}

function test (description, callback) {
  try {
    callback()
    console.log(`✅ ${description}`)
  } catch (err) {
    console.log(`❌ ${description}`)
  }
}

module.exports = {
  expect,
  describe,
  test
}
