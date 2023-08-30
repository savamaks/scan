import { createAsyncThunk } from "@reduxjs/toolkit";

// export const requestInfo = async (params:any) => {
//     try {
//         let res = await fetch("https://gateway.scan-interfax.ru/api/v1/account/info",
//         {
//             method:"GET",
//             headers: {Authorization:`Bearer ${params}`}
//         });
//         const result = await res.json();
//         // console.log(result);
//         return result;
//     } catch (error) {
//         console.log(error);
//     }
// };

export const requestInfo = createAsyncThunk("requestInfo", 
async (params:string) => {
    let res = await fetch("https://gateway.scan-interfax.ru/api/v1/account/info", {
        method: "GET",
        headers: { Authorization: `Bearer ${params}` },
    });
    const result = await res.json();
    // console.log(result);
    return result;
});
