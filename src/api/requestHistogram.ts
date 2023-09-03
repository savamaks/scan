import { createAsyncThunk } from "@reduxjs/toolkit";
import { IRequestHistogram } from "../type";


export const requestHistogram = createAsyncThunk(
    "requestHistogram", 
async ({body,accessToken}:IRequestHistogram) => {
    const res = await fetch("https://gateway.scan-interfax.ru/api/v1/objectsearch/histograms", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body),
    });
    if(res.ok){
        const data = await res.json();
        return data;
    } else{
        return null
    }
    
});
