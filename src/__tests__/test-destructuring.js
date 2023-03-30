const getSpecials = require("../js/destructuring");

describe("getSpecials function", () => {
    it("returns an object with id, name, icon, and description properties for a valid attack", () => {
        const character = {
            name: "Лучник",
            type: "Bowman",
            health: 50,
            level: 3,
            attack: 40,
            defence: 10,
            special: [
                {
                    id: 8,
                    name: "Двойной выстрел",
                    icon: "http://...",
                    description: "Двойной выстрел наносит двойной урон",
                },
                {
                    id: 9,
                    name: "Нокаутирующий удар",
                    icon: "http://...",
                },
            ],
        };

        const result = getSpecials(character);

        expect(result).toEqual([
            {
                id: 8,
                name: "Двойной выстрел",
                icon: "http://...",
                description: "Двойной выстрел наносит двойной урон",
            },
            {
                id: 9,
                name: "Нокаутирующий удар",
                icon: "http://...",
                description: "Описание недоступно",
            },
        ]);
    });
});
