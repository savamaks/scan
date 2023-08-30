// export const requestHistogram = async (body: any, accessToken: string) => {
//     try {
//         const res = await fetch("https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${accessToken}`,
//             },
//             body: JSON.stringify(body),
//         });
//         console.log(res);
//         const data = await res.json();
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// };

import { createAsyncThunk } from "@reduxjs/toolkit";

export const requestHistogram = createAsyncThunk(
    "requestHistogram", 
async ({body,accessToken}:any) => {
    const res = await fetch("https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body),
    });
    console.log(res);
    const data = await res.json();
    return data;
});
