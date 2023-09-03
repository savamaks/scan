import { createAsyncThunk } from "@reduxjs/toolkit";


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
