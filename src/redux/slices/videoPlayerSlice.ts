import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export type feedState = {
  currentVid: any,
  relatedFeed: string[],
  thumbnail: string,
  status: 'idle' | 'pending' | 'failed' | 'successful' | string

}

const initialState = {
  relatedFeed: [],
  currentVid: null,
  thumbnail: '',
  status: 'idle'
} as feedState;

export const fetchVideoData = createAsyncThunk(('watch'), async (video: string | string[]) => {
  try {
    const data = await fetch(`/api/proxy?url=https://yt-api.p.rapidapi.com/dl?id=${video}&cgeo=IN`);
    const res = await data.json();
    const data2 = await fetch(`/api/proxy?url=https://yt-api.p.rapidapi.com/related?id=${video}&geo=IN`)
    const res2 = await data2.json();
    let feed = res2.data;
    return { res, feed };


  } catch (error) {
    console.log(error)
  }
});

export const videoPlayerData = createSlice({
  name: 'player',
  initialState,
  reducers: {
    updateChannelThumbnail(state, action) {
      state.thumbnail = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchVideoData.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchVideoData.fulfilled, (state, action) => {
        state.status = 'successful';
        state.currentVid = action.payload?.res;
        state.relatedFeed = action.payload?.feed;
      })
      .addCase(fetchVideoData.rejected, (state) => {
        state.status = 'failed';
      })
  }
})
export const { updateChannelThumbnail } = videoPlayerData.actions;
export default videoPlayerData.reducer;