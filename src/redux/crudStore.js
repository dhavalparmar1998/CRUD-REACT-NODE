import { configureStore } from '@reduxjs/toolkit'
import  crudReducer  from './slices/crudSlice';

const crudStore = configureStore({
  reducer: {
    crud: crudReducer,
  },
})

export  default crudStore;