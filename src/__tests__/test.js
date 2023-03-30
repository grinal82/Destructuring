const Character = require("../js/character");
const Undead = require("../js/character");
const Daemon = require("../js/character");
const Swordsman = require("../js/character");
const Zombie = require("../js/character");
const Magician = require("../js/character");
const Bowerman = require("../js/character");

describe("Character", () => {
    test("should throw an error if the name is too short", () => {
        expect(() => new Character("a", "Swordsman")).toThrow(
            "Имя должно содержать от 2 до 10 символов"
        );
    });

    test("should throw an error if the name is too long", () => {
        expect(() => new Character("12345678910a", "Swordsman")).toThrow(
            "Имя должно содержать от 2 до 10 символов"
        );
    });

    test("should throw an error if the type is incorrect", () => {
        expect(() => new Character("Bob", "Invalid")).toThrow(
            "Некорректный тип персонажа"
        );
    });

    test("should set the correct properties", () => {
        const character = new Character("Bob", "Swordsman");
        expect(character.name).toBe("Bob");
        expect(character.type).toBe("Swordsman");
        expect(character.health).toBe(100);
        expect(character.level).toBe(1);
        expect(character.attack).toBe(40);
        expect(character.defence).toBe(10);
    });

    test("should level up the character", () => {
        const character = new Character("Bob", "Swordsman");
        character.health = 50;
        character.levelUp();
        expect(character.level).toBe(2);
        expect(character.attack).toBe(48);
        expect(character.defence).toBe(12);
        expect(character.health).toBe(100);
    });

    test("should not level up a dead character", () => {
        const character = new Character("Bob", "Swordsman");
        character.health = 0;
        expect(() => character.levelUp()).toThrow(
            "Нельзя повысить левел умершего"
        );
    });

    test("should damage the character", () => {
        const character = new Character("Bob", "Swordsman");
        character.damage(20);
        expect(character.health).toEqual(82);
    });

    test("should not damage a dead character", () => {
        const character = new Character("Bob", "Swordsman");
        character.health = 0;
        expect(() => character.damage(20)).toThrow(
            "Нельзя нанести урон мертвому персонажу"
        );
    });
});

describe("Bowerman", () => {
    test("should set the correct type", () => {
        const bowerman = new Bowerman("Bob", "Bowman");
        expect(bowerman.type).toBe("Bowman");
    });
});

describe("Swordsman", () => {
    test("should set the correct type", () => {
        const swordsman = new Swordsman("Bob", "Swordsman");
        expect(swordsman.type).toBe("Swordsman");
    });
});

describe("Magician", () => {
    test("should set the correct type", () => {
        const magician = new Magician("Bob", "Magician");
        expect(magician.type).toBe("Magician");
    });
});

describe("Daemon", () => {
    test("should set the correct type", () => {
        const daemon = new Daemon("Bob", "Daemon");
        expect(daemon.type).toBe("Daemon");
    });
});

describe("Undead", () => {
    test("should set the correct type", () => {
        const undead = new Undead("Bob", "Undead");
        expect(undead.type).toBe("Undead");
    });

describe("Zombie", () => {
    test("should set the correct type", () => {
        const undead = new Zombie("Bob", "Zombie");
        expect(undead.type).toBe("Zombie");
    });
});
});
