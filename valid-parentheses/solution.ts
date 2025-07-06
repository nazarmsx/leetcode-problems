// Problem description: https://leetcode.com/problems/valid-parentheses

function isValid(s: string): boolean {
    const stack = [];
    const brackets = {
        '{': { isOpenning: true, op:  '}' },
        '(': { isOpenning: true, op:  ')' },
        '[': { isOpenning: true, op:  ']' },
        '}': { isOpenning: false, op:  '{' },
        ')': { isOpenning: false, op:  '(' },
        ']': { isOpenning: false,  op:  '[' },
    };

    let res = true;

    [...s].forEach((elem) => {
        if (brackets[elem].isOpenning) {
            stack.push(elem);
        } else {
            const previous = stack.pop();
            if (!previous || brackets[previous].op !== elem) {
                res = false;
            }
        }
    });

    if (stack.length) {
        res = false;
    }

    return res;
};