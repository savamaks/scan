import { createAsyncThunk } from "@reduxjs/toolkit";
import { IRequestLogIn } from "../type";


export const requestLogin = createAsyncThunk("requestApi", async (arg: IRequestLogIn) => {
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
