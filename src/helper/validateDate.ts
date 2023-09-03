export const validateDate = (from: string, to: string) => {
    const fromDate = Date.parse(from);
    const toDate = Date.parse(to);
    const nowDate = Date.now();
    if (toDate < fromDate || nowDate <= toDate) {
        return true;
    } else {
        return false;
    }
};
