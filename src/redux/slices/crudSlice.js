import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const crudSlice = createSlice({
  name: 'crud',
  initialState,
  reducers: {
    
    transferData: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { transferData} = crudSlice.actions

export default crudSlice.reducer