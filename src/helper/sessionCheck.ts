export const sessionCheck = (sessionDate: string) => {
    const nowDate = Date.now();
    if (Date.parse(sessionDate) <= nowDate) {
        return true;
    } else {
        return false;
    }
};
