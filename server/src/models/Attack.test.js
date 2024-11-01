const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Attack } = require('./index');
const { db } = require('../db/config');

// define in global scope
let attack

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  attack = await Attack.create({ title: 'Slash of Anduril', mojoCost: 5, staminaCost: 10 })
})

// clear db after tests
afterAll(async () => await db.close())

describe('Attack', () => {
  it('has an id', async () => {
    expect(attack).toHaveProperty('id')
  })

  test("has correct title", async () => {
    expect(attack.title).toBe('Slash of Anduril');
  })

  test("has correct mojoCost", async () => {
    expect(attack.mojoCost).toBe(5);
  })

  test("has correct staminaCost", async () => {
    expect(attack.staminaCost).toBe(10);
  })


  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
})