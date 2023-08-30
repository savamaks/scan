import { createAsyncThunk } from "@reduxjs/toolkit";


export const requestDocument = createAsyncThunk(
    "fetchDocument",
    async ({body, accessToken}:any) => {
    const res = await fetch("https://gateway.scan-interfax.ru/api/v1/documents", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body),
    });
    if(res.status === 200){
        const data = await res.json();
        return data;
    } else{
        return null
    }
    
});
