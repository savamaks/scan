import { createAsyncThunk } from "@reduxjs/toolkit";
import { TypeArg } from "../type";

// export const requestLogin = async (arg: TypeArg) => {
//     try {
//         let res = await fetch("https://gateway.scan-interfax.ru/api/v1/account/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(arg),
//         });
//         console.log(res.ok);
//         const result = await res.json();
//         return result;
//     } catch (error) {
//         console.log(error);
//     }
// };
export const requestLogin: any = createAsyncThunk("requestApi", async (arg: any) => {
    const res = await fetch("https://gateway.scan-interfax.ru/api/v1/account/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(arg),
    });

    const data = await res.json();
    return data;
});
