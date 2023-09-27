import { createSlice } from "@reduxjs/toolkit";
import { requestInfo } from "../api/requstInfo";
import { TypeEventFiltersInfo } from "../type";

interface IinitialState {
    loadingInfo: string;
    eventFiltersInfo: TypeEventFiltersInfo;
}
const initialState: IinitialState = {
    loadingInfo: "",
    eventFiltersInfo: { usedCompanyCount: "", companyLimit: "" },

};

const eventSlice = createSlice({
    name: "eventSlice",
    initialState,
    reducers: {
        removeLoadingInfo(state) {
            state.loadingInfo = "";
        },
    },
    extraReducers(builder) {
        //requestInfo
        builder.addCase(requestInfo.pending, (state) => {
            state.loadingInfo = "loading";

        }),
            builder.addCase(requestInfo.fulfilled, (state, action) => {
                console.log("object");
                state.loadingInfo = "true";
                state.eventFiltersInfo = action.payload.eventFiltersInfo;
            }),
            builder.addCase(requestInfo.rejected, (state) => {
                state.loadingInfo = "error";
            });
    },
});
export default eventSlice.reducer;

export const { removeLoadingInfo } = eventSlice.actions;
