const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Attack, Card, Deck, User } = require('./index');
const { db } = require('../db/config');


// clear db before tests
beforeAll(async () => {
  await db.sync({ force: true })
})

// clear db after tests
afterAll(async () => await db.close())

describe('Associations', () => {
  test('user can have only one deck', async () => {
    let myUser = await User.create({username: 'The Istar'});
    let myDeck = await Deck.create({name: 'The Fellowship', xp: 45});
    
    await myUser.setDeck(myDeck);
    const associatedDeck = await myUser.getDeck();

    expect(associatedDeck instanceof Deck).toBeTruthy();
  })

  test("deck can have many cards", async () => {
    let myDeck = await Deck.create({name: 'The Fellowship', xp: 45});
    let card1 = await Card.create({ name: 'Aragorn', mojo: 20, stamina: 75, imgUrl: 'hotaragorn.numenor.net' });
    let card2 = await Card.create({ name: 'Frodo', mojo: 5, stamina: 55, imgUrl: 'elijahasfrodo.lotr.net' });

    await myDeck.addCard(card1);
    await myDeck.addCard(card2);

    const associatedCards = await myDeck.getCards();

    expect(associatedCards.length).toBe(2);
    expect(associatedCards instanceof Card).toBeTruthy;
  })

  test("card can have many attacks", async () => {
    let myCard = await Card.create({ name: 'Aragorn', mojo: 20, stamina: 75, imgURL: 'hotaragorn.numenor.net' });
    let attack1 = await Attack.create({ title: 'Slash of Anduril', mojoCost: 5, staminaCost: 10 });
    let attack2 = await Attack.create({ title: 'Lead ghost army to battle', mojoCost: 15, staminaCost: 20 });

    await myCard.addAttack(attack1);
    await myCard.addAttack(attack2);

    const associatedAttacks = await myCard.getAttacks();

    expect(associatedAttacks.length).toBe(2);
    expect(associatedAttacks instanceof Attack).toBeTruthy;
  })

  test("attack can have many cards", async () => {
    let myAttack = await Attack.create({ title: 'Slash of Anduril', mojoCost: 5, staminaCost: 10 });
    let card1 = await Card.create({ name: 'Aragorn', mojo: 20, stamina: 75, imgUrl: 'hotaragorn.numenor.net' });
    let card2 = await Card.create({ name: 'Frodo', mojo: 5, stamina: 55, imgUrl: 'elijahasfrodo.lotr.net' });

    await myAttack.addCard(card1);
    await myAttack.addCard(card2);

    const associatedCards = await myAttack.getCards();

    expect(associatedCards.length).toBe(2);
    expect(associatedCards instanceof Card).toBeTruthy;
  })

})