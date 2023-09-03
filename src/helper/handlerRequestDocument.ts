export const handlerRequestDocument = (arr: any, count: number, limit: number) => {
    const arrBody: any = { ids: [] };
    if (arr.items.length > count) {
        arr.items.map((el: any, index: number) => {
            if (index >= count && index < count + limit) {
                arrBody.ids.push(el.encodedId);
            }
        });
        return arrBody;
    } else {
        return null;
    }
};