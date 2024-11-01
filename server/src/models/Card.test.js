const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Card } = require('./index');
const { db } = require('../db/config');

// define in global scope
let card

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  card = await Card.create({ name: 'Aragorn', mojo: 20, stamina: 75, imgURL: 'hotaragorn.numenor.net' })
})

// clear db after tests
afterAll(async () => await db.close())

describe('Card', () => {
  it('has an id', async () => {
    expect(card).toHaveProperty('id')
  })

  test("has correct name", async () => {
    expect(card.name).toBe('Aragorn');
  })

  test("has correct mojo", async () => {
    expect(card.mojo).toBe(20);
  })

  test("has correct stamina", async () => {
    expect(card.stamina).toBe(75);
  })

  test("has correct imgURL", async () => {
    expect(card.imgURL).toBe('hotaragorn.numenor.net');
  })

  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
})