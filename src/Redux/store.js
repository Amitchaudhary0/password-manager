import { configureStore } from '@reduxjs/toolkit'
import siteReducer from '../Redux/features/site/siteSlice'

export const store = configureStore({
  reducer: {
    site: siteReducer
  },
})