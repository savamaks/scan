import { IRequestHistogram } from "../type";

export const requestObjectSearch = async ({body, accessToken}:IRequestHistogram) => {
    try {
        const res = await fetch("https://gateway.scan-interfax.ru/api/v1/objectsearch", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
