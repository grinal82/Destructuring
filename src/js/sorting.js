function orderByProps(obj, sortKeys) {
    if (typeof obj !== "object" || Array.isArray(obj) || obj === null) {
        throw new Error("The first argument must be an object");
    }
    if (!Array.isArray(sortKeys)) {
        throw new Error("The second argument must be an array");
    }
    /* Получаем список ключей */
    const keys = Object.keys(obj);
    /* Отфильтровываем ключи,которые не нужно сортировать */
    const filteredKeys = keys.filter((key) => !sortKeys.includes(key));
    /* Объединяем ключи, кот нужно сортировать и
которые не нужно сортировать методом 'concat' */
    const sortedKeys = sortKeys.concat(filteredKeys.sort());
    /* с помощью Array.prototype.map и создадим массив объектов с ключами и их значениями */
    const result = sortedKeys.map((key) => ({ key, value: obj[key] }));
    return result;
}

module.exports = orderByProps;
