export function validateInn(inn: string) {
    let result = false;

    if (!inn.length) {
        return false;
    } else if (/[^0-9]/.test(inn)) {
        return false;
    } else if ([10, 12].indexOf(inn.length) === -1) {
        return false;
    } else {
        let checkDigit = function (inn: any, coefficients: any) {
            let n: number = 0;
            for (let i in coefficients) {
                n += coefficients[i] * inn[i];
            }
            const r = (n % 11) % 10;
            return parseInt(r.toString());
        };
        switch (inn.length) {
            case 10:
                let n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
                if (n10 === parseInt(inn[9])) {
                    result = true;
                }
                break;
            case 12:
                let n11 = checkDigit(inn, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                let n12 = checkDigit(inn, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                if (n11 === parseInt(inn[10]) && n12 === parseInt(inn[11])) {
                    result = true;
                }
                break;
        }
    }
    return result;
}
