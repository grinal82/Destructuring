function orderByProps(obj, sortKeys) {
    if (typeof obj !== "object" || Array.isArray(obj) || obj === null) {
        throw new Error("The first argument must be an object");
    }
    if (!Array.isArray(sortKeys)) {
        throw new Error("The second argument must be an array");
    }
    const resultArr = [];
    const sortedObj = {};

    // Сортировка объекта по заданному порядку
    for (const prop of sortKeys) {
        if (obj.hasOwnProperty(prop)) {
            sortedObj[prop] = obj[prop];
        }
    }

    // Сортировка оставшихся свойств в алфавитном порядке
    const otherProps = Object.keys(obj)
        .filter((prop) => !sortKeys.includes(prop))
        .sort();
    for (const prop of otherProps) {
        sortedObj[prop] = obj[prop];
    }

    // Преобразование отсортированного объекта в массив объектов
    for (const key in sortedObj) {
        resultArr.push({ key, value: sortedObj[key] });
    }

    return resultArr;
}

/* Simple test of functionality */
// console.log(
//     orderByProps(
//         {
//             name: "мечник",
//             health: 10,
//             level: 2,
//             attack: 80,
//             defence: 40,
//         },
//         ["name", "level"]
//     )
// );



module.exports = orderByProps;
