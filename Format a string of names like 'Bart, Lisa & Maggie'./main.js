function list(names) {
    const persons = names.map(i => i['name']);
    let result = '';

    for (let i = 0; i < persons.length; ++i) {
        result += persons[i] + (i < persons.length - 2 ? ', ' : (i === persons.length - 2 ? ' & ' : ''));
    }

    return result;
}
