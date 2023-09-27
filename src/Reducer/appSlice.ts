import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TypeInitialState } from "../type";
import { requestHistogram } from "../api/requestHistogram";
import { requestDocument } from "../api/requestDocument";
import { requestLogin } from "../api/requestLogin";

const initialState: TypeInitialState = {
    button: true,
    activeBurger: false,
    loading: true,
    logIn: false,
    buttonEntry: true,
    buttonReq: false,
    buttonLoadMoreActive: true,
    activePlan: "beginner",
    countSlider: 5,
    checkedArr: [],
    arrSearchHistogram: { data: [] },
    arrObjectSearch: { items: [], mappings: [{ inn: "", entityIds: [] }] },
    limitLoadingDocument: 10,
    countLoadingDocument: 0,
    arrDocument: [],
    loadingLogIn: "",
    loadingHistogram: "",
    loadingDocument: "",
    statusError: "",
    resultLogIn: {
        accessToken: "",
        expire: "",
        errorCode: "",
        message: "",
    },
};

const appSlice = createSlice({
    name: "appSlice",
    initialState,
    reducers: {
        changeBoolean(state: any, action: PayloadAction<string>) {
            const { payload } = action;
            state[payload] = !state[payload];
        },
        changeActivePlan(state, action) {
            state.activePlan = action.payload;
        },
        changeCountSlider(state, action) {
            state.countSlider = action.payload;
        },
        removeToken(state: any) {
            state.loadingLogIn = "";
            state.loadingHistogram = "";
            state.loadingDocument = "";
            state.resultLogIn = {
                accessToken: "",
                expire: "",
                errorCode: "",
                message: "",
            };
        },
        changeBooleanName(state: any, action) {
            state[action.payload.name] = action.payload.value;
        },
        addChecked(state, action: PayloadAction<string>) {
            state.checkedArr.push(action.payload);
        },
        removeChecked(state, action: PayloadAction<string>) {
            state.checkedArr = state.checkedArr.filter((el) => el !== action.payload);
        },
        cleanArrChecked(state) {
            state.checkedArr = [];
        },
        changeCount(state, action) {
            state.countLoadingDocument = state.countLoadingDocument + action.payload;
        },

        changeLoading(state) {
            state.loadingHistogram = "";
        },
        clearArr(state) {
            state.arrSearchHistogram = { data: [] };
            state.arrObjectSearch = { items: [], mappings: [{ inn: "", entityIds: [] }] };
            state.arrDocument = [];
            state.countLoadingDocument = 0;
            state.loadingHistogram = "";
            state.loadingDocument = "";
        },
        addArrObjectSearch(state, action) {
            state.arrObjectSearch = action.payload;
        },
    },
    extraReducers(builder) {
        //requestLogin
        builder.addCase(requestLogin.pending, (state) => {
            state.loadingLogIn = "loading";
        }),
            builder.addCase(requestLogin.fulfilled, (state, action) => {
                if (action.payload.accessToken === undefined) {
                    state.loadingLogIn = "";
                } else {
                    state.loadingLogIn = "true";
                }
                state.resultLogIn = action.payload;
            }),
            builder.addCase(requestLogin.rejected, (state) => {
                state.loadingLogIn = "";
                state.statusError = "";
            });

        //requestInfo
        // builder.addCase(requestInfo.pending, (state) => {
        //     state.loadingInfo = "loading";
        // }),
        //     builder.addCase(requestInfo.fulfilled, (state, action) => {
        //         console.log('object');
        //         state.loadingInfo = "true";
        //         state.eventFiltersInfo = action.payload.eventFiltersInfo;
        //     }),
        //     builder.addCase(requestInfo.rejected, (state) => {
        //         state.loadingInfo = "";
        //         state.statusError = "";
        //     });

        //arrHistogram
        builder.addCase(requestHistogram.pending, (state) => {
            state.loadingHistogram = "loading";
            state.statusError = "";
        }),
            builder.addCase(requestHistogram.fulfilled, (state, action) => {
                if (action.payload === null) {
                    console.log(action.payload);
                    state.loadingHistogram = "error";
                } else {
                    state.loadingHistogram = "true";
                    state.arrSearchHistogram = action.payload;
                }
            }),
            builder.addCase(requestHistogram.rejected, (state) => {
                state.loadingHistogram = "";
                state.statusError = "error";
            });

        //arrDocument
        builder.addCase(requestDocument.pending, (state) => {
            state.loadingDocument = "loading";
            state.statusError = "";
        }),
            builder.addCase(requestDocument.fulfilled, (state, action) => {
                if (action.payload !== null) {
                    action.payload.map((el: any) => {
                        state.arrDocument.push(el);
                    });
                    state.loadingDocument = "true";
                } else {
                    state.loadingDocument = "error";
                }
            }),
            builder.addCase(requestDocument.rejected, (state) => {
                state.loadingDocument = "";
                state.statusError = "error";
            });
    },
});
export default appSlice.reducer;

// export const selectorsAdapter = arrEntity.getSelectors((state: any) => state.appSlice);

export const {
    addArrObjectSearch,
    clearArr,
    changeCount,
    changeLoading,
    changeBoolean,
    changeActivePlan,
    changeCountSlider,
    removeToken,
    changeBooleanName,
    addChecked,
    removeChecked,
    cleanArrChecked,
} = appSlice.actions;
