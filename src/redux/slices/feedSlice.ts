import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { options } from "@/directives/apiOptions";
export type feedState = {
   feed: any,
   filters: string[],
   trending: string[],
   status: 'idle' | 'pending' | 'failed' | 'successful' | string

}

const initialState = {
   feed: [],
   filters: [],
   trending: [],
   status: 'idle'
} as feedState

export const fetchHomeData = createAsyncThunk(('/feed'), async (url: string) => {
   try {
      const response = await fetch(url, options);
      const result = await response.json();
      let filter = result.filters;
      try {
         const nextResponse = await fetch(`https://yt-api.p.rapidapi.com/home?token=${result.continuation}&geo=IN`, options);
         const nextResult: any = await nextResponse.json();
         let newFeed = [...result.data, ...nextResult.data];
         return { newFeed, filter };
      } catch (error) {
         console.log(error)
      }

   } catch (error) {
      console.log(error);
   }
})
export const fetchFilterData = createAsyncThunk(('/feed/filter'), async (url: string) => {
   try {
      const response = await fetch(url, options);
      const result = await response.json();
      let filterFeed = result.data;
      return filterFeed;

   } catch (error) {
      console.log(error);
   }

})

export const fetchTrendingData = createAsyncThunk(('/feed/trending'), async (url: string) => {
   try {
      const response = await fetch(url, options);
      const result = await response.json();
      let filter = result.data;
      return filter;

   } catch (error) {
      console.log(error);
   }
})
export const feedReducer = createSlice({
   name: 'feed',
   initialState,
   reducers: {
      updateFeed: (state, action) => {
         state.feed = action.payload
      },

   },
   extraReducers(builder) {
      builder
         .addCase(fetchHomeData.pending, (state) => {

            state.status = 'pending'
         })
         .addCase(fetchHomeData.fulfilled, (state, action) => {

            state.status = 'successful';
            state.feed = action.payload?.newFeed;
            state.filters = action.payload?.filter;
         })
         .addCase(fetchHomeData.rejected, (state) => {

            state.status = 'failed';
         })
         .addCase(fetchFilterData.pending, (state) => {

            state.status = 'pending'
         })
         .addCase(fetchFilterData.fulfilled, (state, action) => {

            state.status = 'successful';
            state.feed = action.payload;
         })
         .addCase(fetchFilterData.rejected, (state) => {

            state.status = 'failed';
         })
         .addCase(fetchTrendingData.pending, (state) => {

            state.status = 'pending'
         })
         .addCase(fetchTrendingData.fulfilled, (state, action) => {

            state.status = 'successful';
            state.trending = action.payload;
         })
         .addCase(fetchTrendingData.rejected, (state) => {

            state.status = 'failed';
         })
   },
})

export const { updateFeed } = feedReducer.actions;
export default feedReducer.reducer;
