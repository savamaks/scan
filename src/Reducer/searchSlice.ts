// import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
// import { requestDocument } from "../api/requestDocument";

// const arrDocument = createEntityAdapter({
//     selectId: (entity: any) => entity.id,
// });
// // const arrTotalDocuments = createEntityAdapter({
// //     selectId: (entity: any) => entity.date,
// // });
// // const arrRiskFactory = createEntityAdapter({
// //     selectId: (entity: any) => entity.date,
// // });

// const searchSlice = createSlice({
//     name: "arrSlice",
//     initialState: arrDocument.getInitialState({
//         loadingDocument: "",
//         statusError: "",
//     }),
//     reducers: {
//         addDocumentOne: arrDocument.addOne,
//         addDocumentArr: arrDocument.addMany,
//         removeAll: arrDocument.removeAll,
//         // addManyArr: arrTotalDocuments.addMany,
//     },
//     extraReducers(builder) {
//         builder.addCase(requestDocument.pending, (state) => {
//             state.loadingDocument = "loading";
//             state.statusError = "";
//         }),
//             builder.addCase(requestDocument.fulfilled, (state, action) => {
//                 action.payload.map((el: any) => {
//                     if (el.ok) {
//                         arrDocument.addOne(state, el.ok);
//                     }
//                 });
//                 state.loadingDocument = "";
//             }),
//             builder.addCase(requestDocument.rejected, (state) => {
//                 state.loadingDocument = "";
//                 state.statusError = "error";
//             })
//             //arrHistogram
//             // builder.addCase(requestHistogram.pending, (state) => {
//             //     state.loadingDocument = "loading";
//             //     state.statusError = "";
//             // }),
//             // builder.addCase(requestHistogram.fulfilled, (state, action) => {
//             //     state.loadingDocument = "";
//             //     console.log(action.payload.data[0].data);
//             //     state.arrRiskFactory = action.payload.data[0].data
//             //     // arrTotalDocuments.addMany(state,action.payload.data[0].data)
//             //     // arrRiskFactory.addMany(state,action.payload.data[1].data)

//             // }),
//             // builder.addCase(requestHistogram.rejected, (state) => {
//             //     state.loadingDocument = "";
//             //     state.statusError = "error";
//             // });
//     },
// });

// export default searchSlice.reducer;

// export const selectors = arrDocument.getSelectors((state: any) => state.appSlice);

// export const { addDocumentArr, removeAll } = searchSlice.actions;
