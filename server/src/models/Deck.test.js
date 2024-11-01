const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck } = require('./index');
const { db } = require('../db/config');

// define in global scope
let deck

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  deck = await Deck.create({ name: 'Middle Earth', xp: 65 })
})

// clear db after tests
afterAll(async () => await db.close())

describe('Deck', () => {
  it('has an id', async () => {
    expect(deck).toHaveProperty('id')
  })

  test("has correct username", async () => {
    expect(deck.name).toBe('Middle Earth');
  })

  test("has correct xp", async () => {
    expect(deck.xp).toBe(65);
  })

  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
})