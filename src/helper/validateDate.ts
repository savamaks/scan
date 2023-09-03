export const validateDate = (from: string, to: string) => {
    const fromNumber = +from.split("-").join("");
    const toNumber = +to.split("-").join("");
    if (toNumber < fromNumber) {
        return true;
    } else {
        return false;
    }
};
