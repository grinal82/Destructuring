function getSpecials(character) {
    const { special } = character;

    return special.map(
        ({ id, name, description = "Описание недоступно", icon }) => ({
            id,
            name,
            description,
            icon,
        })
    );
}

module.exports = getSpecials;
