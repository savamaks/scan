import { IBodyRequestDocument, TypeArrObjectSearch, TypeItemsObjectSearch } from "../type";

export const handlerRequestDocument = (arr: TypeArrObjectSearch, count: number, limit: number) => {
    const arrBody: IBodyRequestDocument = { ids: [] };
    if (arr.items.length > count) {
        arr.items.map((el: TypeItemsObjectSearch, index: number) => {
            if (index >= count && index < count + limit) {
                arrBody.ids.push(el.encodedId);
            }
        });
        return arrBody;
    } else {
        return null;
    }
};
