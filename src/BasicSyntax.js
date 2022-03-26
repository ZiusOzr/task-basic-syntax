export function romanToInteger(str) {
    let result = 0;
    let dict = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let len = str.length;
    let a;
    let b;
    let c;
    result = dict[str[0]];
    for (let i = 0; i <= len - 2; i++) {
        a = dict[str[i]];
        b = dict[str[i + 1]];
        if (a < b) {
            b -= 2 * a;
        }
        result += b;
    }
    return result;
}
