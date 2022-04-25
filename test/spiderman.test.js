const Spiderman = require('./../app/Spiderman')

describe("Unit test for Spiderman Class", () => {
    test('1) Create an Spiderman Class', () => {
      const andrewGarfield = new Spiderman("Spiderman Sony",31,"Andrew Garfield",2,"Sony")
      expect(andrewGarfield.name).toBe("Spiderman Sony");
      expect(andrewGarfield.age).toBe(31);
      expect(andrewGarfield.actor).toBe("Andrew Garfield");
      expect(andrewGarfield.movies).toBe(2);
      expect(andrewGarfield.studio).toBe("Sony");
    });

    test('2) Create an Spiderman Class with methods', () => {
    const andrewGarfield = new Spiderman("Spiderman Sony",31,"Andrew Garfield",2,"Sony")
    expect(andrewGarfield.getInfo()).toBe("Hi my name is Andrew Garfield and I'm from Sony Studios");
    });
})