const orderByProps = require("../js/sorting");

describe("orderByProps", () => {
    it("returns an array of object properties sorted by order array and alphabetically", () => {
        const obj = {
            name: "мечник",
            health: 10,
            level: 2,
            attack: 80,
            defence: 40,
        };
        const order = ["name", "level"];

        const expected = [
            { key: "name", value: "мечник" },
            { key: "level", value: 2 },
            { key: "attack", value: 80 },
            { key: "defence", value: 40 },
            { key: "health", value: 10 },
        ];

        const result = orderByProps(obj, order);
        expect(result).toEqual(expected);
    });

    it("returns an array of all object properties sorted alphabetically if order array is empty", () => {
        const obj = {
            name: "мечник",
            health: 10,
            level: 2,
            attack: 80,
            defence: 40,
        };
        const order = [];

        const expected = [
            { key: "attack", value: 80 },
            { key: "defence", value: 40 },
            { key: "health", value: 10 },
            { key: "level", value: 2 },
            { key: "name", value: "мечник" },
        ];

        const result = orderByProps(obj, order);
        expect(result).toEqual(expected);
    });

    it("returns an array of object properties sorted alphabetically if order array is missing some keys", () => {
        const obj = {
            name: "мечник",
            health: 10,
            level: 2,
            attack: 80,
            defence: 40,
        };
        const order = ["name"];

        const expected = [
            { key: "name", value: "мечник" },
            { key: "attack", value: 80 },
            { key: "defence", value: 40 },
            { key: "health", value: 10 },
            { key: "level", value: 2 },
        ];

        const result = orderByProps(obj, order);
        expect(result).toEqual(expected);
    });

    it("throws an error if the first argument is not an object", () => {
        expect(() => orderByProps("not an object", [])).toThrow(
            "The first argument must be an object"
        );
    });

    it("throws an error if the second argument is not an array", () => {
        expect(() => orderByProps({}, "not an array")).toThrow(
            "The second argument must be an array"
        );
    });
});
