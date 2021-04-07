function validParentheses(parens) {
    const stack = [];

    for (let i = 0; i < parens.split("").length; ++i) {
        if (parens[i] === '(') {
            stack.push(parens[i]);
        } else {
            if (stack.length !== 0) {
                const pop = stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
}